// Bài 4.1 — useState với số (Đếm)
// Tăng, giảm, reset, nhân đôi

import { useState } from "react";

function NumberState() {
    const [count, setCount] = useState(0);

    // Thử thách: đổi màu theo giá trị
    const countColor = count > 0 ? "green" : count < 0 ? "red" : "black";

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Bộ đếm: <span style={{ color: countColor }}>{count}</span></h2>

            {/* Hiển thị trạng thái số */}
            <p>{count > 0 ? "Số dương ✅" : count < 0 ? "Số âm ❌" : "Bằng không"}</p>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <button onClick={() => setCount(count + 1)}>Tăng (+1)</button>
                <button onClick={() => setCount(count + 5)}>Tăng (+5)</button>
                <button onClick={() => setCount(count - 1)}>Giảm (-1)</button>
                <button onClick={() => setCount(count * 2)}>Nhân đôi</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default NumberState;
