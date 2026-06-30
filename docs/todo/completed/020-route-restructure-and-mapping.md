# Route Restructure And Mapping

## Goal
- [x] Flattened 1-depth routes를 정보구조 중심의 route group 체계로 재구성한다.
- [x] 개선된 내부 구조와 Figma Sites route를 비교해 URL 매핑 기준을 정리한다.
- [x] 매핑 규칙을 바탕으로 신규 고정 페이지와 동적 `[id]` 페이지 후보를 구분한다.
- [x] 최종 라우트 체계에 맞춰 누락 화면을 추가하고 재사용 가능한 화면은 통합한다.

## Workstream
### 1. Current Route Audit And Internal Restructure
- [x] 현재 `src/app` 라우트 구조와 역할을 분류한다.
- [x] route group 후보를 정리한다.
- [x] URL 변경 없이 App Router 내부 폴더 구조를 정리한다.

### 2. Improved Structure And Figma Route Mapping
- [x] Figma Sites의 route 목록을 수집한다.
- [x] 현재 개선 구조와 Figma route를 1:1 또는 N:1로 매핑한다.
- [x] 유지할 URL, 변경할 URL, redirect 필요 URL을 구분한다.

### 3. Static Page And Dynamic Route Classification
- [x] 상세 페이지 후보를 목록화한다.
- [x] 개별 고정 페이지가 필요한 경우와 `[id]`로 일반화 가능한 경우를 나눈다.
- [x] slug 규칙, 메타데이터 규칙, 데이터 소스 위치를 정한다.

### 4. Page Implementation
- [x] 신규 페이지를 추가한다.
- [x] 재사용 가능한 뷰를 공통화한다.
- [x] sitemap, 내부 링크, 정적 호스팅 전제를 다시 확인한다.

## Step 1 Deliverables
- [x] 현재 라우트 목록 정리
- [x] 카테고리별 그룹 후보 정리
- [x] 중복 또는 상세 페이지 후보 정리
- [x] 구조 개선안 초안 작성

## Step 1 Analysis

### Current Route Inventory
- `/`
- `/enterprise-vision-ai`
- `/product-flomon-vision`
- `/product-flomon-agent`
- `/use-cases`
- `/use-cases-2`
- `/solution-disaster-safety`
- `/solution-disaster-safety-2`
- `/solution-facility-infrastructure`
- `/solution-logistics-distribution`
- `/solution-manufacturing-construction`
- `/solution-retail-store-management`
- `/solution-smart-farming`
- `/wildfire-disaster-command`
- `/contact-us`
- `/index`

### Evidence Category A. Global Navigation Information Architecture
- Header 기준 1차 메뉴는 `Vision AI`, `Products`, `Use Cases`, `Company` 로 이미 정리되어 있다.
- `Vision AI` 아래에는 `enterprise-vision-ai` 와 산업별 `solution-*` 페이지가 배치되어 있다.
- `Products` 아래에는 `product-flomon-vision`, `product-flomon-agent` 가 배치되어 있다.
- `Use Cases` 는 단일 진입 링크로 노출되고 있다.
- `Company` 는 현재 `contact-us` 로 연결되어 있으며, 회사 소개와 문의가 분리되지 않은 상태다.

### Evidence Category B. URL Naming Pattern
- `product-*` 라우트는 제품 상세 성격으로 동일 규칙을 가진다.
- `solution-*` 라우트는 산업/적용영역 상세 성격으로 동일 규칙을 가진다.
- `use-cases-2` 처럼 숫자 suffix 기반 이름은 의미를 설명하지 못한다.
- `solution-disaster-safety-2` 역시 의미 없는 숫자 suffix를 사용하고 있다.
- `wildfire-disaster-command` 는 use case 상세 제목형 slug 성격인데 현재는 최상위에 단독 배치되어 있다.
- `index` 는 공개 정보구조용 페이지가 아니라 개발 편의용 인덱스 페이지다.

### Evidence Category C. Page Role And Content Type
- `use-cases` 는 사례 목록 페이지다.
- `use-cases-2` 는 사례 상세 페이지 템플릿 성격이다.
- `wildfire-disaster-command` 는 실제 사례 상세 성격이며 `use-cases-2` 와 같은 계열 콘텐츠다.
- `solution-disaster-safety-2` 는 독립 화면이 아니라 `solution-disaster-safety` 를 재export하는 alias 페이지다.
- `contact-us` 는 회사 소개라기보다 문의 페이지 성격이 강하다.

### Evidence Category D. Sitemap And Exposure
- 현재 sitemap 에도 위 1-depth URL이 그대로 노출되고 있다.
- 중복 또는 임시 성격의 URL인 `use-cases-2`, `solution-disaster-safety-2` 도 함께 노출된다.
- 개발용 `index` 는 sitemap 기반 링크 허브로 쓰이지만 공개 정보구조 관점에서는 별도 관리 대상이다.

### Step 1 Problem Summary
- 현재 파일/URL 구조가 정보구조보다 평평해서 같은 계열 페이지를 한눈에 관리하기 어렵다.
- 숫자 suffix 라우트가 포함되어 있어 URL 의미가 약하고 확장 규칙을 만들기 어렵다.
- 사례 목록, 사례 상세, 산업 상세, 제품 상세가 모두 최상위 depth 1 에 섞여 있다.
- alias 또는 중복 성격 페이지가 sitemap 에 직접 노출되어 canonical 구조를 흐린다.
- 향후 Figma Sites route 매핑 시 어떤 페이지가 목록이고 어떤 페이지가 상세인지 바로 대응시키기 어렵다.

### Step 1 Route Rule
- 중복되는 prefix를 공유하는 라우트는 가능한 한 2단계 이상의 path로 승격한다.
- 이 기준에 따라 `product-*`, `solution-*`, `use-cases*` 계열은 평면 slug보다 계층형 path가 더 적합하다.
- 1-depth slug는 홈에서 직접 접근하는 독립 랜딩 또는 단일 성격 페이지에 우선 사용한다.

### Step 1 Proposed Internal Categories
- `landing`
  홈 및 진입 화면
- `vision-ai`
  `enterprise-vision-ai`, `solution-*`
- `products`
  `product-*`
- `use-cases`
  사례 목록, 사례 상세, 관련 상세 템플릿
- `company`
  `contact-us` 및 향후 회사 소개 계열
- `internal`
  `index` 와 같은 개발 보조 페이지

### Step 1 Adjustment Direction
- 1단계에서는 공개 URL을 바로 변경하지 않고 먼저 내부 route group 기준으로 묶는다.
- `solution-*` 는 모두 `vision-ai` 계열로 정리한다.
- `product-*` 는 모두 `products` 계열로 정리한다.
- `use-cases-2` 와 `wildfire-disaster-command` 는 둘 다 `use-cases` 계열의 상세 페이지 후보로 분류한다.
- `solution-disaster-safety-2` 는 alias 또는 임시 route 후보로 분류하고 후속 단계에서 유지 여부를 결정한다.
- `contact-us` 는 당장은 `company` 계열로 묶되, 실제 성격은 문의 페이지로 표시한다.
- `index` 는 공개 route 설계 대상에서 제외하고 내부 보조 route 로 취급한다.
- prefix 중복이 확인된 계열은 후속 단계에서 2-depth path 전환을 우선 검토한다.

### Step 1 Suggested Next Structure
- `/`
- `/vision-ai`
- `/products/flomon-vision`
- `/products/flomon-agent`
- `/use-cases`
- `/use-cases/[id]`
- `/solutions/disaster-safety`
- `/solutions/facility-infrastructure`
- `/solutions/logistics-distribution`
- `/solutions/manufacturing-construction`
- `/solutions/retail-store-management`
- `/solutions/smart-farming`
- `/company/contact-us`

### Step 1 Decision Notes
- 외부 공개 URL 변경 여부는 2단계 Figma route 비교 후 결정한다.
- 다만 내부 구조는 위 카테고리 기준으로 먼저 묶는 것이 안전하다.
- 3단계에서 가장 먼저 동적화 검토할 대상은 `use-cases` 상세 계열이다.
- 공개 URL까지 정리할 경우에는 prefix 반복 계열을 2-depth path로 정규화하는 방향이 가장 일관적이다.

## Step 2 Deliverables
- [x] Figma Sites route 목록 정리
- [x] 현행 route와 Figma route 매핑표 작성
- [x] redirect 또는 alias 필요 여부 표시

## Step 2 Analysis

### Source Verification Notes
- 직접 확인 대상: `https://seed-bronze-70048020.figma.site/sitemap.xml`
- Chrome plugin 시도 결과: `net::ERR_BLOCKED_BY_CLIENT`
- PowerShell `Invoke-WebRequest` 시도 결과: 소켓 접근 권한 제한으로 실패
- 최종 근거는 사용자가 제공한 실제 sitemap XML 본문이다.
- 사용 근거 문서:
  - 사용자 제공 sitemap XML 본문
  - `docs/todo/sitemap-page-implementation-todo.md`
  - `docs/note/sitemap-pages-session-handoff.md`

### Original Figma Sites Route List
- `/`
- `/enterprise-vision-ai`
- `/product-flomon-vision`
- `/product-flomon-agent`
- `/use-cases`
- `/solution-disaster-safety`
- `/contact-us`
- `/복합-재난-대응-esop`
- `/제주공항-재난-및-체류객-지원`
- `/AI-경계-로봇-통합-관제`
- `/제조-현장-안전-관리`
- `/리프트-안전-관리`
- `/테트라포드-안전-관리`
- `/곤돌라-안전-관리`
- `/vlm-기반-지능형-매장-관리`
- `/스마트-방향제-iot-플랫폼`
- `/데이터-기반-스마트팜`
- `/축전지-및-전력-설비-ems`
- `/제조-공장-스팀트랩-예지-정비`
- `/노후-설비-디지털-전환`
- `/복합-계측기-판독-자동화`
- `/중고차-거래-및-단지-관리-플랫폼`
- `/골프장-스마트-코스-관리-시스템-2`
- `/골프장-스마트-코스-관리-시스템`
- `/광케이블-및-시설물-통합-관리`
- `/산불-및-재난-통합-관제`
- `/solution-smart-farming`
- `/solution-logistics-distribution`
- `/solution-manufacturing-construction`
- `/solution-retail-store-managementuction`
- `/solution-facility-infrastructure`

### Current Project Route List
- `/`
- `/vision-ai`
- `/products/flomon-vision`
- `/products/flomon-agent`
- `/use-cases`
- `/use-cases/[id]`
- `/solutions/disaster-safety`
- `/solutions/smart-farming`
- `/solutions/logistics-distribution`
- `/solutions/manufacturing-construction`
- `/solutions/retail-store-management`
- `/solutions/facility-infrastructure`
- `/company/contact-us`

### Mapping Rule A. Independent Single-Page Brand Or Category Landing
- 원본의 단일 단계 slug가 특정 상위 카테고리 대표 페이지 역할을 하면 프로젝트에서는 카테고리 landing으로 승격한다.
- 적용 대상:
  - `/enterprise-vision-ai` -> `/vision-ai`
- 판단 근거:
  - 현재 내비게이션 최상위 카테고리명이 `Vision AI`
  - 구조 개편에서 prefix 중복 계열을 카테고리 path로 승격하기로 합의함
  - 해당 페이지는 개별 article보다 카테고리 대표 랜딩 성격이 강함

### Mapping Rule B. Product Prefix Pages
- 원본의 `product-*` 단일 단계 URL은 프로젝트에서 `/products/<slug>` 규칙으로 정리한다.
- 적용 대상:
  - `/product-flomon-vision` -> `/products/flomon-vision`
  - `/product-flomon-agent` -> `/products/flomon-agent`
- 판단 근거:
  - 원본에서 동일 prefix `product-` 반복
  - 현재 프로젝트 라우트 원칙상 반복 prefix는 2-depth path로 정규화

### Mapping Rule C. Solution Prefix Pages
- 원본의 `solution-*` 단일 단계 URL은 프로젝트에서 `/solutions/<slug>` 규칙으로 정리한다.
- 적용 대상:
  - `/solution-disaster-safety` -> `/solutions/disaster-safety`
  - `/solution-smart-farming` -> `/solutions/smart-farming`
  - `/solution-logistics-distribution` -> `/solutions/logistics-distribution`
  - `/solution-manufacturing-construction` -> `/solutions/manufacturing-construction`
  - `/solution-facility-infrastructure` -> `/solutions/facility-infrastructure`
- 판단 근거:
  - 원본에서 동일 prefix `solution-` 반복
  - 현재 프로젝트 구조가 `/solutions/*` canonical 규칙을 이미 사용

### Mapping Rule D. Use Case Detail Pages
- 원본의 한글 단일 단계 상세 페이지는 프로젝트에서 `/use-cases/[id]` 규칙으로 수용한다.
- 적용 대상:
  - `/복합-재난-대응-esop`
  - `/제주공항-재난-및-체류객-지원`
  - `/AI-경계-로봇-통합-관제`
  - `/제조-현장-안전-관리`
  - `/리프트-안전-관리`
  - `/테트라포드-안전-관리`
  - `/곤돌라-안전-관리`
  - `/vlm-기반-지능형-매장-관리`
  - `/스마트-방향제-iot-플랫폼`
  - `/데이터-기반-스마트팜`
  - `/축전지-및-전력-설비-ems`
  - `/제조-공장-스팀트랩-예지-정비`
  - `/노후-설비-디지털-전환`
  - `/복합-계측기-판독-자동화`
  - `/중고차-거래-및-단지-관리-플랫폼`
  - `/골프장-스마트-코스-관리-시스템-2`
  - `/골프장-스마트-코스-관리-시스템`
  - `/광케이블-및-시설물-통합-관리`
  - `/산불-및-재난-통합-관제` -> `/use-cases/wildfire-disaster-command`
- 판단 근거:
  - 사용자 제공 가정: 한글 주소 페이지는 `use-case` 아이디에 대응
  - 실제 sitemap에서 제품/솔루션/문의/목록 페이지를 제외한 나머지 추가 URL이 모두 한글 상세 제목형 slug로 구성되어 있음
  - 현재 `use-cases` 목록 페이지의 카드 제목 다수가 sitemap의 한글 slug와 의미상 직접 대응됨
  - 세션 handoff 메모에 원본 한글 경로를 영문 상세 slug로 전환한 기록이 있음
  - 현재 프로젝트는 상세 사례 페이지 확장 지점을 `/use-cases/[id]` 로 마련함

### Mapping Rule D-1. Use Case Detail Slug Strategy
- 한글 상세 경로가 `/use-cases/[id]` 로 들어간다는 규칙 자체는 충분히 확정 가능하다.
- 하지만 각 상세 페이지의 최종 `[id]` 값을 어떤 영문 slug로 정할지는 현재 저장소 근거만으로는 전부 확정할 수 없다.
- 현재 확정 가능한 예외:
  - `/산불-및-재난-통합-관제` -> `/use-cases/wildfire-disaster-command`
- 그 외 한글 상세 페이지는 모두 `/use-cases/[id]` 대상이지만, `[id]`의 정확한 명명 규칙은 추가 결정이 필요하다.
- 안전한 후보 규칙:
  - 의미 기반 영문 slug를 수동 부여
  - 동일 패턴 예시: `wildfire-disaster-command`, `jeju-airport-disaster-support`, `compound-disaster-esop`
- 보류 이유:
  - 현재 코드베이스에는 `wildfire-disaster-command` 외의 실제 상세 구현 slug 근거가 없다.
  - 자동 번역형 slug와 브랜드형 slug 중 어떤 명명 원칙을 쓸지 합의되지 않았다.

### Mapping Rule E. Company Or Contact Pages
- 원본의 회사/문의 성격 단일 단계 URL은 프로젝트에서 `/company/<slug>` 계열로 정리한다.
- 적용 대상:
  - `/contact-us` -> `/company/contact-us`
- 판단 근거:
  - 현재 정보구조에서 문의 페이지는 회사 카테고리 하위로 정리됨
  - 내비게이션 구조상 `Company` 아래에 속하는 페이지로 관리하는 편이 일관적임

### Route Mapping Table
- `/` -> `/`
- `/enterprise-vision-ai` -> `/vision-ai`
- `/product-flomon-vision` -> `/products/flomon-vision`
- `/product-flomon-agent` -> `/products/flomon-agent`
- `/use-cases` -> `/use-cases`
- `/solution-disaster-safety` -> `/solutions/disaster-safety`
- `/contact-us` -> `/company/contact-us`
- `/복합-재난-대응-esop` -> `/use-cases/[id]`
- `/제주공항-재난-및-체류객-지원` -> `/use-cases/[id]`
- `/AI-경계-로봇-통합-관제` -> `/use-cases/[id]`
- `/제조-현장-안전-관리` -> `/use-cases/[id]`
- `/리프트-안전-관리` -> `/use-cases/[id]`
- `/테트라포드-안전-관리` -> `/use-cases/[id]`
- `/곤돌라-안전-관리` -> `/use-cases/[id]`
- `/vlm-기반-지능형-매장-관리` -> `/use-cases/[id]`
- `/스마트-방향제-iot-플랫폼` -> `/use-cases/[id]`
- `/데이터-기반-스마트팜` -> `/use-cases/[id]`
- `/축전지-및-전력-설비-ems` -> `/use-cases/[id]`
- `/제조-공장-스팀트랩-예지-정비` -> `/use-cases/[id]`
- `/노후-설비-디지털-전환` -> `/use-cases/[id]`
- `/복합-계측기-판독-자동화` -> `/use-cases/[id]`
- `/중고차-거래-및-단지-관리-플랫폼` -> `/use-cases/[id]`
- `/골프장-스마트-코스-관리-시스템-2` -> `/use-cases/[id]`
- `/골프장-스마트-코스-관리-시스템` -> `/use-cases/[id]`
- `/광케이블-및-시설물-통합-관리` -> `/use-cases/[id]`
- `/산불-및-재난-통합-관제` -> `/use-cases/wildfire-disaster-command`
- `/solution-smart-farming` -> `/solutions/smart-farming`
- `/solution-logistics-distribution` -> `/solutions/logistics-distribution`
- `/solution-manufacturing-construction` -> `/solutions/manufacturing-construction`
- `/solution-retail-store-managementuction` -> `/solutions/retail-store-management`
- `/solution-facility-infrastructure` -> `/solutions/facility-infrastructure`

### Confirmed Source Typo
- `/solution-retail-store-managementuction`
- 실제 sitemap 본문에도 동일하게 기록되어 있으므로, 저장소 문서 오기가 아니라 원본 Figma Sites URL 자체의 오탈자로 본다.
- 프로젝트 canonical route는 의미상 정상화된 `/solutions/retail-store-management` 를 유지하는 편이 적절하다.
- 후속 결정 후보:
  - 원본 typo URL은 redirect source로 보존
  - 프로젝트 내부 canonical 은 정상 slug 사용

### Unresolved Or Needs User Judgment
- 한글 상세 route 각각의 최종 영문 `[id]` naming convention
- 현재 확정 가능한 것은 `한글 상세 URL -> /use-cases/[id]` 규칙과 `산불-및-재난-통합-관제 -> wildfire-disaster-command` 하나뿐이다.
- 추가 판단이 필요한 이유:
  - sitemap은 제목형 한글 slug만 제공하고 있음
  - 현재 코드베이스에는 대부분의 상세 페이지에 대한 영문 slug 근거가 없음
  - 자동 번역 slug, 축약 slug, 브랜드 용어 slug 중 어떤 규칙을 표준으로 삼을지 정해지지 않음

### Step 2 Interim Conclusion
- 단일 단계 원본 URL 중 `product-*`, `solution-*` 는 각각 `/products/*`, `/solutions/*` 로 정규화하는 규칙이 가장 일관적이다.
- 원본 한글 상세 URL은 모두 `/use-cases/[id]` 로 매핑하는 규칙이 적절하다.
- 카테고리 대표 페이지와 문의 페이지는 각각 `/vision-ai`, `/company/contact-us` 로 승격하는 현재 구조가 합리적이다.
- `solution-retail-store-managementuction` 은 원본 오탈자 URL로 확인되었고, 프로젝트 canonical 은 정상화된 `/solutions/retail-store-management` 를 쓰는 쪽이 적절하다.
- 다음 단계에서 가장 먼저 정해야 할 것은 한글 상세 페이지별 영문 `[id]` 명명 규칙이다.

## Step 3 Deliverables
- [x] 고정 페이지 후보 목록
- [x] `[id]` 동적 페이지 후보 목록
- [x] slug 규칙 및 데이터 관리 방식 정리

## Step 3 Direction

### Slug Policy
- 원본 Figma Sites의 한글 URL을 가진 상세 페이지들은 프로젝트에서 적절한 영문 URL로 변환해 적용한다.
- 적용 위치는 기본적으로 `/use-cases/[id]` 이다.
- `[id]` 는 원문 한글 slug를 그대로 쓰지 않고, 페이지 의미를 설명하는 자연스러운 영문 kebab-case slug를 사용한다.
- 숫자 suffix, 기계 번역체, 무의미한 축약형은 피한다.
- 가능한 경우 제품명, 도메인 용어, 산업 용어는 현재 프로젝트에서 이미 쓰는 영문 표현과 맞춘다.

### Slug Naming Guideline
- 재난 통합 관제 계열: `wildfire-disaster-command`
- 공항 재난 대응 계열: `jeju-airport-disaster-support`
- e-SOP 계열: `compound-disaster-esop`
- 로봇 통합 관제 계열: `ai-border-robot-command`
- 설비/인프라 관리 계열: `integrated-facility-management` 또는 더 구체적인 도메인형 slug

### Decision Rule
- 한글 원본 제목에서 핵심 명사와 도메인 용어를 추출한다.
- 이미 프로젝트에 있는 영문 표현이 있으면 그 표현을 우선 재사용한다.
- 동일 카테고리의 다른 상세 slug와 어조와 길이를 맞춘다.
- slug만 보고도 대략 어떤 사례인지 추측 가능해야 한다.

### Step 3 Interim Decision
- 한글 원본 상세 페이지는 모두 `고정 한글 경로 유지`가 아니라 `영문 use-case slug로 변환`하는 정책을 사용한다.
- 따라서 Step 3에서는 각 한글 상세 항목별로 `원본 제목 -> 영문 slug` 대응표를 먼저 정리한 뒤 구현 여부를 결정한다.

## Step 4 Deliverables
- [x] 신규 화면 구현
- [x] 재사용 화면 통합
- [x] sitemap 및 내부 링크 반영
