# 화면 구현 마감 후속 TODO

## 메타 정보

- 요청자: 사용자
- 생성 일시: 2026-06-30
- 최종 수정 일시: 2026-06-30
- 완료 일시:
- 상태: 계획 중
- 관련 작업:
    - [Flomon Vision 페이지 구현 TODO](./flomon-vision-page-todo.md)
- 관련 문서 / 이슈 / 링크:
    - [docs/todo/READMD.md](./READMD.md)
    - [AGENTS.md](../../AGENTS.md)

## 목적

- 현재 구현된 주요 화면을 실제 오픈 가능한 수준까지 마감하기 위한 후속 작업을 정리한다.
- 단순한 레이아웃 재현을 넘어서 홈 화면 인터랙션, locale 적용, 링크 연결, 접근성, 정적 호스팅 검토까지 포함한 작업 계획을 만든다.

## 상세지시

- locale 작업은 한글/영어 기준으로만 범위를 한정한다.
- locale 작업은 화면 마감, 링크 정리, 접근성/정적 검토 이후 최후반에 진행한다.
- 실제 번역 문구 작성은 이번 작업 범위에 포함하지 않는다.
- 홈 카드 클릭 동작과 공통 링크 정리는 기존 URL 체계를 유지하는 방향을 우선한다.
- 신규 라우트 추가가 필요해지는 정보구조 개편은 이번 작업에서 다루지 않는다.

## 사전조사 자료

### 홈 화면 인터랙션 현황

- 관련 TODO:
    - [1. 홈 화면 클릭 동작과 인터랙션 마감](#1-홈-화면-클릭-동작과-인터랙션-마감)
- 참고 자료:
    - `src/app/page.tsx`
    - `src/app/page.module.css`
    - `src/components/ui/CardSlider.tsx`

### Locale 적용 현황

- 관련 TODO:
    - [9. Locale 적용 범위와 구조 설계](#9-locale-적용-범위와-구조-설계-결정-필요)
- 참고 자료:
    - `src/app/layout.tsx`
    - `src/app/sitemap.ts`
    - `src/components/site/SiteHeader.tsx`
    - `src/components/site/SiteHeader.module.css`

### Flomon Vision 잔여 작업 현황

- 관련 TODO:
    - [3. Flomon Vision 페이지 미완료 항목 정리](#3-flomon-vision-페이지-미완료-항목-정리)
- 참고 자료:
    - [Flomon Vision 페이지 구현 TODO](./flomon-vision-page-todo.md)
    - `src/app/products/flomon-vision/page.tsx`
    - `src/app/products/flomon-vision/page.module.css`

### 문의 및 Company 관련 화면 현황

- 관련 TODO:
    - [5. use cases 상세 화면 하단 상담 화면 개발](#5-use-cases-상세-화면-하단-상담-화면-개발)
    - [6. 문의하기 화면 수정](#6-문의하기-화면-수정)
    - [7. Company 진입 화면 개발](#7-company-진입-화면-개발)
    - [8. 상단 메뉴 하위 메뉴들의 interaction 추가](#8-상단-메뉴-하위-메뉴들의-interaction-추가)
- 참고 자료:
    - `src/app/company/contact-us/page.tsx`
    - `src/components/site/SiteHeader.tsx`
    - `src/app/use-cases/[id]/page.tsx`

## 완료 기준

- 홈 `/`의 제품 카드와 산업 카드가 의도한 목적지로 이동 가능한 상태가 된다.
- locale 적용 범위와 방식이 문서화되고, 공통 UI에서 반영 가능한 구조가 정리된다.
- `Flomon Vision` 페이지의 미완료 항목이 구현되거나 제외 사유가 정리된다.
- 공통 CTA와 placeholder 링크 정리 작업이 끝나고 남은 미결 사항이 사용자 확인 항목으로 분리된다.
- use cases 상세 하단 상담 영역, 문의하기 화면, Company 진입 화면의 후속 작업이 계획에 반영된다.

## TODO 목록

- [x] [1. 홈 화면 클릭 동작과 인터랙션 마감](#1-홈-화면-클릭-동작과-인터랙션-마감)
- [ ] [2. Flomon Vision 페이지 미완료 항목 정리 (결정 필요)](#2-flomon-vision-페이지-미완료-항목-정리-결정-필요)
- [ ] [3. 공통 링크와 placeholder 상호작용 정리](#3-공통-링크와-placeholder-상호작용-정리)
- [ ] [4. use cases 상세 화면 하단 상담 화면 개발](#4-use-cases-상세-화면-하단-상담-화면-개발)
- [ ] [5. 문의하기 화면 수정](#5-문의하기-화면-수정)
- [ ] [6. Company 진입 화면 개발](#6-company-진입-화면-개발)
- [ ] [7. 상단 메뉴 하위 메뉴들의 interaction 추가](#7-상단-메뉴-하위-메뉴들의-interaction-추가)
- [ ] [8. 반응형 접근성 정적 검토 항목 정리](#8-반응형-접근성-정적-검토-항목-정리)
- [ ] [9. Locale 적용 범위와 구조 설계 (결정 필요)](#9-locale-적용-범위와-구조-설계-결정-필요)

## 상세 TODO

### 1. 홈 화면 클릭 동작과 인터랙션 마감

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적:
    - 홈 화면의 핵심 탐색 요소를 실제 이동 가능한 UI로 마감한다.
- 작업 내용:
    - [x] `/`의 `Our Products` 카드 전체를 클릭 가능한 구조로 변경한다.
    - [x] `Flomon Vision` 카드를 `/products/flomon-vision`으로 연결한다.
    - [x] `Flomon Agent` 카드를 `/products/flomon-agent`으로 연결한다.
    - [x] 제품 카드 hover 시 배경 음영 또는 이에 준하는 시각 피드백을 추가한다.
    - [x] 포커스 상태에서도 동일한 수준의 클릭 가능 피드백을 제공한다.
    - [x] `/`의 `현장 관제의 완벽한 지능화, 인포지아와 실현하세요.` 섹션 카드 전체를 클릭 가능하게 만든다.
    - [x] 각 산업 카드를 대응하는 `/solutions/*` 또는 확정된 목적지로 연결한다.
- 참고 자료:
    - `src/app/page.tsx`
    - `src/app/page.module.css`
    - `src/components/ui/CardSlider.tsx`

### 2. Flomon Vision 페이지 미완료 항목 정리 (결정 필요)

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적:
    - 별도 TODO에 남아 있는 `Flomon Vision` 페이지의 미완료 지점을 실제 구현 가능한 작업 단위로 줄인다.
- 작업 내용:
    - [ ] `영상 + 텍스트 통합 분석`, `복합 상황까지 정확히 판단` 영역이 실제 전환 UI인지 정리한다.
    - [ ] 필요 시 feature 섹션의 선택 상태에 따라 설명/비주얼이 바뀌는 동작을 구현한다.
    - [ ] KPI 카드 아이콘 자산 필요 여부를 확정하고 반영 대상을 정리한다.
    - [ ] 작업 예시 섹션에서 탭 선택에 따라 설명과 대표 이미지가 바뀌는지 여부를 정리한다.
    - [ ] 실제 상호작용이 필요하면 client component 분리 작업을 별도 task로 정의한다.
    - [ ] `Learn More`, `소개서 다운로드`, `도입 문의하기`, `더 보기` 링크 목적지 확정 작업을 정리한다.
    - [ ] 빈 프레임처럼 보이는 영역에 실미디어가 필요한지 여부를 정리한다.
- 참고 자료:
    - [Flomon Vision 페이지 구현 TODO](./flomon-vision-page-todo.md)
    - `src/app/products/flomon-vision/page.tsx`
    - `src/app/products/flomon-vision/page.module.css`

### 3. 공통 링크와 placeholder 상호작용 정리

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적:
    - 화면마다 흩어진 임시 링크와 정적 상호작용 요소를 실제 서비스 기준으로 정리한다.
- 작업 내용:
    - [ ] `SitePrimaryButton`이 모든 위치에서 동일 목적지여야 하는지 검토한다.
    - [ ] 페이지별 CTA가 모두 `/company/contact-us`로 가는 현재 구조를 유지할지 정리한다.
    - [ ] 푸터 `개인정보 처리방침` 링크의 실제 목적지 정리 작업을 추가한다.
    - [ ] 후기 카드 `더 보기`, 사례 카드, 보조 CTA 중 정적 텍스트로 남은 항목을 정리한다.
    - [ ] 각 주요 페이지에서 placeholder 링크나 미완성 상호작용을 점검하고 필요한 후속 task를 추가한다.
- 참고 자료:
    - `src/components/site/SitePrimaryButton.tsx`
    - `src/components/site/SiteFooter.tsx`
    - `src/app/page.tsx`
    - `src/app/products/flomon-vision/page.tsx`
    - `src/app/products/flomon-agent/page.tsx`

### 4. use cases 상세 화면 하단 상담 화면 개발

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적:
    - use cases 상세 화면의 하단 상담 유도 영역을 실제 화면으로 개발할 작업을 정리한다.
- 작업 내용:
    - [ ] use cases 상세 화면 하단에 상담 유도 영역이 들어갈 위치와 현재 구조를 확인한다.
    - [ ] 하단 상담 화면의 구성 요소(카피, 입력 요소, CTA, 링크)를 정의한다.
    - [ ] 공통 CTA로 충분한지, 전용 상담 섹션이 필요한지 정리한다.
    - [ ] 상세 페이지 공통으로 재사용 가능한 컴포넌트 구조가 필요한지 검토한다.
    - [ ] 실제 구현 대상 파일과 후속 작업 항목을 정리한다.
- 참고 자료:
    - `src/app/use-cases/[id]/page.tsx`
    - `src/app/use-cases/[id]/page.module.css`
    - `src/app/company/contact-us/page.tsx`

### 5. 문의하기 화면 수정

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적:
    - 현재 문의하기 화면을 요구사항에 맞게 보완하기 위한 수정 작업을 정리한다.
- 작업 내용:
    - [ ] 현재 문의하기 화면의 필드 구성, 제출 흐름, 시각 구성을 점검한다.
    - [ ] 수정이 필요한 항목(카피, 필드, 버튼, 파일 업로드, 동의 UI)을 정리한다.
    - [ ] 실제 문의 접수 기능이 필요한지, 정적 폼 수준으로 유지할지 정리한다.
    - [ ] 문의하기 화면과 다른 CTA 진입 경로 간 연결 방식을 점검한다.
    - [ ] 후속 구현 task를 추가할 수 있도록 수정 범위를 정리한다.
- 참고 자료:
    - `src/app/company/contact-us/page.tsx`
    - `src/app/company/contact-us/page.module.css`
    - `src/components/site/SiteFooter.tsx`

### 6. Company 진입 화면 개발

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적:
    - 헤더의 `Company` 진입점이 단순 문의 링크가 아니라 독립 화면을 가질 경우를 대비해 개발 작업을 정리한다.
- 작업 내용:
    - [ ] 현재 `Company` 메뉴가 어떤 경로와 화면으로 연결되는지 점검한다.
    - [ ] `Company` 전용 진입 화면이 필요한지, `contact-us` 재사용이 맞는지 정리한다.
    - [ ] 독립 화면이 필요하다면 포함할 섹션(회사 소개, 미션, 연락처, CTA)을 정리한다.
    - [ ] 헤더 dropdown과 `Company` 대표 경로 설계에 필요한 후속 작업을 정리한다.
    - [ ] 실제 화면 구현이 필요한 경우 별도 구현 task를 추가한다.
- 참고 자료:
    - `src/components/site/SiteHeader.tsx`
    - `src/components/site/SiteHeader.module.css`
    - `src/app/company/contact-us/page.tsx`

### 7. 상단 메뉴 하위 메뉴들의 interaction 추가

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적:
    - 상단 메뉴의 하위 메뉴가 실제 탐색 흐름에 맞는 상호작용을 갖도록 정리한다.
- 작업 내용:
    - [ ] 현재 상단 메뉴 하위 메뉴의 노출 방식과 동작 조건을 점검한다.
    - [ ] hover, focus, click 기준으로 어떤 interaction이 필요한지 정리한다.
    - [ ] 데스크톱과 모바일에서 하위 메뉴 동작 방식을 어떻게 나눌지 정리한다.
    - [ ] 키보드 접근성과 포커스 이동 규칙을 포함해 필요한 동작을 정리한다.
    - [ ] 실제 구현 대상 파일과 후속 구현 task를 추가한다.
- 참고 자료:
    - `src/components/site/SiteHeader.tsx`
    - `src/components/site/SiteHeader.module.css`
    - `src/app/layout.tsx`

### 8. 반응형 접근성 정적 검토 항목 정리

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적:
    - 구현 마감 전에 화면 품질과 정적 호스팅 적합성을 확인하기 위한 후속 작업을 정리한다.
- 작업 내용:
    - [ ] 1440px, 1024px, 768px, 390px 기준으로 주요 페이지 레이아웃 점검 작업을 정리한다.
    - [ ] 긴 한글/영문 문구 줄바꿈, 이미지 비율, 여백 붕괴, 스크롤 튐 점검 작업을 정리한다.
    - [ ] 키보드 접근 가능한 요소와 hover 의존 정보 전달 여부를 점검하는 작업을 정리한다.
    - [ ] `src/components/ui/CardSlider.tsx`의 lint 에러 대응 작업을 추가한다.
    - [ ] `src/app/use-cases/[id]/UseCaseStorySection.tsx`의 dependency 경고 대응 작업을 추가한다.
    - [ ] lint, typecheck, build 실행이 필요해지는 시점과 범위를 정리한다.
    - [ ] 정적 호스팅 전제와 locale/상호작용 변경 충돌 여부를 확인하는 작업을 정리한다.
- 참고 자료:
    - `src/components/ui/CardSlider.tsx`
    - `src/app/use-cases/[id]/UseCaseStorySection.tsx`
    - `package.json`

### 9. Locale 적용 범위와 구조 설계 (결정 필요)

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적:
    - 다국어 확장에 무리가 없는 구조를 정의하고 공통 UI에 반영 가능한 기준을 마련한다.
- 작업 내용:
    - [ ] locale 적용 범위를 정의한다.
    - [ ] 한국어 기본 + 영어 추가, 사전 기반 번역, locale segment 도입 여부를 비교 정리한다.
    - [ ] 제품/솔루션/use-cases slug를 locale별로 나눌지, URL은 유지하고 문구만 번역할지 정리한다.
    - [ ] 메시지/사전 파일 구조 후보를 정리한다.
    - [ ] 헤더, 푸터, CTA, 버튼, 섹션 제목 등 공통 UI 텍스트를 locale 구조로 분리하는 방식을 정리한다.
    - [ ] metadata, canonical, alternates, sitemap 반영 범위를 locale 정책 기준으로 정리한다.
    - [ ] `SiteHeader.module.css`에 남아 있는 locale 버튼 흔적을 실제 기능으로 연결할지 제거할지 결정한다.
- 참고 자료:
    - `src/app/layout.tsx`
    - `src/app/sitemap.ts`
    - `src/components/site/SiteHeader.tsx`
    - `src/components/site/SiteHeader.module.css`

## 사용자 확인 필요 사항

- [ ] locale 적용 범위를 한국어 기본 + 영어 추가로 볼지, 다른 정책을 원하는지 확인
- [ ] 홈 산업 카드의 최종 목적지를 모두 `/solutions/*`로 연결해도 되는지 확인
- [ ] `소개서 다운로드`, `개인정보 처리방침`, 후기 카드 `더 보기`의 실제 공개 목적지 확인
- [ ] `Flomon Vision` 전환형 섹션이 실제 인터랙션이어야 하는지 정적 표현이면 충분한지 확인

## 작업 결과 요약

- 변경된 주요 내용:
- 남은 제약 또는 후속 작업:
