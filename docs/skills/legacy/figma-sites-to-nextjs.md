# Figma Sites To Next.js

## 목적

- 공개된 원본 사이트, 주로 Figma Sites 페이지를 읽기 전용 기준선으로 삼아 현재 프로젝트의 화면을 재현하거나 변경분만 안전하게 반영한다.
- 최종 산출물은 프로젝트 구조에 맞는 유지보수 가능한 React / Next.js 코드여야 한다.
- 이 workflow는 디자인 재현용이다. 디자인 변경이 로직, 상태, 라우팅, 데이터 구조 변경으로 이어질 수 있으면 먼저 사용자 동의를 받는다.

이 문서는 다음 상황에 적용한다.

1. 원본 사이트를 보고 신규 페이지 또는 신규 section을 구현할 때
2. 기존 구현을 원본과 다시 맞출 때
3. 디자인 변경 후 달라진 영역만 선별 반영할 때
4. 시각 회귀 없이 spacing, typography, layout, asset 배치를 정밀 보정할 때

작업 시작 시 아래처럼 명시한다.

```text
이번 작업은 docs/skills/figma-sites-to-nextjs.md를 기준으로 진행한다.
```

## 핵심 원칙

1. Figma MCP는 사용하지 않는다. Figma Sites는 Codex Chrome extension, Chrome DevTools, 또는 CDP 기반 브라우저 검사로만 조사한다.
2. 원본은 관측 기준선이지 구현 코드를 복사하는 출처가 아니다.
3. 다만 큰 화면을 새로 옮기는 초반 분석 단계에서는 원본을 최대한 직접적으로 가져온 분석용 기준 HTML을 먼저 만들 수 있다.
4. 추정 대신 측정한다. 특히 spacing, typography, container width, image crop, responsive breakpoints는 브라우저에서 확인한다.
5. 큰 구조부터 맞추고 세부로 내려간다. 페이지 프레임이 틀린 상태에서 작은 text size부터 만지지 않는다.
6. 작업 범위를 벗어난 section, shared component, business logic는 임의로 손대지 않는다.
7. static-first 구현을 유지한다. App Router, server component 기본 원칙과 Netlify 정적 배포 가정을 깨지 않는다.
8. 기준 HTML, 스크린샷, 비교 로그 같은 임시 산출물은 항상 `.temp/<task-name>/` 아래에 둔다.

## 이 지침의 운영 방식

이전 버전의 지침은 유용한 항목도 많았지만, 모든 작업에 동일하게 적용하기에는 몇 가지 비효율이 있었다.

- 모든 작업에 3단계 기준 HTML workflow를 강제했다.
- 모든 viewport와 모든 항목의 정밀 수집을 사실상 의무화했다.
- 픽셀 허용 오차와 보고 형식이 과도하게 세세해 작업 속도를 떨어뜨렸다.
- 작은 수정에도 큰 문서화 부담이 생겼다.

그래서 이 버전은 아래처럼 단순화한다.

1. 기준 HTML은 "필요할 때만" 만든다.
2. 측정은 "현재 범위에 필요한 항목만" 수집한다.
3. 검증은 항상 하되, 작업 크기에 맞게 깊이를 조절한다.
4. 보고는 재현 근거와 남은 차이를 중심으로 짧고 명확하게 남긴다.

이 문서를 사용할 때 기본값은 아래와 같다.

1. 먼저 기존 코드 구조를 읽고 재사용 가능한 section과 component를 찾는다.
2. 원본 조사는 "현재 수정 범위를 해결하는 데 필요한 만큼만" 한다.
3. 기준 HTML, 대량 스크린샷, 긴 비교 로그는 필요성이 확인된 뒤에만 만든다.
4. 한 turn 안에서 여러 section을 동시에 깊게 파지 않는다.

## 작업 크기 분류

정확도와 토큰 효율을 함께 유지하려면 먼저 작업 크기를 분류한다.

### Small

- copy 수정
- 색상, spacing, typography의 국소 수정
- 단일 이미지 교체
- 버튼 스타일 조정
- 기존 section 내부의 작은 정렬 수정

기본 전략:

- 기준 HTML을 만들지 않는다.
- 영향 section과 관련 컴포넌트만 읽는다.
- 우선 desktop 1개 viewport에서 맞춘다.
- 변경 특성상 반응형 영향이 있으면 tablet 또는 mobile만 추가 확인한다.

### Medium

- section 하나를 원본에 맞게 다시 구성
- 카드 grid, hero, CTA 등 한 블록의 구조 조정
- desktop과 mobile에서 배치가 달라지는 section 보정

기본 전략:

- 필요 시 section 단위 기준 HTML 또는 비교 캡처를 만든다.
- 원본 section과 로컬 section 대응표를 간단히 만든다.
- desktop부터 맞춘 뒤 영향 viewport를 순차 검증한다.

### Large

- 페이지 전체 신규 구현
- 여러 section 동시 재현
- 반복 sync를 위한 기준선 재구축
- breakpoint 구조 자체가 크게 달라지는 작업

기본 전략:

- 기준 HTML을 우선 고려한다.
- section 순서와 component map을 먼저 만든다.
- viewport별로 작업을 분리해 진행한다.
- 임시 산출물 경로와 검증 근거를 명시적으로 관리한다.

## 어떤 지시가 특히 효율적인가

이 skill은 단순히 "두 사이트를 비교해서 맞춰 달라"는 요청도 처리할 수 있다. 다만 아래 정보가 함께 주어지면 정확도와 속도가 더 좋아지고, 불필요한 탐색과 토큰 사용이 줄어든다.

효율이 높은 입력:

1. 대상 route 또는 URL
2. 대상 viewport
3. 수정할 section 이름 또는 화면 위치
4. 식별 가능한 문구
5. 참고 스크린샷
6. 기대 결과의 우선순위

좋은 예시는 아래와 같다.

- "`/` 페이지 hero section을 원본과 맞춰 주세요. desktop 1440 기준입니다."
- "`Products` 제목이 있는 상품 목록 section만 비교해 주세요."
- "두 사이트를 mobile 기준으로 비교하고, `See all products` 버튼이 있는 구간만 수정해 주세요."
- "첨부한 스크린샷의 카드 3열 구간이 대상입니다. 카드 높이와 제목 줄바꿈을 우선 맞춰 주세요."

모호한 예시는 아래와 같다.

- "전체적으로 좀 다릅니다. 맞춰 주세요."
- "중간쯤 어색한 부분 수정해 주세요."
- "스크린샷 보시고 알아서 비슷하게 해 주세요."

## 사용자 입력을 해석하는 우선순위

사용자가 구체 정보를 줬다면 아래 우선순위로 신뢰한다.

1. 명시된 route / URL
2. 명시된 viewport
3. 첨부 스크린샷
4. section 설명 또는 식별 문구
5. 화면 위치 설명

예를 들어 사용자가 "`Products` 제목이 있는 구간"이라고 지시했다면, 단순히 "중간 영역"이라는 표현보다 해당 문구를 우선 anchor로 사용한다.

스크린샷과 텍스트 설명이 함께 있으면 둘 다 쓰되, section 식별은 텍스트 anchor를 우선하고 시각 보정은 스크린샷을 보조 증거로 사용한다.

## 권장 입력 형식

사용자에게 반드시 이 형식을 요구할 필요는 없지만, 아래 형식으로 주어지면 가장 효율적으로 작업할 수 있다.

```text
대상 페이지: /
비교 기준: 원본 사이트 vs localhost
대상 viewport: desktop 1440
대상 구간: Products section
식별 문구: "Products", "See all products"
우선 수정 항목: 카드 간격, 제목 줄바꿈, 이미지 crop
참고 자료: 스크린샷 2장
```

## section 특정 규칙

사용자가 section을 정확한 개발자 용어로 말하지 않아도 아래 단서를 이용해 범위를 좁힌다.

- 제목 텍스트
- 버튼 문구
- 상품명 / 카드명
- 배경색 또는 배경 이미지
- 화면에서의 위치
- 반복되는 카드 수 또는 열 수

예시:

- "상품 목록"
  - `Products`, `Product`, 가격, CTA 버튼 같은 anchor를 먼저 찾는다.
- "맨 위 큰 배너"
  - hero, 첫 headline, 주 CTA를 먼저 찾는다.
- "푸터 위 문의 영역"
  - 마지막 CTA section과 footer 경계를 먼저 확인한다.

단, 반복되는 문구가 여러 군데에 있으면 추정하지 말고 사용자에게 어느 구간인지 짧게 확인한다.

## 스크린샷을 받았을 때의 규칙

스크린샷은 매우 유용하다. 특히 아래 경우에 효과가 크다.

1. 사용자가 수정 범위를 말로 설명하기 어려울 때
2. 원본의 시각적 차이가 spacing, crop, line break처럼 미묘할 때
3. 동일한 문구가 여러 section에 반복될 때

스크린샷이 있더라도 다음 원칙을 따른다.

1. 스크린샷만으로 구현하지 말고, 가능하면 실제 원본 페이지도 함께 확인한다.
2. 스크린샷은 범위 특정과 시각 보정의 보조 수단으로 쓴다.
3. 텍스트 anchor나 실제 DOM 구조를 확인할 수 있으면 그 정보를 우선한다.
4. 스크린샷이 오래되었거나 viewport가 불명확하면 그 사실을 보고하고 현재 기준을 다시 맞춘다.

## 식별 문구를 받았을 때의 규칙

사용자가 제목, 버튼 라벨, 카드 이름 같은 문구를 함께 주면 적극적으로 anchor로 사용한다.

우선 활용 대상:

1. section heading
2. subheading
3. 버튼 텍스트
4. 카드 제목
5. 링크 텍스트

이런 anchor는 아래 작업에 직접 도움이 된다.

- 원본 section 찾기
- 로컬 component 찾기
- 스크린샷 파일 이름 정리
- 반복 section 중 정확한 대상 구분
- 변경 범위 고정

## 이 skill이 구체 지시에 대응하는 방식

사용자가 구체 지시를 주면 아래처럼 반응한다.

1. route, viewport, section anchor를 먼저 확정한다.
2. 작업 크기를 Small / Medium / Large로 분류한다.
3. 그 범위에 필요한 최소 측정 세트만 수집한다.
4. 지정된 구간만 수정하고 주변 section은 회귀 여부만 확인한다.
5. 보고에서도 사용자가 지정한 anchor 기준으로 결과를 설명한다.

## 언제 기준 HTML을 만드는가

기준 HTML 생성은 강제 단계가 아니라 선택 단계다. 아래 조건 중 하나에 해당할 때 우선 고려한다.

1. 페이지 전체 또는 큰 section을 새로 재현해야 할 때
2. 원본 구조가 복잡해서 section 대응 관계를 먼저 확보해야 할 때
3. 원본의 CSS/DOM 특성을 분석용으로 보존해 두는 편이 빠를 때
4. 같은 원본을 여러 차례 비교하며 반복 반영할 예정일 때

반대로 아래 경우에는 기준 HTML 없이 바로 기존 코드에 반영해도 된다.

1. copy 변경만 있는 경우
2. spacing, color, typography 같은 국소 수정인 경우
3. 기존 section 대응 관계가 이미 명확한 경우
4. asset 교체나 버튼 스타일 조정처럼 구조 변화가 거의 없는 경우

## 표준 흐름

작업은 기본적으로 아래 순서로 진행한다.

```text
1. Scope
2. Inspect
3. Capture Baseline (optional)
4. Map
5. Implement
6. Verify
7. Report
```

각 단계의 의미는 다음과 같다.

### 1. Scope

- 이번 turn에서 다룰 페이지와 section 범위를 정한다.
- 원본에는 있고 현재 구현에는 없는 section은 추가 후보로 분류한다.
- 현재 구현에는 있지만 원본에는 없는 section은 즉시 삭제하지 말고 제거 후보로 보고한다.
- 로직 변경, 인터랙션 변경, 구조 삭제가 필요해 보이면 먼저 사용자에게 확인한다.

### 2. Inspect

- 원본 조사 전에 현재 프로젝트 파일 구조와 관련 component를 먼저 읽는다.
- 원본 사이트와 localhost를 같은 viewport에서 연다.
- section 순서, 레이아웃 구조, container 폭, spacing, typography, asset 배치를 확인한다.
- 로딩 안정화는 "고정 5초"가 아니라 폰트, 이미지, 애니메이션 상태를 보고 판단한다.
- 다만 lazy-loading이나 transition 때문에 비교가 흔들리면 충분히 대기하고 상태를 고정한 뒤 측정한다.

### 3. Capture Baseline (optional)

- 필요 시 원본을 최대한 직접적으로 가져온 분석용 기준 HTML을 만든다.
- 이 HTML은 최종 산출물이 아니라 분석용이다.
- 런타임 스크립트는 시각 검증에 꼭 필요한 경우를 제외하고 제거하거나 비활성화한다.
- 생성형 class명, 동적 스타일 구조는 분석이 쉬운 선에서만 정리한다.
- 기준 HTML은 `file://` 대신 로컬 서버에서 접근 가능하게 둔다.

### 4. Map

- 원본 section과 현재 프로젝트의 section / component 대응 관계를 만든다.
- 큰 section의 외곽 레이아웃을 먼저 맞춘 뒤 내부 subsection으로 내려간다.
- 내부 조정 후에는 다시 큰 section 단위로 올라와 전체 형태가 유지되는지 확인한다.

### 5. Implement

- 프로젝트의 기존 route 구조, shared component, token, CSS 변수, state 흐름을 우선 재사용한다.
- App Router 기준으로 server component를 기본으로 하고, 꼭 필요한 인터랙션만 client component로 분리한다.
- Figma Sites의 DOM wrapper, hash className, runtime script를 그대로 옮기지 않는다.
- 의미 있는 이름과 작은 단위의 component 구조를 사용한다.

### 6. Verify

- 수정 후 다시 같은 viewport에서 원본과 localhost를 비교한다.
- 선언한 CSS 값만 보지 말고 실제 rendered 결과를 확인한다.
- 필요할 때는 computed style, bounding box, image crop, line break를 재측정한다.
- full-page 스크린샷은 보조 수단으로만 쓰고, section 단위 또는 분할 캡처를 우선한다.
- full-page 캡처를 썼다면 반복 캡처나 누락이 없는지 결과를 직접 확인한다.

검증 기본선은 작업 크기에 따라 아래처럼 잡는다.

- Small: 시각 비교 + 핵심 속성 재측정
- Medium: 시각 비교 + 핵심 레이아웃/typography 재측정 + 영향 viewport 확인
- Large: section별 시각 비교 + 구조 대응 검토 + viewport별 재검증

### 7. Report

- 무엇을 조사했고 어떤 차이를 반영했는지 짧게 남긴다.
- 남은 차이, 사용자 확인이 필요한 구조 변경, 제거 후보 section이 있으면 함께 보고한다.

보고는 아래 수준을 넘기지 않는 것을 기본으로 한다.

- Small: 수정 범위, 수정 파일, 검증 결과, 남은 이슈
- Medium: 위 항목 + section 대응 관계와 주요 측정 근거
- Large: 위 항목 + 기준 HTML 사용 여부, viewport별 검증 범위, 남은 리스크

## 측정 우선순위

항상 모든 속성을 다 수집할 필요는 없다. 아래 우선순위대로 필요한 항목만 측정한다.

1. section 순서와 주요 블록 구조
2. container width, padding, section gap
3. flex / grid, alignment, wrapping
4. typography와 줄바꿈
5. image size, aspect ratio, object-position, crop
6. background, overlay, gradient
7. border, radius, shadow, icon alignment

다음 경우에는 반드시 브라우저 측정을 우선한다.

- spacing이 자주 어긋나는 section
- 제목 줄바꿈이 민감한 hero / CTA
- 카드 grid 열 수가 바뀌는 구간
- 배경 이미지 crop이 중요한 section
- desktop / mobile에서 구조가 크게 달라지는 구간

작업 크기별 최소 측정 세트는 아래를 기본으로 한다.

### Small 최소 측정 세트

- section 위치와 순서에 영향이 있는지
- container width 또는 padding 변화가 있는지
- 관련 text의 font-size, line-height, line break
- 관련 image의 size 또는 crop

### Medium 최소 측정 세트

- Small 세트 전체
- 부모 flex / grid와 gap
- CTA 또는 카드의 align / justify / wrap
- breakpoint 전환 시 열 수 또는 정렬 변화

### Large 최소 측정 세트

- Medium 세트 전체
- 페이지 프레임과 section 간 간격
- 주요 배경, overlay, gradient
- 반복 패턴의 공통 container 규칙

## viewport 규칙

- 한 비교 묶음에서는 viewport를 섞지 않는다.
- 먼저 하나의 viewport에서 `원본 분석 -> 로컬 비교 -> 수정 -> 재검증`을 끝낸 뒤 다음 viewport로 이동한다.
- 기본 viewport는 아래를 권장하되, 작업 대상에 맞게 더 적절한 viewport가 있으면 그 값을 명시해서 사용한다.

```text
desktop: 1440 x 900
tablet: 1024 x 900
mobile: 390 x 844
```

- 모든 작업에서 3개 viewport를 전부 다루는 것은 아니다.
- 신규 페이지 구현, 큰 layout 변경, 반응형 변경이 포함되면 desktop / tablet / mobile을 모두 확인한다.
- 국소 수정이면 영향 viewport만 우선 검증하고, 나머지는 회귀 여부만 빠르게 점검한다.
- 특별한 이유가 없으면 desktop부터 시작한다. 단, 변경이 모바일 전용 UI에 집중되어 있으면 mobile을 먼저 기준 viewport로 삼을 수 있다.

## 구현 기준

### 해야 할 것

- semantic HTML 사용
- 기존 shared component 재사용
- CSS 변수와 기존 token 우선 사용
- clear naming 사용
- asset 비율 보존
- section 단위의 유지보수 가능한 구조 유지
- 정적 렌더링 가정을 해치지 않는 구현 선택

### 피해야 할 것

- 원본 DOM 전체 복사 후 최종 코드로 남기기
- 의미 없는 absolute positioning 남용
- 원본에 맞추겠다고 unrelated section까지 재작성하기
- 기존 business logic 삭제 또는 우회
- 디자인과 무관한 대규모 리팩터링
- 재현 근거 없이 눈대중으로 값 맞추기

## 스크린샷 비교 원칙

- 기본 비교 단위는 section 또는 의미 있는 블록이다.
- section이 viewport보다 크면 여러 장으로 나눠 캡처한다.
- 각 캡처 파일에는 viewport와 section 이름 또는 scroll 위치를 포함한다.
- sticky 요소, 비디오, 시간 의존 애니메이션 구간은 정적 비교 대상과 분리해 판단한다.
- 잘못된 탭, 잘못된 scroll 위치, background tab 캡처 오류 가능성이 있으면 URL과 위치를 함께 기록한다.

토큰 절약을 위해 아래를 기본값으로 한다.

- 전체 페이지 설명을 길게 풀어 쓰지 말고 section 이름 중심으로 기록한다.
- 수치가 중요하지 않은 구간은 장문 설명 대신 스크린샷과 짧은 메모로 남긴다.
- 같은 사실을 텍스트와 표와 긴 목록으로 중복 기록하지 않는다.
- 이미 해결된 section의 측정 로그를 반복해서 다시 서술하지 않는다.

## 사용자 확인이 필요한 경우

다음 항목은 바로 반영하지 말고 사용자에게 확인한다.

1. section 삭제 또는 큰 구조 제거
2. 새로운 인터랙션 추가
3. 기존 로직, 상태, 데이터 흐름 수정
4. shared component API 변경
5. asset 교체 범위를 넘어서는 브랜딩 수정
6. 재현보다 재설계를 택해야 할 정도의 큰 구조 차이

## 완료 검증

작업 완료 전 아래를 확인한다.

1. 원본 의도와 현재 구현의 section 대응 관계가 설명 가능하다.
2. 수정 범위의 주요 레이아웃과 시각 차이가 재검증되었다.
3. 기준 HTML을 사용했다면 최종 코드에 원본 의존 구조가 남지 않았다.
4. static hosting 가정을 깨는 새 런타임 동작을 넣지 않았다.
5. 디자인 변경이 기존 hand-written logic을 덮어쓰지 않았다.
6. 가능하면 `lint`와 `tsc`로 기본 오류를 확인한다.

## 간단한 작업 템플릿

```text
이번 작업은 docs/skills/figma-sites-to-nextjs.md를 기준으로 진행한다.

원본 사이트와 localhost를 같은 viewport에서 비교하고,
먼저 section 구조와 대응 관계를 확인한다.

필요하면 원본을 최대한 직접적으로 가져온 분석용 기준 HTML을 만든 뒤,
그 기준선을 바탕으로 프로젝트 구조에 맞는 Next.js 구현으로 정리한다.

수정은 큰 레이아웃부터 맞추고, 이후 typography, spacing, image crop 순서로 보정한다.
디자인 외 로직 변경이 필요하면 바로 수정하지 말고 먼저 사용자에게 확인한다.

작업 후에는 같은 viewport에서 다시 검증하고,
반영 내용과 남은 차이를 짧게 보고한다.
```
