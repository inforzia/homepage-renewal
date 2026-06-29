/* eslint-disable @next/next/no-img-element */
import { ScrollLinkedSteps } from "@/components/ui/ScrollLinkedSteps";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { VisionAiHero } from "@/components/site/VisionAiHero";
import styles from "./page.module.css";

const heroBackground = "/images/vision-ai/hero-background.png";
const comparisonDivider = "/images/vision-ai/comparison-divider.svg";
const narrativeBackground = "/images/vision-ai/narrative-background.png";
const overviewVisual = "/images/vision-ai/overview-strip-secondary.png";
const overviewStripPrimary = "/images/vision-ai/overview-strip-primary.png";
const overviewStripSecondary = "/images/vision-ai/overview-visual.png";
const legacyPoints = [
    {
        icon: "/images/vision-ai/legacy-technical.png",
        title: "기술적 복잡성 및 성능 한계",
    },
    {
        icon: "/images/vision-ai/legacy-resources.png",
        title: "개발 역량 및 시간 부족",
    },
    {
        icon: "/images/vision-ai/legacy-cost.png",
        title: "비용 및 운영 부담",
    },
    {
        icon: "/images/vision-ai/legacy-detection.png",
        title: "단순 객체 중심 탐지",
    },
];

const solutionPoints = [
    {
        icon: "/images/vision-ai/solution-lowcode.png",
        title: "비주얼 로우 코드 기반의 손쉬운 구축",
    },
    {
        icon: "/images/vision-ai/solution-architecture.png",
        title: "고성능 및 유연한 아키텍처",
    },
    {
        icon: "/images/vision-ai/solution-stability.png",
        title: "합리적 비용 및 안정성 확보",
    },
    {
        icon: "/images/vision-ai/solution-context.png",
        title: "맥락 기반 상황 이해",
    },
];

const workflowTabs = [
    "현장 특화 솔루션",
    "현장 관리의 자동화",
    "AI 구축 플랫폼",
];

const workflowCards = [
    {
        description:
            "연구개발, 생산운영, 수요·공급 관리 등 산업 현장의 핵심 프로세스에 즉시 적용 가능한 시각 지능 특화 AI 솔루션을 빠르게 제공합니다.",
        title: ["현장에서 작동하는", "고성능 Vision AI 솔루션"],
    },
    {
        description:
            "Vision AI가 포착한 현장 상황의 추론·분석은 물론, 현장 대응부터 기존 기업 시스템 제어까지 전 과정을 유기적으로 연결해 완벽한 지능형 자동화를 실현할 수 있도록 구성합니다.",
        title: ["자율 추론 기반의", "AI 에이전트 연동"],
    },
    {
        description:
            "복잡한 현장 인프라와 유기적으로 연동되는 맞춤형 AI 플랫폼 Flomon을 통해, 가장 합리적인 비용과 압도적인 속도로 완벽한 현장 지능화를 완성합니다.",
        title: ["압도적 민첩성의", "초생산성 실현"],
    },
];

export default function VisionAiPage() {
    return (
        <main className={styles.page}>
            <VisionAiHero
                backgroundImageSrc={heroBackground}
                button={<SitePrimaryButton dark />}
                description={[
                    "현장의 모든 순간을 포착하고 분석하며 예측하는 Vision AI.",
                    "인포지아는 가장 완벽한 현장 관제를 현실로 만듭니다.",
                ]}
                title={[
                    "Vision AI That Turns",
                    "Every View into Industrial Value",
                ]}
            />

            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <div className={styles.sectionIntro}>
                        <p className={styles.sectionLabel}>
                            Vision AI for Hyper-Productivity
                        </p>
                        <div className={styles.sectionGrid}>
                            <div className={styles.sectionHeadline}>
                                <h2>
                                    <span>단순한 모니터링을 넘어,</span>
                                    <span>현장의 눈을 데이터 자산으로.</span>
                                </h2>
                            </div>
                            <p className={styles.sectionBody}>
                                단순히 사물은 인식하는 것을 넘어, 현장의 맥락과
                                상황을 통합 분석하는 Flomon Vision AI. 수개월이
                                소요되던 고성능 솔루션 구축 과정을 인포지아는
                                혁신적인 속도로 단축하여, 초생산성을 실현합니다.
                                가장 민첩하고 비용 효율적인 지능형 자동화를 지금
                                경험해 보세요.
                            </p>
                        </div>
                    </div>

                    <div className={styles.comparisonBlock}>
                        <div className={styles.comparisonCard}>
                            <h3>기존 기술·서비스 개발 환경</h3>
                            <p>
                                막대한 비용과 높은 기술 장벽으로 인해 서비스
                                구축에 수개월 이상 소요됩니다.
                            </p>
                            <img
                                alt=""
                                className={styles.comparisonLine}
                                src={comparisonDivider}
                            />
                            <div className={styles.iconRow}>
                                {legacyPoints.map((item) => (
                                    <div
                                        className={styles.iconItem}
                                        key={item.title}
                                    >
                                        <img alt="img" src={item.icon} />
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                            <strong className={styles.comparisonEmphasis}>
                                수일 ~ 수개월 소요
                            </strong>
                        </div>

                        <div className={styles.versus}>VS</div>

                        <div
                            className={`${styles.comparisonCard} ${styles.solutionCard}`}
                        >
                            <h3>Flomon Vision AI Solution</h3>
                            <p>
                                간편하고 직관적인 개발 환경을 제공해 맞춤형
                                Vision AI 솔루션을 압도적으로 빠르게
                                구축·배포하여 가장 합리적인 비용으로 제공합니다.
                            </p>
                            <div className={styles.iconRow}>
                                {solutionPoints.map((item) => (
                                    <div
                                        className={styles.iconItem}
                                        key={item.title}
                                    >
                                        <img alt="img" src={item.icon} />
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                            <strong className={styles.solutionEmphasis}>
                                수시간 ~ 수일만에 구축·배포
                            </strong>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className={styles.storySection}
                style={{ backgroundImage: `url("${narrativeBackground}")` }}
            >
                <div className={styles.container}>
                    <div className={styles.storyContent}>
                        <h2>
                            <span>시각적 데이터화.</span>
                            <span>현장 맞춤형 자동화. 압도적인 구축 민첩성.</span>
                        </h2>
                    </div>
                </div>
            </section>

            <section className={styles.overviewSection}>
                <div className={styles.container}>
                    <div className={styles.sectionGrid}>
                        <div className={styles.sectionHeadline}>
                            <p className={styles.gradientLabel}>
                                Flomon Vision AI for Any Site
                            </p>
                            <h2>
                                <span>현장의 지능화를 책임지는</span>
                                <span>Vision AI</span>
                            </h2>
                        </div>
                        <p className={styles.sectionBody}>
                            인포지아는 독보적인 Vision AI 기술과 자체 개발 AI
                            에이전트 Flomon을 결합하여, 모든 산업 현장에
                            최적화된 맞춤형 자동화 솔루션을 제공합니다.
                        </p>
                    </div>
                </div>
            </section>

            <ScrollLinkedSteps
                heading="How Vision AI Solution Works"
                items={workflowCards.map((card, index) => ({
                    content: <p>{card.description}</p>,
                    image: [
                        overviewVisual,
                        overviewStripPrimary,
                        overviewStripSecondary,
                    ][index],
                    label: workflowTabs[index],
                    title: card.title.join("\n"),
                }))}
            />

            <SiteFooterCta
                button={<SitePrimaryButton />}
                description="산업 지능화의 시작, 인포지아와 함께 하세요."
                title={["Vision AI That Sees", "Beyond The Surface."]}
                variant="vision-ai"
            />

            <SiteFooter privacyHref="/" />
        </main>
    );
}
