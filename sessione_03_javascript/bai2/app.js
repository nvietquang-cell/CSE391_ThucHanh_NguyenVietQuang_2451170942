const LS_KEY = 'tasks_v1'
let tasks = []
let editIndex = -1

const listEl = document.getElementById('tasks-list')
const totalEl = document.getElementById('total')
const doneEl = document.getElementById('done')
const pendingEl = document.getElementById('pending')
const modal = document.getElementById('task-modal')
const form = document.getElementById('task-form')
const modalTitle = document.getElementById('modal-title')

function showMessage(text){
  const msg = document.getElementById('message')
  msg.textContent = text
  msg.classList.remove('hidden')
  setTimeout(()=>msg.classList.add('hidden'),1800)
}

function load(){
  const raw = localStorage.getItem(LS_KEY)
  tasks = raw ? JSON.parse(raw) : []
}
function save(){
  localStorage.setItem(LS_KEY, JSON.stringify(tasks))
}

function updateStats(){
  totalEl.textContent = tasks.length
  const done = tasks.filter(t=>t.done).length
  doneEl.textContent = done
  pendingEl.textContent = tasks.length - done
}

function render(){
  listEl.innerHTML = ''
  if(tasks.length===0){
    listEl.innerHTML = '<li>Chưa có công việc</li>'
    updateStats()
    return
  }
  tasks.forEach((t,idx)=>{
    const li = document.createElement('li')
    li.innerHTML = `
      <div>
        <input type="checkbox" class="toggle" data-index="${idx}" ${t.done? 'checked':''}> <strong>${t.title}</strong>
        <div class="meta">${t.due? t.due : ''} ${t.priority? '| '+t.priority:''}</div>
      </div>
      <div>
        <button data-action="edit" data-index="${idx}">Sửa</button>
        <button data-action="delete" data-index="${idx}">Xóa</button>
      </div>
    `
    if(t.done) li.style.opacity = 0.6
    listEl.appendChild(li)
  })
  updateStats()
}

function openModal(mode='add', index=null){
  form.reset()
  editIndex = -1
  if(mode==='add') modalTitle.textContent = 'Thêm công việc'
  else{
    modalTitle.textContent = 'Cập nhật công việc'
    const t = tasks[index]
    document.getElementById('title').value = t.title
    document.getElementById('desc').value = t.desc
    document.getElementById('due').value = t.due
    document.getElementById('priority').value = t.priority
    editIndex = index
  }
  modal.classList.remove('hidden')
}
function closeModal(){ modal.classList.add('hidden'); form.reset(); editIndex = -1 }

document.getElementById('open-add').addEventListener('click', ()=>openModal('add'))
document.getElementById('cancel').addEventListener('click', closeModal)

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  const obj = {
    title: document.getElementById('title').value.trim(),
    desc: document.getElementById('desc').value.trim(),
    due: document.getElementById('due').value,
    priority: document.getElementById('priority').value,
    done: false
  }
  if(editIndex===-1){
    tasks.push(obj)
    showMessage('Đã thêm công việc')
  }else{
    obj.done = tasks[editIndex].done
    tasks[editIndex] = obj
    showMessage('Đã cập nhật công việc')
  }
  save()
  render()
  closeModal()
})

listEl.addEventListener('click', (e)=>{
  const btn = e.target.closest('button')
  if(btn){
    const action = btn.dataset.action
    const idx = Number(btn.dataset.index)
    if(action==='edit') openModal('edit', idx)
    else if(action==='delete'){
      if(confirm('Xác nhận xóa công việc này?')){
        tasks.splice(idx,1)
        save(); render(); showMessage('Đã xóa')
      }
    }
  }
  const chk = e.target.closest('input.toggle')
  if(chk){
    const idx = Number(chk.dataset.index)
    tasks[idx].done = chk.checked
    save(); render(); showMessage('Cập nhật trạng thái')
  }
})

load(); render();
