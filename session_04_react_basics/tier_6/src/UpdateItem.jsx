// Bài 6.4 — Sửa phần tử inline (UPDATE)
// Pattern: setItems(items.map(item => item.id === id ? {...item, name: "new"} : item))

import { useState } from "react";

function UpdateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 },
    ]);

    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");
    const [savedMsg, setSavedMsg] = useState("");

    // Bắt đầu sửa
    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
        setEditAge(item.age.toString());
    }

    // Lưu sửa
    function saveEdit() {
        if (editName.trim() === "" || editAge === "") return;

        setItems(
            items.map((item) =>
                item.id === editingId
                    ? { ...item, name: editName, age: parseInt(editAge) }
                    : item
            )
        );

        setSavedMsg("✅ Đã lưu!");
        setTimeout(() => setSavedMsg(""), 2000);
        setEditingId(null);
    }

    // Hủy sửa
    function cancelEdit() {
        setEditingId(null);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") cancelEdit();
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Sửa thông tin</h2>

            {savedMsg && <p style={{ color: "green" }}>{savedMsg}</p>}

            {items.map((item) => (
                <div
                    key={item.id}
                    style={{
                        padding: "10px",
                        margin: "5px 0",
                        background: editingId === item.id ? "#fff9e6" : "#f9f9f9",
                        border: editingId === item.id ? "2px solid #f39c12" : "1px solid #eee",
                        borderRadius: "4px",
                    }}
                >
                    {editingId === item.id ? (
                        // Chế độ sửa
                        <div style={{ display: "flex", gap: "10px" }}>
                            <input
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                onKeyDown={handleKeyDown}
                                autoFocus
                                style={{ padding: "4px", border: "2px solid #3498db" }}
                            />
                            <input
                                type="number"
                                value={editAge}
                                onChange={(e) => setEditAge(e.target.value)}
                                onKeyDown={handleKeyDown}
                                style={{ padding: "4px", width: "60px", border: "2px solid #3498db" }}
                            />
                            <button
                                onClick={saveEdit}
                                style={{ background: "#27ae60", color: "white", border: "none", padding: "4px 8px", cursor: "pointer" }}
                            >
                                ✓ Lưu
                            </button>
                            <button
                                onClick={cancelEdit}
                                style={{ background: "#95a5a6", color: "white", border: "none", padding: "4px 8px", cursor: "pointer" }}
                            >
                                ✕ Hủy
                            </button>
                        </div>
                    ) : (
                        // Chế độ xem
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>
                                {item.name} — {item.age} tuổi
                            </span>
                            <button
                                onClick={() => startEdit(item)}
                                style={{ background: "#3498db", color: "white", border: "none", padding: "4px 8px", cursor: "pointer" }}
                            >
                                ✏️ Sửa
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UpdateItem;
