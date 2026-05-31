// Bài 6.1 — Render danh sách
// .map() + key + conditional styling

import { useState } from "react";

function ListBasics() {
    const [fruits] = useState(["Táo", "Chuối", "Cam", "Nho"]);

    const [students] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 },
    ]);

    // Tính tuổi trung bình
    const avgAge = (students.reduce((sum, s) => sum + s.age, 0) / students.length).toFixed(1);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Danh sách trái cây</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {index + 1}. {fruit}
                    </li>
                ))}
            </ul>

            <h2>Danh sách sinh viên</h2>
            <p>Tuổi trung bình: {avgAge}</p>
            {students.map((student, index) => (
                <div
                    key={student.id}
                    style={{
                        padding: "8px",
                        margin: "5px 0",
                        background: "#f9f9f9",
                        color: student.age >= 20 ? "#2ecc71" : "#333",
                        fontWeight: student.age >= 20 ? "bold" : "normal",
                    }}
                >
                    {index + 1}. {student.name} — {student.age} tuổi
                    {student.age >= 20 && " ✅"}
                </div>
            ))}
        </div>
    );
}

export default ListBasics;
