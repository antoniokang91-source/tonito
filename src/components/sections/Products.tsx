"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const PRODUCTS = [
  {
    id: "classic",
    topColor: "var(--primary)",
    bgColor: "var(--primary)",
    imageSrc: "/images/character-classic.jpg",
    emblemSrc: "/images/emblem.jpg",
    tags: [
      { label: "🥒Classic", bg: "var(--primary)", color: "#fff" },
      { label: "Dill", bg: "var(--bg)", color: "var(--brine-black)" },
    ],
    name: "Classic",
    subname: "Local 기본 레시피",
    profile: "산미 ●●●○○  염도 ●●●○○\n아삭 ●●●●●  매운맛 ○○○○○",
    price: "8,900",
    btnClass: "btn-green",
  },
  {
    id: "hot",
    topColor: "var(--secondary)",
    bgColor: "var(--secondary)",
    imageSrc: "/images/character-detail.jpg",
    emblemSrc: "/images/emblem.jpg",
    tags: [
      { label: "🔥 Hot", bg: "var(--secondary)", color: "#fff" },
      { label: "Spear", bg: "var(--bg)", color: "var(--brine-black)" },
    ],
    name: "Hot",
    subname: "멕시코의 열정을 담다",
    profile: "산미 ●●●○○  염도 ●●●○○\n아삭 ●●●●●  매운맛 ●●●●○",
    price: "10,900",
    btnClass: "btn-red",
  },
  {
    id: "sweet",
    topColor: "#c2185b",
    bgColor: "#c2185b",
    imageSrc: "/images/character-classic.jpg",
    emblemSrc: "/images/emblem.jpg",
    tags: [
      { label: "Sweet", bg: "#f48fb1", color: "#fff" },
      { label: "Hot", bg: "var(--secondary)", color: "#fff" },
      { label: "Spear", bg: "var(--bg)", color: "var(--brine-black)" },
    ],
    name: "Sweet",
    subname: "토마토의 달콤함",
    profile: "산미 ●●○○○  염도 ●●○○○\n아삭 ●●●●●  매운맛 ○○○○○",
    price: "10,900",
    btnClass: "btn-red",
    imgStyle: { filter: "hue-rotate(200deg) saturate(1.5)" },
  },
  {
    id: "tnt",
    topColor: "var(--tertiary-bright)",
    bgColor: "var(--tertiary-bright)",
    imageSrc: "/images/pattern.jpg",
    emblemSrc: "/images/emblem.jpg",
    tags: [
      { label: "⚡ 이달의 Pick", bg: "var(--tertiary-bright)", color: "var(--brine-black)" },
    ],
    name: "Tony's\nPick",
    subname: "8월의 추천 한정 피클",
    profile: "매달 바뀌는 시즌 한정 · 한정 수량",
    price: "한정판매",
    btnClass: "btn-outline",
    btnLabel: "알림받기",
    btnHref: "#newsletter",
  },
];

export default function Products() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section
      ref={ref}
      id="products"
      style={{
        background: "var(--brine-black)",
        borderBottom: "3px solid var(--brine-black)",
        padding: "4rem 0",
        position: "relative",
      }}
    >
      {/* Tony decoration */}
      <div style={{ position: "absolute", bottom: "0.5rem", right: "1.5rem", width: 100, height: 100, zIndex: 1, opacity: 0.9, pointerEvents: "none" }}>
        <Image src="/images/characters/tony_carrying_chips.png" alt="" fill style={{ objectFit: "contain" }} />
      </div>

      {/* Header */}
      <div style={{ padding: "0 1.25rem", maxWidth: 1200, margin: "0 auto 2.5rem" }}>
        <span className="eyebrow" style={{ color: "var(--tertiary-bright)" }}>Product Line</span>
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 10vw, 56px)",
            textTransform: "uppercase",
            lineHeight: 0.95,
            color: "#fff",
            marginBottom: "0.5rem",
          }}
        >
          Tonito Lineup
        </h2>
        <p className="reveal reveal-d1" style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", maxWidth: 420 }}>
          Classic부터 Hot, Sweet까지. 당신의 Tony를 골라보세요.
        </p>
      </div>

      {/* Cards — mobile: horizontal scroll / desktop: grid */}
      <div
        className="no-scrollbar products-scroll"
        style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", padding: "0.5rem 1.25rem 1.5rem" }}
      >
        <div className="products-grid" style={{ display: "flex", gap: "1.25rem", minWidth: "max-content" }}>
          {PRODUCTS.map((p, i) => (
            <div
              key={p.id}
              className={`product-card reveal reveal-d${i + 1}`}
              style={{
                width: 260,
                flexShrink: 0,
                background: "var(--bg)",
                border: "3px solid var(--brine-black)",
                borderRadius: 4,
                boxShadow: "5px 5px 0 rgba(255,255,255,0.35)",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Top color bar */}
              <div style={{ height: 10, background: p.topColor }} />

              {/* Image area */}
              <div
                style={{
                  height: 200,
                  background: p.bgColor,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={p.imageSrc}
                  alt={p.name.replace("\n", " ")}
                  width={240}
                  height={190}
                  style={{
                    width: "100%",
                    height: 190,
                    objectFit: "contain",
                    objectPosition: "center bottom",
                    mixBlendMode: "multiply",
                    transition: "transform 0.2s",
                    ...(p.imgStyle || {}),
                  }}
                />
                {/* Emblem badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    border: "2px solid var(--brine-black)",
                    boxShadow: "2px 2px 0 var(--brine-black)",
                    overflow: "hidden",
                    transform: "rotate(-12deg)",
                  }}
                >
                  <Image
                    src={p.emblemSrc}
                    alt="Tonito emblem"
                    width={54}
                    height={54}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "1rem" }}>
                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.75rem" }}>
                  {p.tags.map((t) => (
                    <span
                      key={t.label}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        padding: "3px 9px",
                        border: "2px solid var(--brine-black)",
                        borderRadius: 999,
                        background: t.bg,
                        color: t.color,
                      }}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    textTransform: "uppercase",
                    lineHeight: 1,
                    whiteSpace: "pre-line",
                    marginBottom: "0.25rem",
                  }}
                >
                  {p.name}
                </div>
                <div style={{ fontSize: 13, color: "#666", marginBottom: "0.6rem" }}>{p.subname}</div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "#555",
                    letterSpacing: "0.04em",
                    whiteSpace: "pre-line",
                    marginBottom: "0.75rem",
                    lineHeight: 1.7,
                  }}
                >
                  {p.profile}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "2px solid var(--brine-black)",
                    paddingTop: "0.75rem",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22 }}>
                    {p.price}
                    {p.price !== "한정판매" && <small style={{ fontFamily: "var(--font-mono)", fontSize: 10, marginLeft: 2 }}>원</small>}
                  </div>
                  <a
                    href={p.btnHref || "https://store.nicepay-checkout.co.kr/tonito"}
                    className={`btn ${p.btnClass}`}
                    style={{ fontSize: 11, padding: "8px 14px" }}
                  >
                    {p.btnLabel || "구매하기"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 1.25rem", maxWidth: 1200, margin: "0 auto" }}>
        <a
          href="https://store.nicepay-checkout.co.kr/tonito"
          className="btn btn-ghost"
          style={{ borderColor: "rgba(255,255,255,0.4)", boxShadow: "4px 4px 0 rgba(255,255,255,0.2)" }}
        >
          Tonito의 아삭함 맛보러 가기🥒 →
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          /* 데스크탑: 스크롤 대신 그리드 */
          .products-scroll {
            overflow-x: visible !important;
            padding: 0.5rem 0 1.5rem !important;
          }
          .products-grid {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            min-width: unset !important;
            max-width: 1200px;
            margin: 0 auto;
          }
          .products-grid > .product-card {
            width: auto !important;
            flex-shrink: unset !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1100px) {
          /* 태블릿: 2열 */
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
