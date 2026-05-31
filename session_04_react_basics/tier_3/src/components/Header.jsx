// Tier 3 — Component con: Header
// Tách ra file riêng để tái sử dụng và dễ bảo trì

function Header() {
    return (
        <header style={{
            background: "#2c3e50",
            color: "white",
            padding: "15px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Tên website</h1>
            <nav>
                <a href="/" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Trang chủ</a>
                <a href="/about" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Giới thiệu</a>
                <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Liên hệ</a>
            </nav>
        </header>
    );
}

export default Header;
