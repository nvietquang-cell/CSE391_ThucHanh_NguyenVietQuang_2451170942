// Bài 5.2 — Input Events
// onChange, onFocus, onBlur, onKeyDown

import { useState } from "react";

function InputEvents() {
    const [text, setText] = useState("");
    const [charCount, setCharCount] = useState(0);
    const [isFocused, setIsFocused] = useState(false);

    function handleChange(event) {
        const newValue = event.target.value;
        setText(newValue);
        setCharCount(newValue.length);
    }

    // Đếm số từ
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    return (
        <div style={{ padding: "20px" }}>
            <h2>Input Events</h2>

            <input
                value={text}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Nhập gì đó..."
                maxLength={100}
                style={{
                    padding: "8px",
                    width: "300px",
                    border: isFocused ? "2px solid #3498db" : "2px solid #ddd",
                    outline: "none",
                    borderRadius: "4px",
                }}
            />

            <p>Ký tự: {charCount}/100</p>
            <p>Số từ: {wordCount}</p>
            <p>Bạn đang nhập: {text}</p>
            <p>Trạng thái: {isFocused ? "🟢 Đang focus" : "⚪ Không focus"}</p>

            {charCount > 80 && (
                <p style={{ color: "red" }}>⚠️ Sắp hết ký tự!</p>
            )}
        </div>
    );
}

export default InputEvents;
