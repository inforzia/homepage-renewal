/* eslint-disable @next/next/no-img-element */
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePartnerStrip } from "@/components/site/SitePartnerStrip";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { CardSlider } from "@/components/ui/CardSlider";
import { ScrollLinkedSteps } from "@/components/ui/ScrollLinkedSteps";
import type { ReactNode } from "react";
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
        body: "지능형 카메라가 관제 구역 전역을 상시 탐지하며 환경적 이상 징후를 실시간으로 포착합니다. 이에 더해, 시각 인지 AI가 정밀 분석 알고리즘을 결합한 하이브리드 검증을 수행하여, 복잡한 현장 환경이나 기상 변화로 인한 오경보를 90% 이상 줄입니다.",
        icon: (
            <SolutionIcon>
                <svg
                    fill="none"
                    viewBox="0 0 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14 4 15.8 10.2 22 12l-6.2 1.8L14 20l-1.8-6.2L6 12l6.2-1.8L14 4Z"
                        fill="currentColor"
                    />
                    <path
                        d="M21.5 5.5 22.2 7.8 24.5 8.5l-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z"
                        fill="currentColor"
                    />
                </svg>
            </SolutionIcon>
        ),
        title: "AI 영상기반\n위험 상황 감지",
    },
    {
        body: "이상 징후가 감지되는 즉시 통합 관제 센터와 현장 책임자에게 비상 알람을 실시간으로 전파합니다. 이와 동시에 AI가 분석한 현장의 실시간 영상 데이터와 정확한 위치 정보를 함께 공유하여, 골든타임 내에 즉각적인 구조 및 초동 조치가 이루어지도록 지원합니다.",
        icon: (
            <SolutionIcon>
                <svg
                    fill="none"
                    viewBox="0 0 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14 5a5 5 0 0 1 5 5v2.4l2 2V18H7v-3.6l2-2V10a5 5 0 0 1 5-5Z"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2.4"
                    />
                    <path
                        d="M12 21h4"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2.4"
                    />
                </svg>
            </SolutionIcon>
        ),
        title: "비상 상황 발생시\n경보 알람",
    },
    {
        body: "위험 수준이 임계치를 넘어서는 순간, 추가 피해를 막기 위해 해당 구역의 진입 차단막 가동 및 위험 설비 제어 명령을 즉각 실행합니다. 이와 동시에 현장 경보 장치, 디지털 사이니지와 유기적으로 연동되어 위험 구역 내 인원들을 안전한 지역으로 신속하게 안내합니다.",
        icon: (
            <SolutionIcon>
                <svg
                    fill="none"
                    viewBox="0 0 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 7h12M8 14h12M8 21h12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2.4"
                    />
                    <path
                        d="M14 6v16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2.4"
                    />
                </svg>
            </SolutionIcon>
        ),
        title: "위험 상황 발생 시스템\n자동 제어 및 대응",
    },
    {
        body: "관리 지역 전역의 안전 상태와 실시간 데이터 흐름을 하나의 직관적인 대시보드에서 통합 관리합니다. 나아가 누적된 사고 징후 및 위험 데이터를 기반으로 AI가 다각적인 통계 분석을 수행하여, 잠재적 리스크를 선제적으로 예측하고 방재 대책을 수립할 수 있도록 지원합니다.",
        icon: (
            <SolutionIcon>
                <svg
                    fill="none"
                    viewBox="0 0 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 7.5h16v13H6z"
                        stroke="currentColor"
                        strokeWidth="2.4"
                    />
                    <path
                        d="M10.5 18v-3.5M14 18v-6M17.5 18v-2"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2.4"
                    />
                </svg>
            </SolutionIcon>
        ),
        title: "통합 모니터링 및\n통계분석",
    },
];

const workflow = [
    {
        content: (
            <p>
                강한 흔들림이나 자욱한 연기 등 이상 징후 감지 시 상황을
                인식하고 즉시 대응할 수 있는 액션을 제안합니다. 자연어
                기반 인터페이스를 통해 작업자는 AI 에이전트와 직관적으로
                협업할 수 있고, AI의 판단 근거를 시각화해 사용성을
                강화합니다.
            </p>
        ),
        image: asset("/_assets/v11/6d7fe02eb55dc7d0474c67dc8801c03513aee202.png"),
        label: "현장 상황 인지",
        title: "재난의 사소한\n징조를 이해하는 AI",
    },
    {
        content: (
            <p>
                단순 감지를 넘어 균열 깊이, 진동 상태, 연소 속도 등을 초
                단위로 계산해 위험도를 정량화합니다. 실시간 데이터를
                바탕으로 대피 우선순위와 최적의 방재 경로를 도출하며,
                시각화된 &apos;위험도 맵(Hazard Map)&apos;을 통해 관리자의
                신속한 의사결정을 돕습니다.
            </p>
        ),
        image: asset("/_assets/v11/034222a4f766eb65b56f324c553dd1c07b13a1b2.png"),
        label: "위험 데이터 분석",
        title: "위험 요인의\n실시간 정량화",
    },
    {
        content: (
            <p>
                과거 패턴과 미세한 물리적 변화(기울기, 진동 등)를 결합해
                미래의 재난 가능성을 선제적으로 예측합니다. AI 에이전트가
                &quot;30분 내 붕괴 위험 85%&quot;와 같은 확률적 모델을
                자연어로 브리핑하여, 재난 발생 전 선제적 예방 조치와
                골든타임 확보를 지원합니다.
            </p>
        ),
        image: asset("/_assets/v11/06bc7d53fe790855f2d2c9d0d713279e795da4e1.png"),
        label: "재난 예측 및 대비",
        title: "보이지 않는 위협을\n내다보는 AI",
    },
];

const useCases = [
    [
        "인프라",
        "Vision AI",
        "Case",
        "하이원리조트 곤돌라 안전 관리: 이용객 낙상 및 사고 제로화",
    ],
    [
        "안전",
        "Vision AI",
        "Case",
        "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화",
    ],
    [
        "FBG 코리아",
        "Vision AI",
        "Case",
        "하이원리조트 리프트 안전 관리: 이용객 낙상 및 사고 제로화",
    ],
    [
        "FBG 코리아",
        "Vision AI",
        "Tech",
        "제조 현장 안전 관리: 위험 상황 대응 리드타임 90% 단축",
    ],
];

export default function SolutionDisasterSafetyPage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroImageWrap}>
                    <img
                        alt=""
                        className={styles.heroImage}
                        src={asset(
                            "/_assets/v11/dc28e9c8a2462d73c614d9e7309f430af32dc7e7.png",
                        )}
                    />
                </div>
                <div className={styles.heroOverlay}>
                    <div className={styles.heroInner}>
                        <p className={styles.eyebrow}>
                            Vision AI for Disaster Safety
                        </p>
                        <h1 className={styles.heroTitle}>
                            재난 상황을 감지하고
                            <br />
                            최적의 대응을 도출하는 AI
                        </h1>
                        <p className={styles.heroDescription}>
                            복잡한 재난 상황을 실시간으로 감지하고 최적의 대응
                            시나리오를 도출하는 Vision AI 솔루션으로,
                            <br />
                            재난 현장의 안전 기준을 완전히 새롭게 정의합니다.
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
                            src={asset(
                                "/_assets/v11/edc50c34100e5c79a1f0b09cbba8f25f5c090efe.png",
                            )}
                        />
                    </div>
                    <div className={styles.solutionGrid}>
                        {solutions.map((item) => (
                            <article
                                className={styles.solutionCard}
                                key={item.title}
                            >
                                <div className={styles.solutionIconWrap}>
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ScrollLinkedSteps
                heading="How Vision AI Solution Works"
                items={workflow}
            />

            <section className={styles.storySection}>
                <img
                    alt=""
                    className={styles.storyImage}
                    src={asset(
                        "/_assets/v11/b2b838d40fc0a60ab4a114697f4247469610616d.png",
                    )}
                />
                <div className={styles.storyInner}>
                    <h2 className={styles.storyTitle}>
                        <span>상황을 이해하고 설계하는</span>
                        <span>재난 특화 솔루션</span>
                    </h2>
                </div>
            </section>

            <CardSlider
                fadeColor="#f1f3f5"
                heading="Use Cases"
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
