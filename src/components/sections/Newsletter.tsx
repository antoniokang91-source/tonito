"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

export default function Newsletter() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section
      ref={ref}
      id="newsletter"
      style={{
        background: "var(--tertiary-bright)",
        borderBottom: "3px solid var(--brine-black)",
        padding: "4rem 1.25rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG Character — hidden on mobile, shown on sm+ via .sm-block utility */}
      <div
        className="sm-block"
        style={{
          display: "none",
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "45%",
          maxWidth: 320,
          pointerEvents: "none",
          opacity: 0.35,
        }}
      >
        <Image
          src="/images/character-classic.jpg"
          alt=""
          width={320}
          height={450}
          style={{ width: "100%", height: "auto", objectFit: "contain", objectPosition: "right bottom", mixBlendMode: "multiply" }}
          aria-hidden="true"
        />
      </div>

      {/* Tony decoration */}
      <div style={{ position: "absolute", top: "2rem", right: "2rem", width: 90, height: 90, zIndex: 2, opacity: 0.9, pointerEvents: "none" }}>
        <Image src="/images/characters/tony_peace_sign.png" alt="" fill style={{ objectFit: "contain" }} />
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 600, margin: "0 auto" }}>
        <span className="eyebrow" style={{ color: "rgba(0,0,0,0.45)" }}>TONITO PICK</span>
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 11vw, 64px)",
            textTransform: "uppercase",
            lineHeight: 0.95,
            color: "var(--brine-black)",
            marginBottom: "0.75rem",
          }}
        >
          토니또 채널<br />추가하기
        </h2>
        <p
          className="reveal reveal-d1"
          style={{ fontSize: 15, color: "rgba(0,0,0,0.65)", marginBottom: "1.5rem", lineHeight: 1.7 }}
        >
          매달 이달의 피클 + 새로운 레시피 + 한정 할인까지.<br />
          멕시코의 오아시스(Pick of the month)를 함께 경험해봐요. 🥒
        </p>

        <a
          href="http://pf.kakao.com/_gdsiX"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal reveal-d2 btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#FFE812",
            color: "var(--brine-black)",
            border: "3px solid var(--brine-black)",
            borderRadius: 999,
            padding: "14px 28px",
            boxShadow: "4px 4px 0 var(--brine-black)",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textDecoration: "none",
            textTransform: "uppercase",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translate(-2px, -2px)";
            e.currentTarget.style.boxShadow = "6px 6px 0 var(--brine-black)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0, 0)";
            e.currentTarget.style.boxShadow = "4px 4px 0 var(--brine-black)";
          }}
        >
          💬 카카오 채널 추가
        </a>

        <p style={{ fontFamily: "var(--font-mono)", fontSize: 15, color: "rgba(0,0,0,0.45)", marginTop: "1.5rem", letterSpacing: "0.04em" }}>
          카카오톡 채널로 Tonito의 최신 소식을 받아보세요. 🤙
        </p>
      </div>

    </section>
  );
}
