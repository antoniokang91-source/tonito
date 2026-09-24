"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        marginTop: 60,
        background: "var(--bg)",
        minHeight: "calc(80svh - 60px)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "2rem 1.25rem 3.5rem",
      }}
    >

      {/* Tony character — breaks grid */}
      <div
        className="hero-enter hero-d2 hero-char"
        style={{
          position: "absolute",
          right: 40,
          top: 60,
          width: "50%",
          maxWidth: 340,
          zIndex: 1,
        }}
      >
        <Image
          src="/images/character-tony.png"
          alt="Tony — TONITO Pickle mascot"
          width={340}
          height={480}
          style={{ width: "100%", height: "auto", objectFit: "contain", objectPosition: "center bottom", mixBlendMode: "multiply" }}
          priority
        />
      </div>

      {/* Content */}
      <div className="hero-content" style={{ position: "relative", zIndex: 3, maxWidth: "55%" }}>
        <span
          className="hero-enter hero-d1"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--brine-black)",
            background: "rgba(0,0,0,0.05)",
            display: "inline-block",
            padding: "4px 10px",
            borderRadius: 4,
            marginBottom: "0.75rem",
          }}
        >
          Que es Tonito?
        </span>

        <h1
          className="hero-enter hero-d2"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 16vw, 84px)",
            lineHeight: 0.9,
            color: "var(--brine-black)",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            marginBottom: "0.85rem",
          }}
        >
          <span style={{ color: "var(--primary)" }}>WE</span><br />
          PICK<br />
          <span style={{ color: "var(--primary)" }}>DIFFERENT</span>
        </h1>

        <p
          className="hero-enter hero-d3"
          style={{
            fontSize: 18,
            color: "#444",
            lineHeight: 1.4,
            marginBottom: "1.5rem",
            maxWidth: "400px",
          }}
        >
          압도적인 아삭함,<br />멕시코 8년의 맛,<br />100% 국산 재료로 만든<br />색 다른 피클.
        </p>

        <div className="hero-enter hero-d4" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href="https://store.nicepay-checkout.co.kr/tonito" className="btn btn-white">지금 구매하기</a>
          <a href="#story"    className="btn btn-ghost-dark">브랜드 스토리 →</a>
        </div>
      </div>

      {/* Desktop layout adjustments */}
      <style>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(400px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-char {
          animation: slideInFromRight 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
        }

        @media (min-width: 768px) {
          #home {
            padding: 3rem 4rem 4rem !important;
            align-items: flex-start !important;   /* 콘텐츠 LEFT 고정 */
            justify-content: flex-end !important;  /* 콘텐츠 BOTTOM 고정 */
          }
          #home .hero-content {
            max-width: 520px !important;
            width: 52% !important;
          }
          #home .hero-char {
            width: 40% !important;
            max-width: 420px !important;
            right: 2rem !important;
          }
          #home h1 { font-size: clamp(64px, 6.5vw, 100px) !important; }
        }
        @media (min-width: 1280px) {
          #home { padding: 3rem 5rem 5rem !important; }
          #home .hero-content { max-width: 600px !important; width: 45% !important; }
          #home .hero-char { max-width: 500px !important; width: 42% !important; right: 3rem !important; }
          #home h1 { font-size: clamp(80px, 6vw, 112px) !important; }
        }
      `}</style>
    </section>
  );
}
