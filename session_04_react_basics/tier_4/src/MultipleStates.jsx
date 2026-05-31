// Bài 4.4 — Kết hợp nhiều useState
// Form đăng ký với validation

import { useState } from "react";

function MultipleStates() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [isStudent, setIsStudent] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    function validate() {
        const newErrors = {};
        if (name.trim() === "") newErrors.name = "Vui lòng nhập tên";
        if (age === "") newErrors.age = "Vui lòng nhập tuổi";
        else if (Number(age) <= 0 || Number(age) >= 100) newErrors.age = "Tuổi phải từ 1-99";
        if (email === "") newErrors.email = "Vui lòng nhập email";
        else if (!email.includes("@")) newErrors.email = "Email không hợp lệ";
        return newErrors;
    }

    function handleSubmit() {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        setSubmitted(true);
    }

    function handleReset() {
        setName("");
        setAge("");
        setEmail("");
        setIsStudent(false);
        setSubmitted(false);
        setErrors({});
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Form đăng ký</h2>

            {/* Preview realtime */}
            {name && <p style={{ color: "#3498db" }}>Xin chào <strong>{name}</strong>!</p>}

            {!submitted ? (
                <div>
                    <div style={{ marginBottom: "10px" }}>
                        <label>Tên: </label>
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                        {errors.name && <span style={{ color: "red", marginLeft: "10px" }}>{errors.name}</span>}
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Tuổi: </label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        {errors.age && <span style={{ color: "red", marginLeft: "10px" }}>{errors.age}</span>}
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Email: </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <span style={{ color: "red", marginLeft: "10px" }}>{errors.email}</span>}
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={(e) => setIsStudent(e.target.checked)}
                            />
                            {" "}Là sinh viên
                        </label>
                    </div>

                    <button onClick={handleSubmit}>Đăng ký</button>
                </div>
            ) : (
                <div style={{ background: "#d4edda", padding: "15px", borderRadius: "4px" }}>
                    <h3>✅ Đăng ký thành công!</h3>
                    <p>Tên: {name}</p>
                    <p>Tuổi: {age}</p>
                    <p>Email: {email}</p>
                    <p>Sinh viên: {isStudent ? "Có" : "Không"}</p>
                    <button onClick={handleReset}>Đăng ký lại</button>
                </div>
            )}
        </div>
    );
}

export default MultipleStates;
