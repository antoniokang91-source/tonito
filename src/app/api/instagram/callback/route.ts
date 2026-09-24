import { NextRequest, NextResponse } from "next/server";

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

// Step 1 of Instagram Login: exchanges the ?code from the authorize redirect
// for a short-lived token, then immediately exchanges that for a 60-day
// long-lived token. Visit /api/instagram/callback only via the authorize URL
// printed by GET /api/instagram (see that route for the link to start with).
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const errorDescription = req.nextUrl.searchParams.get("error_description");
  if (errorDescription) {
    return htmlPage("Instagram 연동 실패", `<p>Instagram에서 오류를 반환했습니다: ${errorDescription}</p>`);
  }
  if (!code) {
    return htmlPage("Instagram 연동", `<p>code 파라미터가 없습니다. /api/instagram 에서 시작해주세요.</p>`);
  }

  const appId = process.env.INSTAGRAM_APP_ID;
  const appSecret = process.env.INSTAGRAM_APP_SECRET;
  if (!appId || !appSecret) {
    return htmlPage("설정 누락", `<p>INSTAGRAM_APP_ID / INSTAGRAM_APP_SECRET 환경변수가 설정되어 있지 않습니다.</p>`);
  }

  const redirectUri = `${req.nextUrl.origin}/api/instagram/callback`;

  // 1) code -> short-lived token
  const form = new URLSearchParams({
    client_id: appId,
    client_secret: appSecret,
    grant_type: "authorization_code",
    redirect_uri: redirectUri,
    code,
  });
  const shortRes = await fetch("https://api.instagram.com/oauth/access_token", {
    method: "POST",
    body: form,
  });
  const shortData = await shortRes.json();
  if (!shortRes.ok || !shortData.access_token) {
    return htmlPage("토큰 교환 실패", `<pre>${JSON.stringify(shortData, null, 2)}</pre>`);
  }

  // 2) short-lived -> long-lived (60 day) token
  const longUrl = new URL("https://graph.instagram.com/access_token");
  longUrl.searchParams.set("grant_type", "ig_exchange_token");
  longUrl.searchParams.set("client_secret", appSecret);
  longUrl.searchParams.set("access_token", shortData.access_token);
  const longRes = await fetch(longUrl.toString());
  const longData = await longRes.json();
  if (!longRes.ok || !longData.access_token) {
    return htmlPage("장기 토큰 교환 실패", `<pre>${JSON.stringify(longData, null, 2)}</pre>`);
  }

  const expiresInDays = Math.round((longData.expires_in ?? 0) / 86400);

  return htmlPage(
    "Instagram 장기 토큰 발급 완료",
    `
    <h2>장기 액세스 토큰이 발급됐습니다 (${expiresInDays}일 유효)</h2>
    <p class="warn">이 값은 다시 볼 수 없으니 지금 복사해서 안전한 곳에 저장하세요.</p>
    <textarea readonly onclick="this.select()">${longData.access_token}</textarea>
    <p>이 토큰을 배포 환경의 <code>INSTAGRAM_ACCESS_TOKEN</code> 환경변수에 설정하면 연동이 완료됩니다.</p>
    <p>${expiresInDays}일 뒤 만료되기 전에 <a style="color:#4caf50" href="/api/instagram/refresh">/api/instagram/refresh</a> 로 갱신하세요.</p>
    `
  );
}
