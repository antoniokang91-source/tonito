"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NAV_LINKS = ["제품 보기", "브랜드 스토리", "레시피", "토니또 Pick", "구매하기"];
const HREFS     = ["#products", "#story", "#recipes", "#newsletter", "https://store.nicepay-checkout.co.kr/tonito"];

export default function Footer() {
  const router = useRouter();
  return (
    <footer
      style={{
        background: "var(--brine-black)",
        color: "#fff",
        padding: "3rem 1.25rem 2rem",
        borderTop: "3px solid var(--brine-black)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            marginBottom: "1.5rem",
          }}
          className="sm-grid-3"
        >
          {/* Brand */}
          <div>
            <button onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
              <Image
                src="/images/logo-main-new.png"
                alt="Tonito Pickle"
                width={120}
                height={36}
                style={{
                  objectFit: "contain",
                  objectPosition: "left",
                  filter: "invert(1) brightness(2)",
                  marginBottom: "1rem",
                  cursor: "pointer",
                }}
              />
            </button>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 260 }}>
              멕시코를 담은 냉장 생 피클.<br />
              오직 국산 재료로, 갓 담은 신선함을.
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                marginTop: "0.75rem",
              }}
            >
              We Pick Different.
            </p>
          </div>

          {/* Links */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--tertiary-bright)",
                marginBottom: "1rem",
              }}
            >
              Quick Links
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l}
                  href={HREFS[i]}
                  style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--tertiary-bright)",
                marginBottom: "1rem",
              }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a
                href="mailto:antonio.kang91@gmail.com"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                antonio.kang91@gmail.com
              </a>
              <a
                href="https://www.instagram.com/tonito_quikle"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                @tonito_quikle (IG/TikTok)
              </a>
              <a
                href="mailto:antonio.kang91@gmail.com?subject=납품 문의"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                납품 문의
              </a>
              <a
                href="mailto:antonio.kang91@gmail.com?subject=콜라보 제안"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                콜라보 제안
              </a>
            </div>
          </div>
        </div>

        <style>{`
        @media (min-width: 640px) {
          footer .sm-grid-3 { grid-template-columns: 2fr 1fr 1fr !important; }
        }
      `}</style>

      {/* Bottom */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
            © 2026 TONITO. ALL RIGHTS RESERVED.
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 14,
              textTransform: "uppercase",
              color: "var(--primary-light, #008741)",
              letterSpacing: "0.05em",
            }}
          >
            WE PICK DIFFERENT
          </span>
        </div>
      </div>

    </footer>
  );
}
