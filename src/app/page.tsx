/* eslint-disable @next/next/no-img-element */
import { HomeHero } from "@/components/site/HomeHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { CardSlider } from "@/components/ui/CardSlider";
import type { CSSProperties } from "react";
import styles from "./page.module.css";

const heroVideoUrl = "/videos/inforzia/hero-background.mp4";

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

const products = [
    {
        accentClassName: styles.visionAccent,
        description:
            "제조·건설 현장의 세밀한 공정 변화부터 안전 상태와 위험 예측까지, 현장의 모든 징후와 순간을 데이터화하여 관제 환경을 지능형 자동화 체계로 혁신합니다.",
        frameImage: "/images/inforzia/product-vision-frame.png",
        title: "Flomon Vision",
        titleAccent: "Vision AI",
        titlePrefix: "현장의 모든 순간을 감지하는",
    },
    {
        accentClassName: styles.agentAccent,
        description:
            "Vision AI가 포착한 현장의 상황을 스스로 추론하고 분석하여, 현장 대응부터 시스템 제어까지 전 과정을 유기적으로 연결해 완벽한 자율 제어를 실현합니다.",
        frameImage: "/images/inforzia/product-agent-frame.png",
        title: "Flomon Agent",
        titleAccent: "AI 에이전트",
        titlePrefix: "의사결정과 흐름을 설계하는",
    },
];

const industries = [
    {
        image: "/images/inforzia/industry-disaster.png",
        title: "재난 안전",
    },
    {
        image: "/images/inforzia/industry-facility.png",
        title: "시설물 및 인프라",
    },
    {
        image: "/images/inforzia/industry-retail.png",
        title: "리테일 및 매장",
    },
    {
        image: "/images/inforzia/industry-manufacturing.png",
        title: "제조 및 건설",
    },
    {
        image: "/images/inforzia/industry-logistics.png",
        title: "물류 및 유통업",
    },
    {
        image: "/images/inforzia/industry-smartfarm.png",
        title: "스마트팜",
    },
];

export default function HomePage() {
    return (
        <main className={styles.page}>
            <HomeHero
                button={<SitePrimaryButton />}
                description={[
                    "인포지아의 Vision AI 기술은 우리가 놓치기 쉬운 수많은 시각 정보를",
                    "정확히 이해하고, 현장과 상황에 맞는 실질적인 가치와 솔루션을 제시합니다.",
                ]}
                title={["Vision AI That Sees", "Beyond The Surface."]}
                videoSrc={heroVideoUrl}
            />

            <section aria-label="Partners" className={styles.logoSection}>
                <div className={styles.container}>
                    <div className={styles.logoViewport}>
                        <div className={styles.logoTrack}>
                            {[...partnerLogos, ...partnerLogos].map(
                                (logo, index) => (
                                    <div
                                        className={styles.logoItem}
                                        key={`${logo.alt}-${index}`}
                                    >
                                        <img
                                            alt={
                                                index < partnerLogos.length
                                                    ? logo.alt
                                                    : ""
                                            }
                                            height={logo.height}
                                            loading="eager"
                                            src={logo.src}
                                            width={logo.width}
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                        <div
                            aria-hidden="true"
                            className={`${styles.logoFade} ${styles.logoFadeLeft}`}
                        />
                        <div
                            aria-hidden="true"
                            className={`${styles.logoFade} ${styles.logoFadeRight}`}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.productsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeading}>
                        <p>Our Products</p>
                    </div>
                </div>
                <div className={styles.productList}>
                    {products.map((product) => (
                        <div className={styles.container} key={product.title}>
                            <article className={styles.productCard}>
                                <div className={styles.productCopy}>
                                    <h2 className={styles.productTitle}>
                                        {product.title}
                                    </h2>
                                    <p className={styles.productSubtitle}>
                                        <span>{product.titlePrefix}</span>
                                        <span
                                            className={product.accentClassName}
                                        >
                                            {product.titleAccent}
                                        </span>
                                    </p>
                                    <p className={styles.productDescription}>
                                        {product.description}
                                    </p>
                                </div>
                                <div
                                    className={styles.productMedia}
                                    style={
                                        {
                                            "--frame-image": `url("${product.frameImage}")`,
                                        } as CSSProperties
                                    }
                                >
                                    <div className={styles.productInnerFrame} />
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </section>

            <CardSlider
                heading="현장 관제의 완벽한 지능화, 인포지아와 실현하세요."
                itemWidth={360}
                items={industries.map((industry) => (
                    <article
                        className={styles.industryCard}
                        key={industry.title}
                    >
                        <img alt="" src={industry.image} />
                        <div className={styles.industryOverlay} />
                        <div className={styles.industryText}>
                            <p>Industries</p>
                            <h3>{industry.title}</h3>
                        </div>
                    </article>
                ))}
            />

            <SiteFooterCta
                button={<SitePrimaryButton />}
                description="산업 지능화의 시작, 인포지아와 함께 하세요."
                title={["Vision AI That Sees", "Beyond The Surface."]}
                variant="home"
            />
            <SiteFooter privacyHref="/" />
        </main>
    );
}
