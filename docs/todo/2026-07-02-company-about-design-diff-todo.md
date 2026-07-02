# company/about 디자인 오차 보정

## 메타 정보

- 요청자: 사용자
- 생성 일시: 2026-07-02 16:29:16 +09:00
- 최종 수정 일시: 2026-07-02 19:19:10 +09:00
- 완료 일시:
- 상태: 사용자 확인 대기
- 관련 작업: `company/about` 페이지 디자인 정합성 보정
- 관련 문서 / 이슈 / 링크:
  - `docs/skills/page-implement.md`
  - `docs/todo/READMD.md`
  - `https://seed-bronze-70048020.figma.site/about`

## 목적

- 참고 사이트의 실제 렌더링 값을 기준으로 `company/about` 화면 오차를 줄인다.
- 공용 컴포넌트 재사용 범위를 유지하되, about 페이지 전용 스타일은 수치 기반으로 다시 정리한다.

## 상세지시

- 이번 작업은 계획 수립 후 사용자 확인을 받은 다음 구현을 시작한다.
- 참고 사이트는 브라우저 측정 기준으로 사용하고, Figma MCP는 사용하지 않는다.
- 작업 범위는 우선 `src/app/company/about/page.tsx`, `src/app/company/about/page.module.css`로 제한한다.
- `SiteHero`, `SiteHeader`, `SiteFooterCta`는 이번 작업에서 수정하지 않고 그대로 유지한다.
- 공용 컴포넌트 수정은 영향 범위가 명확할 때만 별도 TODO로 분리해 진행한다.

## 사전조사 자료

### 현재 구현 및 가이드

- 관련 페이지: `src/app/company/about/page.tsx`
- 관련 스타일: `src/app/company/about/page.module.css`
- 공용 히어로: `src/components/site/SiteHero.tsx`
- 공용 히어로 스타일: `src/components/site/SiteHero.module.css`
- 전역 토큰: `src/app/globals.css`
- 작업 지침: `docs/todo/READMD.md`
- 구현 스킬: `docs/skills/page-implement.md`

### 참고 자료

- 원본 페이지: `https://seed-bronze-70048020.figma.site/about`
- 이전 측정 메모:
  - Hero 제목: `font-size: 64px`, `line-height: 84px`, `letter-spacing: -1.6px`
  - Hero 설명: `font-size: 20px`, `line-height: 30px`, `letter-spacing: -0.5px`
  - Hero CTA: `height: 44px`, `padding: 12px 20px 12px 24px`, `border-radius: 9999px`
  - Certification 이미지: `254x100`
  - Certification 텍스트: `font-size: 16px`, `line-height: 20px`, `letter-spacing: -0.4px`
  - Business 카드 썸네일: `688x388`, `border-radius: 20px`
  - Business 설명: `font-size: 20px`, `line-height: 32px`, `letter-spacing: -0.5px`
  - Office 지도: `1400x480`, `border-radius: 24px`
  - Office 연구소명: `font-size: 24px`, `line-height: 32px`, `letter-spacing: -0.6px`
  - Office 주소: `font-size: 16px`, `line-height: 24px`, `letter-spacing: -0.4px`

## 완료 기준

- Hero, Mission, Certification, Partner, Business, Office 섹션의 주요 타이포와 간격이 원본 측정값 기준으로 정리된다.
- 각 스타일 수정은 수정 대상 클래스/컴포넌트와 목표 수치가 TODO에 기록된다.
- 구현 후 데스크톱 기준 주요 비교 항목에 대해 수정 전/후 값이 `검증 결과`에 남는다.
- 모바일 또는 축소 폭에서도 가로 스크롤 없이 레이아웃이 유지된다.

## 참고자료 분석 요약

### 화면 구성

- Header: 상단 고정형 공용 헤더, 흰 배경
- Hero: 대형 배경 이미지, 2줄 제목, 1줄 설명, 소형 pill CTA
- Mission: 섹션 제목 1개, 본문 1개, 인증 카드 4개
- Partner: 섹션 제목 1개, 로고 그리드 8개
- Business: 섹션 제목 1개, 본문 1개, 2열 카드 2개
- Office: 섹션 제목 1개, 지도 이미지 1개, 연구소명/주소 1세트
- Footer CTA: 공용 CTA 섹션
- Footer: 공용 푸터

### 공통 컴포넌트 후보

- `SiteHero`: Hero 구조 재사용, about 전용 CTA 크기만 확인 필요
- `SiteFooterCta`: 공용 CTA 유지 여부 확인 필요
- `SiteFooter`: about 전용 수정 없이 재사용 가능

### 확인된 스타일 기준

- 기본 폰트: Pretendard 계열
- 페이지 최대 너비: `1400px`
- 기본 좌우 여백: `20px`
- Hero 제목: `64px / 84px / -1.6px`
- Hero 설명: `20px / 30px / -0.5px`
- Certification 카드 배경: `#f8f9fa`
- Certification 카드 반경: `20px`
- Business 썸네일 반경: `20px`
- Office 지도 반경: `24px`

### 불확실한 항목 및 가정

- 공용 헤더의 언어/검색 UI는 이번 범위에서 제외한다.
- Footer CTA는 이번 범위에서 제외한다.

### 구현/수정 기준

- 대상 요소: Certification 카드, Business 카드, Office 정보 블록
- 적용 클래스 또는 컴포넌트:
  - `styles.learnMore`
  - `styles.certificationCard`
  - `styles.certificationImageWrap`
  - `styles.certificationTitle`
  - `styles.certificationDescription`
  - `styles.businessImageWrap`
  - `styles.businessTitle`
  - `styles.businessDescription`
  - `styles.officeMapWrap`
  - `styles.officeTitle`
  - `styles.officeAddress`
- 적용 스타일 규칙:
  - `styles.learnMore` -> `min-height: 52px`, `padding: 12px 20px 12px 24px`, `font-size: 15px`, `letter-spacing: -0.4px`
  - `styles.certificationCard` -> `padding: 24px 20px 20px`, `gap: 20px`, `border-radius: 20px`, `background: #f8f9fa`
  - `styles.certificationImageWrap` -> `max-width: 254px`, `height: 100px`
  - `styles.certificationTitle` -> `font-size: 16px`, `line-height: 20px`, `letter-spacing: -0.4px`
  - `styles.certificationDescription` -> `font-size: 16px`, `line-height: 20px`, `letter-spacing: -0.4px`
  - `styles.businessImageWrap` -> `aspect-ratio: 688 / 388`, `border-radius: 20px`
  - `styles.businessTitle` -> `font-size: 24px`, `line-height: 32px`, `letter-spacing: -0.6px`
  - `styles.businessDescription` -> `font-size: 20px`, `line-height: 32px`, `letter-spacing: -0.5px`
  - `styles.officeMapWrap` -> `aspect-ratio: 35 / 12`, `border-radius: 24px`
  - `styles.officeTitle` -> `font-size: 24px`, `line-height: 32px`, `letter-spacing: -0.6px`
  - `styles.officeAddress` -> `font-size: 16px`, `line-height: 24px`, `letter-spacing: -0.4px`
- 재사용 여부:
  - Hero, Header, Footer CTA, Footer는 공용 컴포넌트 그대로 유지
  - 본문 섹션은 page 전용 클래스 유지
- 신규 생성 여부:
  - 인증 카드 제목용 `styles.certificationTitle`는 필요 시 유지 또는 재정의

## TODO 목록

- [x] [1. 참고 페이지 구조와 스타일 기준 확정](#1-참고-페이지-구조와-스타일-기준-확정)
- [x] [2. `company/about` 본문 섹션 오차 보정 구현](#2-companyabout-본문-섹션-오차-보정-구현)
- [x] [3. 로컬 검증 및 수정 전후 기록](#3-로컬-검증-및-수정-전후-기록)

## 상세 TODO

### 1. 참고 페이지 구조와 스타일 기준 확정

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적: 구현 전에 참고 사이트 기준 수치와 적용 대상을 확정한다.
- 작업 내용:
  - [x] Hero, Mission, Certification, Partner, Business, Office의 비교 대상을 확정한다.
  - [x] 각 대상에 대응하는 현재 클래스 또는 공용 컴포넌트를 매핑한다.
  - [x] 적용할 목표 수치를 TODO의 `구현/수정 기준`에 확정 반영한다.
- 참고 자료:
  - `https://seed-bronze-70048020.figma.site/about`
  - `src/app/company/about/page.tsx`
  - `src/app/company/about/page.module.css`

### 2. `company/about` 본문 섹션 오차 보정 구현

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적: 확정된 수치를 기준으로 본문 섹션 오차를 수정한다.
- 작업 내용:
  - [x] `styles.certificationCard`, `styles.certificationImageWrap`, `styles.certificationTitle`, `styles.certificationDescription`를 목표 수치로 조정한다.
  - [x] `styles.businessImageWrap`, `styles.businessTitle`, `styles.businessDescription`, `styles.learnMore`를 목표 수치로 조정한다.
  - [x] `styles.officeMapWrap`, `styles.officeTitle`, `styles.officeAddress`를 목표 수치로 조정한다.
  - [x] JSX에서 인증 제목/설명 구조를 `styles.certificationTitle`, `styles.certificationDescription`로 분리한다.
- 선행조건:
  - [x] [1. 참고 페이지 구조와 스타일 기준 확정](#1-참고-페이지-구조와-스타일-기준-확정)

### 3. 로컬 검증 및 수정 전후 기록

- 상위 TODO: [TODO 목록으로 이동](#todo-목록)
- 목적: 수정 결과를 수치 기준으로 검증하고 기록한다.
- 작업 내용:
  - [x] 데스크톱 기준 Certification, Business, Office의 수정 전/후 수치를 기록한다.
  - [x] 모바일 또는 축소 폭에서 레이아웃 붕괴 여부를 확인한다.
  - [x] 남은 차이와 추가 범위 후보를 `검증 결과`와 `사용자 확인 필요 사항`에 반영한다.
- 선행조건:
  - [x] [2. `company/about` 본문 섹션 오차 보정 구현](#2-companyabout-본문-섹션-오차-보정-구현)

## 검증 결과

- 화면 구조: Header, Hero, Mission, Certification 4개, Partner 로고 그리드, Business 2카드, Office, Footer CTA, Footer 순서 유지 확인
- 요소 수: Certification 카드 4개, Partner 로고 8개, Business 카드 2개, Office 정보 블록 1개 확인
- 공통 컴포넌트 적용:
  - `SiteHero` 유지
  - `SiteHeader` 유지
  - `SiteFooterCta` 유지
  - `SiteFooter` 유지
- 데스크톱 검증:
  - 원본 `certification` 이미지 `254x100`, 로컬 `styles.certificationImageWrap`/`styles.certificationImage` 기준 `254x100` 확인
  - 원본 `Business` 설명 `20px / 32px / -0.5px`, 로컬 `styles.businessDescription` 동일 확인
  - 원본 `Office` 연구소명 `24px / 32px / -0.6px`, 로컬 `styles.officeTitle` 동일 확인
  - 원본 `Learn More` 버튼 `height: 52px`, `padding: 12px 20px 12px 24px`, 로컬 `styles.learnMore` 동일 확인
- 모바일 검증:
  - `390x844` 기준 `scrollWidth: 390`, `clientWidth: 390`, `hasHorizontalOverflow: false` 확인
  - `styles.businessGrid`는 모바일에서 `358px` 단일 컬럼으로 전환 확인
  - `styles.officeTitle` 모바일 `font-size: 22px` 적용 확인
- computed style 비교:
  - `styles.certificationTitle`: `16px / 20px / -0.4px`
  - `styles.certificationDescription`: `16px / 20px / -0.4px`
  - `styles.businessDescription`: `20px / 32px / -0.5px`
  - `styles.learnMore`: `15px`, `font-weight: 600`, `height: 52px`, `padding: 12px 20px 12px 24px`
  - `styles.officeTitle`: `24px / 32px / -0.6px`
  - `styles.officeAddress`: `16px / 24px / -0.4px`
- 알려진 차이:
  - 공용 `SiteHero`, `SiteHeader`, `SiteFooterCta`는 사용자 결정에 따라 이번 범위에서 수정하지 않았다.
  - 데스크톱 기준 Hero 설명/CTA와 Footer CTA의 공용 수치는 원본과 완전 일치 대상으로 다루지 않았다.
- 수정 전/후 수치:
  - `styles.officeTitle` `letter-spacing: -0.4px -> -0.6px`
  - `styles.certificationImageWrap` `height: 144px -> 100px`, `max-width: none -> 254px`
  - `styles.certificationCard` `padding: 36px 28px 32px -> 24px 20px 20px`, `border-radius: 28px -> 20px`, `gap: 24px -> 20px`
  - `styles.businessImageWrap` `aspect-ratio: 1.42 -> 688 / 388`, `border-radius: 28px -> 20px`
  - `styles.businessDescription` `line-height: 30px -> 32px`, `letter-spacing: -0.84px -> -0.5px`
  - `styles.learnMore` `font-size: 18px -> 15px`, `min-height: 54px -> 52px`, `padding-inline: 26px 20px -> 12px 20px 12px 24px`
  - `styles.officeAddress` `font-size: 24px -> 16px`, `font-weight: 500 -> 400`, `letter-spacing: -0.72px -> -0.4px`
- 검증 시 사용한 기준 요소:
  - Certification: `벤처기업확인기관 인증`, `기술 혁신성 및 사업 성장성 평가 통과`
  - Business: 첫 번째 카드 설명 문단, `Learn More` 링크
  - Office: `인포지아 기술연구소`, 주소 문단
  - 모바일: `document.documentElement.scrollWidth`, `clientWidth`, `styles.businessGrid`

## 사용자 확인 필요 사항

- [x] 이번 1차 구현 범위를 `src/app/company/about/` 본문 섹션 스타일 보정으로 한정
- [x] 공용 `SiteHero`는 이번 작업에서 수정하지 않고 유지
- [x] 공용 Header와 Footer CTA는 이번 작업에서 제외
- [ ] 공용 Hero 설명/CTA와 Footer CTA도 원본 기준으로 별도 보정이 필요한지 사용자 판단 필요

## 작업 결과 요약

- 사용자 확인을 통해 `SiteHero`, `SiteHeader`, `SiteFooterCta`는 유지하고 about 본문 섹션만 수정하는 범위로 확정했다.
- `src/app/company/about/page.tsx`에서는 인증 카드의 제목/설명 클래스를 분리해 구조를 명확히 했다.
- `src/app/company/about/page.module.css`에서는 Certification, Business, Office 관련 수치를 원본 측정값 기준으로 정리했고, 마지막으로 `styles.officeTitle`의 `letter-spacing`을 `-0.6px`로 맞췄다.
- 데스크톱 기준 Certification 이미지 `254x100`, Business 설명 `20px / 32px / -0.5px`, Office 연구소명 `24px / 32px / -0.6px`, Learn More 버튼 `52px / 12px 20px 12px 24px`가 원본과 일치한다.
- 모바일 `390px` 기준 가로 스크롤 없이 단일 컬럼 레이아웃으로 전환되는 것을 확인했다.
