# Inforzia Homepage Renewal

회사 홈페이지를 Next.js로 재구축하는 프로젝트입니다.  
대부분의 화면은 정적 콘텐츠 중심으로 구성하며, Netlify 배포를 전제로 초기 세팅되어 있습니다.

## Goals

- 정적 사이트 중심의 회사 홈페이지 구축
- Figma Sites 페이지와 코드 컴포넌트의 연결 관리
- 디자인 변경 시 로직을 최대한 보존하면서 화면만 안정적으로 동기화

## Tech Stack

- Next.js
- App Router
- TypeScript
- ESLint
- Netlify

## Node Version

이 프로젝트는 `.node-version` 파일을 기준으로 Node.js `20.20.0` 사용을 전제로 합니다.

```bash
fnm use
```

필요하면 아래처럼 맞춘 뒤 의존성을 다시 설치합니다.

```bash
fnm install 20.20.0
fnm use 20.20.0
npm install
```

## Development

```bash
npm install
npm run dev
```

- Local: `http://localhost:3000`
- Lint: `npm run lint`
- Type check: `npm run typecheck`
- Build: `npm run build`

## Deployment

정적 출력 기준으로 구성되어 있으며 Netlify에서 `out/` 디렉터리를 publish 대상으로 사용합니다.
운영 기준 도메인은 `https://inforzia.io/` 입니다.

## CI

GitHub Actions 기반 기본 CI가 포함되어 있습니다.

- Pull Request와 `main` 브랜치 push 시 자동 실행
- Node.js `20.20.0` 사용
- `npm ci`
- `npm run check`
- `npm run build`

## Figma Workflow

- Figma Sites의 렌더링된 페이지와 구현 파일의 매핑은 `docs/note/figma-screen-map.md`에서 관리합니다.
- 페이지 분석 및 구현 작업 지침은 `docs/skills/` 아래 문서에서 관리합니다.
- 디자인 변경이 발생하면 우선 변경점을 비교하고, 사용자 승인 후 코드에 반영합니다.
- Figma MCP는 사용하지 않으며, `@chrome`을 통해 렌더링된 Figma Sites 페이지를 읽는 방식을 사용합니다.
- Figma 연동 범위는 디자인 반영에 한정하며, 비즈니스 로직은 코드에서 직접 관리합니다.
