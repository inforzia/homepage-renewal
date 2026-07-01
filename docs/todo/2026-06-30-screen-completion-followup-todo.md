# 화면 구현 마감 후속 TODO

## 메타 정보

- 요청자: 사용자
- 생성 일시: 2026-06-30
- 최종 수정 일시: 2026-07-01
- 완료 일시:
- 상태: 진행 중
- 관련 작업:
    - [Flomon Vision 페이지 구현 TODO](./flomon-vision-page-todo.md)
- 관련 문서 / 이슈 / 링크:
    - [docs/todo/READMD.md](./READMD.md)
    - [AGENTS.md](../../AGENTS.md)

## 목적

- 현재 구현된 주요 화면을 실제 오픈 가능한 수준까지 마감하기 위한 후속 작업을 정리한다.
- 단순한 레이아웃 재현을 넘어서 홈 화면 인터랙션, locale 적용, 링크 연결, 접근성, 정적 호스팅 검토까지 포함한 작업 계획을 만든다.

## 현재 기준 요약

- `solutions` 하위 개별 페이지는 `/solutions/[id]` 동적 라우트로 통합되었다.
- 솔루션 페이지 데이터는 `src/datas/solutions.tsx`로 모였고, `Our Solution`, workflow, use cases 구성을 데이터 기반으로 관리한다.
- 솔루션 관련 외부 Figma Sites 의존 이미지는 대부분 로컬 `public/images/solutions/*`로 내려받아 정리되었다.
- `Our Solution` 아이콘 SVG는 로컬 파일로 치환되었고, 기본 비율 및 기본 크기(`28x28`)도 정리되었다.
- 솔루션 페이지 `Use Cases` 카드는 `src/datas/useCases.ts`의 첫 번째 `tags` 값을 기준으로 카테고리 매핑되도록 변경되었다.
- `SiteHero` 범용 컴포넌트는 생성되었고, 현재 솔루션 동적 페이지 hero에서 사용 중이다.
- 제품 페이지 hero에 `SiteHero`를 확대 적용하려는 시도는 사용자 의도와 맞지 않아 원복되었다.
- 임시 산출물은 `/.temp/` 아래로 정리하는 규칙이 `AGENTS.md`에 반영되었다.

## 다음 재개 포인트

1. 홈 hero를 실제로 어떤 수준까지 공통화할지 먼저 재정의한다.
2. `Flomon Vision` 페이지의 실제 미완료 인터랙션이 필요한지, 정적 표현으로 둘지 결정한다.
3. 공통 CTA, `더 보기`, `소개서 다운로드`, `개인정보 처리방침` 등 링크 목적지를 정리한다.
4. `use-cases` 상세 하단 상담 영역, 문의하기, Company 진입 화면 후속 구현 범위를 확정한다.
5. 마지막으로 반응형/접근성/lint 경고 대응과 locale 구조 설계를 진행한다.

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
    - [2. 홈 hero section 컴포넌트화](#2-홈-hero-section-컴포넌트화)
- 참고 자료:
    - `src/app/page.tsx`
    - `src/app/page.module.css`
    - `src/components/ui/CardSlider.tsx`
    - `src/components/site/HomeHero.tsx`
    - `src/components/site/SiteHero.tsx`

### 솔루션 화면 구조 개편 현황

- 관련 TODO:
    - [4. 공통 링크와 placeholder 상호작용 정리](#4-공통-링크와-placeholder-상호작용-정리)
    - [9. 반응형 접근성 정적 검토 항목 정리](#9-반응형-접근성-정적-검토-항목-정리)
- 참고 자료:
    - `src/app/solutions/[id]/page.tsx`
    - `src/app/solutions/[id]/page.module.css`
    - `src/datas/solutions.tsx`
    - `src/datas/useCases.ts`
    - `public/images/solutions/`

### Locale 적용 현황

- 관련 TODO:
    - [10. Locale 적용 범위와 구조 설계](#10-locale-적용-범위와-구조-설계-결정-필요)
- 참고 자료:
    - `src/app/layout.tsx`
    - `src/app/sitemap.ts`
    - `src/components/site/SiteHeader.tsx`
    - `src/components/site/SiteHeader.module.css`

### Flomon Vision 잔여 작업 현황

- 관련 TODO:
    - [3. Flomon Vision 페이지 미완료 항목 정리](#3-flomon-vision-페이지-미완료-항목-정리-결정-필요)
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
- 홈 hero section이 페이지 파일에서 분리된 재사용 가능한 컴포넌트 구조로 정리된다.
- 솔루션 화면 구조 개편 내용과 남은 보완 지점이 문서 기준으로 이어받기 가능한 상태가 된다.
- locale 적용 범위와 방식이 문서화되고, 공통 UI에서 반영 가능한 구조가 정리된다.
- `Flomon Vision` 페이지의 미완료 항목이 구현되거나 제외 사유가 정리된다.
- 공통 CTA와 placeholder 링크 정리 작업이 끝나고 남은 미결 사항이 사용자 확인 항목으로 분리된다.
- use cases 상세 하단 상담 영역, 문의하기 화면, Company 진입 화면의 후속 작업이 계획에 반영된다.

## TODO 목록

- [x] [1. 홈 화면 클릭 동작과 인터랙션 마감](#1-홈-화면-클릭-동작과-인터랙션-마감)
- [ ] [2. 홈 hero section 컴포넌트화](#2-홈-hero-section-컴포넌트화)
- [ ] [3. Flomon Vision 페이지 미완료 항목 정리 (결정 필요)](#3-flomon-vision-페이지-미완료-항목-정리-결정-필요)
- [ ] [4. 공통 링크와 placeholder 상호작용 정리](#4-공통-링크와-placeholder-상호작용-정리)
- [ ] [5. use cases 상세 화면 하단 상담 화면 개발](#5-use-cases-상세-화면-하단-상담-화면-개발)
- [ ] [6. 문의하기 화면 수정](#6-문의하기-화면-수정)
- [ ] [7. Company 진입 화면 개발](#7-company-진입-화면-개발)
- [ ] [8. 상단 메뉴 하위 메뉴들의 interaction 추가](#8-상단-메뉴-하위-메뉴들의-interaction-추가)
- [ ] [9. 반응형 접근성 정적 검토 항목 정리](#9-반응형-접근성-정적-검토-항목-정리)
- [ ] [10. Locale 적용 범위와 구조 설계 (결정 필요)](#10-locale-적용-범위와-구조-설계-결정-필요)

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

### 2. 홈 hero section 컴포넌트화

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적:
    - 홈 hero section을 `page.tsx`에서 분리해 구조를 명확히 하고 후속 수정 범위를 줄인다.
- 작업 내용:
    - [ ] 현재 홈 hero section의 마크업, 카피, 미디어, CTA 구성을 분리 대상 단위로 정리한다.
    - [ ] 서버 컴포넌트 기본 원칙을 유지하면서 hero section을 독립 컴포넌트로 추출한다.
    - [ ] hero 전용 스타일이 필요하면 import 범위를 분리해 페이지 레벨 스타일 의존성을 줄인다.
    - [ ] 추출 이후에도 기존 시맨틱 구조, 링크 동작, 정적 호스팅 전제를 유지하는지 확인한다.
    - [ ] hero section 후속 수정이 예상되는 경우 props 구조를 과하게 일반화하지 않고 현재 용도에 맞게 정리한다.
- 진행 메모:
    - `src/components/site/SiteHero.tsx` 범용 hero 컴포넌트를 먼저 추출하고 `src/app/solutions/disaster-safety/page.tsx`에만 선적용했다.
    - 이후 솔루션 동적 라우트(`/solutions/[id]`)의 hero가 `SiteHero` 기반으로 정리되었다.
    - 제품 페이지 hero에 `SiteHero`를 적용하는 시도를 했지만 사용자 의도와 맞지 않아 원복했다.
    - `HomeHero`는 화면 안정성과 기존 연출을 유지하기 위해 현재 구조를 그대로 유지 중이다.
    - 다음 작업에서는 `HomeHero`를 직접 정리할지, `SiteHero`와 별개로 홈 전용 hero 체계를 유지할지 먼저 판단해야 한다.
- 참고 자료:
    - `src/app/page.tsx`
    - `src/app/page.module.css`
    - `src/components/site/HomeHero.tsx`
    - `src/components/site/SiteHero.tsx`

### 3. Flomon Vision 페이지 미완료 항목 정리 (결정 필요)

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

### 4. 공통 링크와 placeholder 상호작용 정리

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적:
    - 화면마다 흩어진 임시 링크와 정적 상호작용 요소를 실제 서비스 기준으로 정리한다.
- 작업 내용:
    - [ ] `SitePrimaryButton`이 모든 위치에서 동일 목적지여야 하는지 검토한다.
    - [ ] 페이지별 CTA가 모두 `/company/contact-us`로 가는 현재 구조를 유지할지 정리한다.
    - [ ] 푸터 `개인정보 처리방침` 링크의 실제 목적지 정리 작업을 추가한다.
    - [ ] 후기 카드 `더 보기`, 사례 카드, 보조 CTA 중 정적 텍스트로 남은 항목을 정리한다.
    - [ ] 각 주요 페이지에서 placeholder 링크나 미완성 상호작용을 점검하고 필요한 후속 task를 추가한다.
- 진행 메모:
    - 솔루션 `Use Cases` 카드는 `src/datas/useCases.ts` 기반 실제 데이터로 교체되었다.
    - 제품 페이지 일부 `Use Cases`/미디어 영역에는 여전히 placeholder 이미지 또는 정적 카드가 남아 있다.
    - `Flomon Vision`, `Flomon Agent`의 `소개서 다운로드`는 현재 `/company/contact-us`로 연결되어 있다.
- 참고 자료:
    - `src/components/site/SitePrimaryButton.tsx`
    - `src/components/site/SiteFooter.tsx`
    - `src/app/page.tsx`
    - `src/app/products/flomon-vision/page.tsx`
    - `src/app/products/flomon-agent/page.tsx`

### 5. use cases 상세 화면 하단 상담 화면 개발

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

### 6. 문의하기 화면 수정

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

### 7. Company 진입 화면 개발

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

### 8. 상단 메뉴 하위 메뉴들의 interaction 추가

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

### 9. 반응형 접근성 정적 검토 항목 정리

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
- 진행 메모:
    - `tsc --noEmit` 기준 타입 체크는 최근 변경 시점까지 통과 상태를 유지했다.
    - 솔루션 SVG 기본 렌더 크기와 비율 문제는 수정되었지만, 실제 화면 단위 반응형 확인은 아직 별도 점검이 필요하다.
    - 솔루션 페이지 구조가 동적 라우트로 통합된 이후 390px/768px 기준 실제 레이아웃 재확인이 필요하다.
- 참고 자료:
    - `src/components/ui/CardSlider.tsx`
    - `src/app/use-cases/[id]/UseCaseStorySection.tsx`
    - `package.json`

### 10. Locale 적용 범위와 구조 설계 (결정 필요)

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
- [ ] 홈 hero를 `SiteHero` 계열로 공통화할지, `HomeHero`를 별도 유지/개선할지 확인

## 작업 결과 요약

- 변경된 주요 내용:
    - 홈 카드 클릭 동작과 솔루션 카드 링크 연결 작업은 완료 상태로 유지한다.
    - `src/components/site/SiteHero.tsx`를 추가해 이미지/영상 배경, eyebrow, title, description, color를 받을 수 있는 범용 hero 기반을 만들었다.
    - 솔루션 화면은 `/solutions/[id]` 동적 라우트로 통합되었고, 데이터는 `src/datas/solutions.tsx`로 이동했다.
    - 솔루션 관련 외부 리소스를 로컬 `public/images/solutions/*` 자산으로 정리했다.
    - 솔루션 `Our Solution` SVG 아이콘을 로컬 파일로 추출하고, 비율/기본 크기 문제도 정리했다.
    - 솔루션 `Use Cases` 카드는 `src/datas/useCases.ts` 첫 번째 태그 기준 카테고리 매핑으로 전환되었다.
    - `disaster-safety`에서 시작한 `SiteHero` 적용은 현재 솔루션 동적 페이지에 반영되어 있고, 홈 `HomeHero`와 제품 hero는 기존 구조로 유지 중이다.
    - 임시 파일 저장 위치를 `/.temp/`로 통일하는 규칙을 `AGENTS.md`에 반영했다.
- 남은 제약 또는 후속 작업:
    - TODO 2의 원래 목표인 홈 hero section 컴포넌트화는 아직 완료되지 않았다.
    - `SiteHero`를 어디까지 공통화할지 기준을 먼저 다시 정해야 한다.
    - 제품 페이지 hero는 `SiteHero`로의 단순 치환이 사용자 의도와 맞지 않았으므로, 재시도 전 목표 형태 정의가 필요하다.
    - 반응형/접근성 점검과 CTA 목적지 정리는 아직 미착수 상태다.
