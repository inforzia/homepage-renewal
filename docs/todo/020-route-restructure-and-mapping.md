# Route Restructure And Mapping

## Goal
- [ ] Flattened 1-depth routes를 정보구조 중심의 route group 체계로 재구성한다.
- [ ] 개선된 내부 구조와 Figma Sites route를 비교해 URL 매핑 기준을 정리한다.
- [ ] 매핑 규칙을 바탕으로 신규 고정 페이지와 동적 `[id]` 페이지 후보를 구분한다.
- [ ] 최종 라우트 체계에 맞춰 누락 화면을 추가하고 재사용 가능한 화면은 통합한다.

## Workstream
### 1. Current Route Audit And Internal Restructure
- [ ] 현재 `src/app` 라우트 구조와 역할을 분류한다.
- [ ] route group 후보를 정리한다.
- [ ] URL 변경 없이 App Router 내부 폴더 구조를 정리한다.

### 2. Improved Structure And Figma Route Mapping
- [ ] Figma Sites의 route 목록을 수집한다.
- [ ] 현재 개선 구조와 Figma route를 1:1 또는 N:1로 매핑한다.
- [ ] 유지할 URL, 변경할 URL, redirect 필요 URL을 구분한다.

### 3. Static Page And Dynamic Route Classification
- [ ] 상세 페이지 후보를 목록화한다.
- [ ] 개별 고정 페이지가 필요한 경우와 `[id]`로 일반화 가능한 경우를 나눈다.
- [ ] slug 규칙, 메타데이터 규칙, 데이터 소스 위치를 정한다.

### 4. Page Implementation
- [ ] 신규 페이지를 추가한다.
- [ ] 재사용 가능한 뷰를 공통화한다.
- [ ] sitemap, 내부 링크, 정적 호스팅 전제를 다시 확인한다.

## Step 1 Deliverables
- [ ] 현재 라우트 목록 정리
- [ ] 카테고리별 그룹 후보 정리
- [ ] 중복 또는 상세 페이지 후보 정리
- [ ] 구조 개선안 초안 작성

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
- [ ] Figma Sites route 목록 정리
- [ ] 현행 route와 Figma route 매핑표 작성
- [ ] redirect 또는 alias 필요 여부 표시

## Step 3 Deliverables
- [ ] 고정 페이지 후보 목록
- [ ] `[id]` 동적 페이지 후보 목록
- [ ] slug 규칙 및 데이터 관리 방식 정리

## Step 4 Deliverables
- [ ] 신규 화면 구현
- [ ] 재사용 화면 통합
- [ ] sitemap 및 내부 링크 반영
