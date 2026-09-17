export default function Ticker() {
  const items = [
    "갓 담은 신선함","ELIGE DIFERENTE", "냉장 생 피클", "PICK DIFFERENT","Sabor a México",
    "오직 국산 재료", "멕시코의 맛", "CRUNCHY. FRESH. BOLD.",
    "아삭함이 살아있는", "TONITO PICKLE", "PEPINILLOS TONITO",
  ];
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "var(--secondary)",
        borderTop: "3px solid var(--brine-black)",
        borderBottom: "3px solid var(--brine-black)",
        overflow: "hidden",
        height: 48,
        display: "flex",
        alignItems: "center",
      }}
      aria-hidden="true"
    >
      <div className="ticker-animate" style={{ display: "flex" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.25rem",
              padding: "0 1.25rem",
              fontFamily: "var(--font-mono, 'Space Mono', monospace)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ width: 5, height: 5, background: "rgba(255,255,255,0.5)", borderRadius: "50%", flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  );
}
