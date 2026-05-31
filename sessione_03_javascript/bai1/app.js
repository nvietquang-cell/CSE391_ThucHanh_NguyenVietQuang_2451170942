const LS_KEY = 'students_v1'
let students = []
let editIndex = -1

const tbody = document.getElementById('student-tbody')
const totalEl = document.getElementById('total')
const avgEl = document.getElementById('avg')
const modal = document.getElementById('student-modal')
const form = document.getElementById('student-form')
const modalTitle = document.getElementById('modal-title')

function showMessage(text){
  const msg = document.getElementById('message')
  msg.textContent = text
  msg.classList.remove('hidden')
  setTimeout(()=>msg.classList.add('hidden'),2000)
}

function load(){
  const raw = localStorage.getItem(LS_KEY)
  students = raw ? JSON.parse(raw) : []
}
function save(){
  localStorage.setItem(LS_KEY, JSON.stringify(students))
}

function updateStats(){
  totalEl.textContent = students.length
  const avg = students.length ? (students.reduce((s,a)=>s+Number(a.avgGrade),0)/students.length).toFixed(2) : 0
  avgEl.textContent = avg
}

function render(){
  tbody.innerHTML = ''
  if(students.length===0){
    const tr = document.createElement('tr')
    tr.innerHTML = '<td colspan="7">Chưa có dữ liệu</td>'
    tbody.appendChild(tr)
    updateStats()
    return
  }
  students.forEach((st,idx)=>{
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${st.msv}</td>
      <td>${st.name}</td>
      <td>${st.dob}</td>
      <td>${st.className}</td>
      <td>${st.avgGrade}</td>
      <td>${st.email}</td>
      <td>
        <button class="action" data-action="edit" data-index="${idx}">Sửa</button>
        <button class="action" data-action="delete" data-index="${idx}">Xóa</button>
      </td>
    `
    tbody.appendChild(tr)
  })
  updateStats()
}

function openModal(mode='add', index=null){
  form.reset()
  editIndex = -1
  if(mode==='add'){
    modalTitle.textContent = 'Thêm sinh viên'
  }else if(mode==='edit'){
    modalTitle.textContent = 'Cập nhật sinh viên'
    const st = students[index]
    document.getElementById('msv').value = st.msv
    document.getElementById('name').value = st.name
    document.getElementById('dob').value = st.dob
    document.getElementById('className').value = st.className
    document.getElementById('avgGrade').value = st.avgGrade
    document.getElementById('email').value = st.email
    editIndex = index
  }
  modal.classList.remove('hidden')
}
function closeModal(){
  modal.classList.add('hidden')
  form.reset()
  editIndex = -1
}

document.getElementById('open-add').addEventListener('click', ()=>openModal('add'))
document.getElementById('cancel').addEventListener('click', closeModal)

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  const obj = {
    msv: document.getElementById('msv').value.trim(),
    name: document.getElementById('name').value.trim(),
    dob: document.getElementById('dob').value,
    className: document.getElementById('className').value.trim(),
    avgGrade: document.getElementById('avgGrade').value,
    email: document.getElementById('email').value.trim()
  }
  if(editIndex===-1){
    students.push(obj)
    showMessage('Đã thêm sinh viên')
  }else{
    students[editIndex] = obj
    showMessage('Đã cập nhật sinh viên')
  }
  save()
  render()
  closeModal()
})

tbody.addEventListener('click', (e)=>{
  const btn = e.target.closest('button')
  if(!btn) return
  const action = btn.dataset.action
  const idx = Number(btn.dataset.index)
  if(action==='edit'){
    openModal('edit', idx)
  }else if(action==='delete'){
    if(confirm('Xác nhận xóa sinh viên này?')){
      students.splice(idx,1)
      save()
      render()
      showMessage('Đã xóa')
    }
  }
})

load()
render()
