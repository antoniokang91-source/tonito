import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function htmlPage(title: string, body: string) {
  return new NextResponse(
    `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
    <style>body{font-family:monospace;background:#121212;color:#fff;padding:2rem;line-height:1.6}
    textarea{width:100%;max-width:640px;height:120px;font-family:monospace;font-size:13px;padding:8px}
    .warn{color:#d4be00}</style></head>
    <body>${body}</body></html>`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
}

// Visit this route (logged in only via the deploy's own access, no Instagram
// login needed) before the current token expires (it's valid 60 days from
// issue, and must be at least 24h old) to get a fresh 60-day token.
export async function GET() {
  const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!currentToken) {
    return htmlPage("설정 누락", `<p>INSTAGRAM_ACCESS_TOKEN 환경변수가 설정되어 있지 않습니다.</p>`);
  }

  const url = new URL("https://graph.instagram.com/refresh_access_token");
  url.searchParams.set("grant_type", "ig_refresh_token");
  url.searchParams.set("access_token", currentToken);

  const res = await fetch(url.toString());
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    return htmlPage("갱신 실패", `<pre>${JSON.stringify(data, null, 2)}</pre>`);
  }

  const expiresInDays = Math.round((data.expires_in ?? 0) / 86400);

  return htmlPage(
    "토큰 갱신 완료",
    `
    <h2>새 토큰이 발급됐습니다 (${expiresInDays}일 유효)</h2>
    <p class="warn">배포 환경의 INSTAGRAM_ACCESS_TOKEN 값을 아래 값으로 교체하세요.</p>
    <textarea readonly onclick="this.select()">${data.access_token}</textarea>
    `
  );
}
