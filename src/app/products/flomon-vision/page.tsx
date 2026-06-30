/* eslint-disable @next/next/no-img-element */
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePartnerStrip } from "@/components/site/SitePartnerStrip";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { SiteSectionIntro } from "@/components/site/SiteSectionIntro";
import { partnerLogos } from "@/datas/partnerLogos";
import styles from "./page.module.css";

const assetBase = "https://seed-bronze-70048020.figma.site";
const asset = (path: string) => `${assetBase}${path}`;

const featureHero = {
    chips: ["영상 + 텍스트 통합 분석", "복합 상황까지 정확히 판단"],
    description:
        "단순한 객체 탐지를 넘어 영상 속 텍스트는 물론 정돈 상태, 상품 태그, 인물의 표정과 같은 복합적인 정보를 통합 분석하는 VLM 기술을 적용합니다.",
    image: asset("/_assets/v11/b29cd84dd0007f2fff6df43eb414565760bebb8a.png"),
    line: asset("/_assets/v11/479520c266d97dd636513ffeddd93a3cfd0d3d2a.svg"),
    subtitle: "상황과 맥락을 이해하는 시각언어모델(VLM)",
    title: "맥락 기반 상황 이해",
};

const features = [
    {
        description:
            "단순 근거리 모니터링을 넘어, 최대 반경 3km 내의 미세 징후를 포착합니다. 전체 화면의 3%에 불과한 작은 변화까지 탐지해 위험 상황을 입체적으로 분석하고 데이터로 저장합니다.",
        image: asset("/_assets/v11/6ac32b3a4082c697697c67d2d20b54342e99020a.png"),
        title: "광대역 정밀 탐지 및 데이터 자산화",
    },
    {
        description:
            "검증된 최신 비전 AI 엔진을 불러오거나, 현장 특성에 맞춰 고유하게 커스텀할 수 있습니다. 이를 통해 각 산업 현장에 최적화된, 더욱 정확하고 스마트한 운영 환경을 구축합니다.",
        image: asset("/_assets/v11/97e2d46ad8b9e5b5589c85fa620ece7f3fd2d13e.png"),
        title: "최신 비전 AI 엔진과의 결합",
    },
    {
        description:
            "아날로그 계측기나 수치 그래프를 AI가 직접 읽어 디지털 데이터로 전환합니다. 빛 반사나 어두운 조명 등 열악한 환경에서도 높은 인식률로 노후 설비 관리 공백을 제거합니다.",
        image: asset("/_assets/v11/f175c12fcaf25b045417043dbe83f668a554733e.png"),
        title: "아날로그 자산의 디지털 전환(OCR)",
    },
];

const stats = [
    {
        body: "반지도학습(SSL) 기술과 전문가 피드백 기반의 지속적 재학습 프로세스를 제공하여 현장 환경 변화에 따른 탐지 오차를 최소화하고 분석의 정밀도를 향상시켰습니다.",
        title: "탐지 정확도 및 신뢰성",
        unit: "% 달성",
        value: "98",
    },
    {
        body: "시각 언어 모델(VLM) 기술을 통해 사람이 직접 확인하던 20여 가지 이상의 매장 및 현장 환경 관리 항목을 지능형 체크리스트로 100% 자동 전환시켰습니다.",
        title: "매장 및 관리 현장 자동화",
        unit: "% 실현",
        value: "100",
    },
    {
        body: "엣지(Edge) 기반 분산 추론과 고성능 비동기 데이터 스트리밍 기술을 제공하여, 서버의 하드웨어 리소스 사용을 최적화하고 처리 용량을 2배 이상 확대했습니다.",
        title: "GPU 운용 부하",
        unit: "% 절감",
        value: "40",
    },
];

const taskTabs = [
    "작업자 안전관리",
    "응급 상황 감지",
    "반출입 현황 자동화",
    "계측기 원격 판독",
];

const industries = [
    {
        description:
            "초정밀 AI로 광범위한 지역의 재난 징후를 조기에 탐지하고 전파합니다. 사각지대 없는 상시 감시 체계를 통해 복합 재난 상황에서도 실시간으로 골든타임을 확보합니다.",
        image: asset("/_assets/v11/810429b5ccd1f9b9a3f64149f1eea9c5bc4348eb.png"),
        title: "재난 안전",
    },
    {
        description:
            "노후 설비와 건축물의 미세한 이상 징후를 실시간으로 판독해 예측합니다. 육안 검사의 한계를 극복하고 24시간 모니터링하여 구조물 사고를 사전에 원천 차단합니다.",
        image: asset("/_assets/v11/c754904af3dff44fa316e819e3cfed05c071459a.png"),
        title: "시설물 안전",
    },
    {
        description:
            "고객 행동 패턴과 매장 내 혼잡도를 실시간으로 분석해 최적의 동선을 제공합니다. 데이터 기반의 지능형 관리를 통해 고객 경험과 매장 운영 효율을 동시에 극대화합니다.",
        image: asset("/_assets/v11/38233c6dde22691b0d53896252f28bc01f96a011.png"),
        title: "리테일 및 매장",
    },
    {
        description:
            "작업 현장의 안전 위반 행위와 설비 결함을 실시간으로 포착해 자동 제어합니다. 복잡한 고위험 환경의 위험 요소를 뿌리 뽑아 공백 없는 제로(Zero) 재해 현장을 구현합니다.",
        image: asset("/_assets/v11/d20a813f318be1fa57fd2600726d8c0fe3533d88.png"),
        title: "제조 및 공정",
    },
    {
        description:
            "입출고부터 적재, 운송까지의 전 과정과 물류 흐름을 지능적으로 관제합니다. 파편화된 현장 데이터를 실시간 통합해 병목 현상을 해결하고 처리 속도를 획기적으로 높입니다.",
        image: asset("/_assets/v11/766b278ff055e081d54d220db278de8eab2699e8.png"),
        title: "물류 및 유통업",
    },
    {
        description:
            "작물 생육 상태와 환경 데이터를 정밀 분석해 최적의 환경을 자동 제어합니다. 기후 변화와 인력 부족에 관계없이 24시간 안정적인 농업 생산성과 운영 예측성을 지원합니다.",
        image: asset("/_assets/v11/5fba15b26f40a590e08e11cb546098b48f9b5842.png"),
        title: "스마트팜",
    },
];

const testimonials = [
    {
        body: "AI 탑승 결함 감지 및 자동 제동 기술 도입으로 인해, 리프트 위험 거동을 사전에 포착하여 추락 사고를 원천 차단하는 효과를 볼 수 있었습니다.",
        logo: asset("/_assets/v11/abeab1212708531ace9e3ce84b07adbc7f0f8666.png"),
        title: "24시간 실시간 관제 및 자동 알람 시스템으로 안전 사고 제로화",
    },
    {
        body: "OCR 및 복합 비전 AI 기술 도입으로 인해, 파편화된 계측 데이터를 실시간 통합하여 수작업 오류를 원천 차단하는 효과를 볼 수 있었습니다.",
        logo: asset("/_assets/v11/d82c31298f0e73ad1102d9b88dce96a7981a6102.png"),
        title: "이기종 설비 데이터 관리 100% 자동화 및 자산화",
    },
];

const visionPartnerLogos = partnerLogos.slice(0, 5);

export default function ProductFlomonVisionPage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <h1 className={styles.heroTitle}>
                        <span>현장의 모든 순간을 감지하는</span>
                        <span className={styles.gradientVision}>Vision AI</span>
                    </h1>
                    <p className={styles.heroDescription}>
                        제조·건설 현장의 세밀한 공정 변화부터 안전 상태와 재난 징조까지,
                        현장의 모든 징후와 순간을 데이터화하여 관제 환경을 지능형 자동화
                        체계로 혁신합니다.
                    </p>
                    <div className={styles.heroActions}>
                        <a className={styles.secondaryAction} href="/company/contact-us">
                            소개서 다운로드
                        </a>
                        <a className={styles.primaryAction} href="/company/contact-us">
                            도입 문의하기
                        </a>
                    </div>
                    <div className={styles.heroVisual}>
                        <img
                            alt="Flomon Vision overview"
                            src={asset("/_assets/v11/b76b6ba3011adaa93b6c091687149de7caee422f.png")}
                        />
                    </div>
                </div>
            </section>

            <SitePartnerStrip
                logos={visionPartnerLogos}
                sectionClassName={styles.partnerStrip}
                useDefaultSpacing={false}
            />

            <section className={`${styles.section} ${styles.featureSection}`}>
                <div className={styles.container}>
                    <div className={styles.featureSectionIntro}>
                        <h2>AI 관제의 새로운 기준, Flomon Vision</h2>
                    </div>
                    <article className={styles.featureHeroCard}>
                        <div className={styles.featureHeroCopy}>
                            <p className={styles.featureEyebrow}>
                                {featureHero.subtitle}
                            </p>
                            <p className={styles.featureHeroLead}>
                                객체 탐지를 넘어, 상황, 행동, 환경 맥락을 통합 분석합니다.
                            </p>
                            <h3 className={styles.featureHeroTitle}>
                                {featureHero.title}
                            </h3>
                            <p className={styles.featureHeroBody}>
                                {featureHero.description}
                            </p>
                            <div className={styles.featureLineList}>
                                {featureHero.chips.map((chip) => (
                                    <div className={styles.featureLineItem} key={chip}>
                                        <img alt="" src={featureHero.line} />
                                        <span>{chip}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.featureHeroMedia}>
                            <img alt="" src={featureHero.image} />
                        </div>
                    </article>
                    <div className={styles.featureGrid}>
                        <article className={styles.featureCard} key={features[0].title}>
                            <div className={styles.featureMedia}>
                                <img alt="" src={features[0].image} />
                            </div>
                            <h3>{features[0].title}</h3>
                            <p>{features[0].description}</p>
                        </article>
                        <div className={styles.featureStack}>
                            {features.slice(1).map((feature) => (
                                <article className={styles.featureCard} key={feature.title}>
                                    <div className={styles.featureMedia}>
                                        <img alt="" src={feature.image} />
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <SiteSectionIntro title="현장에서 검증된 Flomon Vision 관제 성과" />
                    <div className={styles.statGrid}>
                        {stats.map((stat) => (
                            <article className={styles.statCard} key={stat.title}>
                                <h3 className={styles.statCaption}>{stat.title}</h3>
                                <p className={styles.statValue}>
                                    <span>{stat.value}</span>
                                    <span className={styles.statUnit}>{stat.unit}</span>
                                </p>
                                <p>{stat.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <SiteSectionIntro
                        body="작업자 안전관리, 응급 상황 감지, 반출입 현황 자동화, 계측기 원격 판독까지 핵심 작업을 하나의 관제 흐름으로 연결합니다."
                        title="핵심 Vision AI 작업 살펴보기"
                    />
                    <div className={styles.tabRow}>
                        {taskTabs.map((tab, index) => (
                            <span
                                className={`${styles.tabPill} ${index === 0 ? styles.tabPillActive : ""}`}
                                key={tab}
                            >
                                {tab}
                            </span>
                        ))}
                    </div>
                    <div className={styles.mediaFrame}>
                        <div className={styles.mediaCard}>
                            <img
                                alt="Vision AI task preview"
                                src={asset("/_assets/v11/ece298d0ec2c16f10310d45724b276a6035cb503.png")}
                            />
                        </div>
                        <p className={styles.sectionBody}>
                            영역 내의 사람, 차량, 장비 등 객체를 식별하고
                            분류하는 기능으로, 안전 사고 예방이나 공정 자동화
                            분야에 활용됩니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <SiteSectionIntro title="Flomon Vision 실제 고객 후기" />
                    <div className={styles.testimonialGrid}>
                        {testimonials.map((testimonial) => (
                            <article
                                className={styles.testimonialCard}
                                key={testimonial.title}
                            >
                                <h3>{testimonial.title}</h3>
                                <p>{testimonial.body}</p>
                                <div className={styles.testimonialFooter}>
                                    <img
                                        alt=""
                                        className={styles.testimonialLogo}
                                        src={testimonial.logo}
                                    />
                                    <span className={styles.moreLink}>
                                        더 보기
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <SiteSectionIntro
                        body="산업 전반에서 새로운 기준을 제시하는 Flomon Vision의 현장별 사례를 확인해 보세요."
                        label="Learn More"
                        title="Flomon Vision 현장 적용 사례"
                    />
                    <div className={styles.caseGrid}>
                        {industries.map((industry) => (
                            <article className={styles.caseCard} key={industry.title}>
                                <div className={styles.caseCardMedia}>
                                    <img alt="" src={industry.image} />
                                </div>
                                <div className={styles.caseCardCopy}>
                                    <h3>{industry.title}</h3>
                                    <p>{industry.description}</p>
                                </div>
                            </article>
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
