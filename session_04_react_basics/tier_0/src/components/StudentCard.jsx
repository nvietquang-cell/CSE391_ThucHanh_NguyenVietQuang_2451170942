// Bài 0.2 — JSX là HTML "xịn hơn"
// So sánh: HTML thuần → JSX

// HTML gốc:
// <div class="card">
//     <img src="avatar.jpg" alt="Avatar">
//     <h2>Nguyễn Văn Minh</h2>
//     <p>Sinh viên năm 3</p>
//     <label for="email">Email:</label>
//     <input type="email" id="email">
// </div>

function StudentCard() {
    return (
        <div className="card">          {/* class → className */}
            <img src="avatar.jpg" alt="Avatar" />   {/* Phải đóng thẻ */}
            <h2>Nguyễn Văn Minh</h2>
            <p>Sinh viên năm 3</p>
            <label htmlFor="email">Email:</label>    {/* for → htmlFor */}
            <input type="email" id="email" />        {/* Phải đóng thẻ */}
        </div>
    );
}

export default StudentCard;
