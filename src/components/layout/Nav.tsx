"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "제품",        href: "#products"   },
  { label: "스토리",      href: "#story"       },
  { label: "레시피",      href: "#recipes"     },
  { label: "토니또 Pick", href: "#newsletter" },
];

export default function Nav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: 60, background: "var(--bg)",
        borderBottom: scrolled ? "3px solid var(--brine-black)" : "3px solid transparent",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 1.25rem", transition: "border-color 0.2s ease",
      }}>
        <button onClick={() => { close(); document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }); }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
          <Image src="/images/logo-main-new.png" alt="Tonito Pickle" width={120} height={36}
            style={{ objectFit: "contain", mixBlendMode: "multiply" }} priority />
        </button>

        {/* Desktop links */}
        <div className="nav-links-desktop">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "var(--font-mono, 'Space Mono', monospace)",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.05em",
              textTransform: "uppercase", color: "var(--brine-black)", transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--brine-black)")}>
              {l.label}
            </a>
          ))}
          <a href="https://store.nicepay-checkout.co.kr/tonito" className="btn btn-green" style={{ fontSize: 11, padding: "8px 18px" }}>
            구매하기
          </a>
        </div>

        {/* Hamburger */}
        <button className="nav-hamburger-btn"
          style={{ flexDirection: "column", gap: 6, padding: 4 }}
          onClick={() => setOpen(!open)} aria-label={open ? "메뉴 닫기" : "메뉴 열기"}>
          <span style={{ display: "block", width: 24, height: 3, background: "var(--brine-black)", borderRadius: 2,
            transition: "transform 0.2s", transform: open ? "rotate(45deg) translate(4px,4px)" : "none" }} />
          <span style={{ display: "block", width: 24, height: 3, background: "var(--brine-black)", borderRadius: 2,
            opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: 24, height: 3, background: "var(--brine-black)", borderRadius: 2,
            transition: "transform 0.2s", transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div style={{
        position: "fixed", top: 60, left: 0, right: 0, bottom: 0,
        background: "var(--bg)", zIndex: 999,
        display: "flex", flexDirection: "column", padding: "2rem 1.5rem", gap: "2rem",
        borderTop: "3px solid var(--brine-black)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.25s ease",
      }}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close} style={{
            fontFamily: "var(--font-display, 'Anton', sans-serif)",
            fontSize: 36, textTransform: "uppercase", color: "var(--brine-black)",
            borderBottom: "2px solid var(--bg-low)", paddingBottom: "1.25rem",
          }}>{l.label}</a>
        ))}
        <a href="https://store.nicepay-checkout.co.kr/tonito" onClick={close} style={{
          fontFamily: "var(--font-display, 'Anton', sans-serif)",
          fontSize: 36, textTransform: "uppercase", color: "var(--primary)",
        }}>구매하기 →</a>
      </div>
    </>
  );
}
