/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import styles from "./page.module.css";

const assetBase = "https://seed-bronze-70048020.figma.site";
const asset = (path: string) => `${assetBase}${path}`;

const categories = ["전체", "재난·안전", "제조·공정", "도시·인프라", "스마트팜·에너지"];

const cases = [
    {
        description:
            "AI가 도면을 이해하고 판단하는 자동 견적 시스템을 구축했습니다. 리드타임을 50% 단축하고, 견적 기준을 표준화했습니다.",
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["재난", "Vision AI", "Case"],
        title: "산불 및 재난 통합 관제: 3km 반경 미세 징후 조기 탐지",
    },
    {
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["인프라", "Vision AI", "Case"],
        title: "하이원리조트 곤돌라 안전 관리: 이용객 낙상 및 사고 제로화",
    },
    {
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["안전", "Vision AI", "Case"],
        title: "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화",
    },
    {
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["안전", "Vision AI", "Case"],
        title: "하이원리조트 리프트 안전 관리: 이용객 낙상 및 사고 제로화",
    },
    {
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["안전", "Vision AI", "Tech"],
        title: "제조 현장 안전 관리: 위험 상황 대응 리드타임 90% 단축",
    },
    {
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["보안", "Vision AI", "Tech"],
        title: "AI 경계 로봇 통합 관제: 상시 무인 보안 및 침입 대응 체계 확립",
    },
    {
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["재난", "AI Agent", "Case"],
        title: "제주공항 재난 및 체류객 지원: 혼잡도 예측 및 실시간 상황 전파",
    },
    {
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["재난", "AI Agent", "Tech"],
        title: "복합 재난 대응 e-SOP: 상황 전파 및 의사결정 자동화",
    },
    {
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["인프라", "AI Agent", "Case"],
        title: "광케이블 및 시설물 통합 관리: 선로 장애 대응 및 유지보수 혁신",
    },
    {
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["제조", "Vision AI", "Tech"],
        title: "복합 계측기 판독 자동화: 이기종 설비 데이터 통합 및 자산화",
    },
    {
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["제조", "Vision AI", "Tech"],
        title: "노후 설비 디지털 전환: 아날로그 게이지 판독 자동화",
    },
    {
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["제조", "AI Agent", "Case"],
        title: "제조 공장 스팀트랩 예지 정비: 에너지 손실 최소화 및 정비 효율 극대화",
    },
    {
        image: asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png"),
        tags: ["에너지", "AI Agent", "Case"],
        title: "축전지 및 전력 설비 EMS: 에너지 저장 장치 계층적 관리 및 안정성 확보",
    },
];

export default function UseCasesPage() {
    const [featuredCase, ...gridCases] = cases;

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroCopy}>
                        <h1 className={styles.heroTitle}>Use Cases</h1>
                        <p className={styles.heroBody}>
                            Vision AI 기술로 압도적인 초생산성과 비용 효율을 증명한 성공 사례를 확인해
                            보세요.
                        </p>
                    </div>
                    <div className={styles.tabGroup} role="list" aria-label="Use case categories">
                        {categories.map((category, index) => (
                            <span
                                aria-current={index === 0 ? "true" : undefined}
                                className={`${styles.tabPill} ${index === 0 ? styles.tabPillActive : ""}`}
                                key={category}
                                role="listitem"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.featuredSection}>
                <div className={styles.container}>
                    <Link
                        className={styles.featuredCase}
                        href="/use-cases/wildfire-disaster-command"
                    >
                        <div className={styles.featuredMedia}>
                            <img alt="" src={featuredCase.image} />
                        </div>
                        <div className={styles.featuredCopy}>
                            <div className={styles.caseTags}>
                                {featuredCase.tags.map((tag) => (
                                    <span className={styles.caseTag} key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h2 className={styles.featuredTitle}>{featuredCase.title}</h2>
                            <p className={styles.featuredBody}>{featuredCase.description}</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className={styles.gridSection}>
                <div className={styles.container}>
                    <div className={styles.caseGrid}>
                        {gridCases.map((item) => (
                            <article className={styles.caseCard} key={item.title}>
                                <div className={styles.caseCardMedia}>
                                    <img alt="" src={item.image} />
                                </div>
                                <div className={styles.caseTags}>
                                    {item.tags.map((tag) => (
                                        <span className={styles.caseTag} key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className={styles.caseTitle}>{item.title}</h3>
                            </article>
                        ))}
                    </div>

                    <div className={styles.pagination} aria-label="Use case pages">
                        <button
                            aria-label="Previous page"
                            className={styles.paginationButton}
                            disabled
                            type="button"
                        >
                            <span aria-hidden="true">‹</span>
                        </button>
                        <span className={styles.paginationText}>1 / 3</span>
                        <button
                            aria-label="Next page"
                            className={styles.paginationButton}
                            disabled
                            type="button"
                        >
                            <span aria-hidden="true">›</span>
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
