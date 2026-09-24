import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Visit this route in a browser to start the Instagram Login flow and get
// a long-lived access token for INSTAGRAM_ACCESS_TOKEN. It just builds the
// correct authorize URL for this deployment and links to it — the actual
// token exchange happens in /api/instagram/callback.
export async function GET(req: NextRequest) {
  const appId = process.env.INSTAGRAM_APP_ID;
  if (!appId) {
    return new NextResponse("INSTAGRAM_APP_ID 환경변수가 설정되어 있지 않습니다.", { status: 500 });
  }

  const redirectUri = `${req.nextUrl.origin}/api/instagram/callback`;
  const authorizeUrl = new URL("https://api.instagram.com/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", appId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "instagram_business_basic");
  authorizeUrl.searchParams.set("response_type", "code");

  return new NextResponse(
    `<!doctype html><html><head><meta charset="utf-8"><title>Instagram 연동</title>
    <style>body{font-family:monospace;background:#121212;color:#fff;padding:2rem;line-height:1.8}
    a.btn{display:inline-block;background:#008741;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;margin-top:1rem}</style>
    </head><body>
      <h2>Instagram 계정 연결</h2>
      <p>Meta 앱에 이 정확한 Redirect URI가 등록되어 있어야 합니다:</p>
      <pre>${redirectUri}</pre>
      <p>등록 후 아래 버튼을 눌러 @tonito_quikle 계정으로 로그인/승인하세요.</p>
      <a class="btn" href="${authorizeUrl.toString()}">Instagram으로 로그인</a>
    </body></html>`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
}
