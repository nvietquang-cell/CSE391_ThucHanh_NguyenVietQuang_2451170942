// Bài 4.3 — useState với boolean (Toggle)
// Pattern: !state để đảo ngược true/false

import { useState } from "react";

function BooleanState() {
    const [isVisible, setIsVisible] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const themeStyle = {
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
        padding: "20px",
        minHeight: "200px",
        transition: "all 0.3s",
    };

    return (
        <div style={themeStyle}>
            <h2>Toggle Demo</h2>

            {/* Toggle ẩn/hiện nội dung */}
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Ẩn nội dung" : "Hiện nội dung"}
            </button>

            {isVisible && (
                <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #ddd" }}>
                    <p>Đây là nội dung có thể ẩn/hiện!</p>
                </div>
            )}

            <hr />

            {/* Toggle dark mode */}
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>

            <hr />

            {/* Toggle like */}
            <button onClick={() => setIsLiked(!isLiked)}>
                {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
            </button>

            <hr />

            {/* Thử thách: Hiện/Ẩn mật khẩu */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    defaultValue="matkhau123"
                    style={{ padding: "6px" }}
                />
                <button onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                    {isPasswordVisible ? "🙈 Ẩn" : "👁 Hiện"}
                </button>
            </div>
        </div>
    );
}

export default BooleanState;
