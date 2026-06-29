/* eslint-disable @next/next/no-img-element */
import { CardSlider } from "@/components/ui/CardSlider";
import { ScrollLinkedSteps } from "@/components/ui/ScrollLinkedSteps";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePartnerStrip } from "@/components/site/SitePartnerStrip";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import styles from "./page.module.css";

const assetBase = "https://seed-bronze-70048020.figma.site";
const asset = (path: string) => `${assetBase}${path}`;

const solutions = [
    {
        body: "온도, 습도, 조도 등 환경 데이터를 바탕으로 최적의 재배 환경을 제안합니다. 관수 및 환경 제어 시스템과 연동해 스마트한 농장 운영을 지원합니다.",
        title: "농장 환경\n자동 최적화",
    },
    {
        body: "Vision AI가 작물의 성장 상태를 실시간으로 분석하여 생육 단계와 건강 상태를 정밀하게 파악합니다. 데이터 기반 재배 관리를 통해 생산성을 향상시킵니다.",
        title: "작물 생육\n상태 분석",
    },
    {
        body: "작물의 색상 변화, 병반, 생육 이상 등을 조기에 감지하여 피해 확산을 방지합니다. 신속한 대응을 통해 수확량 손실을 최소화할 수 있습니다.",
        title: "병충해 및 이상 징후\n조기 탐지",
    },
    {
        body: "생육 데이터와 환경 정보를 기반으로 수확 시기와 생산량을 예측합니다. 축적된 데이터를 활용하여 지속 가능한 농업 운영 전략을 수립할 수 있습니다.",
        title: "생산량 예측 및\n농업 데이터 분석",
    },
];

const workflow = [
    {
        body: "작물의 성장 상태와 농장 환경을 실시간으로 분석하여 생육 변화와 이상 징후를 조기에 파악합니다.",
        list: "생육 환경 정밀 분석",
        title: ["작물의 변화를", "읽어내는 Vision AI"],
    },
    {
        body: "생육 데이터와 환경 정보를 종합 분석하여 관수, 영양 공급, 환경 관리에 필요한 최적의 운영 인사이트를 제공합니다.",
        list: "농업 데이터 기반 의사결정",
        title: ["경험을 데이터로", "전환하는 AI"],
    },
    {
        body: "AI 분석 결과를 기반으로 농장 설비와 연동하여 환경을 자동 제어하고, 안정적인 생산성과 지속 가능한 농업 운영을 지원합니다.",
        list: "스마트 농장 자동 운영",
        title: ["생산성을 높이는", "자율형 농업 시스템"],
    },
];

const useCases = [
    ["인프라", "Vision AI", "Case", "하이원리조트 곤돌라 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["안전", "Vision AI", "Case", "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화"],
    ["FBG 코리아", "Vision AI", "Case", "하이원리조트 리프트 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["FBG 코리아", "Vision AI", "Tech", "제조 현장 안전 관리: 위험 상황 대응 리드타임 90% 단축"],
];

export default function SolutionSmartFarmingPage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroImageWrap}>
                    <img
                        alt=""
                        className={styles.heroImage}
                        src={asset("/_assets/v11/bd17a82b1fcae790dc860cdd0ddcdbdd72d75f14.png")}
                    />
                </div>
                <div className={styles.heroOverlay}>
                    <div className={styles.heroInner}>
                        <p className={styles.eyebrow}>Vision AI for Smart Farming</p>
                        <h1 className={styles.heroTitle}>작물과 환경을 정밀하게 관리하는 AI</h1>
                        <p className={styles.heroDescription}>
                            농작물의 생육 상태와 농장 환경을 실시간으로 분석하여 최적의
                            관리 방안을 제공하는 Vision AI 솔루션으로, 안정적인 생산성과
                            지속가능한 농업 환경을 구축합니다.
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
                            src={asset("/_assets/v11/55c44eaff1a090fa2cdbeda9837b91afd93ed804.png")}
                        />
                    </div>
                    <div className={styles.solutionGrid}>
                        {solutions.map((item, index) => (
                            <article className={styles.solutionCard} key={item.title}>
                                <span className={styles.solutionIcon}>{index + 1}</span>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ScrollLinkedSteps
                heading="How Vision AI Solution Works"
                items={workflow.map((item, index) => ({
                    content: <p>{item.body}</p>,
                    image: [
                        "/_assets/v11/d332974cadcdc1d04c8498b872fd0ff36ef04868.png",
                        "/_assets/v11/dbb1741077a33dd90ba63e03552b035eeebc7d43.png",
                        "/_assets/v11/4bd61031cd4c4c744b3efa096447a8c707059b2e.png",
                    ].map(asset)[index],
                    label: item.list,
                    title: item.title.join("\n"),
                }))}
            />

            <CardSlider
                fadeColor="#f1f3f5"
                heading="Use Cases"
                headingClassName={styles.useCasesTitle}
                itemWidth={340}
                items={useCases.map(([a, b, c, title]) => (
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
                nextButtonLabel="Next cases"
                previousButtonLabel="Previous cases"
                sectionClassName={styles.useCasesSection}
                sectionStyle={{ padding: "96px 0 48px" }}
            />

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
