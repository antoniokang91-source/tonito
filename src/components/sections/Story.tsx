"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const PHOTOS = [
  { src: "/images/story/mx-02-market-stand.jpg", caption: "센트로 아바스토 시장", rotate: -3 },
  { src: "/images/story/mx-01-taco-table.jpg",    caption: "로컬 식당, 그 첫 끼",   rotate: 2 },
  { src: "/images/story/mx-05-farm.jpg",          caption: "국산 재료, 발로 뛰며",  rotate: -1.5 },
  { src: "/images/story/mx-03-salsa-night.jpg",   caption: "멕시코의 살사, 그 아삭함", rotate: 3 },
  { src: "/images/story/mx-04-street.jpg",        caption: "8년, 멕시코의 거리",    rotate: -2.5 },
  { src: "/images/story/mx-09-city.jpg",          caption: "멕시코시티에서",        rotate: 1.5 },
  { src: "/images/story/mx-06-buffet.jpg",        caption: "오이 하나에도 진심",     rotate: -3 },
  { src: "/images/story/mx-10-horse.jpg",         caption: "현지에서 배운 진짜",     rotate: 2.5 },
];

const BEATS = [
  { num: "01", title: "이상했어요, 한국의 피클", line: "짱아찌도 절임도, 주인공은 아니었죠." },
  { num: "02", title: "멕시코에서 답을 찾았어요", line: "센트로 아바스토 시장, 한 할머니의 손맛." },
  { num: "03", title: "그 맛 그대로, 한국 재료로", line: "냉장 생피클, 타협은 없습니다." },
];

export default function Story() {
  const ref = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section
      ref={ref}
      id="story"
      style={{
        background: "var(--primary)",
        borderTop: "3px solid var(--brine-black)",
        borderBottom: "3px solid var(--brine-black)",
        padding: "0 1.25rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="stripe-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
        {/* Intro */}
        <div style={{ padding: "5rem 0 2.5rem" }}>
          <span className="eyebrow" style={{ color: "var(--tertiary-bright)" }}>Our Brand Story</span>
          <h1
            className="reveal"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 12vw, 72px)",
              textTransform: "uppercase",
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: "1rem",
              maxWidth: 700,
            }}
          >
            8년이 걸렸습니다
          </h1>
          <p
            className="reveal reveal-d1"
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              maxWidth: 560,
              fontWeight: 500,
            }}
          >
            멕시코의 시장에서 찾은 맛을, 100% 국산 재료로 다시 담았습니다.
          </p>
        </div>

        {/* Photo scrapbook */}
        <div
          className="story-photo-grid"
          style={{ paddingBottom: "3rem" }}
        >
          {PHOTOS.map((p, i) => (
            <div
              key={p.src}
              className={`reveal reveal-d${(i % 4) + 1} story-polaroid`}
              style={{ transform: `rotate(${p.rotate}deg)` }}
            >
              <div className="story-photo-frame">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="story-polaroid-caption">{p.caption}</p>
            </div>
          ))}
        </div>

        {/* Beats — condensed, no long paragraphs */}
        <div
          className="story-beats reveal"
          style={{
            borderTop: "2px solid rgba(255,255,255,0.15)",
            padding: "2.5rem 0",
          }}
        >
          {BEATS.map((b) => (
            <div key={b.num} className="story-beat">
              <span className="story-beat-num">{b.num}</span>
              <h3 className="story-beat-title">{b.title}</h3>
              <p className="story-beat-line">{b.line}</p>
            </div>
          ))}
        </div>

        {/* Founder Quote */}
        <div
          style={{
            padding: "2.5rem 0 4rem",
            borderTop: "2px solid rgba(255,255,255,0.15)",
            textAlign: "center"
          }}
        >
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              maxWidth: 620,
              margin: "0 auto 1.25rem",
              fontStyle: "italic"
            }}
          >
            "토니또는 단순한 피클 브랜드가 아닙니다. 그 할머니 가게처럼, 피클이 주인공이 되는 경험을 만드는 거니까요."
          </p>
          <p style={{ fontSize: 14, color: "var(--tertiary-bright)", fontWeight: 700, textTransform: "uppercase", margin: 0 }}>
            — Antonio Kang
          </p>
        </div>
      </div>

      <style>{`
        .story-photo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem 1rem;
        }
        .story-polaroid {
          background: #fff;
          border: 3px solid var(--brine-black);
          border-radius: 4px;
          padding: 8px 8px 28px;
          box-shadow: 4px 4px 0 var(--brine-black);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .story-polaroid:hover {
          box-shadow: 6px 6px 0 var(--brine-black);
        }
        .story-photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 2px;
          background: var(--bg-low);
        }
        .story-polaroid-caption {
          font-family: var(--font-mono, 'Space Mono', monospace);
          font-size: 10.5px;
          letter-spacing: 0.02em;
          color: var(--brine-black);
          text-align: center;
          margin-top: 10px;
          line-height: 1.3;
        }

        .story-beats {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .story-beat-num {
          display: block;
          font-family: var(--font-display);
          font-size: 28px;
          color: var(--tertiary-bright);
          margin-bottom: 0.4rem;
        }
        .story-beat-title {
          font-family: var(--font-display);
          font-size: 22px;
          text-transform: uppercase;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 0.4rem;
        }
        .story-beat-line {
          font-size: 14px;
          color: rgba(255,255,255,0.75);
          line-height: 1.5;
        }

        @media (min-width: 640px) {
          .story-photo-grid { grid-template-columns: repeat(4, 1fr); gap: 2rem 1.5rem; }
        }
        @media (min-width: 768px) {
          .story-beats { grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
        }
      `}</style>
    </section>
  );
}
