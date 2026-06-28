/* eslint-disable @next/next/no-img-element */
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import styles from "./page.module.css";

const assetBase = "https://seed-bronze-70048020.figma.site";
const asset = (path: string) => `${assetBase}${path}`;

const tags = ["재난", "Vision AI", "Case"];

const sections = [
    {
        body: "산불은 초기 발견이 늦어질 경우 복합 대형 재난으로 번질 위험이 크지만, 광범위한 산림 지역을 육안이나 일반 CCTV로 상시 감시하기에는 사각지대가 너무 많았습니다. 특히 먼 거리에서 발생하는 미세한 연기나 불꽃을 조기에 식별하는 것이 매우 어려워 상황 전파와 초기 진압을 위한 골든타임을 놓치는 경우가 빈번했습니다.",
        title: "광대역 산림 지역 감시의 한계와 골든타임 확보의 어려움",
    },
    {
        body: "반경 3km 이내의 넓은 지역을 정밀하게 감시하고, 전체 화면의 단 3% 크기에 불과한 미세 정보까지 인식해내는 고성능 비전 AI를 도입했습니다. 태양광 연동 시스템을 통해 전력 공급이 어려운 오지에서도 최대 3일간 중단 없는 감시를 지원하며, 지표 분석을 통해 산불 위험 지수를 실시간 모니터링합니다. 탐지된 위험 정보는 국가재난관리정보시스템(NDMS)과 자동 연동되어 지능형 상황 전파가 가능하도록 구현했습니다.",
        title: "초정밀 광대역 분석 기술과 국가재난망 연계 체계 구축",
    },
    {
        body: "원거리의 미세 징후를 조기에 포착하고 디지털 SOP(e-SOP)를 통해 자동으로 상황을 전파함으로써 대응 속도를 획기적으로 높였습니다. 지도 기반의 종합 모니터링 대시보드를 통해 유관 기관 간의 실시간 정보 공유가 원활해졌으며, 복합 재난 시나리오에 따른 체계적인 대응이 가능해졌습니다. 이는 대규모 산림 소실을 예방하고 인명 및 재산 피해를 최소화하는 과학적 재난 대응 체계의 표준이 되었습니다.",
        title: "재난 피해 최소화 및 유관기관 협업 효율성 증대",
    },
];

const useCases = [
    ["인프라", "Vision AI", "Case", "하이원리조트 곤돌라 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["안전", "Vision AI", "Case", "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화"],
    ["FBG 코리아", "Vision AI", "Case", "하이원리조트 리프트 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["FBG 코리아", "Vision AI", "Tech", "제조 현장 안전 관리: 위험 상황 대응 리드타임 90% 단축"],
];

export default function WildfireDisasterCommandPage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.tagRow}>
                        {tags.map((tag) => (
                            <span className={styles.tag} key={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className={styles.title}>
                        산불 및 재난 통합 관제: 3km 반경 미세 징후 조기 탐지
                    </h1>
                    <p className={styles.date}>2026-06-17</p>
                    <div className={styles.heroVisual}>
                        <img
                            alt=""
                            src={asset("/_assets/v11/7197060203a727e3b76bf0db41929871ade187c9.png")}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.storySection}>
                <div className={styles.storyInner}>
                    <aside className={styles.storyNav}>
                        {sections.map((section, index) => (
                            <a
                                className={`${styles.storyNavItem} ${index === 0 ? styles.storyNavItemActive : ""}`}
                                href={`#section-${index + 1}`}
                                key={section.title}
                            >
                                {section.title}
                            </a>
                        ))}
                    </aside>
                    <div className={styles.storyContent}>
                        {sections.map((section, index) => (
                            <article
                                className={styles.storyBlock}
                                id={`section-${index + 1}`}
                                key={section.title}
                            >
                                <h2>{section.title}</h2>
                                <p>{section.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.consultSection}>
                <div className={styles.consultInner}>
                    <div className={styles.consultVisual}>
                        <div className={styles.consultOverlay}>
                            <p>인포지아의 AI 노하우</p>
                            <strong>전문가와 1:1로 상담해 보세요.</strong>
                        </div>
                    </div>
                    <form className={styles.consultForm}>
                        <label className={styles.field}>
                            <span>
                                이메일 <span className={styles.required}>*</span>
                            </span>
                            <input placeholder="이메일 입력" type="email" />
                        </label>
                        <div aria-hidden="true" className={styles.progressTrack}>
                            <div className={styles.progressFill} />
                        </div>
                        <button className={styles.nextButton} type="button">
                            다음
                        </button>
                    </form>
                </div>
            </section>

            <section className={styles.useCasesSection}>
                <div className={styles.useCasesInner}>
                    <h2 className={styles.useCasesTitle}>Use Cases</h2>
                    <div className={styles.caseGrid}>
                        {useCases.map(([a, b, c, title]) => (
                            <article className={styles.caseCard} key={title}>
                                <div className={styles.caseImageWrap}>
                                    <img
                                        alt=""
                                        src={asset(
                                            "/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png",
                                        )}
                                    />
                                </div>
                                <div className={styles.caseCopy}>
                                    <div className={styles.caseTags}>
                                        <span>{a}</span>
                                        <span>{b}</span>
                                        <span>{c}</span>
                                    </div>
                                    <h3>{title}</h3>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className={styles.pagination}>
                        <button aria-label="Previous cases" className={styles.pageButton} type="button">
                            ‹
                        </button>
                        <span>1 / 2</span>
                        <button aria-label="Next cases" className={styles.pageButton} type="button">
                            ›
                        </button>
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
