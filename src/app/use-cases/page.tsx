import { SiteCaseCard } from "@/components/site/SiteCaseCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { SiteSectionIntro } from "@/components/site/SiteSectionIntro";
import styles from "./page.module.css";

const assetBase = "https://seed-bronze-70048020.figma.site";
const asset = (path: string) => `${assetBase}${path}`;

const categories = ["전체", "재난·안전", "제조·공정", "도시·인프라", "스마트팜·에너지"];

const cases = [
    {
        description: "AI가 도면을 이해하고 판단하는 자동 견적 시스템을 구축했습니다. 리드타임을 50% 단축하고, 견적 기준을 표준화했습니다.",
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["재난", "Vision AI", "Case"],
        title: "산불 및 재난 통합 관제: 3km 반경 미세 징후 조기 탐지",
    },
    {
        description: "곤돌라 이용객 낙상 위험을 실시간 감시하고 즉각 대응하는 안전 관제 체계를 구축했습니다.",
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["인프라", "Vision AI", "Case"],
        title: "하이원리조트 곤돌라 안전 관리: 이용객 낙상 및 사고 제로화",
    },
    {
        description: "파도와 기상 조건 속에서도 사고 위치 추적 정밀도를 높인 안전 대응 체계를 제공합니다.",
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["안전", "Vision AI", "Case"],
        title: "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화",
    },
    {
        description: "상시 무인 보안과 침입 대응 체계를 AI 경계 로봇과 통합 관제로 구현했습니다.",
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["도시", "Vision AI", "Tech"],
        title: "AI 경계 로봇 통합 관제: 상시 무인 보안 및 침입 대응 체계 확립",
    },
    {
        description: "공항 혼잡도 예측과 체류객 지원을 위해 실시간 상황 전파와 대응을 자동화했습니다.",
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["재난", "AI Agent", "Case"],
        title: "제주공항 재난 및 체류객 지원: 혼잡도 예측 및 실시간 상황 전파",
    },
    {
        description: "디지털 SOP 기반으로 복합 재난 대응 의사결정을 자동화했습니다.",
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["재난", "AI Agent", "Tech"],
        title: "복합 재난 대응 e-SOP: 상황 전파 및 의사결정 자동화",
    },
    {
        description: "광케이블과 시설물 데이터를 통합 관제해 선로 장애 대응과 유지보수 혁신을 실현했습니다.",
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["인프라", "AI Agent", "Case"],
        title: "광케이블 및 시설물 통합 관리: 선로 장애 대응 및 유지보수 혁신",
    },
    {
        description: "복합 계측기 판독을 자동화해 이기종 설비 데이터를 통합하고 자산화했습니다.",
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["제조", "Vision AI", "Tech"],
        title: "복합 계측기 판독 자동화: 이기종 설비 데이터 통합 및 자산화",
    },
    {
        description: "노후 설비의 아날로그 게이지 판독을 자동화해 디지털 전환 속도를 높였습니다.",
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["제조", "Vision AI", "Tech"],
        title: "노후 설비 디지털 전환: 아날로그 게이지 판독 자동화",
    },
    {
        description: "스팀트랩 상태를 예측 정비해 에너지 손실 최소화와 정비 효율 극대화를 지원했습니다.",
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["제조", "AI Agent", "Case"],
        title: "제조 공장 스팀트랩 예지 정비: 에너지 손실 최소화 및 정비 효율 극대화",
    },
    {
        description: "축전지 및 전력 설비를 계층적으로 관리해 에너지 저장 장치 안정성을 확보했습니다.",
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["에너지", "AI Agent", "Case"],
        title: "축전지 및 전력 설비 EMS: 에너지 저장 장치 계층적 관리 및 안정성 확보",
    },
];

export default function UseCasesPage() {
    const featuredCase = cases[0];
    const gridCases = cases.slice(1);

    return (
        <main className={styles.page}>
            <section className={styles.detailHero}>
                <div className={styles.container}>
                    <SiteSectionIntro
                        body="Vision AI 기술로 압도적인 초생산성과 비용 효율을 증명한 성공 사례를 확인해 보세요."
                        title="Use Cases"
                        titleAs="h1"
                    />
                    <div className={styles.tabRow}>
                        {categories.map((category, index) => (
                            <span
                                className={`${styles.tabPill} ${index === 0 ? styles.tabPillActive : ""}`}
                                key={category}
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.featuredSection}>
                <div className={styles.container}>
                    <article className={styles.featuredCase}>
                        <div className={styles.featuredMedia}>
                            <img alt="" src={featuredCase.image} />
                        </div>
                        <div className={styles.featuredCopy}>
                            <div className={styles.featuredTags}>
                                {featuredCase.tags.map((tag) => (
                                    <span className={styles.featuredTag} key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h2 className={styles.featuredTitle}>{featuredCase.title}</h2>
                            <p className={styles.featuredBody}>{featuredCase.description}</p>
                        </div>
                    </article>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.relatedGrid}>
                        {gridCases.map((item) => (
                            <SiteCaseCard
                                description={item.description}
                                imageSrc={item.image}
                                key={item.title}
                                tags={item.tags}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <div className={styles.ctaSpacer}>
                <SiteFooterCta
                    button={<SitePrimaryButton />}
                    description="산업 지능화의 시작, 인포지아와 함께 하세요."
                    title={["Vision AI That Sees", "Beyond The Surface."]}
                    variant="vision-ai"
                />
            </div>
            <SiteFooter privacyHref="/" />
        </main>
    );
}
