# TONITO Pickle — Website

> **"PICK DIFFERENT"** — 냉장 생 피클 브랜드 공식 웹사이트

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Language**: TypeScript
- **Fonts**: Anton · Hanken Grotesk · Space Mono · Noto Sans KR (Google Fonts via CDN)

## 로컬 개발 시작

```bash
cd site
npm install
npm run dev
```

→ http://localhost:3000 에서 확인

## 빌드

```bash
npm run build
npm run start
```

## 프로젝트 구조

```
site/
├── public/
│   └── images/          # 브랜드 이미지 에셋 (Tony 캐릭터, 로고, etc.)
└── src/
    ├── app/
    │   ├── globals.css  # 디자인 토큰 (CSS Custom Properties)
    │   ├── layout.tsx   # 루트 레이아웃 + 폰트 + 메타데이터
    │   └── page.tsx     # 홈페이지 (모든 섹션 조합)
    ├── components/
    │   ├── layout/
    │   │   └── Nav.tsx          # 고정 네비게이션 (모바일 햄버거 포함)
    │   └── sections/
    │       ├── Hero.tsx         # 히어로 섹션
    │       ├── Ticker.tsx       # Red 마퀴 티커
    │       ├── BrandHook.tsx    # 브랜드 스토리 훅
    │       ├── Products.tsx     # 제품 라인업 (가로 스크롤)
    │       ├── WhyTonito.tsx    # USP 3가지
    │       ├── ColdStrip.tsx    # 냉장 코너 스트립
    │       ├── Story.tsx        # 스토리 티저
    │       ├── Recipes.tsx      # 레시피 미리보기
    │       ├── SocialFeed.tsx   # 소셜 피드
    │       ├── Newsletter.tsx   # 토니또 Pick 뉴스레터
    │       └── Footer.tsx       # 푸터
    └── lib/
        ├── useReveal.ts  # Intersection Observer scroll reveal hook
        └── utils.ts      # cn() 유틸리티
```

## 디자인 토큰

| 토큰                | 값        | 용도              |
|---------------------|-----------|-------------------|
| `--primary`         | `#006b32` | 메인 그린         |
| `--secondary`       | `#b61821` | Hot 레드          |
| `--tertiary-bright` | `#d4be00` | 제스티 옐로       |
| `--bg`              | `#fcf9f4` | 페이지 배경       |
| `--brine-black`     | `#121212` | 아웃라인/텍스트   |

**Hard Shadow**: `4px 4px 0px #121212` (blur 없음, 시그니처)
