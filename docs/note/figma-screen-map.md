# Figma Screen Map

`design-link.md`의 역할을 확장해, 화면 프레임과 실제 구현 파일의 연결을 관리하는 문서입니다.

## Usage Rules
- 한 행은 하나의 화면 프레임 또는 구현 단위를 의미합니다.
- 디자인 변경이 생기면 먼저 이 문서의 상태와 메모를 갱신합니다.
- 코드 반영은 사용자 지시가 있을 때만 수행합니다.
- 로직 변경이 필요한 경우, 디자인 변경과 분리해서 검토합니다.

## Mapping Table

| Status | Screen / Frame | Figma URL | Node ID | Route / Purpose | Target File | Related Components | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Planned | Homepage / Hero | TBD | TBD | `/` main hero | `src/app/page.tsx` | TBD | Replace placeholder section when design is confirmed |

## Change Log Template

### YYYY-MM-DD
- Updated frame:
- Design delta:
- Proposed code impact:
- Applied only after user approval: Yes / No
