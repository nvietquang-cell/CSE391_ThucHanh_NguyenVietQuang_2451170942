// Tier 3 — Props: Truyền dữ liệu từ cha → con
// Component con nhận props bằng destructuring

function Greeting({ name, age }) {
    return (
        <div style={{
            padding: "15px",
            margin: "10px 0",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "#f9f9f9",
        }}>
            <h2>Xin chào {name}!</h2>
            <p>Tuổi: {age}</p>
        </div>
    );
}

export default Greeting;
