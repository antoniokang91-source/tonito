import Image from "next/image";

const FALLBACK_CELLS = [
  { src: "/images/character-classic.jpg", alt: "Instagram post 1", href: "https://www.instagram.com/tonito_quikle" },
  { src: "/images/emblem.jpg",            alt: "Instagram post 2", href: "https://www.instagram.com/tonito_quikle" },
  { src: "/images/pattern.jpg",           alt: "Instagram post 3", href: "https://www.instagram.com/tonito_quikle" },
  { src: "/images/brand-bg.jpg",          alt: "Instagram post 4", href: "https://www.instagram.com/tonito_quikle" },
  { src: "/images/character-detail.jpg",  alt: "Instagram post 5", href: "https://www.instagram.com/tonito_quikle" },
  { src: "/images/badges-detail.jpg",     alt: "Instagram post 6", href: "https://www.instagram.com/tonito_quikle" },
];

type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
};

async function getInstagramFeed() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=6&access_token=${token}`,
      { next: { revalidate: 3600 } } // re-fetch at most once an hour
    );
    if (!res.ok) return null;

    const data: { data: InstagramMedia[] } = await res.json();
    return data.data.slice(0, 6).map((post) => ({
      src: post.media_type === "VIDEO" ? post.thumbnail_url! : post.media_url,
      alt: post.caption?.slice(0, 80) || "Tonito Instagram post",
      href: post.permalink,
    }));
  } catch {
    return null;
  }
}

export default async function SocialFeed() {
  const liveFeed = await getInstagramFeed();
  const cells = liveFeed && liveFeed.length > 0 ? liveFeed : FALLBACK_CELLS;

  return (
    <section
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
          }}
        >
          @Tonito_quikle
        </a>

        {/* Grid */}
        <div
          className="social-feed-grid"
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
          {cells.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-feed-cell"
              style={{
                display: "block",
                aspectRatio: "1",
                background: "#1e1e1e",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={c.src}
                alt={c.alt}
                fill
                sizes="(min-width: 768px) 400px, 33vw"
                style={{ objectFit: "cover" }}
              />
            </a>
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

      <style>{`
        .social-feed-cell img {
          opacity: 0.85;
          transition: opacity 0.2s, transform 0.2s;
        }
        .social-feed-cell:hover img {
          opacity: 1;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
