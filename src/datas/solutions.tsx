import { useCaseSummaries } from "@/datas/useCases";
import type { ReactNode } from "react";

const asset = (path: string) => path;

export type SolutionFeatureIcon =
    | {
          kind: "image";
          src: string;
      }
    | {
          kind: "number";
          value: string;
      };

export type SolutionFeature = {
    body: string;
    icon: SolutionFeatureIcon;
    title: string;
};

export type SolutionWorkflowItem = {
    body: ReactNode;
    image: string;
    label: string;
    title: string;
};

export type SolutionUseCase = {
    image: string;
    tags: string[];
    title: string;
};

export type SolutionStory = {
    image: string;
    titleLines: string[];
};

export type SolutionPageData = {
    hero: {
        backgroundSrc: string;
        description: ReactNode;
        eyebrow?: string;
        title: ReactNode;
    };
    id: string;
    sections: {
        solutionHeading: string;
        solutionVisualSrc: string;
        useCasesHeading: string;
        workflowHeading: string;
    };
    slug: string;
    solutionFeatures: SolutionFeature[];
    story?: SolutionStory;
    title: string;
    useCaseCategories: string[];
    useCases: SolutionUseCase[];
    workflow: SolutionWorkflowItem[];
};

const getSolutionUseCases = (categories: string[]): SolutionUseCase[] =>
    useCaseSummaries
        .filter((item) => categories.includes(item.tags[0]))
        .slice(0, 4)
        .map((item) => ({
            image: item.image,
            tags: item.tags,
            title: item.title,
        }));

const solutionEntries = {
    "disaster-safety": {
        hero: {
            backgroundSrc: asset(
                "/images/solutions/disaster-safety/hero-background.png",
            ),
            description: (
                <>
                    복잡한 재난 상황을 실시간으로 감지하고 최적의 대응 시나리오를
                    도출하는 Vision AI 솔루션으로,
                    <br />
                    재난 현장의 안전 기준을 완전히 새롭게 정의합니다.
                </>
            ),
            eyebrow: "Vision AI for Disaster Safety",
            title: (
                <>
                    재난 상황을 감지하고
                    <br />
                    최적의 대응을 도출하는 AI
                </>
            ),
        },
        id: "disaster-safety",
        sections: {
            solutionHeading: "Our Solution",
            solutionVisualSrc: asset(
                "/images/solutions/disaster-safety/solution-overview.png",
            ),
            useCasesHeading: "Use Cases",
            workflowHeading: "How Vision AI Solution Works",
        },
        slug: "disaster-safety",
        solutionFeatures: [
            {
                body: "지능형 카메라가 관제 구역 전역을 상시 탐지하며 환경적 이상 징후를 실시간으로 포착합니다. 이에 더해, 시각 인지 AI가 정밀 분석 알고리즘을 결합한 하이브리드 검증을 수행하여, 복잡한 현장 환경이나 기상 변화로 인한 오경보를 90% 이상 줄입니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/disaster-safety/feature-icon-risk-detection.svg",
                    ),
                },
                title: "AI 영상기반\n위험 상황 감지",
            },
            {
                body: "이상 징후가 감지되는 즉시 통합 관제 센터와 현장 책임자에게 비상 알람을 실시간으로 전파합니다. 이와 동시에 AI가 분석한 현장의 실시간 영상 데이터와 정확한 위치 정보를 함께 공유하여, 골든타임 내에 즉각적인 구조 및 초동 조치가 이루어지도록 지원합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/disaster-safety/feature-icon-emergency-alert.svg",
                    ),
                },
                title: "비상 상황 발생시\n경보 알람",
            },
            {
                body: "위험 수준이 임계치를 넘어서는 순간, 추가 피해를 막기 위해 해당 구역의 진입 차단막 가동 및 위험 설비 제어 명령을 즉각 실행합니다. 이와 동시에 현장 경보 장치, 디지털 사이니지와 유기적으로 연동되어 위험 구역 내 인원들을 안전한 지역으로 신속하게 안내합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/disaster-safety/feature-icon-automated-response.svg",
                    ),
                },
                title: "위험 상황 발생 시스템\n자동 제어 및 대응",
            },
            {
                body: "관리 지역 전역의 안전 상태와 실시간 데이터 흐름을 하나의 직관적인 대시보드에서 통합 관리합니다. 나아가 누적된 사고 징후 및 위험 데이터를 기반으로 AI가 다각적인 통계 분석을 수행하여, 잠재적 리스크를 선제적으로 예측하고 방재 대책을 수립할 수 있도록 지원합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/disaster-safety/feature-icon-monitoring-dashboard.svg",
                    ),
                },
                title: "통합 모니터링 및\n통계분석",
            },
        ],
        story: {
            image: asset(
                "/images/solutions/disaster-safety/story-background.png",
            ),
            titleLines: ["상황을 이해하고 설계하는", "재난 특화 솔루션"],
        },
        title: "재난 안전",
        useCaseCategories: ["재난", "안전"],
        useCases: getSolutionUseCases(["재난", "안전"]),
        workflow: [
            {
                body: (
                    <p>
                        강한 흔들림이나 자욱한 연기 등 이상 징후 감지 시 상황을
                        인식하고 즉시 대응할 수 있는 액션을 제안합니다. 자연어
                        기반 인터페이스를 통해 작업자는 AI 에이전트와 직관적으로
                        협업할 수 있고, AI의 판단 근거를 시각화해 사용성을
                        강화합니다.
                    </p>
                ),
                image: asset(
                    "/images/solutions/disaster-safety/workflow-situation-awareness.png",
                ),
                label: "현장 상황 인지",
                title: "재난의 사소한\n징조를 이해하는 AI",
            },
            {
                body: (
                    <p>
                        단순 감지를 넘어 균열 깊이, 진동 상태, 연소 속도 등을 초
                        단위로 계산해 위험도를 정량화합니다. 실시간 데이터를
                        바탕으로 대피 우선순위와 최적의 방재 경로를 도출하며,
                        시각화된 &apos;위험도 맵(Hazard Map)&apos;을 통해
                        관리자의 신속한 의사결정을 돕습니다.
                    </p>
                ),
                image: asset(
                    "/images/solutions/disaster-safety/workflow-risk-analysis.png",
                ),
                label: "위험 데이터 분석",
                title: "위험 요인의\n실시간 정량화",
            },
            {
                body: (
                    <p>
                        과거 패턴과 미세한 물리적 변화(기울기, 진동 등)를 결합해
                        미래의 재난 가능성을 선제적으로 예측합니다. AI
                        에이전트가 &quot;30분 내 붕괴 위험 85%&quot;와 같은
                        확률적 모델을 자연어로 브리핑하여, 재난 발생 전 선제적
                        예방 조치와 골든타임 확보를 지원합니다.
                    </p>
                ),
                image: asset(
                    "/images/solutions/disaster-safety/workflow-disaster-prediction.png",
                ),
                label: "재난 예측 및 대비",
                title: "보이지 않는 위협을\n내다보는 AI",
            },
        ],
    },
    "facility-infrastructure": {
        hero: {
            backgroundSrc: asset(
                "/images/solutions/facility-infrastructure/hero-background.png",
            ),
            description:
                "시설물 내 특이 상황과 잠재적 위험 요소를 실시간으로 감지하고 신속한 대응을 지원하는 Vision AI 솔루션으로, 더 안전하고 효율적인 시설 운영 환경을 구현합니다.",
            eyebrow: "Vision AI for Facility & Infrastructure",
            title: (
                <>
                    시설물의 유지보수와
                    <br />
                    이용자 안전을 보장하는 AI
                </>
            ),
        },
        id: "facility-infrastructure",
        sections: {
            solutionHeading: "Our Solution",
            solutionVisualSrc: asset(
                "/images/solutions/facility-infrastructure/solution-overview.png",
            ),
            useCasesHeading: "Use Cases",
            workflowHeading: "How Vision AI Solution Works",
        },
        slug: "facility-infrastructure",
        solutionFeatures: [
            {
                body: "Vision AI가 시설 전역을 실시간으로 분석하여 침입, 화재, 낙상, 위험 구역 접근 등 다양한 안전 위협을 즉시 탐지합니다. 복합적인 영상 분석 기술을 통해 오탐지를 최소화하고 정확도 높은 안전 관제를 제공합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/facility-infrastructure/feature-icon-risk-detection.svg",
                    ),
                },
                title: "AI 영상기반\n위험 상황 감지",
            },
            {
                body: "인가되지 않은 출입이나 제한 구역 접근을 실시간으로 식별하고 출입 이력을 자동 기록합니다. 보안 시스템과 연동하여 시설 내 보안 수준을 강화하고 관리 효율을 높입니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/facility-infrastructure/feature-icon-access-control.svg",
                    ),
                },
                title: "출입 통제 및\n보안 관리",
            },
            {
                body: "사고 발생 시 경보 시스템, 방송 설비, 출입 통제 장치와 자동 연동되어 신속한 초기 대응을 수행합니다. 현장 상황에 맞는 대응 절차를 자동 실행하여 피해 확산을 최소화합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/facility-infrastructure/feature-icon-emergency-automation.svg",
                    ),
                },
                title: "비상 대응\n프로세스 자동화",
            },
            {
                body: "시설 전체의 안전 상태와 이벤트 현황을 하나의 화면에서 관리합니다. 위험 발생 추이와 운영 데이터를 시각화하여 보다 체계적인 안전 관리 의사결정을 지원합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/facility-infrastructure/feature-icon-safety-dashboard.svg",
                    ),
                },
                title: "통합 안전\n관제 대시보드",
            },
        ],
        story: {
            image: asset(
                "/images/solutions/facility-infrastructure/story-background.png",
            ),
            titleLines: ["위험을 예측하고 대응하는", "시설 안전 특화 솔루션"],
        },
        title: "시설물 및 인프라",
        useCaseCategories: ["인프라"],
        useCases: getSolutionUseCases(["인프라"]),
        workflow: [
            {
                body: <p>다양한 CCTV와 영상 장비 및 센서를 통해 시설 전역을 실시간으로 모니터링하며, 침입, 화재, 낙상, 위험 구역 접근 등 잠재적 위험 요소를 즉시 식별합니다.</p>,
                image: asset(
                    "/images/solutions/facility-infrastructure/workflow-operations-overview.png",
                ),
                label: "실시간 위험 요소 인식",
                title: "24시간 안전 상태를 감시하는\nVision AI",
            },
            {
                body: <p>단순 감지를 넘어 위험 수준과 상황 맥락을 종합적으로 분석하여, 경보 발송, 출입 통제, 관제 시스템 연계 등 적절한 대응 프로세스를 자동으로 실행합니다.</p>,
                image: asset(
                    "/images/solutions/facility-infrastructure/workflow-operations-overview.png",
                ),
                label: "상황 판단 및 대응 연계",
                title: "특이 상황을 분석을 통한\n즉각적인 대응",
            },
            {
                body: <p>누적된 이벤트와 운영 데이터를 분석하여 사고 발생 패턴과 취약 구간을 파악해 끊임없이 고도화합니다. 이를 통해 보다 체계적이고 예방 중심의 안전 관리 체계를 완성합니다.</p>,
                image: asset(
                    "/images/solutions/facility-infrastructure/workflow-operations-overview.png",
                ),
                label: "예방 중심 안전 운영",
                title: "데이터 기반의\n선제적 안전 관리",
            },
        ],
    },
    "logistics-distribution": {
        hero: {
            backgroundSrc: asset(
                "/images/solutions/logistics-distribution/hero-background.png",
            ),
            description:
                "물류 및 유통 전 과정에서 발생하는 데이터를 실시간으로 분석하고 운영 상태를 모니터링하는 Vision AI 솔루션으로, 보다 빠르고 정확한 공급망 운영을 지원합니다.",
            eyebrow: "Vision AI for Logistics & Distribution",
            title: "물류 운영의 정확성과 효율성을 높이는 AI",
        },
        id: "logistics-distribution",
        sections: {
            solutionHeading: "Our Solution",
            solutionVisualSrc: asset(
                "/images/solutions/logistics-distribution/solution-overview.png",
            ),
            useCasesHeading: "Use Cases",
            workflowHeading: "How Vision AI Solution Works",
        },
        slug: "logistics-distribution",
        solutionFeatures: [
            {
                body: "화물 적재 상태와 작업 현장을 실시간으로 모니터링하여 파손 위험이나 안전사고를 예방합니다. 물류센터 운영 안정성과 작업 안전성을 동시에 확보합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/logistics-distribution/feature-icon-loading-safety.svg",
                    ),
                },
                title: "적재 상태 및\n물류 안전 관리",
            },
            {
                body: "Vision AI가 상품 이동과 재고 현황을 실시간으로 추적하여 입출고 과정을 자동 관리합니다. 수작업 검수 부담을 줄이고 운영 정확도를 향상시킵니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/logistics-distribution/feature-icon-inventory-tracking.svg",
                    ),
                },
                title: "입출고 및\n재고 자동 인식",
            },
            {
                body: "차량 이동 경로와 물류 흐름을 분석하여 병목 구간을 식별합니다. 물류 처리 속도를 높이고 운영 비용을 절감할 수 있도록 지원합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/logistics-distribution/feature-icon-flow-optimization.svg",
                    ),
                },
                title: "차량 및 물류\n흐름 최적화",
            },
            {
                body: "물류 데이터와 운영 현황을 통합 분석하여 공급망 전반의 효율성을 진단합니다. 운영 개선 포인트를 도출하여 안정적인 물류 서비스를 지원합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/logistics-distribution/feature-icon-supply-analysis.svg",
                    ),
                },
                title: "공급망\n운영 분석",
            },
        ],
        story: {
            image: asset(
                "/images/solutions/logistics-distribution/story-background.png",
            ),
            titleLines: ["운영 효율과 정확도를 높이는", "물류 특화 솔루션"],
        },
        title: "물류 및 유통업",
        useCaseCategories: ["도시", "인프라"],
        useCases: getSolutionUseCases(["도시", "인프라"]),
        workflow: [
            {
                body: <p>입출고, 적재, 이동 경로 등 물류센터 전반의 운영 흐름을 실시간으로 분석하여 모든 물류 프로세스를 시각화합니다.</p>,
                image: asset(
                    "/images/solutions/logistics-distribution/workflow-visibility.png",
                ),
                label: "물류 흐름 가시화",
                title: "보이지 않는 물류 데이터를\n연결하는 AI",
            },
            {
                body: <p>재고 불일치, 작업 지연, 적재 오류와 같은 운영 이상 상황을 조기에 감지하여 물류 프로세스의 안정성을 확보합니다.</p>,
                image: asset(
                    "/images/solutions/logistics-distribution/workflow-anomaly-detection.png",
                ),
                label: "운영 이상 탐지",
                title: "물류 운영의\n정확도 향상",
            },
            {
                body: <p>운영 데이터를 기반으로 물류 자원 배분과 작업 프로세스를 최적화하여 비용 절감과 처리 효율 향상을 실현합니다.</p>,
                image: asset(
                    "/images/solutions/logistics-distribution/workflow-optimization.png",
                ),
                label: "공급망 운영 최적화",
                title: "효율적인\n물류 의사결정을 지원",
            },
        ],
    },
    "manufacturing-construction": {
        hero: {
            backgroundSrc: asset(
                "/images/solutions/manufacturing-construction/hero-background.png",
            ),
            description:
                "제조 및 건설 현장의 작업 환경을 실시간으로 분석하여 운영 이슈와 위험 요소를 해결하는 Vision AI 솔루션으로, 생산성과 안전성을 모두 강화하는 스마트 현장을 실현합니다.",
            eyebrow: "Vision AI for Manufacturing & Construction",
            title: "산업 현장의 생산성과 안전을 향상시키는 AI",
        },
        id: "manufacturing-construction",
        sections: {
            solutionHeading: "Our Solution",
            solutionVisualSrc: asset(
                "/images/solutions/manufacturing-construction/solution-overview.png",
            ),
            useCasesHeading: "Use Cases",
            workflowHeading: "How Vision AI Solution Works",
        },
        slug: "manufacturing-construction",
        solutionFeatures: [
            {
                body: "위험 구역 내 계측기 및 패널 점검에 Vision AI 기술을 도입함으로써, 작업자 노출 위험을 최소화하고 산업재해를 선제적으로 예방합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/manufacturing-construction/feature-icon-risk-zone-inspection.svg",
                    ),
                },
                title: "AI 기반 위험 구역\n점검 작업 자동화",
            },
            {
                body: "작업자의 위험 행동이나 설비 이상 징후를 조기에 감지합니다. 생산 공정 중 발생할 수 있는 사고와 작업 중단 리스크를 최소화합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/manufacturing-construction/feature-icon-hazard-behavior-analysis.svg",
                    ),
                },
                title: "공정 이상 및\n위험 행동 분석",
            },
            {
                body: "제품 외관 및 생산 품질을 실시간으로 검사하여 불량품을 자동 식별합니다. 미세 결함까지 모두 검출하여 품질 경쟁력을 향상시킵니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/manufacturing-construction/feature-icon-quality-inspection.svg",
                    ),
                },
                title: "AI 기반 품질\n검사 자동화",
            },
            {
                body: "설비 가동률, 작업 흐름, 생산 현황을 분석하여 운영 효율을 극대화합니다. 데이터 기반 의사결정을 통해 생산성 향상을 지원합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/manufacturing-construction/feature-icon-operations-analysis.svg",
                    ),
                },
                title: "생산성 및\n운영 효율 분석",
            },
        ],
        story: {
            image: asset(
                "/images/solutions/manufacturing-construction/story-background.png",
            ),
            titleLines: ["안전과 생산성을 모두 챙기는", "산업 현장 특화 솔루션"],
        },
        title: "제조 및 건설",
        useCaseCategories: ["제조"],
        useCases: getSolutionUseCases(["제조"]),
        workflow: [
            {
                body: <p>작업자 행동, 설비 상태, 공정 흐름을 실시간으로 분석하여 안전 규정 위반, 작업 이상 및 설비 위험 요소를 신속하게 감지합니다.</p>,
                image: asset(
                    "/images/solutions/manufacturing-construction/workflow-monitoring.png",
                ),
                label: "작업 현장 지능형 모니터링",
                title: "복잡한 산업 현장을 이해하는\nVision AI",
            },
            {
                body: <p>현장에서 발생하는 다양한 이벤트를 분석하여 품질 문제와 안전 리스크를 동시에 관리합니다. 이를 통해 운영 중단과 사고 발생 가능성을 최소화합니다.</p>,
                image: asset(
                    "/images/solutions/manufacturing-construction/workflow-quality-safety.png",
                ),
                label: "품질 및 안전 통합 관리",
                title: "생산성과 안전을\n동시에 확보",
            },
            {
                body: <p>생산 데이터와 작업 데이터를 통합 분석하여 공정 효율을 개선하고, 보다 안전하고 생산적인 작업 환경을 구현합니다.</p>,
                image: asset(
                    "/images/solutions/manufacturing-construction/workflow-optimization.png",
                ),
                label: "현장 운영 최적화",
                title: "지속 가능한\n스마트 현장 구축",
            },
        ],
    },
    "retail-store-management": {
        hero: {
            backgroundSrc: asset(
                "/images/solutions/retail-store-management/hero-background.png",
            ),
            description:
                "고객 행동과 매장 운영 데이터를 실시간으로 분석하여 최적의 운영 전략을 제공하는 Vision AI 솔루션으로, 매장 운영 효율과 고객 만족도를 향상시킵니다.",
            eyebrow: "Vision AI for Retail & Store Management",
            title: "고객 경험과 매장 운영을 혁신하는 AI",
        },
        id: "retail-store-management",
        sections: {
            solutionHeading: "Our Solution",
            solutionVisualSrc: asset(
                "/images/solutions/retail-store-management/solution-overview.png",
            ),
            useCasesHeading: "Use Cases",
            workflowHeading: "How Vision AI Solution Works",
        },
        slug: "retail-store-management",
        solutionFeatures: [
            {
                body: "시각 언어 모델(VLM)과 CCTV 인프라를 연동하여 방문 없이 원격으로 프로모션 준수율, 청결도, 진열 상태 등 20개 이상의 환경 관리 항목을 자동으로 점검합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/retail-store-management/feature-icon-store-audit.svg",
                    ),
                },
                title: "매장 환경\n자동 점검 시스템",
            },
            {
                body: "통합 분석을 통해 점검이 완료된 각 매장 환경 관리 항목에 대한 결과를 자동으로 수치화하여 체크리스트로 보여줍니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/retail-store-management/feature-icon-smart-checklist.svg",
                    ),
                },
                title: "한눈으로 보는\n지능형 체크리스트",
            },
            {
                body: "매장 내 고객의 이동 경로와 체류 시간을 분석하여 인기 구역과 관심 상품을 파악합니다. 고객 행동 데이터를 기반으로 보다 효과적인 매장 운영 전략을 수립할 수 있습니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/retail-store-management/feature-icon-customer-journey-analysis.svg",
                    ),
                },
                title: "고객 행동 및\n동선 분석",
            },
            {
                body: "매장 환경 상태에 따른 방문 패턴 변화나 동선과 매출 간의 상관관계를 분석하여 차기 맞춤형 마케팅 전략 수립의 근거로 활용합니다.",
                icon: {
                    kind: "image",
                    src: asset(
                        "/images/solutions/retail-store-management/feature-icon-marketing-insights.svg",
                    ),
                },
                title: "고객 인사이트 및\n마케팅 분석",
            },
        ],
        story: {
            image: asset(
                "/images/solutions/retail-store-management/story-background.png",
            ),
            titleLines: ["고객 경험과 운영을 혁신하는", "리테일 특화 솔루션"],
        },
        title: "리테일 및 매장",
        useCaseCategories: ["도시"],
        useCases: getSolutionUseCases(["도시"]),
        workflow: [
            {
                body: <p>매장 내 CCTV를 통해 청결도, 진열 상태 등 20개 이상의 환경 관리 항목을 자동으로 점검하고, 고객의 이동 동선, 체류 시간, 관심 구역을 분석하여 고객 행동 데이터를 실시간으로 수집합니다.</p>,
                image: asset(
                    "/images/solutions/retail-store-management/workflow-retail-operations.png",
                ),
                label: "매장 환경 데이터 수집",
                title: "매장 환경을 철저하게\n점검하는 Vision AI",
            },
            {
                body: <p>청결도·진열 상태 등의 환경 점검 결과와 고객 체류 시간·동선 데이터를 하나의 대시보드로 통합합니다. 축적된 데이터를 바탕으로 매장의 시공간별 운영 효율성을 다차원적으로 비교·분석합니다.</p>,
                image: asset(
                    "/images/solutions/retail-store-management/workflow-retail-operations.png",
                ),
                label: "데이터 통합 분석",
                title: "매장 상황과 고객 행동을\n다각도로 분석",
            },
            {
                body: <p>분석 결과를 기반으로 상품 진열, 인력 운영, 프로모션 전략을 최적화하여 고객 경험과 매출 성과를 동시에 향상시킵니다.</p>,
                image: asset(
                    "/images/solutions/retail-store-management/workflow-retail-operations.png",
                ),
                label: "최적 인사이트 도출",
                title: "데이터 기반의\n스마트 리테일 구현",
            },
        ],
    },
    "smart-farming": {
        hero: {
            backgroundSrc: asset(
                "/images/solutions/smart-farming/hero-background.png",
            ),
            description:
                "농작물의 생육 상태와 농장 환경을 실시간으로 분석하여 최적의 관리 방안을 제공하는 Vision AI 솔루션으로, 안정적인 생산성과 지속가능한 농업 환경을 구축합니다.",
            eyebrow: "Vision AI for Smart Farming",
            title: "작물과 환경을 정밀하게 관리하는 AI",
        },
        id: "smart-farming",
        sections: {
            solutionHeading: "Our Solution",
            solutionVisualSrc: asset(
                "/images/solutions/smart-farming/solution-overview.png",
            ),
            useCasesHeading: "Use Cases",
            workflowHeading: "How Vision AI Solution Works",
        },
        slug: "smart-farming",
        solutionFeatures: [
            {
                body: "온도, 습도, 조도 등 환경 데이터를 바탕으로 최적의 재배 환경을 제안합니다. 관수 및 환경 제어 시스템과 연동해 스마트한 농장 운영을 지원합니다.",
                icon: { kind: "number", value: "1" },
                title: "농장 환경\n자동 최적화",
            },
            {
                body: "Vision AI가 작물의 성장 상태를 실시간으로 분석하여 생육 단계와 건강 상태를 정밀하게 파악합니다. 데이터 기반 재배 관리를 통해 생산성을 향상시킵니다.",
                icon: { kind: "number", value: "2" },
                title: "작물 생육\n상태 분석",
            },
            {
                body: "작물의 색상 변화, 병반, 생육 이상 등을 조기에 감지하여 피해 확산을 방지합니다. 신속한 대응을 통해 수확량 손실을 최소화할 수 있습니다.",
                icon: { kind: "number", value: "3" },
                title: "병충해 및 이상 징후\n조기 탐지",
            },
            {
                body: "생육 데이터와 환경 정보를 기반으로 수확 시기와 생산량을 예측합니다. 축적된 데이터를 활용하여 지속 가능한 농업 운영 전략을 수립할 수 있습니다.",
                icon: { kind: "number", value: "4" },
                title: "생산량 예측 및\n농업 데이터 분석",
            },
        ],
        title: "스마트팜",
        useCaseCategories: ["스마트팜", "에너지"],
        useCases: getSolutionUseCases(["스마트팜", "에너지"]),
        workflow: [
            {
                body: <p>작물의 성장 상태와 농장 환경을 실시간으로 분석하여 생육 변화와 이상 징후를 조기에 파악합니다.</p>,
                image: asset(
                    "/images/solutions/smart-farming/workflow-growth-analysis.png",
                ),
                label: "생육 환경 정밀 분석",
                title: "작물의 변화를\n읽어내는 Vision AI",
            },
            {
                body: <p>생육 데이터와 환경 정보를 종합 분석하여 관수, 영양 공급, 환경 관리에 필요한 최적의 운영 인사이트를 제공합니다.</p>,
                image: asset(
                    "/images/solutions/smart-farming/workflow-data-decisions.png",
                ),
                label: "농업 데이터 기반 의사결정",
                title: "경험을 데이터로\n전환하는 AI",
            },
            {
                body: <p>AI 분석 결과를 기반으로 농장 설비와 연동하여 환경을 자동 제어하고, 안정적인 생산성과 지속 가능한 농업 운영을 지원합니다.</p>,
                image: asset(
                    "/images/solutions/smart-farming/workflow-farm-automation.png",
                ),
                label: "스마트 농장 자동 운영",
                title: "생산성을 높이는\n자율형 농업 시스템",
            },
        ],
    },
} satisfies Record<string, SolutionPageData>;

export const solutionPageIds = Object.keys(solutionEntries);

export const solutionPages: Record<string, SolutionPageData> = solutionEntries;
