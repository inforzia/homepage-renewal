# Company About 화면 구현 TODO

## 메타 정보

- 요청자: 사용자
- 생성 일시: 2026-07-02
- 완료 일시: 2026-07-02
- 상태: 완료
- 관련 문서:
    - [AGENTS.md](../../AGENTS.md)
    - [page-implement 스킬](../skills/page-implement.md)
    - [화면 구현 마감 후속 TODO](./2026-06-30-screen-completion-followup-todo.md)

## 목적

- `https://seed-bronze-70048020.figma.site/about` 화면을 기준으로 `company/about` 화면을 구현한다.
- Chrome 기반 분석 결과를 참고해 현재 프로젝트 구조에 맞는 정적 페이지로 재구성한다.

## 주요 작업

- [x] Chrome으로 참조 페이지의 섹션 구조, 텍스트, 자산 의존 여부를 분석한다.
- [x] `src/app/company/about/page.tsx`와 대응 CSS 모듈을 추가한다.
- [x] 기존 공통 컴포넌트 재사용 가능 범위를 반영해 페이지를 구현한다.
- [x] 반응형 기준에서 레이아웃 붕괴 여부를 점검한다.
- [x] 필요 시 TODO 문서와 후속 작업 메모를 갱신한다.

## 작업 메모

- `docs/skills/page-implement.md` 기준으로 Chrome을 사용해 참조 페이지를 분석했다.
- 구현 결과는 `src/app/company/about/page.tsx`, `src/app/company/about/page.module.css`에 반영했다.
- `Company` 메뉴의 `About Inforzia` 링크를 `/company/about`으로 변경했고 `src/app/sitemap.ts`에도 경로를 추가했다.
- `npx tsc --noEmit` 기준 타입 체크를 통과했다.

## 참고 대상

- 타겟 URL: `https://seed-bronze-70048020.figma.site/about`
- 매핑 경로: `src/app/company/about/page.tsx`
- 관련 기존 화면:
    - `src/app/company/contact-us/page.tsx`
    - `src/components/site/SiteHero.tsx`
    - `src/components/site/SiteFooter.tsx`
