/* eslint-disable @next/next/no-img-element */
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePartnerStrip } from "@/components/site/SitePartnerStrip";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import styles from "./page.module.css";

const assetBase = "https://seed-bronze-70048020.figma.site";
const asset = (path: string) => `${assetBase}${path}`;

const solutions = [
    {
        body: "화물 적재 상태와 작업 현장을 실시간으로 모니터링하여 파손 위험이나 안전사고를 예방합니다. 물류센터 운영 안정성과 작업 안전성을 동시에 확보합니다.",
        icon: "/_assets/v11/c19c362381ef974bf8eca9d4839f71212e885cb5.svg",
        title: "적재 상태 및\n물류 안전 관리",
    },
    {
        body: "Vision AI가 상품 이동과 재고 현황을 실시간으로 추적하여 입출고 과정을 자동 관리합니다. 수작업 검수 부담을 줄이고 운영 정확도를 향상시킵니다.",
        icon: "/_assets/v11/732184d8b27f2a038a6a54fc0599f047d79b053a.svg",
        title: "입출고 및\n재고 자동 인식",
    },
    {
        body: "차량 이동 경로와 물류 흐름을 분석하여 병목 구간을 식별합니다. 물류 처리 속도를 높이고 운영 비용을 절감할 수 있도록 지원합니다.",
        icon: "/_assets/v11/2cf93b00af85c23adddeea0409a656b9c89005a6.svg",
        title: "차량 및 물류\n흐름 최적화",
    },
    {
        body: "물류 데이터와 운영 현황을 통합 분석하여 공급망 전반의 효율성을 진단합니다. 운영 개선 포인트를 도출하여 안정적인 물류 서비스를 지원합니다.",
        icon: "/_assets/v11/5f88680007cdf6b3ead26d5668eaeb0eaf674b7d.svg",
        title: "공급망\n운영 분석",
    },
];

const workflow = [
    {
        body: "입출고, 적재, 이동 경로 등 물류센터 전반의 운영 흐름을 실시간으로 분석하여 모든 물류 프로세스를 시각화합니다.",
        list: "물류 흐름 가시화",
        title: ["보이지 않는 물류 데이터를", "연결하는 AI"],
    },
    {
        body: "재고 불일치, 작업 지연, 적재 오류와 같은 운영 이상 상황을 조기에 감지하여 물류 프로세스의 안정성을 확보합니다.",
        list: "운영 이상 탐지",
        title: ["물류 운영의", "정확도 향상"],
    },
    {
        body: "운영 데이터를 기반으로 물류 자원 배분과 작업 프로세스를 최적화하여 비용 절감과 처리 효율 향상을 실현합니다.",
        list: "공급망 운영 최적화",
        title: ["효율적인", "물류 의사결정을 지원"],
    },
];

const useCases = [
    ["인프라", "Vision AI", "Case", "하이원리조트 곤돌라 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["안전", "Vision AI", "Case", "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화"],
    ["FBG 코리아", "Vision AI", "Case", "하이원리조트 리프트 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["FBG 코리아", "Vision AI", "Tech", "제조 현장 안전 관리: 위험 상황 대응 리드타임 90% 단축"],
];

export default function SolutionLogisticsDistributionPage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroImageWrap}>
                    <img
                        alt=""
                        className={styles.heroImage}
                        src={asset("/_assets/v11/f81a13bf00097874133baf936d9ed279d1b5b904.png")}
                    />
                </div>
                <div className={styles.heroOverlay}>
                    <div className={styles.heroInner}>
                        <p className={styles.eyebrow}>Vision AI for Logistics &amp; Distribution</p>
                        <h1 className={styles.heroTitle}>물류 운영의 정확성과 효율성을 높이는 AI</h1>
                        <p className={styles.heroDescription}>
                            물류 및 유통 전 과정에서 발생하는 데이터를 실시간으로 분석하고
                            운영 상태를 모니터링하는 Vision AI 솔루션으로, 보다 빠르고
                            정확한 공급망 운영을 지원합니다.
                        </p>
                        <a className={styles.heroAction} href="/contact-us">
                            Get started
                        </a>
                    </div>
                </div>
            </section>

            <SitePartnerStrip label="Our Vision AI Solutions are Featured On" />

            <section className={styles.solutionSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our Solution</h2>
                    <div className={styles.solutionVisual}>
                        <img
                            alt=""
                            src={asset("/_assets/v11/ba099b03935796e35a7017c79d799aad482092bf.png")}
                        />
                    </div>
                    <div className={styles.solutionGrid}>
                        {solutions.map((item) => (
                            <article className={styles.solutionCard} key={item.title}>
                                <div className={styles.solutionIconWrap}>
                                    <img alt="" className={styles.solutionIcon} src={asset(item.icon)} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.workflowSection}>
                <div className={styles.container}>
                    <div className={styles.workflowHeader}>
                        <h2 className={styles.sectionTitle}>How Vision AI Solution Works</h2>
                    </div>
                    <div className={styles.workflowBody}>
                        <ol className={styles.workflowTabs} aria-label="Workflow stages">
                            {workflow.map((item, index) => (
                                <li
                                    className={`${styles.workflowTab}${index === 0 ? ` ${styles.workflowTabActive}` : ""}`}
                                    key={item.list}
                                >
                                    <span>{`${index + 1}.`}</span>
                                    <span>{item.list}</span>
                                </li>
                            ))}
                        </ol>
                        <div className={styles.workflowIllustration}>
                            <img
                                alt=""
                                src={asset("/_assets/v11/5a2dd641e649701d91d1b18075e60d73d5167978.png")}
                            />
                            <div className={styles.workflowStrips}>
                                <img
                                    alt=""
                                    src={asset("/_assets/v11/469b06db7d595047c1aad4590f3ebcc1778d0211.png")}
                                />
                                <img
                                    alt=""
                                    src={asset("/_assets/v11/e92b47d1b45068361c9c20c41e1f28127bc9db0c.png")}
                                />
                            </div>
                        </div>
                        <div className={styles.workflowCards}>
                            {workflow.map((item) => (
                                <article className={styles.workflowCard} key={item.list}>
                                    <h3>
                                        <span>{item.title[0]}</span>
                                        <span>{item.title[1]}</span>
                                    </h3>
                                    <p>{item.body}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.storySection}>
                <img
                    alt=""
                    className={styles.storyImage}
                    src={asset("/_assets/v11/10570a7d0d90a31353a090e850bcf8f13e6d5a75.png")}
                />
                <div className={styles.storyInner}>
                    <h2 className={styles.storyTitle}>
                        <span>운영 효율과 정확도를 높이는</span>
                        <span>물류 특화 솔루션</span>
                    </h2>
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
