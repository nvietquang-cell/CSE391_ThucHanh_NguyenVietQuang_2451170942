// Bài 5.1 — Click Events
// Cách 1: Arrow function inline | Cách 2: Tạo hàm riêng (nên dùng)

import { useState } from "react";

function ClickEvents() {
    const [message, setMessage] = useState("Chưa click");
    const [clickCount, setClickCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    // Cách 2: Tạo hàm riêng (nên dùng cho hàm phức tạp)
    function handleClick() {
        setMessage("Đã click lúc " + new Date().toLocaleTimeString());
        setClickCount(clickCount + 1);
    }

    function handleReset() {
        setMessage("Đã reset!");
        setClickCount(0);
    }

    // ⚠️ LƯU Ý: onClick={handleClick} — KHÔNG có dấu ()
    // ❌ onClick={handleClick()}  → Gọi ngay lập tức!
    // ✅ onClick={handleClick}    → Gọi khi click

    return (
        <div style={{ padding: "20px" }}>
            <h2>Click Events</h2>
            <p>{message}</p>
            <p>Số lần click: {clickCount}</p>

            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <button onClick={handleClick}>Click me!</button>
                <button onClick={handleReset}>Reset</button>
            </div>

            {/* Thử thách: Like button toggle */}
            <button onClick={() => setIsLiked(!isLiked)} style={{ fontSize: "20px" }}>
                {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
            </button>
        </div>
    );
}

export default ClickEvents;
