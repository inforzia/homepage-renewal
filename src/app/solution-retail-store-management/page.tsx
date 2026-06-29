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
        body: "시각 언어 모델(VLM)과 CCTV 인프라를 연동하여 방문 없이 원격으로 프로모션 준수율, 청결도, 진열 상태 등 20개 이상의 환경 관리 항목을 자동으로 점검합니다.",
        icon: (
            <SolutionIcon>
                <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9.5h16v9H6z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.4" />
                    <path d="M9 18h10M10 6h8" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
                </svg>
            </SolutionIcon>
        ),
        title: "매장 환경\n자동 점검 시스템",
    },
    {
        body: "통합 분석을 통해 점검이 완료된 각 매장 환경 관리 항목에 대한 결과를 자동으로 수치화하여 체크리스트로 보여줍니다.",
        icon: (
            <SolutionIcon>
                <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 7h12M8 14h12M8 21h12" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
                    <path d="m5.5 6.8 1.5 1.7 2.5-3M5.5 13.8l1.5 1.7 2.5-3M5.5 20.8l1.5 1.7 2.5-3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
                </svg>
            </SolutionIcon>
        ),
        title: "한눈으로 보는\n지능형 체크리스트",
    },
    {
        body: "매장 내 고객의 이동 경로와 체류 시간을 분석하여 인기 구역과 관심 상품을 파악합니다. 고객 행동 데이터를 기반으로 보다 효과적인 매장 운영 전략을 수립할 수 있습니다.",
        icon: (
            <SolutionIcon>
                <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 21c0-3.3 3.1-5 7-5s7 1.7 7 5" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
                    <circle cx="14" cy="10" r="3.8" stroke="currentColor" strokeWidth="2.4" />
                </svg>
            </SolutionIcon>
        ),
        title: "고객 행동 및\n동선 분석",
    },
    {
        body: "매장 환경 상태에 따른 방문 패턴 변화나 동선과 매출 간의 상관관계를 분석하여 차기 맞춤형 마케팅 전략 수립의 근거로 활용합니다.",
        icon: (
            <SolutionIcon>
                <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 21V12.5M14 21V9M21 21V6" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
                    <path d="M5.5 21.5h17" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
                </svg>
            </SolutionIcon>
        ),
        title: "고객 인사이트 및\n마케팅 분석",
    },
];

const workflow = [
    {
        body: "매장 내 CCTV를 통해 청결도, 진열 상태 등 20개 이상의 환경 관리 항목을 자동으로 점검하고, 고객의 이동 동선, 체류 시간, 관심 구역을 분석하여 고객 행동 데이터를 실시간으로 수집합니다.",
        list: "매장 환경 데이터 수집",
        title: ["매장 환경을 철저하게", "점검하는 Vision AI"],
    },
    {
        body: "청결도·진열 상태 등의 환경 점검 결과와 고객 체류 시간·동선 데이터를 하나의 대시보드로 통합합니다. 축적된 데이터를 바탕으로 매장의 시공간별 운영 효율성을 다차원적으로 비교·분석합니다.",
        list: "데이터 통합 분석",
        title: ["매장 상황과 고객 행동을", "다각도로 분석"],
    },
    {
        body: "분석 결과를 기반으로 상품 진열, 인력 운영, 프로모션 전략을 최적화하여 고객 경험과 매출 성과를 동시에 향상시킵니다.",
        list: "최적 인사이트 도출",
        title: ["데이터 기반의", "스마트 리테일 구현"],
    },
];

const useCases = [
    ["인프라", "Vision AI", "Case", "하이원리조트 곤돌라 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["안전", "Vision AI", "Case", "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화"],
    ["FBG 코리아", "Vision AI", "Case", "하이원리조트 리프트 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["FBG 코리아", "Vision AI", "Tech", "제조 현장 안전 관리: 위험 상황 대응 리드타임 90% 단축"],
];

export default function SolutionRetailStoreManagementPage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroImageWrap}>
                    <img
                        alt=""
                        className={styles.heroImage}
                        src={asset("/_assets/v11/f8d19ae660c1e078a44c7df4975e23dbd11d373f.png")}
                    />
                </div>
                <div className={styles.heroOverlay}>
                    <div className={styles.heroInner}>
                        <p className={styles.eyebrow}>Vision AI for Retail &amp; Store Management</p>
                        <h1 className={styles.heroTitle}>고객 경험과 매장 운영을 혁신하는 AI</h1>
                        <p className={styles.heroDescription}>
                            고객 행동과 매장 운영 데이터를 실시간으로 분석하여 최적의
                            운영 전략을 제공하는 Vision AI 솔루션으로, 매장 운영 효율과
                            고객 만족도를 향상시킵니다.
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
                            src={asset("/_assets/v11/f55b2701f0197e527135fcf7bb9e70816ef60317.png")}
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
                items={workflow.map((item) => ({
                    content: <p>{item.body}</p>,
                    image: asset(
                        "/_assets/v11/9ecd515cce0496b946b5038079bf31003caa2b20.png",
                    ),
                    label: item.list,
                    title: item.title.join("\n"),
                }))}
            />

            <section className={styles.storySection}>
                <img
                    alt=""
                    className={styles.storyImage}
                    src={asset("/_assets/v11/4cc5feab30d07ef94a5d8376edb6ae09a5123324.png")}
                />
                <div className={styles.storyInner}>
                    <h2 className={styles.storyTitle}>
                        <span>고객 경험과 운영을 혁신하는</span>
                        <span>리테일 특화 솔루션</span>
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
