import { useCaseImages } from "@/datas/useCaseImages";

const asset = (path: string) => path;

export type UseCaseSummary = {
    description?: string;
    id: string;
    image: string;
    tags: string[];
    title: string;
};

const defaultImage = asset("/images/solutions/shared/use-case-card-placeholder.png");

export const useCaseSummaries: UseCaseSummary[] = [
    {
        description:
            "산불은 초기 발견이 늦어질 경우 복합 대형 재난으로 번질 위험이 크지만, 광범위한 산림 지역을 육안이나 일반 CCTV로 상시 감시하기에는 사각지대가 너무 많았습니다. 특히 먼 거리에서 발생하는 미세한 연기나 불꽃을 조기에 식별하는 것이 매우 어려워 상황 전파와 초기 진압을 위한 골든타임을 놓치는 경우가 빈번했습니다.",
        id: "wildfire-disaster-command",
        image: defaultImage,
        tags: ["재난", "Vision AI", "Case"],
        title: "산불 및 재난 통합 관제: 3km 반경 미세 징후 조기 탐지",
    },
    {
        description:
            "기존의 재난 대응 체계는 두꺼운 종이 매뉴얼에 의존하고 있어, 실제 상황 발생 시 담당자가 단계별 조치 사항을 즉각 확인하고 실행하는 데 많은 시간이 걸렸습니다. 상황의 심각성을 판단하고 관계 기관에 연락을 취하는 과정에서 인적 오류나 연락 지연이 발생하기 쉬웠으며, 이는 초기 대응 속도를 늦추고 피해를 키우는 주요 원인이 되었습니다.",
        id: "compound-disaster-esop",
        image: defaultImage,
        tags: ["재난", "AI Agent", "Tech"],
        title: "복합 재난 대응 e-SOP: 상황 전파 및 의사결정 자동화",
    },
    {
        description:
            "광범위한 산업 시설이나 국가 중요 시설의 경계 보안은 고정된 CCTV만으로는 사각지대가 발생하기 쉬웠습니다. 이를 보완하기 위해 대규모 경비 인력을 투입할 경우 막대한 인건비 부담이 발생하며, 야간이나 악천후 시에는 침입 탐지 정확도가 급격히 떨어지는 한계가 있었습니다. 돌발적인 침입 상황 발생 시 현장에 즉각적으로 대응할 수 있는 능동적인 보안 체계가 절실했습니다.",
        id: "jeju-airport-disaster-support",
        image: defaultImage,
        tags: ["인프라", "AI Agent", "Case"],
        title: "제주공항 재난 및 체류객 지원: 혼잡도 예측 및 실시간 상황 전파",
    },
    {
        description:
            "광범위한 산업 시설이나 국가 중요 시설의 경계 보안은 고정된 CCTV만으로는 사각지대가 발생하기 쉬웠습니다. 이를 보완하기 위해 대규모 경비 인력을 투입할 경우 막대한 인건비 부담이 발생하며, 야간이나 악천후 시에는 침입 탐지 정확도가 급격히 떨어지는 한계가 있었습니다. 돌발적인 침입 상황 발생 시 현장에 즉각적으로 대응할 수 있는 능동적인 보안 체계가 절실했습니다.",
        id: "ai-border-robot-command",
        image: defaultImage,
        tags: ["제조", "Vision AI", "Tech"],
        title: "AI 경계 로봇 통합 관제: 상시 무인 보안 및 침입 대응 체계 확립",
    },
    {
        description:
            "기존 제조 및 건설 현장에서는 작업자의 안전 장구 착용 여부나 위험 구역 침입을 확인하기 위해 안전 관리자가 직접 순찰하거나 CCTV를 일일이 모니터링해야 했습니다. 하지만 작업 범위가 넓고 인력이 부족한 상황에서 낙상, 기계 끼임, 실신 등의 돌발적인 인명 사고를 실시간으로 포착하기에는 한계가 명확했습니다. 특히 사고 발생 시 즉각적인 기계 제어가 이루어지지 않아 골든타임을 놓치는 심각한 안전 사각지대가 존재해 왔습니다.",
        id: "manufacturing-site-safety-management",
        image: defaultImage,
        tags: ["제조", "Vision AI", "Tech"],
        title: "제조 현장 안전 관리: 위험 상황 대응 리드타임 90% 단축",
    },
    {
        description:
            "스키장 리프트나 곤돌라 운영 현장에서는 이용객이 안전바를 제대로 내리지 않거나 탑승 자세가 불안정하여 발생하는 추락 사고가 끊이지 않았습니다. 수많은 리프트를 안전 요원이 육안으로만 감시하기에는 한계가 있으며, 특히 야간이나 기상 악화 시에는 위험 징후를 즉각 발견하기가 더욱 어려웠습니다. 사고 발생 시 리프트를 즉시 멈추지 못할 경우 대형 인명 피해로 이어질 수 있는 상존하는 위험 요소였습니다.",
        id: "lift-safety-management",
        image: defaultImage,
        tags: ["안전", "Vision AI", "Case"],
        title: "리프트 안전 관리: 이용객 낙상 및 사고 제로화",
    },
    {
        description:
            "해안 방파제는 복잡하게 얽힌 테트라포드 구조의 특성상 추락 사고 발생 시 부상자를 조기에 발견하기가 매우 어렵습니다. 기존의 영상 감시만으로는 사고 발생 지점을 정확히 특정하기 힘들고, 야간이나 기상 악화 시에는 수색과 구출이 더욱 지연되어 인명 사고로 이어질 위험이 컸습니다. 이에 따라 사고 위치를 입체적으로 파악하고 신속하게 대응할 수 있는 고도화된 모니터링 기술이 절실히 요구되었습니다.",
        id: "tetrapod-safety-management",
        image: defaultImage,
        tags: ["안전", "Vision AI", "Case"],
        title: "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화",
    },
    {
        description:
            "산불은 초기 발견이 늦어질 경우 복합 대형 재난으로 번질 위험이 크지만, 광범위한 산림 지역을 육안이나 일반 CCTV로 상시 감시하기에는 사각지대가 너무 많았습니다. 특히 먼 거리에서 발생하는 미세한 연기나 불꽃을 조기에 식별하는 것이 매우 어려워 상황 전파와 초기 진압을 위한 골든타임을 놓치는 경우가 빈번했습니다.",
        id: "gondola-safety-management",
        image: defaultImage,
        tags: ["인프라", "Vision AI", "Case"],
        title: "곤돌라 안전 관리: 이용객 낙상 및 사고 제로화",
    },
    {
        description:
            "전국에 분산된 대규모 가전 매장이나 물류 창고를 관리하기 위해 점검 인력이 일일이 현장을 방문하여 청결도, POP 진열 상태, 가이드 준수 여부를 확인하는 방식은 막대한 시간과 비용이 소요되었습니다. 또한 점검자마다 판단 기준이 달라 객관적인 관리 지표를 산출하기 어려웠으며, 실시간으로 변하는 매장 상황에 즉각적으로 대응하는 데 한계가 있었습니다.",
        id: "vlm-based-smart-store-management",
        image: defaultImage,
        tags: ["도시", "VIsion AI", "Case"],
        title: "VLM 기반 지능형 매장 관리: 현점 점검 업무 100% 자동화",
    },
    {
        description:
            "수만 대의 스마트 방향제가 전국적으로 분산 설치된 환경에서는 개별 장치의 상태 파악이나 제어가 매우 비효율적이었습니다. 캡슐 잔량 확인이나 펌웨어 업데이트를 위해 일일이 수동 작업을 거쳐야 했으며, 사용자별로 정밀한 접근 권한을 관리할 수 있는 통합 플랫폼의 부재로 인해 체계적인 서비스 운영에 한계가 있었습니다.",
        id: "smart-fragrance-iot-platform",
        image: defaultImage,
        tags: ["도시", "AI Agent", "Case"],
        title: "스마트 방향제 IoT 플랫폼: 대규모 장치 통합 제어 및 관리 효율화",
    },
    {
        description:
            "기존 스마트팜은 단순 환경 제어에 그치는 경우가 많아, 토양의 영양 상태나 수분량을 데이터에 기반해 정밀하게 관리하기 어려웠습니다. 이로 인해 농작물의 생육 상태에 맞지 않는 과도한 관수나 영양 공급으로 자원이 낭비되거나 생산량이 일정하지 않은 문제가 있었습니다. 원격지에서 현장 상황을 실시간으로 파악하고 조치할 수 있는 자립형 지능화 플랫폼이 필요했습니다.",
        id: "data-driven-smart-farm",
        image: defaultImage,
        tags: ["스마트팜", "AI Agent", "Case"],
        title: "데이터 기반 스마트팜: 농작물 생육 환경 최적화 및 정밀 관수 제어",
    },
    {
        description:
            "전국 각지에 분산된 에너지 저장 장치(ESS)와 축전지 설비는 제조사마다 데이터 규격이 다르고 관리 방식이 파편화되어 통합 관리가 매우 어려웠습니다. 특히 축전지의 모듈 및 셀 단위의 미세한 상태 변화를 실시간으로 추적하기 어려워, 과충전이나 온도 이상 등 화재 위험 요소를 조기에 발견하는 데 한계가 있었습니다.",
        id: "battery-and-power-facility-ems",
        image: defaultImage,
        tags: ["에너지", "AI Agent", "Case"],
        title: "축전지 및 전력 설비 EMS: 에너지 저장 장치 계층적 관리 및 안정성 확보",
    },
    {
        description:
            "제조 공정에서 증기 누출을 방지하는 스팀트랩은 고장 여부를 육안으로 확인하기 어렵고, 수천 개에 달하는 설비를 일일이 점검하는 데 막대한 비용과 시간이 소요되었습니다. 고장난 스팀트랩을 방치할 경우 증기 손실로 인한 에너지 낭비가 심각하며, 공정 효율을 저하시켜 생산 원가를 상승시키는 주요 원인이 되어 왔습니다. 하지만 기존 방식으로는 고장 징후를 사전에 파악하기가 매우 힘든 구조였습니다.",
        id: "steam-trap-predictive-maintenance",
        image: defaultImage,
        tags: ["제조", "AI Agent", "Case"],
        title: "제조 공장 스팀트랩 예지 정비: 에너지 손실 최소화 및 정비 효율 극대화",
    },
    {
        description:
            "제조 공장이나 에너지 시설에 설치된 수많은 노후 아날로그 계측기들은 데이터가 디지털화되지 않아 작업자가 위험 구역에 직접 들어가 수치를 읽고 기록해야 했습니다. 이로 인해 검침 과정에서의 안전 사고 위험이 상존했고, 데이터 누락이나 오기가 발생하기 쉬웠습니다. 무엇보다 실시간 데이터 수집이 불가능해 설비의 이상 징후를 사전에 파악하기가 매우 어려웠습니다.",
        id: "legacy-facility-digital-transformation",
        image: defaultImage,
        tags: ["제조", "Vision AI", "Case"],
        title: "노후 설비 디지털 전환: 아날로그 게이지 판독 자동화",
    },
    {
        description:
            "산업 현장에는 다양한 제조사의 아날로그 및 디지털 계측기가 혼재되어 있어 데이터 통합 관리가 매우 어렵습니다. 특히 통신 기능이 없는 구형 계측기들은 사람이 직접 현장을 방문해 수치를 읽고 기록해야 했으며, 이 과정에서 오기나 누락이 발생할 확률이 높았습니다. 서로 다른 형식의 데이터를 하나로 모아 실시간으로 분석할 수 있는 체계가 부재하여 통합적인 설비 모니터링에 한계가 있었습니다.",
        id: "integrated-meter-reading-automation",
        image: defaultImage,
        tags: ["제조", "Vision AI", "Case"],
        title: "복합 계측기 판독 자동화: 이기종 설비 데이터 통합 및 자산화",
    },
    {
        description:
            "국내 중고차 단지들은 연합, 조합, 상사, 딜러 등 이해관계자가 복잡하게 얽혀 있음에도 불구하고, 이를 통합적으로 관리할 수 있는 체계적인 플랫폼이 부족했습니다. 특히 많은 고객사가 IT 전문 인력을 보유하지 못한 상태여서 복잡한 서버 아키텍처 설계나 시스템 운영에 큰 어려움을 겪고 있었습니다. 이로 인해 차량 등록부터 주차 관리, 정보 조회에 이르는 전 과정이 수동으로 이루어지거나 파편화되어 업무 효율성이 떨어지고 데이터 자산화가 불가능한 고질적인 문제를 안고 있었습니다.",
        id: "used-car-marketplace-platform",
        image: defaultImage,
        tags: ["도시", "Vision AI", "Case"],
        title: "중고차 거래 및 단지 관리 플랫폼: AI 기반 매물 등록 및 운영 효율 극대화",
    },
    {
        description:
            "기존 골프장 운영은 코스 전체의 상태를 실시간으로 한눈에 파악할 수 있는 통합 시스템이 부재했습니다. 이로 인해 잔디 관리가 관리자의 주관적 경험에 의존하게 되면서, 상태와 관계없이 불필요하거나 과도한 시약 및 시비 작업이 반복되는 자원 낭비 문제가 있었습니다. 특히 모든 작업 일지가 문서 기반으로 관리되어 과거 이력을 정밀하게 추적하기 어려웠으며, 축적된 데이터를 활용해 최적의 잔디 생육 환경을 과학적으로 조성하는 데 상당한 제약이 존재해 왔습니다.",
        id: "golf-course-management-system",
        image: defaultImage,
        tags: ["인프라", "Vision AI", "Case"],
        title: "골프장 스마트 코스 관리 시스템: AI 기반 잔디 진단 및 데이터 중심 운영 혁신",
    },
    {
        description:
            "도시 인프라의 핵심인 광케이블망은 지하 관로와 맨홀 등 복잡한 경로로 얽혀 있어, 장애 발생 시 정확한 단선 위치를 파악하는 데 어려움을 겪었습니다. 종이로 된 선번장이나 파편화된 관리 대장으로는 실시간 연결 관계를 추적하기 어려웠으며, 이는 통신 장애 시 복구 시간을 늦추어 막대한 사회적 비용을 야기하는 원인이 되었습니다.",
        id: "integrated-facility-management",
        image: defaultImage,
        tags: ["인프라", "AI Agent", "Case"],
        title: "광케이블 및 시설물 통합 관리: 선로 장애 대응 및 유지보수 혁신",
    },
].map((item) => ({
    ...item,
    image: useCaseImages[item.id],
}));
