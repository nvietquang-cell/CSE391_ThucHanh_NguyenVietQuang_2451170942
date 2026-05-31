// Tier 3 — App.jsx: Ghép các component lại
// Cấu trúc: Header + Main(ProductCards) + Footer

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Greeting from "./components/Greeting";

function App() {
    const products = [
        { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://via.placeholder.com/200" },
        { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://via.placeholder.com/200" },
        { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://via.placeholder.com/200" },
    ];

    return (
        <div>
            {/* Component Header */}
            <Header />

            <main style={{ padding: "20px" }}>
                {/* Minh họa props với Greeting */}
                <h2>Danh sách sinh viên</h2>
                <Greeting name="Minh" age={20} />
                <Greeting name="An" age={21} />
                <Greeting name="Linh" age={19} />

                {/* Cửa hàng điện thoại */}
                <h1 style={{ textAlign: "center", marginTop: "30px" }}>Cửa hàng điện thoại</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </main>

            {/* Component Footer */}
            <Footer />
        </div>
    );
}

export default App;
