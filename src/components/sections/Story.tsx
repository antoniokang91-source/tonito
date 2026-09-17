"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const STORY_SECTIONS = [
  {
    id: "why",
    title: "이상했어요. 한국의 피클",
    subtitle: "왜 모두 이렇지?",
    content: "한국엔 피클이 많긴 한데, 짱아찌, 절임, 피자집 피클 등... 계속 이상했어요. 단순히 맛을 곁들이는 것. 주연이 아닌 조연이라는 생각이 자꾸만 들었어요. 아삭함도, 신선함도, 그 진짜 맛도 제대로 살아있는 경우가 거의 없었으니까요.",
    accent: "그럼 우리가 주인공으로 만들어 보면 어떨까? 그 생각으로 시작했어요."
  },
  {
    id: "origin",
    title: "멕시코에서 찾은 답",
    subtitle: "센트로 아바스토 시장의 그 할머니",
    content: "저는 멕시코에서 8년을 살았어요. 그 동안 가장 자주 간 곳이 시장이었거든요. 센트로 아바스토(Centro Abasto) — 바쁜 상인들이 몰리는 곳이 아니라, 작은 가게들을 돌아다니며 로컬의 맛을 찾아다니던 거죠. 그러다 한 할머니의 작은 가게를 발견했어요. 뜨겁게 담그지 않은. 차갑게 담근 피클. 한 입 깨물면 '아삭' — 그 소리, 그 향이 정말 살아있었어요.",
    accent: "그 맛, 절대 잊을 수가 없었습니다."
  },
  {
    id: "what",
    title: "그 맛을 한국에 가져왔어요",
    subtitle: "신선함 속에 담은 신선함",
    content: "토니또는 그냥 '맛있는 피클'이 아니에요. 피클 자체를 다시 정의하는 거죠. 기존의 오래 보관하는 피클이 아니라, 냉장에 담긴 '생 피클'. 고온 살균 같은 건 없이, 그냥 담으면 바로 냉장고로. 마치 멕시코 그 할머니 가게 에서 받아온 그 맛 그대로, 매번 새로운 신선함을 경험하는 거예요.",
    accent: "냉장고에서 꺼낼 때마다, 그 맛이 그대로 있어요."
  }
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
      {/* BG image */}
      <Image
        src="/images/Mercado.jpg"
        alt=""
        fill
        style={{ objectFit: "cover", opacity: 0.08, mixBlendMode: "screen" }}
        aria-hidden="true"
      loading="lazy"
                />
      <div className="stripe-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} loading="lazy"
                />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
        {/* Intro Section */}
        <div style={{ padding: "6rem 0 4rem" }}>
          <span className="eyebrow" style={{ color: "var(--tertiary-bright)" }}>Our Brand Story</span>
          <h1
            className="reveal"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 12vw, 72px)",
              textTransform: "uppercase",
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: "1.5rem",
              maxWidth: 600,
            }}
          >
            Pick Different
          </h1>
          <p
            className="reveal reveal-d1"
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.8,
              maxWidth: 650,
              fontWeight: 500,
              marginBottom: "3rem"
            }}
          >
            한국의 피클이 너무 아쉬웠어요.
            <br loading="lazy"
                />
            그래서 멕시코에서 배운 맛을 그대로 들고 왔습니다.
            <br loading="lazy"
                />
            <span style={{ color: "var(--tertiary-bright)", fontWeight: 700 }}>이제 피클이 주인공인 이야기를 시작합니다.</span>
          </p>
        </div>

        {/* Mercado Image — R to L Animation */}
        <div
          className="reveal story-mercado"
          style={{
            padding: "2rem 0 4rem",
            margin: "2rem 0",
            borderTop: "2px solid rgba(255,255,255,0.15)",
            borderBottom: "2px solid rgba(255,255,255,0.15)",
          }}
        >
          <div style={{ position: "relative", height: 300, overflow: "hidden", borderRadius: 4 }}>
            <Image
              src="/images/Mercado.jpg"
              alt="센트로 아바스토 시장"
              fill
              style={{
                objectFit: "cover",
                animation: "slideInFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
              }}
            loading="lazy"
                />
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(0,107,50,0.4) 0%, rgba(0,107,50,0.1) 100%)",
                pointerEvents: "none"
              }}
            loading="lazy"
                />
          </div>
        </div>

        {/* Story Sections - Scroll Timeline */}
        {STORY_SECTIONS.map((section, idx) => (
          <div
            key={section.id}
            className="reveal story-section"
            style={{
              padding: "3rem 0",
              borderBottom: idx < STORY_SECTIONS.length - 1 ? "2px solid rgba(255,255,255,0.15)" : "none",
            }}
          >
            {/* Step Number — Mobile: top / Desktop: left */}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 15vw, 72px)",
                fontWeight: 900,
                color: "rgba(255,255,255,0.08)",
                lineHeight: 0.9,
                marginBottom: "1.5rem",
              }}
            >
              {String(idx + 1).padStart(2, '0')}
            </div>

            {/* Content */}
            <div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    textTransform: "uppercase",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    lineHeight: 1.2
                  }}
                >
                  {section.title}
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--tertiary-bright)",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    marginBottom: "1.5rem",
                    textTransform: "uppercase"
                  }}
                >
                  {section.subtitle}
                </p>

                {section.content && (
                  <p
                    style={{
                      fontSize: 16,
                      color: "rgba(255,255,255,0.8)",
                      lineHeight: 1.8,
                      marginBottom: "1rem"
                    }}
                  >
                    {section.content}
                  </p>
                )}

                {section.accent && (
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--tertiary-bright)",
                      marginTop: "2rem",
                      fontStyle: "italic"
                    }}
                  >
                    "{section.accent}"
                  </p>
                )}
              </div>
          </div>
        ))}

        {/* Founder Quote */}
        <div
          style={{
            padding: "3rem 0 4rem",
            borderTop: "2px solid rgba(255,255,255,0.15)",
            textAlign: "center"
          }}
        >
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.8,
              maxWidth: 700,
              margin: "0 auto 1.5rem",
              fontStyle: "italic"
            }}
          >
            "토니또는 단순한 피클 브랜드가 아닙니다. 피클이 당당히 주인공으로 올라서는 그런 경험을 만드는 거니까요. 그 할머니 가게처럼요."
          </p>
          <p style={{ fontSize: 14, color: "var(--tertiary-bright)", fontWeight: 700, textTransform: "uppercase", margin: 0 }}>
            — Antonio Kang
          </p>
        </div>
      </div>

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

        .story-mercado {
          animation: slideInFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
        }

        @media (min-width: 768px) {
          .story-mercado {
            padding: 3rem 0 4rem;
            margin: 3rem 0 4rem;
          }
          .story-mercado > div {
            height: 400px !important;
          }
        }

        @media (max-width: 767px) {
          .story-mercado {
            padding: 1.5rem 0 2rem;
            margin: 1.5rem 0 2rem;
          }
          .story-mercado > div {
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
}
