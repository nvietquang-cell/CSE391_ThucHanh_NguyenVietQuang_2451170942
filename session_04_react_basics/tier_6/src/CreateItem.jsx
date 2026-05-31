// Bài 6.2 — Thêm phần tử (CREATE)
// Pattern: setItems([...items, newItem])

import { useState } from "react";

function CreateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
    ]);
    const [newName, setNewName] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    function handleAdd() {
        if (newName.trim() === "") return;

        const newItem = {
            id: Date.now(), // Tạo id duy nhất
            name: newName,
        };

        setItems([...items, newItem]); // Thêm vào cuối mảng
        setNewName("");               // Xóa input
        setSuccessMsg(`✅ Đã thêm "${newName}" thành công!`);
        setTimeout(() => setSuccessMsg(""), 3000);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleAdd();
        }
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Thêm môn học</h2>

            <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
                <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Nhập tên môn học..."
                    style={{ padding: "8px", flex: 1 }}
                />
                <button onClick={handleAdd} style={{ padding: "8px 16px" }}>
                    ➕ Thêm
                </button>
            </div>

            {successMsg && (
                <p style={{ color: "green", marginBottom: "10px" }}>{successMsg}</p>
            )}

            <h3>Danh sách ({items.length} môn):</h3>
            {items.map((item) => (
                <div key={item.id} style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                    {item.name}
                </div>
            ))}
        </div>
    );
}

export default CreateItem;
