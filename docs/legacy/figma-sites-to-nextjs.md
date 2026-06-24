# Figma Sites To Next.js

## 목적

Figma에서 디자인한 뒤 Figma Sites로 publish된 공개 페이지를 읽기 전용 기준선으로 사용해,
로컬 React / Next.js 화면을 높은 시각적 정확도로 재구성하거나 변경분만 동기화한다.

이 문서는 다음 상황에 적용한다.

1. Figma Sites 공개 페이지를 기준으로 신규 화면을 구현할 때
2. 기존 구현을 원본과 다시 맞출 때
3. 디자인 변경 후 변경된 영역만 선별 반영할 때
4. 시각 회귀 없이 정밀 보정을 수행할 때

이 workflow에서는 Figma MCP를 사용하지 않는다. AGENTS.md에 맞춰 Figma Sites는
`@Chrome`, Chrome DevTools, 또는 CDP 기반 브라우저 검사로만 조사하며,
원본 DOM / CSS / JavaScript를 그대로 복사하지 않는다.

---

## 언제 이 Skill을 쓰는가

아래와 같은 요청은 모두 이 skill을 따른다.

```text
- Figma Site, 원본 사이트, 참고 사이트를 기준으로 화면 구현
- clone, reproduce, match, sync, mirror, copy layout
- 디자인 변경 반영
- 원본과 localhost 비교
- 스타일 보정
- typography, spacing, layout, visual regression 수정
- 특정 section 또는 component를 원본과 최대한 동일하게 맞추는 작업
```

이 skill을 따른다면 작업 시작 시 명시적으로 아래처럼 밝힌다.

```text
이번 작업은 docs/skills/figma-sites-to-nextjs.md를 기준으로 진행한다.
```

---

## 핵심 원칙

1. Figma Sites는 구현 코드의 출처가 아니라 관측 기준선이다.
2. 원본에서 확인 가능한 값은 추정하지 말고 측정한다.
3. 한 번에 전체 페이지를 감으로 수정하지 말고, 한 section 또는 하나의 의미 있는 UI 블록 단위로 진행한다.
4. 상위 레이아웃이 틀린 상태에서 작은 typography나 padding부터 보정하지 않는다.
5. 코드에 원하는 값을 적는 것만으로 완료 처리하지 않는다. 브라우저의 최종 computed style과 렌더링 결과를 다시 확인해야 한다.
6. 변경 반영 작업에서는 변경되지 않은 영역을 건드리지 않는다.
7. 로컬 구현은 프로젝트 구조에 맞는 유지보수 가능한 React / Next.js 코드여야 한다.

완료 근거로 인정하지 않는 예시는 아래와 같다.

```text
- 화면이 대략 비슷해 보인다
- CSS에 원하는 값이 작성되어 있다
- 스크린샷 한 장에서 큰 차이가 없어 보인다
- 원본과 유사한 수치를 사용했다
- 이전보다 개선됐다
- 일부 카드나 텍스트만 비슷하다
```

---

## 표준 작업 순서

이 skill은 항상 아래 순서로 진행한다.

```text
SETUP
→ SCOPE
→ INSPECT
→ MEASURE
→ MAP
→ IMPLEMENT
→ RE-MEASURE
→ VERIFY
→ REPORT
```

각 단계의 의미는 다음과 같다.

```text
SETUP
- DESIGN_REFERENCE_URL, LOCAL_URL, viewport를 확정한다.
- 원본과 localhost의 브라우저 상태를 맞춘다.

SCOPE
- 이번 작업 범위를 한 section 또는 하나의 의미 있는 UI 블록으로 제한한다.
- 변경 반영 작업이면 변경된 영역만 식별한다.

INSPECT
- 원본과 localhost를 같은 viewport, zoom, scroll 위치, UI 상태로 맞춘다.
- 대상 section과 대응 로컬 component를 찾는다.

MEASURE
- 원본 요소와 부모/조부모의 computed style, bounding box, 레이아웃 규칙을 수집한다.
- 육안 추정으로 값을 정하지 않는다.

MAP
- 원본 요소와 로컬 요소를 1:1로 대응시킨다.
- 대응 관계가 불명확하면 먼저 구조를 다시 조사한다.

IMPLEMENT
- 측정값을 기준으로 로컬 코드를 수정한다.
- 원본 DOM wrapper, hash className, runtime script를 그대로 옮기지 않는다.

RE-MEASURE
- 수정 후 localhost의 실제 computed style과 bounding box를 다시 수집한다.
- 코드 선언값이 아니라 브라우저 최종 적용값을 본다.

VERIFY
- 원본과 로컬 값을 비교하고 허용 오차를 넘는 차이를 다시 수정한다.
- 마지막에 같은 조건으로 시각 비교를 수행한다.

REPORT
- 측정 근거, 비교 결과, 수정 파일, 남은 차이를 정리해 보고한다.
```

`MEASURE`, `RE-MEASURE`, `VERIFY` 중 하나라도 빠지면 정밀 작업은 완료가 아니다.

---

## 기본 설정

작업 시작 전에 아래 값을 확인한다.

```text
DESIGN_REFERENCE_URL=<Figma Sites 공개 URL>
LOCAL_URL=<localhost 개발 서버 URL>

VIEWPORTS
- desktop: 1440 x 900
- tablet: 1024 x 900
- mobile: 390 x 844
```

원본과 로컬 비교 시 아래 조건을 통일한다.

```text
- 동일 viewport
- 브라우저 zoom 100%
- 동일한 스크롤 위치
- 동일한 테마(light/dark)
- 동일한 로그인 또는 데이터 상태
- 폰트 로딩 완료 후 비교
- 애니메이션, transition, skeleton 영향 최소화
- hover, focus, dropdown, modal 등 비교 대상 상태 고정
```

localhost는 먼저 이미 열려 있는 대상 포트 탭이 있는지 확인하고, 있으면 그 탭을 재사용한다.

---

## 범위 규칙

### 공통 범위 규칙

1. 기본 단위는 한 section 또는 하나의 의미 있는 UI 블록이다.
2. 여러 section을 동시에 감으로 보정하지 않는다.
3. 가장 큰 구조 차이부터 해결한다.

우선순위는 아래와 같다.

```text
1. 페이지 전체 폭, section 위치, section 높이
2. container max-width, padding, margin, gap
3. grid / flex / alignment 구조
4. 이미지 크기, crop, object-position
5. 제목 크기, 줄바꿈, line-height
6. 본문 및 버튼 typography
7. 색상, border, radius, shadow
8. 아이콘, 장식, 미세한 시각 효과
```

### 신규 구현 시

전체 페이지를 한 번에 완성하려 하지 않는다. 아래 순서로 점진 구현한다.

```text
1. 페이지 프레임
- Header 높이
- 전체 배경
- 페이지 최대 폭
- 주요 section 순서
- section 간 vertical spacing
- container 좌우 padding
- 큰 이미지 또는 배경 이미지 위치
- desktop / tablet / mobile breakpoint 구조

2. Hero
- 전체 높이
- 제목 max-width와 줄바꿈
- 설명 및 CTA 위치
- 배경 이미지 crop과 focal point
- overlay / gradient

3. 콘텐츠 카드 / 제품 영역
- grid 또는 carousel 구조
- 카드 비율과 내부 padding
- 이미지 영역 높이와 crop
- 카드 간 gap
- hover / focus 상태

4. 산업 / 갤러리 / 목록 영역
- grid 또는 horizontal scroll 여부
- 카드 순서와 overlay
- pagination / indicator
- 모바일 스크롤 동작

5. CTA / Footer
- container 폭
- background / image / overlay
- 제목과 버튼 정렬
- 링크 그룹 구조
- 모바일 줄바꿈

6. 세부 스타일 보정
- border
- border-radius
- shadow
- gradient
- opacity
- icon 크기와 정렬
- 작은 gap
- letter-spacing
- underline
- hover transition
```

### 변경 반영 시

디자인 변경이 들어오면 전체 페이지를 다시 구현하지 않는다.

```text
1. 최신 Figma Sites 공개 페이지를 연다.
2. 기존 기준선과 비교해 변경된 section만 식별한다.
3. 변경 유형을 layout / typography / image / color / spacing / interaction / content / responsive behavior로 분류한다.
4. 변경되지 않은 section과 component는 수정하지 않는다.
5. 변경된 영역에 대해서만 원본 조사와 로컬 수정을 수행한다.
```

금지 사항:

```text
- 파일 구조 전체 변경
- 공통 컴포넌트 대규모 리팩터링
- 불필요한 dependency 추가
- unrelated CSS 정리
- 기존 정상 영역의 스타일 재작성
- 원본과 무관한 UI 개선
```

---

## 원본 조사 항목

차이가 발생한 영역에 대해서만 아래 항목을 조사한다.

```text
1. 대상 요소
- tag
- id
- class
- 텍스트 또는 식별 가능한 콘텐츠
- bounding box

2. 레이아웃 구조
- 부모
- 조부모
- 형제 요소
- flex / grid 컨테이너
- max-width / min-width
- width / height
- margin / padding / gap
- align-items / justify-content
- grid-template-columns / grid-template-rows

3. 타이포그래피
- font-family
- font-size
- font-weight
- line-height
- letter-spacing
- text-align
- white-space
- word-break
- 줄바꿈 위치

4. 시각 스타일
- color
- background / gradient
- border
- border-radius
- box-shadow
- opacity
- filter / backdrop-filter

5. 이미지와 미디어
- width / height
- aspect-ratio
- object-fit
- object-position
- overflow
- clip-path
- background-size
- background-position

6. 레이어 및 특수 요소
- position
- z-index
- transform
- ::before / ::after
- overlay
- mask
- sticky / fixed
```

특정 좌표의 요소를 조사할 때는 가능하면 아래 방식으로 후보를 수집한다.

```js
const elements = document.elementsFromPoint(x, y);

const inspected = elements.map((element) => {
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();

    return {
        tag: element.tagName,
        id: element.id,
        className: element.className,
        text: element.textContent?.trim().slice(0, 160),
        rect: {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
        },
        style: {
            display: style.display,
            position: style.position,
            width: style.width,
            height: style.height,
            margin: style.margin,
            padding: style.padding,
            gap: style.gap,
            fontFamily: style.fontFamily,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            lineHeight: style.lineHeight,
            letterSpacing: style.letterSpacing,
            color: style.color,
            backgroundColor: style.backgroundColor,
            border: style.border,
            borderRadius: style.borderRadius,
            boxShadow: style.boxShadow,
            overflow: style.overflow,
            objectFit: style.objectFit,
            objectPosition: style.objectPosition,
        },
    };
});

console.log(inspected);
```

대상 요소만 보지 말고 부모와 조부모의 레이아웃 규칙까지 함께 확인한다.

---

## 정밀 측정 규칙

### 필수 측정 속성

대상 요소 유형별 최소 측정 항목은 아래와 같다.

```text
텍스트 요소
- font-family
- font-size
- font-weight
- font-style
- line-height
- letter-spacing
- text-transform
- text-align
- white-space
- word-break
- color
- margin
- padding
- width
- height
- max-width

버튼 및 CTA
- font-family
- font-size
- font-weight
- line-height
- letter-spacing
- padding-top / right / bottom / left
- min-width
- height
- border-width
- border-radius
- gap
- display
- align-items
- justify-content

컨테이너 및 section
- display
- position
- width
- height
- min-width
- max-width
- margin
- padding
- gap
- row-gap
- column-gap
- flex-direction
- flex-grow
- flex-shrink
- flex-basis
- justify-content
- align-items
- grid-template-columns
- grid-template-rows
- overflow
- background
- border
- border-radius

이미지 및 미디어
- width
- height
- aspect-ratio
- object-fit
- object-position
- overflow
- background-size
- background-position
- transform
- border-radius
```

### 값 우선순위

```text
1. 원본 브라우저의 computed style
2. 원본 요소의 bounding box 및 box model
3. 원본 부모/조부모의 computed style
4. 동일 viewport의 시각 비교
5. 추정
```

원본 computed style에서 값을 확인할 수 있다면, 시각 비교만으로 다른 값을 선택해서는 안 된다.

### 값 일치 기준

원본에서 확인 가능한 값은 그대로 사용한다.

```text
- 시각적으로 더 자연스러운 값으로 변경 금지
- 프로젝트 취향으로 대체 금지
- 임의의 clamp 값으로 치환 금지
- 눈대중 padding / margin 보정 금지
```

원칙적으로 정확히 일치해야 하는 속성:

```text
- font-size
- font-weight
- padding
- margin
- gap
- border-width
- border-radius
- width
- height
- max-width
- min-width
- line-height
- letter-spacing
- flex 설정
- grid 설정
```

허용 오차:

```text
- box model 및 위치: ±0.5px 이하
- line-height: ±0.5px 이하
- letter-spacing: ±0.01px 이하
- font-size: 0px 차이
- font-weight: 정확히 일치
- padding / margin / gap: 0px 차이
- 색상: 동일한 computed color 값
```

### 폰트 검증 규칙

텍스트의 크기, 두께, 줄바꿈, 시각 밀도가 다르면 `font-size`만 바꾸지 않는다.

항상 아래 순서로 확인한다.

```text
1. 실제 적용 font-family
2. 실제 로드된 font file
3. font-weight
4. font-variation-settings
5. font-synthesis
6. font-size
7. line-height
8. letter-spacing
9. 부모 요소의 transform / zoom
10. fallback font 발생 여부
```

다음 상태는 font 일치로 인정하지 않는다.

```text
- font-family 이름은 같지만 fallback font가 실제 적용됨
- font-weight 600을 요청했지만 해당 weight 파일이 없어 합성 bold 처리됨
- variable font의 wght axis 값이 다름
- 부모 transform 또는 zoom으로 크기가 달라짐
- line-height: normal 상태로 브라우저 기본값을 사용함
```

### spacing / 위치 차이 규칙

padding 또는 gap이 달라 보이면 대상 요소 값만 보지 않는다. 아래 순서로 원인을 확인한다.

```text
1. 대상 요소의 padding
2. 대상 요소의 border-width
3. box-sizing
4. 대상 요소의 width / height
5. 부모 요소의 gap
6. 부모 요소의 padding
7. 부모 요소의 justify-content / align-items
8. 부모 요소의 grid / flex 설정
9. 형제 요소의 margin
10. absolute / transform / translate 영향
11. pseudo-element가 차지하는 시각 영역
```

### CSS cascade 검증 규칙

코드 수정 후에는 선언값이 아니라 최종 computed style을 확인한다.

```text
- 작성한 className이 실제 요소에 연결되었는지
- CSS module / Tailwind / styled component 규칙이 실제 적용되었는지
- 더 높은 specificity 규칙이 덮어쓰지 않는지
- inline style이 우선 적용되지 않는지
- media query가 현재 viewport에서 다른 값을 적용하지 않는지
- CSS variable이 예상과 다르게 resolve되지 않는지
- global CSS 또는 reset CSS가 상속을 바꾸지 않는지
- UI library 기본 스타일이 덮어쓰지 않는지
```

### 반응형 규칙

desktop만 맞추고 완료 처리하지 않는다. 각 viewport에서 실제 값을 별도로 수집한다.

```text
desktop: 1440px
tablet: 1024px
mobile: 390px
```

각 viewport에서 최소 아래 항목을 비교한다.

```text
- font-size
- font-weight
- line-height
- padding
- margin
- gap
- width
- max-width
- grid / flex 구조
- 이미지 높이
- object-position
- 줄바꿈
```

`clamp()`를 사용할 경우 desktop, tablet, mobile 기준값이 모두 원본과 정확히 일치해야 한다.
원본이 breakpoint 기반 고정 값이면 임의의 `clamp()`보다 명시적 media query를 우선한다.

---

## 구현 원칙

### 해야 할 것

```text
- 의미 있는 React component 구조 사용
- section 단위 컴포넌트 분리
- 기존 shared component 우선 재사용
- 디자인 토큰 또는 CSS variable 활용
- 명확한 className 사용
- breakpoint를 명시적으로 관리
- 이미지 object-fit / object-position / aspect-ratio를 의도적으로 설정
- 원본의 시각 결과를 재현하되 프로젝트 구조에 맞게 구현
```

### 하지 말 것

```text
- Figma Sites의 DOM wrapper 구조 복제
- 무의미한 absolute positioning 남용
- 모든 요소를 pixel 좌표로 배치
- 원본 HTML / CSS / JavaScript 전체 복사
- hash className 의존
- 한 번의 수정으로 unrelated section 변경
- 현재 디자인 변경과 무관한 대규모 코드 정리
- 권한 없는 원본 텍스트, 이미지, 로고, 상표 요소의 무단 복제
```

---

## 반복 Sync 작업용 기준선 파일

이 작업이 일회성 보정이 아니라 반복 동기화 workflow라면 아래 구조를 유지한다.

```text
.design-sync/
  reference.json
  checkpoints.json
  source-snapshots/
    desktop-1440/
    tablet-1024/
    mobile-390/
  visual-baseline/
    desktop-1440/
    tablet-1024/
    mobile-390/
  change-reports/
docs/
  design-reference.md
  component-map.md
```

### `.design-sync/reference.json`

```json
{
    "sourceUrl": "DESIGN_REFERENCE_URL",
    "localUrl": "LOCAL_URL",
    "viewports": [
        {
            "name": "desktop",
            "width": 1440,
            "height": 900
        },
        {
            "name": "tablet",
            "width": 1024,
            "height": 900
        },
        {
            "name": "mobile",
            "width": 390,
            "height": 844
        }
    ]
}
```

### `.design-sync/checkpoints.json`

checkpoint는 생성형 className이 아니라 실제 콘텐츠, heading, CTA 문구, 섹션 제목처럼
안정적인 anchor를 기준으로 작성한다.

```json
{
    "checkpoints": [
        {
            "id": "header",
            "label": "Header",
            "anchorText": "Navigation or logo text",
            "localRoute": "/"
        },
        {
            "id": "hero",
            "label": "Hero",
            "anchorText": "Main hero title",
            "localRoute": "/"
        },
        {
            "id": "products",
            "label": "Products",
            "anchorText": "Products",
            "localRoute": "/"
        },
        {
            "id": "industries",
            "label": "Industries",
            "anchorText": "Industries",
            "localRoute": "/"
        },
        {
            "id": "cta-footer",
            "label": "CTA and Footer",
            "anchorText": "Footer or CTA text",
            "localRoute": "/"
        }
    ]
}
```

---

## 검증 절차

코드를 수정한 뒤에는 아래 순서로 검증한다.

```text
1. localhost를 새로고침한다.
2. font, image, CSS 로딩이 끝날 때까지 기다린다.
3. 원본과 로컬을 같은 viewport와 scroll 위치로 맞춘다.
4. 원본 대상 요소의 computed style을 다시 수집한다.
5. 로컬 대응 요소의 computed style을 다시 수집한다.
6. 값별 비교표를 작성한다.
7. 불일치가 있으면 원인을 분석하고 다시 수정한다.
8. 핵심 값이 일치한 뒤에 같은 조건으로 스크린샷 비교를 수행한다.
9. 시각 차이가 남으면 DOM 구조, font loading, image crop, pseudo-element, transform을 추가 조사한다.
```

각 viewport에서 최소 아래 항목을 확인한다.

```text
desktop
- 콘텐츠 max-width
- multi-column layout
- hero crop
- section vertical rhythm

tablet
- breakpoint 변화
- 카드 열 수
- navigation 변화
- 이미지 비율

mobile
- overflow
- 줄바꿈
- touch target 크기
- horizontal scrolling
- sticky / fixed 요소 충돌
```

---

## 완료 기준

다음 조건을 모두 만족해야 완료로 간주한다.

```text
1. 원본과 로컬의 대응 요소가 명시되어 있다.
2. 원본 computed style 값이 수집되어 있다.
3. 로컬 computed style 값이 수정 후 다시 수집되어 있다.
4. 원본값과 로컬값의 비교 결과가 기록되어 있다.
5. 필수 속성의 불일치가 허용 오차 이내이다.
6. 동일 viewport 조건에서 시각 검증을 수행했다.
7. 변경되지 않은 영역은 수정하지 않았다.
8. 남은 차이가 있으면 원인, 범위, 우선순위가 보고되어 있다.
```

---

## 보고 형식

최종 보고에는 아래 내용을 포함한다.

```text
[작업 범위]
- 대상 viewport:
- 대상 section:
- 수정 목적:

[측정 대상]
- 원본 요소:
- 로컬 요소:
- UI 상태:

[원본 측정값]
- font-family:
- font-size:
- font-weight:
- line-height:
- letter-spacing:
- margin:
- padding:
- gap:
- width:
- max-width:
- height:

[로컬 재측정값]
- font-family:
- font-size:
- font-weight:
- line-height:
- letter-spacing:
- margin:
- padding:
- gap:
- width:
- max-width:
- height:

[판정]
- 일치:
- 허용 오차 내:
- 불일치:
- 불일치 원인:
- 수정 파일:
- 변경하지 않은 영역:
- 남은 작업:
```

비교표나 재측정 근거가 없으면 `정밀 스타일 검증 미수행`으로 명시한다.

---

## Codex 작업 지시 템플릿

### 최초 구현용

```text
docs/skills/figma-sites-to-nextjs.md를 따른다.

@Chrome에서 DESIGN_REFERENCE_URL과 LOCAL_URL을 동일 viewport로 비교한다.
이번 작업 범위는 지정한 section으로 제한한다.

먼저 원본의 section bounding box, 부모 레이아웃, max-width, padding, gap,
typography, 이미지 crop, background 효과를 조사한다.

원본 DOM / CSS를 복사하지 말고 현재 프로젝트 구조에 맞는 React 컴포넌트와
유지보수 가능한 스타일로 재구성한다.

수정 후 같은 viewport에서 localhost를 재확인하고,
원본과의 차이 및 수정 파일을 보고한다.
```

### 디자인 변경 반영용

```text
docs/skills/figma-sites-to-nextjs.md를 따른다.

@Chrome에서 최신 DESIGN_REFERENCE_URL과 기존 기준선을 비교한다.
먼저 변경된 section만 식별하고 변경 리포트를 작성한다.

변경되지 않은 section과 component는 수정하지 않는다.
변경된 영역에 대해서만 원본 DOM, computed style, 부모 레이아웃,
이미지 crop, responsive behavior를 조사한다.

그 뒤 대응하는 로컬 component와 style만 수정한다.
수정 후 desktop, tablet, mobile에서 다시 비교하고,
변경 전후 차이와 수정 파일 목록을 보고한다.
```

### 특정 section 정밀 보정용

```text
docs/skills/figma-sites-to-nextjs.md를 따른다.

@Chrome에서 원본과 localhost를 비교한다.
이번 작업 범위는 <SECTION_NAME>만이다.

다음 항목을 우선 조사한다.
- section 위치와 높이
- container max-width
- 좌우 padding
- 제목 줄바꿈
- typography
- 이미지 crop
- 카드 또는 CTA 위치
- background / gradient / overlay

가장 큰 레이아웃 차이부터 수정한다.
<SECTION_NAME> 외의 파일과 스타일은 수정하지 않는다.

수정 후 동일 viewport에서 다시 비교하고,
남은 시각 차이를 구체적으로 보고한다.
```
