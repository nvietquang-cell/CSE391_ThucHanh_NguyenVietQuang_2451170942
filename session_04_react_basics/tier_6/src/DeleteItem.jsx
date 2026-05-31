// Bài 6.3 — Xóa phần tử (DELETE)
// Pattern: setItems(items.filter(item => item.id !== id))

import { useState } from "react";

function DeleteItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh" },
        { id: 2, name: "An" },
        { id: 3, name: "Linh" },
    ]);
    const [deleteMsg, setDeleteMsg] = useState("");

    function handleDelete(id) {
        const item = items.find((i) => i.id === id);
        setItems(items.filter((item) => item.id !== id));
        setDeleteMsg(`🗑 Đã xóa "${item.name}"`);
        setTimeout(() => setDeleteMsg(""), 3000);
    }

    function handleDeleteAll() {
        if (window.confirm("Xóa tất cả?")) {
            setItems([]);
            setDeleteMsg("🗑 Đã xóa tất cả");
        }
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Xóa sinh viên</h2>

            {deleteMsg && (
                <p style={{ color: "#e74c3c", marginBottom: "10px" }}>{deleteMsg}</p>
            )}

            {items.length > 0 && (
                <button
                    onClick={handleDeleteAll}
                    style={{
                        marginBottom: "10px",
                        background: "#e74c3c",
                        color: "white",
                        padding: "8px 16px",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    🗑 Xóa tất cả
                </button>
            )}

            {items.length === 0 ? (
                <p style={{ color: "#999" }}>Danh sách trống</p>
            ) : (
                items.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "10px",
                            margin: "5px 0",
                            background: "#f9f9f9",
                        }}
                    >
                        <span>{item.name}</span>
                        <button
                            onClick={() => handleDelete(item.id)}
                            style={{
                                background: "#e74c3c",
                                color: "white",
                                border: "none",
                                padding: "4px 8px",
                                cursor: "pointer",
                            }}
                        >
                            Xóa
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default DeleteItem;
