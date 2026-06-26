import { SiteCaseCard } from "@/components/site/SiteCaseCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePartnerStrip } from "@/components/site/SitePartnerStrip";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { SiteSectionIntro } from "@/components/site/SiteSectionIntro";
import { SiteSplitHero } from "@/components/site/SiteSplitHero";
import styles from "./page.module.css";

const assetBase = "https://seed-bronze-70048020.figma.site";
const asset = (path: string) => `${assetBase}${path}`;

const operations = [
    "지능형 카메라가 관제 구역 전역을 상시 감시하며 위험 행동이나 환경적 이상 징후를 실시간으로 포착합니다.",
    "안전사고나 돌발 리스크가 감지되는 즉시 통합 관제 센터와 현장 책임자에게 비상 알람을 실시간으로 전파합니다.",
    "위험 수준이 임계치를 넘는 순간 진입 차단막 가동과 위험 설비 제어 명령을 실행해 추가 피해를 막습니다.",
    "관리 지역 전역의 안전 상태와 실시간 데이터 흐름을 하나의 대시보드에서 통합 관리하고, 잠재 리스크를 예측합니다.",
];

const howItWorks = [
    {
        description:
            "강한 흔들림이나 자욱한 연기 등 이상 징후 감지 시 상황을 인식하고 즉시 대응할 수 있는 액션을 제안합니다.",
        title: "상황 인식과 실시간 대응 제안",
    },
    {
        description:
            "균열 깊이, 가스 누출 범위, 연소 속도 등을 초 단위로 계산해 위험도를 정량화하고 Hazard Map으로 시각화합니다.",
        title: "정량화된 위험도 분석",
    },
    {
        description:
            "과거 패턴과 미세한 물리적 변화를 결합해 미래의 재난 가능성을 선제적으로 예측하고 예방 조치를 지원합니다.",
        title: "선제적 재난 예측",
    },
];

const useCases = [
    ["인프라", "Vision AI", "Case", "하이원리조트 곤돌라 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["안전", "Vision AI", "Case", "테트라포드 안전 관리: 사고 위치 추적 정밀도 극대화"],
    ["FBG 코리아", "Vision AI", "Case", "하이원리조트 리프트 안전 관리: 이용객 낙상 및 사고 제로화"],
    ["FBG 코리아", "Vision AI", "Tech", "제조 현장 안전 관리: 위험 상황 대응 리드타임 90% 단축"],
];

export default function SolutionDisasterSafetyPage() {
    return (
        <main className={styles.page}>
            <SiteSplitHero
                actions={
                    <a className={styles.primaryAction} href="/contact-us-2">
                        Get started
                    </a>
                }
                description="재난과 안전 관제를 하나의 지능형 워크플로우로 연결해 감지, 분석, 알람, 제어, 예측까지 통합 수행합니다."
                eyebrow="Our Products"
                imageAlt="Disaster safety solution"
                imageSrc={asset("/_assets/v11/dc28e9c8a2462d73c614d9e7309f430af32dc7e7.png")}
                title={
                    <>
                        <span>Vision AI for</span>
                        <span>Disaster Safety</span>
                    </>
                }
            />

            <SitePartnerStrip label="Our Vision AI Solutions are Featured On" />

            <section className={styles.section}>
                <div className={styles.container}>
                    <SiteSectionIntro title="Our Products" />
                    <div className={styles.featureGrid}>
                        {operations.map((text, index) => (
                            <article className={styles.featureCard} key={text}>
                                <div className={styles.iconBadge}>{index + 1}</div>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.sectionAlt}`}>
                <div className={styles.container}>
                    <SiteSectionIntro
                        label="How Vision AI Solution Works"
                        title="How Vision AI Solution Works"
                    />
                    <div className={styles.featureGrid}>
                        {howItWorks.map((item, index) => (
                            <article className={styles.featureCard} key={item.title}>
                                <div className={styles.iconBadge}>{index + 1}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <SiteSectionIntro label="Use Cases" title="Use Cases" />
                    <div className={styles.caseGrid}>
                        {useCases.map(([a, b, c, title]) => (
                            <SiteCaseCard
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
