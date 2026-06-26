/* eslint-disable @next/next/no-img-element */
import { SiteCaseCard } from "@/components/site/SiteCaseCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { SiteSectionIntro } from "@/components/site/SiteSectionIntro";
import styles from "./page.module.css";

const assetBase = "https://seed-bronze-70048020.figma.site";
const asset = (path: string) => `${assetBase}${path}`;

const partnerLogos = [
    {
        alt: "Roadpia",
        height: 60,
        src: "/images/inforzia/logo-roadpia.png",
        width: 180,
    },
    {
        alt: "FUTURE ICT",
        height: 60,
        src: "/images/inforzia/logo-future-ict.png",
        width: 110,
    },
    {
        alt: "D&C",
        height: 60,
        src: "/images/inforzia/logo-dnc.png",
        width: 170,
    },
    {
        alt: "thingspire",
        height: 60,
        src: "/images/inforzia/logo-thingspire.png",
        width: 200,
    },
    {
        alt: "WAPPLAB",
        height: 60,
        src: "/images/inforzia/logo-wapplab.png",
        width: 96,
    },
    {
        alt: "Nkia",
        height: 60,
        src: "/images/inforzia/logo-nkia.png",
        width: 150,
    },
    {
        alt: "COWEAVER",
        height: 60,
        src: "/images/inforzia/logo-coweaver.png",
        width: 120,
    },
];

const firstSectionItems = [
    "AI에게 현장 상황 물어보기",
    "알아서 판단하고 움직이는 AI",
    "데이터 분석부터 최적화 제안까지",
];

const strengths = [
    {
        description:
            "수개월이 소요되던 전문가 중심의 AI 개발 프로세스를 혁신하여, 비전문가도 비주얼 편집기로 단 수 시간 만에 지능형 서비스를 완성합니다.",
        title: "압도적인 구축 ROI",
    },
    {
        description:
            "사내 문서와 비정형 데이터를 RAG 시스템으로 통합해 기업의 표준 가이드에 근거한 정확한 의사결정을 내립니다.",
        title: "표준화된 지식 자산",
    },
    {
        description:
            "13종 이상의 산업 표준 프로토콜과 110종 이상의 내장 노드를 통해 데이터 수집, 분석, 장치 제어를 하나의 파이프라인으로 연결합니다.",
        title: "분석에서 제어까지 단일 표준",
    },
];

const steps = [
    {
        description: "CCTV와 각종 센서로 실시간 현장 탐지",
        image: asset("/_assets/v11/8074125bdc9fff0bbc787908f62b338cbf8cd252.png"),
        title: "STEP 1. 입체적 상황 인지",
    },
    {
        description: "연결된 노드를 중심으로 AI 최적 판단",
        image: asset("/_assets/v11/0ea6def3c935ef937e151a0e6623117a4e98b60c.png"),
        title: "STEP 2. 지능형 자율 추론",
    },
    {
        description: "현장 자동 제어 및 실시간 상황 대응",
        image: asset("/_assets/v11/82915808abf9f16f20b554e5e3d0e332f9060ffa.png"),
        title: "STEP 3. 자동화 조치 실행",
    },
    {
        description: "데이터 분석과 AI 재학습으로 모델 최적화",
        image: asset("/_assets/v11/62405d92672238a5234e67152cd96128b76373ea.png"),
        title: "STEP 4. 지속적 고도화 및 자산화",
    },
];

const widgets = [
    {
        description:
            "복잡한 추론 로직과 단계별 의사결정 과정을 시각적으로 구성하며, 멀티 에이전트 협업 체계를 손쉽게 구축합니다.",
        image: asset("/_assets/v11/777dab45733e298f1b4f39c9d8fe511611e80d59.png"),
        title: "워크플로우 기반 오케스트레이션",
    },
    {
        description:
            "운영중인 시스템을 멈추지 않고도 신규 센서를 증설하거나 AI 모델 추가 및 수정을 수행할 수 있습니다.",
        image: asset("/_assets/v11/ea2e31c65e43b3db50bb70fee1ce30c7a658f069.png"),
        title: "실시간 업데이트 및 유지보수 민첩성",
    },
    {
        description:
            "클라우드는 물론 폐쇄망 환경에서도 독립 구축이 가능하며, 역할 기반 접근 제어로 데이터를 안전하게 보호합니다.",
        image: asset("/_assets/v11/9ae3fdbf02b68ff700de4ef32877eb08927283c9.png"),
        title: "유연한 인프라 및 보안",
    },
];

const cases = [
    ["인프라", "Vision AI", "Case", "하이원리조트 곤돌라 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["안전", "Vision AI", "Case", "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화"],
    ["FBG 코리아", "Vision AI", "Case", "하이원리조트 리프트 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["FBG 코리아", "Vision AI", "Tech", "제조 현장 안전 관리: 위험 상황 대응 리드타임 90% 단축"],
];

export default function ProductFlomonAgentPage() {
    return (
        <main className={`${styles.page} ${styles.pageDark}`}>
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <h1 className={styles.heroTitle}>
                        <span>의사결정과 흐름을 설계하는</span>
                        <span className={styles.gradientAgent}>AI 에이전트</span>
                    </h1>
                    <p className={styles.heroDescription}>
                        Vision AI가 포착한 현장의 상황을 스스로 추론하고 분석하여, 현장
                        대응부터 시스템 제어까지 전 과정을 유기적으로 연결해 완벽한 자율
                        제어를 실현합니다.
                    </p>
                    <div className={styles.heroActions}>
                        <a className={styles.secondaryAction} href="/contact-us-2">
                            소개서 다운로드
                        </a>
                        <a className={styles.primaryAction} href="/contact-us-2">
                            도입 문의하기
                        </a>
                    </div>
                    <div className={styles.heroVisual}>
                        <img
                            alt="Flomon Agent overview"
                            src={asset("/_assets/v11/f3785319cefaf518c5659f309fa2a201c53e431f.png")}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.partnerStrip}>
                <div className={styles.partnerViewport}>
                    <div className={styles.partnerTrack}>
                        {partnerLogos.map((logo) => (
                            <img
                                alt={logo.alt}
                                className={styles.partnerLogo}
                                height={logo.height}
                                key={logo.alt}
                                src={logo.src}
                                width={logo.width}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.sectionDark} ${styles.firstSection}`}>
                <div className={styles.container}>
                    <h2 className={styles.firstSectionTitle}>
                        AI가 현장을 이해하면 관리 방식이 달라집니다.
                    </h2>
                    <div className={styles.firstSectionGrid}>
                        <div className={styles.firstSectionCopy}>
                            <h3 className={styles.firstSectionSubtitle}>
                                현장 데이터
                                <br />
                                하나로 연결하기
                            </h3>
                            <div className={styles.firstSectionBody}>
                                <p>
                                    이기종 장치와 센서를 연결하는 순간 기업의 표준 지식
                                    자산으로 전환되고 체계적인 지능형 관리 시스템이
                                    완성됩니다.
                                </p>
                                <p>
                                    📂 스마트 지식베이스: 사내 매뉴얼과 실시간 현장 데이터의
                                    통합 관리
                                </p>
                                <p>
                                    🕒 데이터 이력·관계 관리: 시간 흐름에 따른 장치 상태 및
                                    이벤트 이력 추적
                                </p>
                                <p>
                                    🔗 이기종 데이터 통합: 13종 이상의 표준 프로토콜을 통한
                                    데이터 단일화
                                </p>
                                <p>
                                    🗂 현장&amp;디바이스 관리: 트리 구조를 통한 직관적인 디지털
                                    트윈 환경 구축
                                </p>
                            </div>
                            <div className={styles.firstSectionLinks}>
                                {firstSectionItems.map((item) => (
                                    <div className={styles.firstSectionLink} key={item}>
                                        <img
                                            alt=""
                                            src={asset("/_assets/v11/0a0dbecc7aabb64bda62691267109aa8377af03a.svg")}
                                        />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.firstSectionVisual}>
                            <img
                                alt=""
                                src={asset("/_assets/v11/2cda2f4a7dd7a4c816eda73aa83ddc6f40c0422e.png")}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.sectionDark}`}>
                <div className={styles.container}>
                    <SiteSectionIntro dark title="결정적 차이를 만드는 지능형 자동화" />
                    <div className={styles.featureGrid}>
                        {strengths.map((strength, index) => (
                            <article className={styles.featureCard} key={strength.title}>
                                <div className={styles.iconBadge}>{index + 1}</div>
                                <h3>{strength.title}</h3>
                                <p>{strength.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.sectionDark}`}>
                <div className={styles.container}>
                    <SiteSectionIntro dark title="현장을 이해하고 제어하는 4단계 워크플로우" />
                    <div className={styles.stepGrid}>
                        {steps.map((step) => (
                            <article className={styles.stepCard} key={step.title}>
                                <div className={styles.caseCardMedia}>
                                    <img alt="" src={step.image} />
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.sectionDark}`}>
                <div className={styles.container}>
                    <SiteSectionIntro
                        body="대시보드, 오케스트레이션, 실시간 업데이트까지 운영 민첩성을 극대화하는 핵심 화면입니다."
                        dark
                        label="위젯 대시보드"
                        title="지능형 자동화를 한 화면에서 운영합니다"
                    />
                    <div className={styles.mediaFrame}>
                        <div className={styles.mediaCardDark}>
                            <img
                                alt="Agent dashboard"
                                src={asset("/_assets/v11/548517587964dcde312350085f2c3d114c85f778.png")}
                            />
                        </div>
                        <div className={styles.featureGrid}>
                            {widgets.map((widget) => (
                                <article className={styles.featureCard} key={widget.title}>
                                    <div className={styles.caseCardMedia}>
                                        <img alt="" src={widget.image} />
                                    </div>
                                    <h3>{widget.title}</h3>
                                    <p>{widget.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.sectionDark}`}>
                <div className={styles.container}>
                    <SiteSectionIntro
                        dark
                        label="Use Cases"
                        title="현장에서 검증된 자동화 사례"
                    />
                    <div className={styles.caseGrid}>
                        {cases.map(([a, b, c, title]) => (
                            <SiteCaseCard
                                dark
                                imageSrc={asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png")}
                                key={title}
                                tags={[a, b, c]}
                                title={title}
                            />
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
