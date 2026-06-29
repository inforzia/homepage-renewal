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
        body: "Vision AI가 시설 전역을 실시간으로 분석하여 침입, 화재, 낙상, 위험 구역 접근 등 다양한 안전 위협을 즉시 탐지합니다. 복합적인 영상 분석 기술을 통해 오탐지를 최소화하고 정확도 높은 안전 관제를 제공합니다.",
        icon: (
            <SolutionIcon>
                <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <rect height="12" rx="2.5" stroke="currentColor" strokeWidth="2.4" width="16" x="6" y="8" />
                    <path d="M14 4v4M11 23h6" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
                </svg>
            </SolutionIcon>
        ),
        title: "AI 영상기반\n위험 상황 감지",
    },
    {
        body: "인가되지 않은 출입이나 제한 구역 접근을 실시간으로 식별하고 출입 이력을 자동 기록합니다. 보안 시스템과 연동하여 시설 내 보안 수준을 강화하고 관리 효율을 높입니다.",
        icon: (
            <SolutionIcon>
                <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5 21 8v5.5c0 4.2-2.6 7.7-7 9.5-4.4-1.8-7-5.3-7-9.5V8l7-3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.4" />
                    <path d="m11.3 14.2 1.9 1.9 3.7-4.3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
                </svg>
            </SolutionIcon>
        ),
        title: "출입 통제 및\n보안 관리",
    },
    {
        body: "사고 발생 시 경보 시스템, 방송 설비, 출입 통제 장치와 자동 연동되어 신속한 초기 대응을 수행합니다. 현장 상황에 맞는 대응 절차를 자동 실행하여 피해 확산을 최소화합니다.",
        icon: (
            <SolutionIcon>
                <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5a5 5 0 0 1 5 5v2.4l2 2V18H7v-3.6l2-2V10a5 5 0 0 1 5-5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.4" />
                    <path d="M12 21h4" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
                </svg>
            </SolutionIcon>
        ),
        title: "비상 대응\n프로세스 자동화",
    },
    {
        body: "시설 전체의 안전 상태와 이벤트 현황을 하나의 화면에서 관리합니다. 위험 발생 추이와 운영 데이터를 시각화하여 보다 체계적인 안전 관리 의사결정을 지원합니다.",
        icon: (
            <SolutionIcon>
                <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 7.5h16v13H6z" stroke="currentColor" strokeWidth="2.4" />
                    <path d="M10.5 18v-3.5M14 18v-6M17.5 18v-2" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
                </svg>
            </SolutionIcon>
        ),
        title: "통합 안전\n관제 대시보드",
    },
];

const workflow = [
    {
        body: "다양한 CCTV와 영상 장비 및 센서를 통해 시설 전역을 실시간으로 모니터링하며, 침입, 화재, 낙상, 위험 구역 접근 등 잠재적 위험 요소를 즉시 식별합니다.",
        list: "실시간 위험 요소 인식",
        title: ["24시간 안전 상태를 감시하는", "Vision AI"],
    },
    {
        body: "단순 감지를 넘어 위험 수준과 상황 맥락을 종합적으로 분석하여, 경보 발송, 출입 통제, 관제 시스템 연계 등 적절한 대응 프로세스를 자동으로 실행합니다.",
        list: "상황 판단 및 대응 연계",
        title: ["특이 상황을 분석을 통한", "즉각적인 대응"],
    },
    {
        body: "누적된 이벤트와 운영 데이터를 분석하여 사고 발생 패턴과 취약 구간을 파악해 끊임없이 고도화합니다. 이를 통해 보다 체계적이고 예방 중심의 안전 관리 체계를 완성합니다.",
        list: "예방 중심 안전 운영",
        title: ["데이터 기반의", "선제적 안전 관리"],
    },
];

const useCases = [
    ["인프라", "Vision AI", "Case", "하이원리조트 곤돌라 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["안전", "Vision AI", "Case", "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화"],
    ["FBG 코리아", "Vision AI", "Case", "하이원리조트 리프트 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["FBG 코리아", "Vision AI", "Tech", "제조 현장 안전 관리: 위험 상황 대응 리드타임 90% 단축"],
];

export default function SolutionFacilityInfrastructurePage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroImageWrap}>
                    <img
                        alt=""
                        className={styles.heroImage}
                        src={asset("/_assets/v11/6c7d3120108066c0ae2fc235d86686865e1e229a.png")}
                    />
                </div>
                <div className={styles.heroOverlay}>
                    <div className={styles.heroInner}>
                        <p className={styles.eyebrow}>Vision AI for Facility &amp; Infrastructure</p>
                        <h1 className={styles.heroTitle}>
                            시설물의 유지보수와
                            <br />
                            이용자 안전을 보장하는 AI
                        </h1>
                        <p className={styles.heroDescription}>
                            시설물 내 특이 상황과 잠재적 위험 요소를 실시간으로 감지하고
                            신속한 대응을 지원하는 Vision AI 솔루션으로, 더 안전하고
                            효율적인 시설 운영 환경을 구현합니다.
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
                            src={asset("/_assets/v11/c4d92161dbb59b027baecd3498a827f8541e0d2f.png")}
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
                        "/_assets/v11/1b62d727f65d660abe6066623c626c381ca250b2.png",
                    ),
                    label: item.list,
                    title: item.title.join("\n"),
                }))}
            />

            <section className={styles.storySection}>
                <img
                    alt=""
                    className={styles.storyImage}
                    src={asset("/_assets/v11/aa01f1885070d29ebd4b341042a492309b98590e.png")}
                />
                <div className={styles.storyInner}>
                    <h2 className={styles.storyTitle}>
                        <span>위험을 예측하고 대응하는</span>
                        <span>시설 안전 특화 솔루션</span>
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
