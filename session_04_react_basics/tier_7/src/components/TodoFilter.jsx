// Tier 7 — Component con: TodoFilter
// Nhận props: filter, setFilter, counts

function TodoFilter({ filter, setFilter, allCount, activeCount, completedCount }) {
    const filters = [
        { key: "all", label: `Tất cả (${allCount})` },
        { key: "active", label: `Chưa xong (${activeCount})` },
        { key: "completed", label: `Hoàn thành (${completedCount})` },
    ];

    return (
        <div style={{ display: "flex", marginBottom: "15px", gap: "5px" }}>
            {filters.map((f) => (
                <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    style={{
                        flex: 1,
                        padding: "8px",
                        background: filter === f.key ? "#3498db" : "#f0f0f0",
                        color: filter === f.key ? "white" : "#333",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                    }}
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
}

export default TodoFilter;
