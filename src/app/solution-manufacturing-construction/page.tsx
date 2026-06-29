/* eslint-disable @next/next/no-img-element */
import { CardSlider } from "@/components/ui/CardSlider";
import { ScrollLinkedSteps } from "@/components/ui/ScrollLinkedSteps";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePartnerStrip } from "@/components/site/SitePartnerStrip";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import styles from "./page.module.css";

const assetBase = "https://seed-bronze-70048020.figma.site";
const asset = (path: string) => `${assetBase}${path}`;

function SolutionIcon({ children }: { children: ReactNode }) {
    return (
        <span aria-hidden="true" className={styles.solutionIconSvg}>
            {children}
        </span>
    );
}

const solutions = [
    {
        body: "위험 구역 내 계측기 및 패널 점검에 Vision AI 기술을 도입함으로써, 작업자 노출 위험을 최소화하고 산업재해를 선제적으로 예방합니다.",
        icon: (
            <SolutionIcon>
                <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 4 15.8 10.2 22 12l-6.2 1.8L14 20l-1.8-6.2L6 12l6.2-1.8L14 4Z" fill="currentColor" />
                    <path d="M21.5 5.5 22.2 7.8 24.5 8.5l-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" fill="currentColor" />
                </svg>
            </SolutionIcon>
        ),
        title: "AI 기반 위험 구역\n점검 작업 자동화",
    },
    {
        body: "작업자의 위험 행동이나 설비 이상 징후를 조기에 감지합니다. 생산 공정 중 발생할 수 있는 사고와 작업 중단 리스크를 최소화합니다.",
        icon: (
            <SolutionIcon>
                <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5 24 23H4L14 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
                    <path d="M14 11v5" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
                    <circle cx="14" cy="19.2" fill="currentColor" r="1.3" />
                </svg>
            </SolutionIcon>
        ),
        title: "공정 이상 및\n위험 행동 분석",
    },
    {
        body: "제품 외관 및 생산 품질을 실시간으로 검사하여 불량품을 자동 식별합니다. 미세 결함까지 모두 검출하여 품질 경쟁력을 향상시킵니다.",
        icon: (
            <SolutionIcon>
                <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8 6.2 21.8 10.2 10 22H6v-4L17.8 6.2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
                    <path d="m15.8 8.2 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
                </svg>
            </SolutionIcon>
        ),
        title: "AI 기반 품질\n검사 자동화",
    },
    {
        body: "설비 가동률, 작업 흐름, 생산 현황을 분석하여 운영 효율을 극대화합니다. 데이터 기반 의사결정을 통해 생산성 향상을 지원합니다.",
        icon: (
            <SolutionIcon>
                <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 21V13.5M14 21V9.5M22 21V6.5" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
                    <path d="M5 21.5h18" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
                </svg>
            </SolutionIcon>
        ),
        title: "생산성 및\n운영 효율 분석",
    },
];

const workflow = [
    {
        body: "작업자 행동, 설비 상태, 공정 흐름을 실시간으로 분석하여 안전 규정 위반, 작업 이상 및 설비 위험 요소를 신속하게 감지합니다.",
        list: "작업 현장 지능형 모니터링",
        title: ["복잡한 산업 현장을 이해하는", "Vision AI"],
    },
    {
        body: "현장에서 발생하는 다양한 이벤트를 분석하여 품질 문제와 안전 리스크를 동시에 관리합니다. 이를 통해 운영 중단과 사고 발생 가능성을 최소화합니다.",
        list: "품질 및 안전 통합 관리",
        title: ["생산성과 안전을", "동시에 확보"],
    },
    {
        body: "생산 데이터와 작업 데이터를 통합 분석하여 공정 효율을 개선하고, 보다 안전하고 생산적인 작업 환경을 구현합니다.",
        list: "현장 운영 최적화",
        title: ["지속 가능한", "스마트 현장 구축"],
    },
];

const useCases = [
    ["인프라", "Vision AI", "Case", "하이원리조트 곤돌라 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["안전", "Vision AI", "Case", "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화"],
    ["FBG 코리아", "Vision AI", "Case", "하이원리조트 리프트 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["FBG 코리아", "Vision AI", "Tech", "제조 현장 안전 관리: 위험 상황 대응 리드타임 90% 단축"],
];

export default function SolutionManufacturingConstructionPage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroImageWrap}>
                    <img
                        alt=""
                        className={styles.heroImage}
                        src={asset("/_assets/v11/45b3441d28dabbbb7c3645611955bfe5ebf731a9.png")}
                    />
                </div>
                <div className={styles.heroOverlay}>
                    <div className={styles.heroInner}>
                        <p className={styles.eyebrow}>Vision AI for Manufacturing &amp; Construction</p>
                        <h1 className={styles.heroTitle}>산업 현장의 생산성과 안전을 향상시키는 AI</h1>
                        <p className={styles.heroDescription}>
                            제조 및 건설 현장의 작업 환경을 실시간으로 분석하여 운영
                            이슈와 위험 요소를 해결하는 Vision AI 솔루션으로, 생산성과
                            안전성을 모두 강화하는 스마트 현장을 실현합니다.
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
                            src={asset("/_assets/v11/e1f1f090146afb68849396f11e01a3aa68108954.png")}
                        />
                    </div>
                    <div className={styles.solutionGrid}>
                        {solutions.map((item) => (
                            <article className={styles.solutionCard} key={item.title}>
                                <div className={styles.solutionIconWrap}>{item.icon}</div>
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
                        "/_assets/v11/e8d392c5745b2c64adeed70b7231924506a67cbe.png",
                        "/_assets/v11/05e5fce97a50d4bd1bc69e8dcf579c6ca5c25c4a.png",
                        "/_assets/v11/6f6be400ecd0a1ec36b63776aa54f8320df3e7c7.png",
                    ].map(asset)[index],
                    label: item.list,
                    title: item.title.join("\n"),
                }))}
            />

            <section className={styles.storySection}>
                <img
                    alt=""
                    className={styles.storyImage}
                    src={asset("/_assets/v11/ba1cd8221a8936cdd39a8f978f973a2526d03b60.png")}
                />
                <div className={styles.storyInner}>
                    <h2 className={styles.storyTitle}>
                        <span>안전과 생산성을 모두 챙기는</span>
                        <span>산업 현장 특화 솔루션</span>
                    </h2>
                </div>
            </section>

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
