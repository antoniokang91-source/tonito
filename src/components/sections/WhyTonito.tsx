"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const REASONS = [
  {
    icon: "❄️",
    num: "01",
    title: "냉장\nCold Storage",
    desc: "열 한 번 안 쓴 냉장 생 보관. 그 크런치, 그대로.",
    accent: true,
  },
  {
    icon: "🌵",
    num: "02",
    title: "할머니의\n비밀 레시피",
    desc: "센트로 아바스토 시장, 할머니의 손맛 그대로.",
    accent: false,
  },
  {
    icon: "🇰🇷",
    num: "03",
    title: "100% 국산\n재료",
    desc: "멕시코 레시피 × 한국 제철 재료.",
    accent: false,
  },
];

export default function WhyTonito() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section
      ref={ref}
      id="why"
      style={{
        background: "var(--bg-low)",
        borderBottom: "3px solid var(--brine-black)",
        padding: "4rem 1.25rem",
        position: "relative",
      }}
    >
      {/* Tony decoration */}
      <div style={{ position: "absolute", top: "1.5rem", right: "1rem", width: 100, height: 100, zIndex: 1, opacity: 0.9, pointerEvents: "none" }}>
        <Image src="/images/characters/tony_holding_jar.png" alt="" fill style={{ objectFit: "contain" }} />
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <span className="eyebrow" style={{ color: "var(--primary)" }}>Why Tonito</span>
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 10vw, 56px)",
            textTransform: "uppercase",
            lineHeight: 0.95,
            marginBottom: "2.5rem",
          }}
        >
          다른 이유가<br />있습니다
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {REASONS.map((r, i) => (
            <div
              key={r.num}
              className={`why-card reveal reveal-d${i + 1}`}
              style={{
                background: r.accent ? "var(--primary)" : "var(--bg)",
                border: "3px solid var(--brine-black)",
                borderRadius: 4,
                boxShadow: "4px 4px 0 var(--brine-black)",
                padding: "1.5rem",
              }}
            >
              <span style={{ fontSize: 36, display: "block", marginBottom: "1rem" }}>{r.icon}</span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: r.accent ? "var(--tertiary-bright)" : "var(--primary)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {r.num} —
              </span>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  whiteSpace: "pre-line",
                  marginBottom: "0.75rem",
                  color: r.accent ? "#fff" : "var(--brine-black)",
                }}
              >
                {r.title}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: r.accent ? "rgba(255,255,255,0.8)" : "#444" }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
