"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const PHOTOS = [
  { src: "/images/story/mx-02-market-stand.jpg", caption: "센트로 아바스토 시장" },
  { src: "/images/story/mx-11-jar.jpg",           caption: "병 하나에도 진심" },
  { src: "/images/story/mx-12-feast.jpg",         caption: "현지 로컬 밥상" },
  { src: "/images/story/mx-13-tile.jpg",          caption: "멕시코의 색" },
  { src: "/images/story/mx-14-shrimp.jpg",        caption: "해변의 새우구이" },
  { src: "/images/story/mx-01-taco-table.jpg",    caption: "로컬 식당, 그 첫 끼" },
  { src: "/images/story/mx-15-hotdog.jpg",        caption: "길거리 화로 앞에서" },
  { src: "/images/story/mx-05-farm.jpg",          caption: "국산 재료, 발로 뛰며" },
  { src: "/images/story/mx-16-angel.jpg",         caption: "멕시코시티에서" },
  { src: "/images/story/mx-03-salsa-night.jpg",   caption: "멕시코의 살사, 그 아삭함" },
  { src: "/images/story/mx-06-buffet.jpg",        caption: "오이 하나에도 진심" },
  { src: "/images/story/mx-10-horse.jpg",         caption: "현지에서 배운 진짜" },
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

        {/* Photo slider */}
        <div className="reveal no-scrollbar story-photo-scroll" style={{ paddingBottom: "3rem" }}>
          <div className="story-photo-track">
            {PHOTOS.map((p) => (
              <div key={p.src} className="story-polaroid">
                <div className="story-photo-frame">
                  <Image
                    src={p.src}
                    alt={p.caption}
                    fill
                    sizes="(min-width: 768px) 300px, 66vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
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
          <div
            style={{
              position: "relative",
              width: 72,
              height: 72,
              margin: "0 auto 1.25rem",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid var(--brine-black)",
              boxShadow: "3px 3px 0 var(--brine-black)",
            }}
          >
            <Image src="/images/story/mx-06-buffet.jpg" alt="Antonio Kang" fill sizes="72px" style={{ objectFit: "cover" }} />
          </div>
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
        .story-photo-scroll {
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          margin: 0 -1.25rem;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }
        .story-photo-track {
          display: flex;
          gap: 1rem;
          width: max-content;
        }
        .story-polaroid {
          flex: 0 0 auto;
          width: 66vw;
          max-width: 300px;
          scroll-snap-align: start;
          background: #fff;
          border: 3px solid var(--brine-black);
          border-radius: 4px;
          padding: 8px;
          box-shadow: 4px 4px 0 var(--brine-black);
        }
        .story-photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 2px;
          background: var(--bg-low);
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

        @media (min-width: 768px) {
          .story-beats { grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
        }
      `}</style>
    </section>
  );
}
