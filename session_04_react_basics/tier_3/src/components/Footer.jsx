// Tier 3 — Component con: Footer
// Tách ra file riêng để tái sử dụng và dễ bảo trì

function Footer() {
    return (
        <footer style={{
            background: "#2c3e50",
            color: "#bdc3c7",
            textAlign: "center",
            padding: "15px",
            marginTop: "40px",
        }}>
            <p style={{ margin: 0 }}>© 2026 Tên công ty. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
