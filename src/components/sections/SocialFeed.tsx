"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const CELLS = [
  { src: "/images/character-classic.jpg", alt: "Instagram post 1" },
  { src: "/images/emblem.jpg",            alt: "Instagram post 2" },
  { src: "/images/pattern.jpg",           alt: "Instagram post 3" },
  { src: "/images/brand-bg.jpg",          alt: "Instagram post 4" },
  { src: "/images/character-detail.jpg",  alt: "Instagram post 5" },
  { src: "/images/badges-detail.jpg",     alt: "Instagram post 6" },
];

export default function SocialFeed() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section
      ref={ref}
      id="social"
      style={{
        background: "var(--brine-black)",
        borderBottom: "3px solid var(--brine-black)",
        padding: "4rem 1.25rem",
        position: "relative",
      }}
    >
      {/* Tony decoration */}
      <div style={{ position: "absolute", bottom: "1rem", right: "1.5rem", width: 100, height: 100, zIndex: 1, opacity: 0.9, pointerEvents: "none" }}>
        <Image src="/images/characters/tony_holding_sign_pickle.png" alt="" fill style={{ objectFit: "contain" }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <span className="eyebrow" style={{ color: "var(--tertiary-bright)" }}>Follow Tony</span>
        <a
          href="https://www.instagram.com/tonito_quikle"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(37px, 10vw, 70px)",
            textTransform: "uppercase",
            color: "var(--primary-light, #008741)",
            letterSpacing: "-0.01em",
            lineHeight: 1,
            marginBottom: "1.5rem",
            display: "inline-block",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          @Tonito_quikle
        </a>

        {/* Grid */}
        <div
          className="reveal reveal-d1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 3,
            border: "3px solid var(--brine-black)",
            borderRadius: 4,
            overflow: "hidden",
            marginBottom: "1.5rem",
          }}
        >
          {CELLS.map((c, i) => (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                background: "#1e1e1e",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Image
                src={c.src}
                alt={c.alt}
                fill
                style={{ objectFit: "cover", opacity: 0.85, transition: "opacity 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.85";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="https://www.instagram.com/tonito_quikle"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
              color: "#fff",
              border: "3px solid #fff",
              boxShadow: "4px 4px 0 #fff",
            }}
          >
            인스타그램
          </a>
          <a
            href="https://www.tiktok.com/@tonitopickle"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: "linear-gradient(135deg,#010101,#69C9D0)",
              color: "#fff",
              border: "3px solid #fff",
              boxShadow: "4px 4px 0 #fff",
            }}
          >
            틱톡
          </a>
        </div>
      </div>
    </section>
  );
}
