import { SiteCaseCard } from "@/components/site/SiteCaseCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { SiteSectionIntro } from "@/components/site/SiteSectionIntro";
import styles from "./page.module.css";

const relatedCases = [
    ["인프라", "Vision AI", "Case", "하이원리조트 곤돌라 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["안전", "Vision AI", "Case", "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화"],
    ["FBG 코리아", "Vision AI", "Case", "하이원리조트 리프트 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["FBG 코리아", "Vision AI", "Tech", "제조 현장 안전 관리: 위험 상황 대응 리드타임 90% 단축"],
];

const detailSections = [
    {
        body: "산불은 초기 발견이 늦어질 경우 복합 대형 재난으로 번질 위험이 크지만, 광범위한 산림 지역을 육안이나 일반 CCTV로 상시 감시하기에는 사각지대가 너무 많았습니다. 특히 먼 거리에서 발생하는 미세한 연기나 불꽃을 조기에 식별하는 것이 매우 어려워 상황 전파와 초기 진압을 위한 골든타임을 놓치는 경우가 빈번했습니다.",
        title: "광대역 산림 지역 감시의 한계와 골든타임 확보의 어려움",
    },
    {
        body: "반경 3km 이내의 넓은 지역을 정밀하게 감시하고, 전체 화면의 단 3% 크기에 불과한 미세 정보까지 인식해내는 고성능 비전 AI를 도입했습니다. 태양광 연동 시스템을 통해 전력 공급이 어려운 오지에서도 최대 3일간 중단 없는 감시를 지원하며, NDMS와 자동 연동되어 지능형 상황 전파가 가능하도록 구현했습니다.",
        title: "초정밀 광대역 분석 기술과 국가재난망 연계 체계 구축",
    },
    {
        body: "원거리의 미세 징후를 조기에 포착하고 디지털 SOP를 통해 자동으로 상황을 전파함으로써 대응 속도를 획기적으로 높였습니다. 지도 기반 종합 모니터링 대시보드로 유관 기관 간 실시간 정보 공유가 원활해졌으며, 과학적 재난 대응 체계의 표준을 만들었습니다.",
        title: "재난 피해 최소화 및 유관기관 협업 효율성 증대",
    },
];

export default function UseCasesDetailPage() {
    return (
        <main className={styles.page}>
            <section className={styles.detailHero}>
                <div className={styles.container}>
                    <div className={styles.detailMeta}>
                        <span className={styles.detailMetaItem}>Flomon Vision</span>
                        <span className={styles.detailMetaItem}>재난 안전</span>
                    </div>
                    <p className={styles.detailDate}>2026-06-17</p>
                    <SiteSectionIntro
                        title="산불 및 재난 통합 관제: 3km 반경 미세 징후 조기 탐지"
                        titleAs="h1"
                    />
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.articleLayout}>
                        <div className={styles.articleBody}>
                            {detailSections.map((section) => (
                                <article className={styles.articlePanel} key={section.title}>
                                    <h2 className={styles.caseTitle}>{section.title}</h2>
                                    <p className={styles.caseBody}>{section.body}</p>
                                </article>
                            ))}
                        </div>
                        <aside className={styles.asideCard}>
                            <h2 className={styles.caseTitle}>간단 문의</h2>
                            <p className={styles.caseBody}>
                                사례 도입 상담이 필요하시면 이메일을 남겨주세요.
                            </p>
                            <input
                                aria-label="Email"
                                className={styles.input}
                                placeholder="이메일 입력"
                                type="email"
                            />
                            <button className={styles.inquiryButton} type="button">
                                다음
                            </button>
                        </aside>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <SiteSectionIntro label="Use Cases" title="관련 사례 더 보기" />
                    <div className={styles.caseGrid}>
                        {relatedCases.map(([a, b, c, title]) => (
                            <SiteCaseCard key={title} tags={[a, b, c]} title={title} />
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
