# Component Reuse Extraction Skill

## 목적

기존 화면 또는 기존 컴포넌트 구현에서 반복되는 UI, 상태 처리, 이벤트 처리, 스타일 구조를 식별하고, 재사용 가능한 컴포넌트로 안전하게 추출한다.

이 작업의 목표는 단순히 파일을 분리하는 것이 아니다. 다음 조건을 동시에 만족해야 한다.

- 동일하거나 유사한 UI 구조의 중복을 줄인다.
- 기존 화면의 동작, 스타일, 접근성, 반응형 동작을 변경하지 않는다.
- 추출된 컴포넌트가 특정 페이지나 도메인에 과도하게 결합되지 않도록 한다.
- 재사용 가능한 API를 만들되, 불필요하게 범용화하지 않는다.
- 기존 호출부의 타입 안정성과 컴파일 오류가 없는 상태를 유지한다.

---

## 핵심 원칙

### 1. 중복 코드가 아니라 중복 책임을 기준으로 판단한다

다음 조건 중 하나 이상이 만족되면 추출 후보로 검토한다.

- 동일한 JSX 구조가 두 곳 이상 존재한다.
- 동일한 상태 관리 및 이벤트 처리 로직이 반복된다.
- 동일한 스타일 규칙 또는 레이아웃 패턴이 반복된다.
- 동일한 UI 목적을 가지지만 텍스트, 아이콘, 데이터만 다른 구조가 반복된다.
- 특정 화면 내부에서 하나의 컴포넌트가 너무 많은 책임을 가진다.
- 특정 컴포넌트가 표시, 입력, 검증, 데이터 변환, API 호출 등을 동시에 처리한다.

단, 코드가 비슷하다는 이유만으로 즉시 공통화하지 않는다.

다음 경우에는 추출하지 않는다.

- 단 한 곳에서만 사용되며 재사용 가능성이 낮다.
- 구조는 유사하지만 도메인 의미와 책임이 다르다.
- 공통화로 인해 props가 과도하게 증가한다.
- 조건 분기가 많아져 원래 코드보다 이해하기 어려워진다.
- 스타일은 유사하지만 레이아웃 책임이 서로 다르다.
- 재사용 가능성을 가정하기 위해 실제 요구사항에 없는 옵션을 추가해야 한다.

예시:

- 두 페이지의 hero 섹션이 모두 "큰 제목 + 설명 + CTA" 구조를 가진다고 해서 즉시 하나의 `SiteHero`로 합치지 않는다.
- 배경 매체가 비디오와 이미지로 다르고, 컨테이너 폭, 정렬, 간격, 반응형 높이, 텍스트 톤이 다르다면 이는 같은 책임의 재사용보다 "겉으로만 비슷한 별도 섹션"일 수 있다.
- 이런 경우에는 페이지별 hero 컴포넌트를 분리하고, 정말로 동일한 책임만 공유하는 작은 표현 단위가 있을 때만 그 부분만 추출한다.

---

## 추출 우선순위

컴포넌트 추출은 다음 순서로 검토한다.

1. 반복되는 작은 UI 단위
2. 반복되는 입력 제어 단위
3. 반복되는 액션 영역
4. 반복되는 레이아웃 패턴
5. 반복되는 비즈니스 UI 블록
6. 반복되는 상태 및 이벤트 로직
7. 페이지 단위의 복합 UI

예시:

- 버튼, 배지, 아이콘 버튼
- 라벨 + 입력 필드 + 에러 메시지
- 검색 필터 영역
- 목록 카드
- 빈 상태 화면
- 로딩 상태 화면
- 확인/취소 액션 영역
- 페이지 헤더
- 테이블 행 액션
- 모달 내부 폼
- 데이터 목록 + 로딩 + 빈 상태 + 페이징 조합

---

## 컴포넌트 분류 기준

추출한 컴포넌트는 책임에 따라 아래 범주 중 하나로 분류한다.

### Atom

가장 작은 UI 단위다.

예시:

- Button
- IconButton
- Badge
- Text
- Divider
- Spinner
- Checkbox
- Input
- Tooltip

조건:

- 도메인 지식이 없어야 한다.
- 특정 API 응답 구조를 직접 받아서는 안 된다.
- 특정 페이지 상태에 의존해서는 안 된다.
- 스타일 및 기본 상호작용만 담당한다.

---

### Custom

여러 Atom 또는 기본 컴포넌트를 조합한 재사용 가능한 UI 블록이다.

예시:

- SearchInput
- FormField
- EmptyState
- PaginationControl
- DateRangeSelector
- ConfirmActionFooter
- ImageUploader
- SelectWithLabel

조건:

- 특정 화면보다는 특정 UI 역할을 담당한다.
- 최소한의 도메인 의미는 허용된다.
- 재사용 지점이 명확해야 한다.
- props가 너무 많아지면 다시 분리한다.

---

### Layout

자식 요소의 배치와 화면 구조를 담당한다.

예시:

- PageLayout
- ContentLayout
- SidebarLayout
- TwoColumnLayout
- ModalLayout
- SectionLayout
- Stack
- Inline

조건:

- 데이터 가공이나 API 호출을 수행하지 않는다.
- 표시할 실제 콘텐츠보다 배치 규칙에 집중한다.
- 가능한 한 `children` 기반 API를 우선한다.

---

### Feature / Domain Component

특정 도메인 개념을 표현하는 컴포넌트다.

예시:

- UserProfileCard
- ProductSummary
- OrderStatusBadge
- PaymentMethodSelector
- SellerInfoPanel
- ReservationDetailSection

조건:

- 도메인 모델을 props로 받을 수 있다.
- 특정 도메인 용어를 사용해도 된다.
- 여러 페이지에서 동일한 도메인 표현이 반복될 때 우선 검토한다.
- API 호출은 가능한 한 상위 컨테이너에서 수행한다.

---

### Page / Container

데이터 조회, 상태 조합, 라우팅, 화면 단위 정책을 담당한다.

예시:

- ProductListPage
- UserDetailPage
- OrderManagementPage

조건:

- API 호출, URL 파라미터, 페이지 레벨 상태 관리를 담당할 수 있다.
- 하위 UI 컴포넌트에 필요한 최소 데이터와 핸들러만 전달한다.
- 하위 컴포넌트에 직접적인 페이지 로직을 과도하게 주입하지 않는다.

---

## 추출 전 분석 절차

코드를 수정하기 전에 반드시 아래 순서로 분석한다.

### 1. 현재 컴포넌트의 책임을 정리한다

다음 항목을 확인한다.

- 어떤 데이터를 표시하는가
- 어떤 사용자 입력을 받는가
- 어떤 상태를 관리하는가
- 어떤 이벤트를 처리하는가
- 어떤 API 또는 외부 상태에 의존하는가
- 어떤 스타일과 레이아웃 책임을 가지는가
- 어떤 조건부 렌더링이 존재하는가

---

### 2. 반복되는 부분을 식별한다

반복 여부는 JSX만 비교하지 않는다.

다음 항목을 함께 비교한다.

- DOM 구조
- props 구조
- 상태 구조
- 이벤트 처리 방식
- 조건부 렌더링
- 스타일 구조
- 접근성 속성
- 에러 처리 방식
- 로딩 처리 방식
- 빈 상태 처리 방식

---

### 3. 공통 API를 설계한다

추출 대상의 props는 다음 기준으로 설계한다.

- 호출부가 실제로 필요로 하는 값만 받는다.
- 내부 구현 세부사항을 props로 노출하지 않는다.
- boolean prop을 남발하지 않는다.
- 서로 배타적인 상태는 discriminated union으로 표현한다.
- `any`, 광범위한 객체 타입, 불명확한 callback 타입을 사용하지 않는다.
- 컴포넌트가 자체적으로 판단할 수 있는 값은 외부 props로 받지 않는다.
- 레이아웃 목적의 props와 도메인 데이터 props를 혼합하지 않는다.

좋지 않은 예시:

```tsx
type Props = {
    isSmall?: boolean;
    isLarge?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    isLoading?: boolean;
    showIcon?: boolean;
    showFooter?: boolean;
    variant?: string;
    type?: string;
    data?: any;
    onClick?: Function;
};
```

개선 예시:

```tsx
type Status =
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success"; message?: string }
    | { type: "error"; message: string };

type Props = {
    size?: "sm" | "md" | "lg";
    status?: Status;
    onAction?: () => void;
};
```

---

## 컴포넌트 API 설계 규칙

### Props는 역할 중심으로 설계한다

좋은 props 이름:

```tsx
type Props = {
    title: string;
    description?: string;
    actions?: React.ReactNode;
    footer?: React.ReactNode;
    isLoading?: boolean;
    onClose?: () => void;
};
```

피해야 할 props 이름:

```tsx
type Props = {
    type?: string;
    mode?: string;
    option?: object;
    config?: object;
    customData?: unknown;
};
```

`type`, `mode`, `config`, `data`처럼 의미가 넓은 이름은 가능한 한 구체적인 이름으로 변경한다.

---

### Boolean prop 조합을 줄인다

다음과 같은 형태는 피한다.

```tsx
type Props = {
    isPrimary?: boolean;
    isDanger?: boolean;
    isOutline?: boolean;
    isDisabled?: boolean;
};
```

가능하면 단일 variant로 통합한다.

```tsx
type Props = {
    variant?: "primary" | "danger" | "outline";
    disabled?: boolean;
};
```

서로 배타적인 상태는 boolean 여러 개가 아니라 union type으로 표현한다.

```tsx
type Props =
    | {
          state: "loading";
      }
    | {
          state: "error";
          errorMessage: string;
      }
    | {
          state: "ready";
          items: Item[];
      };
```

---

### Children과 Slot을 우선 검토한다

컴포넌트가 내부 콘텐츠의 구성을 유연하게 받아야 한다면 boolean props나 다수의 텍스트 props보다 `children` 또는 slot 형태의 props를 우선 검토한다.

좋은 예시:

```tsx
type SectionProps = {
    title?: React.ReactNode;
    actions?: React.ReactNode;
    children: React.ReactNode;
};
```

사용 예시:

```tsx
<Section title="기본 정보" actions={<Button onClick={handleEdit}>수정</Button>}>
    <UserProfileForm />
</Section>
```

---

## 상태와 비즈니스 로직 분리 규칙

### UI 컴포넌트는 가능한 한 표현에 집중한다

UI 컴포넌트는 다음을 직접 수행하지 않는 것을 원칙으로 한다.

- API 요청
- 라우팅
- 전역 상태 변경
- 페이지 전용 데이터 가공
- URL query parsing
- 권한 판별
- 복잡한 비즈니스 규칙 판단

나쁜 예시:

```tsx
function ProductCard({ productId }: { productId: number }) {
    const { data, isLoading } = useProductDetailQuery(productId);

    if (isLoading) {
        return <Spinner />;
    }

    return <Card>{data.name}</Card>;
}
```

권장 예시:

```tsx
type ProductCardProps = {
    product: Product;
    onClick?: (product: Product) => void;
};

function ProductCard({ product, onClick }: ProductCardProps) {
    return <Card onClick={() => onClick?.(product)}>{product.name}</Card>;
}
```

데이터 조회는 상위 컨테이너 또는 페이지에서 처리한다.

```tsx
function ProductListPage() {
    const { data, isLoading } = useProductListQuery();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <ProductList
            products={data.items}
            onProductClick={handleProductClick}
        />
    );
}
```

---

## 스타일 추출 규칙

### 스타일을 분리하기 전에 책임을 확인한다

다음 기준으로 스타일 위치를 결정한다.

| 스타일 종류                            | 권장 위치                  |
| -------------------------------------- | -------------------------- |
| 버튼, 입력, 텍스트 등 기본 UI 스타일   | Atom                       |
| 반복되는 카드, 필터, 빈 상태 UI 스타일 | Custom                     |
| 페이지 폭, 여백, 컬럼, 영역 배치       | Layout                     |
| 도메인별 표현 스타일                   | Feature / Domain Component |
| 페이지 전용 예외 스타일                | Page                       |

---

### 스타일 오버라이드를 최소화한다

다음 방식은 피한다.

```tsx
<Component className="mt-8 px-4 border-none rounded-none text-red-500" />
```

공통 컴포넌트가 외부 className 오버라이드에 지나치게 의존한다면 컴포넌트 API 또는 variant 구조가 잘못되었을 가능성을 검토한다.

다만 레이아웃 위치 조정처럼 호출부에 속하는 스타일은 외부에서 적용할 수 있다.

예시:

```tsx
<EmptyState className="mt-12" />
```

반면 컴포넌트 내부 디자인 규칙까지 외부에서 덮어쓰지 않는다.

예시:

```tsx
<EmptyState className="border-0 bg-transparent p-0 text-left" />
```

이런 형태가 반복되면 별도 variant 또는 별도 컴포넌트를 검토한다.

---

## 파일 구조 규칙

프로젝트의 기존 구조를 우선 따른다.

새 구조가 필요한 경우 아래 예시를 기준으로 한다.

```text
src/
  components/
    atom/
      Button/
        Button.tsx
        Button.types.ts
        Button.module.css
        index.ts

      Input/
        Input.tsx
        Input.types.ts
        index.ts

    custom/
      EmptyState/
        EmptyState.tsx
        EmptyState.types.ts
        index.ts

      FormField/
        FormField.tsx
        FormField.types.ts
        index.ts

    layout/
      PageLayout/
        PageLayout.tsx
        index.ts

  features/
    product/
      components/
        ProductCard/
          ProductCard.tsx
          ProductCard.types.ts
          index.ts

        ProductList/
          ProductList.tsx
          ProductList.types.ts
          index.ts

      hooks/
      utils/
      types/

  pages/
    ProductListPage/
      ProductListPage.tsx
```

---

## 파일 생성 기준

다음 조건 중 하나 이상을 만족하면 별도 파일 분리를 검토한다.

- 컴포넌트가 독립적인 책임을 가진다.
- 타입 정의가 길거나 재사용된다.
- 스타일 정의가 많다.
- 테스트가 필요하다.
- Storybook 또는 문서화 대상이다.
- 다른 파일에서도 import될 가능성이 있다.

작고 단순하며 단일 파일에서만 사용되는 로컬 UI 조각은 무조건 파일로 분리하지 않는다.

예시:

```tsx
function ProductListPage() {
    const renderHeader = () => {
        return <header>상품 목록</header>;
    };

    return <main>{renderHeader()}</main>;
}
```

위 구조는 재사용 가능성이 낮다면 별도 컴포넌트 파일로 분리하지 않아도 된다.

---

## 추출 작업 절차

### Step 1. 기존 구현을 변경 없이 읽는다

다음을 먼저 파악한다.

- 현재 렌더링 구조
- 상태 흐름
- props 전달 구조
- 이벤트 흐름
- 스타일 의존성
- 외부 라이브러리 의존성
- 테스트 또는 스토리 존재 여부

이 단계에서 즉시 리팩터링하지 않는다.

---

### Step 2. 추출 후보를 목록화한다

각 후보에 대해 아래 내용을 정리한다.

```text
후보 이름:
현재 위치:
반복되는 위치:
담당 책임:
입력값:
출력값:
외부 의존성:
상태 보유 여부:
추출 위험 요소:
```

---

### Step 3. 최소 단위로 추출한다

한 번에 대규모 구조 변경을 하지 않는다.

권장 순서:

1. 순수 표현 컴포넌트 추출
2. 공통 타입 추출
3. 공통 스타일 추출
4. 이벤트 핸들러 정리
5. 상태 로직 분리
6. 도메인 컴포넌트 추출
7. 페이지 구조 정리

---

### Step 4. 기존 사용처를 즉시 교체한다

새 컴포넌트를 만들고 기존 사용처를 남겨두지 않는다.

단, 다음 경우에는 병행 유지가 가능하다.

- 점진적 마이그레이션이 필요한 경우
- 레거시 호환이 필요한 경우
- 기능 플래그로 비교가 필요한 경우
- 위험도가 높은 화면인 경우

병행 유지 시에는 제거 계획을 코드 또는 작업 결과에 명시한다.

---

### Step 5. 동작 회귀를 검증한다

추출 후 반드시 다음을 확인한다.

- 기존 화면이 동일하게 렌더링되는가
- 클릭, 입력, submit, close 등의 이벤트가 동일하게 동작하는가
- loading, empty, error 상태가 유지되는가
- 반응형 레이아웃이 깨지지 않는가
- 조건부 렌더링이 변경되지 않았는가
- 기존 스타일 우선순위가 변경되지 않았는가
- TypeScript 오류가 없는가
- lint 오류가 없는가
- 테스트가 있다면 통과하는가

---

## 추출 금지 패턴

### 1. 모든 것을 Generic Component로 만들지 않는다

나쁜 예시:

```tsx
<UniversalCard
    title={title}
    subtitle={subtitle}
    leftIcon={icon}
    rightIcon={rightIcon}
    showHeader
    showFooter
    showBorder
    showShadow
    compact
    dense
    fullWidth
    variant="product"
    type="user"
    mode="detail"
    config={config}
/>
```

이런 구조는 컴포넌트가 아니라 설정 객체 기반 렌더러에 가까워질 수 있다.

대신 서로 다른 역할을 가진 컴포넌트로 분리한다.

```tsx
<ProductCard />
<UserCard />
<InfoCard />
```

공통되는 내부 UI가 있다면 해당 부분만 재사용한다.

```tsx
<CardFrame />
<CardHeader />
<CardFooter />
```

페이지 hero처럼 복합 섹션에서 아래와 같은 추출도 피한다.

```tsx
<SiteHero
    variant="home"
    media={{ type: "video", src: heroVideo }}
    title={title}
    description={description}
/>
```

이런 구조가 성립하려면 대개 다음 문제가 함께 생긴다.

- 페이지별 레이아웃 차이를 `variant`로 숨긴다.
- 배경 처리 차이를 union prop으로 흡수한다.
- 제목 레벨, 간격, 폭, 정렬 같은 시각 정책을 공통 컴포넌트가 과도하게 떠안는다.

이 경우 권장 방향은 다음 중 하나다.

- `HomeHero`, `VisionAiHero`처럼 페이지별 책임이 분명한 컴포넌트로 분리한다.
- 혹은 hero 내부에서 정말 동일한 텍스트 블록, CTA 영역 같은 작은 단위만 별도 추출한다.

---

### 2. 도메인 모델을 억지로 범용 모델로 변환하지 않는다

나쁜 예시:

```tsx
type CardItem = {
    title: string;
    subtitle?: string;
    image?: string;
    meta?: unknown;
};
```

도메인별 의미가 중요한 경우에는 명확한 타입을 유지한다.

```tsx
type ProductCardProps = {
    product: Product;
};

type UserCardProps = {
    user: User;
};
```

공통 UI가 필요하면 내부에서 작은 표현 컴포넌트를 재사용한다.

---

### 3. 지나친 Props Drilling을 만들지 않는다

상위에서 전달되는 값이 여러 단계에 걸쳐 단순 전달만 된다면 구조를 검토한다.

다음 중 하나를 고려한다.

- 컴포넌트 경계 재설계
- children composition
- slot props
- 가까운 위치에서의 상태 관리
- 필요한 범위의 context
- 도메인 단위 provider

단, 단순한 1~2단계 props 전달은 불필요하게 context로 바꾸지 않는다.

---

### 4. 추출 후 기존 파일을 비대하게 남기지 않는다

컴포넌트를 추출했는데 기존 파일에 다음이 남아 있다면 정리한다.

- 더 이상 사용하지 않는 타입
- 더 이상 사용하지 않는 스타일
- 더 이상 사용하지 않는 이벤트 핸들러
- 중복된 상수
- 죽은 조건문
- 이전 컴포넌트 import
- obsolete 주석

---

## TypeScript 규칙

### 명시적 타입을 유지한다

다음은 피한다.

```tsx
type Props = {
    data: any;
    onChange: Function;
};
```

권장 예시:

```tsx
type Props = {
    data: Product;
    onChange: (nextProduct: Product) => void;
};
```

---

### 상태는 가능한 한 좁은 타입으로 정의한다

나쁜 예시:

```tsx
const [status, setStatus] = useState<string>("");
```

권장 예시:

```tsx
type RequestStatus = "idle" | "loading" | "success" | "error";

const [status, setStatus] = useState<RequestStatus>("idle");
```

---

### 조건부 props는 union type으로 제한한다

```tsx
type Props =
    | {
          editable: true;
          value: string;
          onChange: (value: string) => void;
      }
    | {
          editable?: false;
          value: string;
          onChange?: never;
      };
```

---

## 접근성 규칙

컴포넌트를 추출할 때 기존 접근성 속성을 제거하거나 약화하지 않는다.

다음을 확인한다.

- button에 적절한 `type`이 있는가
- 아이콘 버튼에 `aria-label`이 있는가
- form input에 label이 연결되어 있는가
- disabled 상태가 실제로 비활성화되는가
- keyboard interaction이 유지되는가
- focus 이동이 기존과 달라지지 않는가
- modal, drawer, dropdown의 focus 관리가 깨지지 않는가

---

## 성능 규칙

재사용 컴포넌트 추출 자체를 이유로 불필요한 최적화를 추가하지 않는다.

다음은 실제 필요가 확인된 경우에만 적용한다.

- `React.memo`
- `useMemo`
- `useCallback`
- virtualization
- lazy loading
- dynamic import

추출 후 props 참조가 매 렌더마다 변경되어 불필요한 렌더링이 증가하는지 확인한다.

특히 다음 패턴을 주의한다.

```tsx
<Component
    options={items.map((item) => ({
        label: item.name,
        value: item.id,
    }))}
/>
```

반복 렌더링 비용이 의미 있는 경우에만 메모이제이션을 적용한다.

---

## 작업 완료 조건

다음 조건을 모두 만족해야 작업을 완료로 처리한다.

- 추출 대상 컴포넌트의 책임이 명확하다.
- 기존 화면의 UI와 동작이 유지된다.
- 기존 중복 구조가 실제로 제거되었다.
- 새 컴포넌트가 불필요하게 범용화되지 않았다.
- props API가 명확하고 최소화되어 있다.
- `any`, `Function`, 불명확한 객체 타입을 추가하지 않았다.
- 기존 사용하지 않는 코드가 제거되었다.
- TypeScript 오류가 없다.
- lint 오류가 없다.
- 기존 테스트가 통과한다.
- 추출 전후 차이를 작업 결과에 요약한다.

---

## 작업 결과 보고 형식

작업 완료 후 아래 형식으로 결과를 정리한다.

```md
## 추출 결과

### 새로 생성한 컴포넌트

- `components/custom/FormField/FormField.tsx`
    - 라벨, 입력 요소, 설명 문구, 에러 메시지를 조합하는 공통 폼 필드 컴포넌트

- `features/product/components/ProductCard/ProductCard.tsx`
    - 상품 요약 정보와 클릭 액션을 표현하는 도메인 컴포넌트

### 변경한 기존 파일

- `pages/ProductListPage/ProductListPage.tsx`
    - 중복된 카드 렌더링 구조 제거
    - `ProductCard` 사용으로 교체
    - 페이지 레벨 데이터 조회와 이벤트 처리만 유지

### 공통화하지 않은 항목

- `OrderCard`
    - 외형은 유사하지만 상태 표현, 액션 구조, 도메인 의미가 달라 공통 Card로 통합하지 않음

### 검증 결과

- TypeScript 검사 통과
- lint 통과
- 기존 화면 렌더링 및 클릭 동작 유지
- loading / empty / error 상태 유지
```

---

## 최종 지시

컴포넌트를 추출할 때는 “재사용 가능해 보이는가”보다 “동일한 책임을 안정적으로 공유하는가”를 우선 판단한다.

추출 후 호출부가 더 읽기 쉬워져야 하며, 새 컴포넌트의 props를 이해하기 위해 내부 구현을 열어보지 않아도 되어야 한다.

공통화로 인해 조건문, boolean prop, variant, 설정 객체가 과도하게 늘어난다면 추출 방향이 잘못되었을 가능성을 먼저 검토한다.

재사용성은 목적이 아니라 결과여야 한다.
