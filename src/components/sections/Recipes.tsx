"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const RECIPES = [
  { img: "/images/recipes/chicken-pickle.jpg",  tag: "EASY · 5MIN",  title: "치킨엔 피클 · 이건 국룰",     product: "HOT SPEAR 사용" },
  { img: "/images/recipes/donkatsu-pickle.jpg", tag: "EASY · 10MIN", title: "돈까스엔 피클 · 경양식과 환상의 조합",  product: "CLASSIC 사용" },
  { img: "/images/recipes/nacho-salsa.jpg",     tag: "EASY · 10MIN", title: "나초 × 피클살사 · 홈파티용",   product: "HOT CHIPS 사용" },
];

export default function Recipes() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section
      ref={ref}
      id="recipes"
      style={{
        background: "var(--bg)",
        borderBottom: "3px solid var(--brine-black)",
        padding: "4rem 1.25rem",
        position: "relative",
      }}
    >
      {/* Tony decoration */}
      <div style={{ position: "absolute", bottom: "1.5rem", right: "1rem", width: 110, height: 110, zIndex: 1, opacity: 0.9, pointerEvents: "none" }}>
        <Image src="/images/characters/tony_skateboard.png" alt="" fill style={{ objectFit: "contain" }} />
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <span className="eyebrow" style={{ color: "var(--primary)" }}>Recipes</span>
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 10vw, 56px)",
            textTransform: "uppercase",
            lineHeight: 0.95,
            marginBottom: "0.5rem",
          }}
        >
          Tonito와<br />어떤 음식을 함께?
        </h2>
        <p className="reveal reveal-d1" style={{ fontSize: 15, color: "#444", marginBottom: "2.5rem" }}>
          멕시코 시장에서 배운 피클 활용법. 이제 피클은 곁다리가 아닌 주인공입니다.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2rem",
          }}
        >
          {RECIPES.map((r, i) => (
            <div
              key={r.title}
              className={`reveal reveal-d${i + 1}`}
              style={{
                background: "var(--bg)",
                border: "3px solid var(--brine-black)",
                borderRadius: 4,
                boxShadow: "4px 4px 0 var(--brine-black)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0 var(--brine-black)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 var(--brine-black)";
              }}
            >
              {/* Thumb */}
              <div
                style={{
                  height: 180,
                  background: "var(--bg-low)",
                  position: "relative",
                  borderBottom: "3px solid var(--brine-black)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={r.img}
                  alt={r.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "1rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: "var(--primary)",
                    display: "block",
                    marginBottom: "0.4rem",
                  }}
                >
                  {r.tag}
                </span>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: "0.4rem", lineHeight: 1.4 }}>
                  {r.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#777",
                    letterSpacing: "0.04em",
                  }}
                >
                  {r.product}
                </div>
              </div>
            </div>
          ))}
        </div>

        <a href="#recipes" className="btn btn-green">더 많은 레시피 보기 →</a>
      </div>
    </section>
  );
}
