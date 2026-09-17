"use client";
import { useReveal } from "@/lib/useReveal";

export default function ColdStrip() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        background: "var(--primary)",
        borderBottom: "3px solid var(--brine-black)",
        padding: "1.75rem 1.25rem",
        display: "flex",
        alignItems: "center",
        gap: "1.25rem",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <span style={{ fontSize: 30 }}></span>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(22px, 6vw, 36px)",
          textTransform: "uppercase",
          color: "#fff",
          letterSpacing: "-0.01em",
          textAlign: "center",
        }}
      >
        48시간 <br />
        <span style={{ color: "var(--tertiary-bright)" }}>가장 아삭해지는</span><br />
        시간입니다.
      </div>
      <span style={{ fontSize: 30 }}></span>
    </div>
  );
}
