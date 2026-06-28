/* eslint-disable @next/next/no-img-element */
import { HomeHero } from "@/components/site/HomeHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
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

function ChevronIcon({
    className,
    direction,
}: {
    className?: string;
    direction: "left" | "right";
}) {
    return direction === "left" ? (
        <svg
            aria-hidden="true"
            className={className}
            viewBox="0 0 10.625 16.9181"
        >
            <path d="M10.625 1.90438V0.178933C10.625 0.029379 10.4532 -0.0532104 10.3371 0.0383075L0.274586 7.89768C0.189091 7.96417 0.119911 8.04931 0.0723243 8.1466C0.0247373 8.24389 0 8.35076 0 8.45907C0 8.56737 0.0247373 8.67425 0.0723243 8.77154C0.119911 8.86883 0.189091 8.95396 0.274586 9.02045L10.3371 16.8798C10.4554 16.9713 10.625 16.8888 10.625 16.7392V15.0138C10.625 14.9044 10.5737 14.7995 10.4889 14.7325L2.45316 8.46018L10.4889 2.18563C10.5737 2.11866 10.625 2.01375 10.625 1.90438V1.90438Z" />
        </svg>
    ) : (
        <svg
            aria-hidden="true"
            className={className}
            viewBox="0 0 10.6251 16.9202"
        >
            <path d="M10.3504 7.8975L0.287948 0.0381206C0.261655 0.0174201 0.230055 0.00455572 0.19678 0.00100459C0.163504 -0.00254654 0.129902 0.00335967 0.0998319 0.018045C0.0697619 0.0327304 0.044444 0.0555994 0.0267853 0.0840253C0.00912651 0.112451 -0.000156724 0.145282 2.00185e-06 0.178746V1.90419C2.00185e-06 2.01357 0.0513414 2.11848 0.136163 2.18544L8.17188 8.46L0.136163 14.7345C0.0491093 14.8015 2.00185e-06 14.9064 2.00185e-06 15.0158V16.7412C2.00185e-06 16.8908 0.171877 16.9734 0.287948 16.8819L10.3504 9.0225C10.436 8.95578 10.5052 8.87045 10.5527 8.77297C10.6003 8.6755 10.6251 8.56846 10.6251 8.46C10.6251 8.35153 10.6003 8.24449 10.5527 8.14702C10.5052 8.04955 10.436 7.96421 10.3504 7.8975Z" />
        </svg>
    );
}

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

            <section className={styles.industriesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeading}>
                        <h2>
                            현장 관제의 완벽한 지능화, 인포지아와 실현하세요.
                        </h2>
                    </div>
                    <div className={styles.industriesWrap}>
                        <div className={styles.industriesViewport}>
                            <div className={styles.industriesTrack}>
                                {industries.map((industry) => (
                                    <article
                                        className={styles.industryCard}
                                        key={industry.title}
                                    >
                                        <img alt="" src={industry.image} />
                                        <div
                                            className={styles.industryOverlay}
                                        />
                                        <div className={styles.industryText}>
                                            <p>Industries</p>
                                            <h3>{industry.title}</h3>
                                        </div>
                                    </article>
                                ))}
                            </div>
                            <div className={styles.industriesFade} />
                        </div>
                        <div className={styles.carouselStatus}>
                            <button
                                aria-label="Previous industries"
                                className={styles.carouselButton}
                                type="button"
                            >
                                <ChevronIcon
                                    className={styles.carouselIcon}
                                    direction="left"
                                />
                            </button>
                            <p className={styles.carouselIndicator}>1 / 3</p>
                            <button
                                aria-label="Next industries"
                                className={styles.carouselButton}
                                type="button"
                            >
                                <ChevronIcon
                                    className={styles.carouselIcon}
                                    direction="right"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

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
