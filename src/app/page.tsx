import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const heroVideoUrl =
    "https://seed-bronze-70048020.figma.site/_videos/v1/903a889d2ddbeae25b3a395060756facede92d6b";
const ctaVideoUrl =
    "https://seed-bronze-70048020.figma.site/_videos/v1/664fb88829d0a36dbc3564beab8ab6b300e106c6";

const partnerLogos = [
    {
        alt: "ADD",
        height: 80,
        itemClassName: "logoAdd",
        src: "/images/inforzia/logo-add.png",
        width: 142,
    },
    {
        alt: "Applied Materials",
        height: 50,
        itemClassName: "logoApplied",
        src: "/images/inforzia/logo-applied-materials.png",
        width: 198,
    },
    {
        alt: "CJ Logistics",
        height: 60,
        itemClassName: "logoCj",
        src: "/images/inforzia/logo-cj-logistics.png",
        width: 147,
    },
    {
        alt: "Doosan",
        height: 24,
        itemClassName: "logoDoosan",
        src: "/images/inforzia/logo-doc.png",
        width: 132,
    },
    {
        alt: "Emart",
        height: 28,
        itemClassName: "logoEmart",
        src: "/images/inforzia/logo-smartfarm.png",
        width: 99,
    },
];

const products = [
    {
        accentClassName: styles.visionAccent,
        description:
            "제조·건설 현장의 세밀한 공정 변화부터 안전 상태와 위험 예측까지, 현장의 모든 징후와 순간을 데이터화하여 관제 환경을 지능형 자동화 체계로 혁신합니다.",
        frameClassName: styles.visionFrame,
        subtitle: "현장의 모든 순간을 감지하는",
        title: "Flomon Vision",
        titleAccent: "Vision AI",
    },
    {
        accentClassName: styles.agentAccent,
        description:
            "Vision AI가 포착한 현장의 상황을 스스로 추론하고 분석하여, 현장 대응부터 시스템 제어까지 전 과정을 유기적으로 연결해 완벽한 자율 제어를 실현합니다.",
        frameClassName: styles.agentFrame,
        subtitle: "의사결정과 흐름을 설계하는",
        title: "Flomon Agent",
        titleAccent: "AI 에이전트",
    },
];

const industries = [
    {
        image: "/images/inforzia/industry-disaster.png",
        title: "재난 안전",
    },
    {
        image: "/images/inforzia/industry-facility.png",
        title: "시설물 안전",
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

const contactItems = [
    {
        label: "전화",
        value: "02-6959-2540",
    },
    {
        label: "메일",
        value: "inforzia@inforzia.io",
    },
    {
        label: "주소",
        value: "(16942) 경기도 용인시 수지구 광교중앙로 338(상현동, 광교우미뉴브) A동 627호",
    },
];

function ArrowIcon({
    className,
}: {
    className?: string;
}) {
    return (
        <svg
            aria-hidden="true"
            className={className}
            viewBox="0 0 11.5004 11.125"
        >
            <path d="M11.3281 5.18438L5.425 0.0609374C5.37969 0.0218749 5.32188 0 5.26094 0H3.87813C3.7625 0 3.70938 0.14375 3.79688 0.21875L9.26875 4.96875H0.125C0.05625 4.96875 0 5.025 0 5.09375V6.03125C0 6.1 0.05625 6.15625 0.125 6.15625H9.26719L3.79531 10.9063C3.70781 10.9828 3.76094 11.125 3.87656 11.125H5.30625C5.33594 11.125 5.36563 11.1141 5.3875 11.0938L11.3281 5.94063C11.3822 5.89359 11.4256 5.83549 11.4553 5.77026C11.485 5.70503 11.5004 5.63418 11.5004 5.5625C11.5004 5.49082 11.485 5.41997 11.4553 5.35474C11.4256 5.28951 11.3822 5.23141 11.3281 5.18438V5.18438Z" />
        </svg>
    );
}

function ChevronIcon({
    className,
    direction = "right",
}: {
    className?: string;
    direction?: "left" | "right";
}) {
    const viewBox =
        direction === "left" ? "0 0 10.625 16.9181" : "0 0 10.6251 16.9202";
    const path =
        direction === "left"
            ? "M10.625 1.90438V0.178933C10.625 0.029379 10.4532 -0.0532104 10.3371 0.0383075L0.274586 7.89768C0.189091 7.96417 0.119911 8.04931 0.0723243 8.1466C0.0247373 8.24389 0 8.35076 0 8.45907C0 8.56737 0.0247373 8.67425 0.0723243 8.77154C0.119911 8.86883 0.189091 8.95396 0.274586 9.02045L10.3371 16.8798C10.4554 16.9713 10.625 16.8888 10.625 16.7392V15.0138C10.625 14.9044 10.5737 14.7995 10.4889 14.7325L2.45316 8.46018L10.4889 2.18563C10.5737 2.11866 10.625 2.01375 10.625 1.90438V1.90438Z"
            : "M10.3504 7.8975L0.287948 0.0381206C0.261655 0.0174201 0.230055 0.00455572 0.19678 0.00100459C0.163504 -0.00254654 0.129902 0.00335967 0.0998319 0.018045C0.0697619 0.0327304 0.044444 0.0555994 0.0267853 0.0840253C0.00912651 0.112451 -0.000156724 0.145282 2.00185e-06 0.178746V1.90419C2.00185e-06 2.01357 0.0513414 2.11848 0.136163 2.18544L8.17188 8.46L0.136163 14.7345C0.0491093 14.8015 2.00185e-06 14.9064 2.00185e-06 15.0158V16.7412C2.00185e-06 16.8908 0.171877 16.9734 0.287948 16.8819L10.3504 9.0225C10.436 8.95578 10.5052 8.87045 10.5527 8.77297C10.6003 8.6755 10.6251 8.56846 10.6251 8.46C10.6251 8.35153 10.6003 8.24449 10.5527 8.14702C10.5052 8.04955 10.436 7.96421 10.3504 7.8975Z";

    return (
        <svg aria-hidden="true" className={className} viewBox={viewBox}>
            <path d={path} />
        </svg>
    );
}

function PrimaryButton() {
    return (
        <button className={styles.primaryButton} type="button">
            <span>Get started</span>
            <ArrowIcon className={styles.primaryButtonIcon} />
        </button>
    );
}

export default function Home() {
    return (
        <main className={styles.page}>
            <section className={styles.heroSection}>
                <video
                    aria-hidden="true"
                    autoPlay
                    className={styles.heroVideo}
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src={heroVideoUrl} type="video/mp4" />
                </video>
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroCopy}>
                            <h1 className={styles.heroTitle}>
                                <span>Vision AI That Sees</span>
                                <span>Beyond The Surface.</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                <span>
                                    인포지아의 Vision AI 기술은 우리가 놓치기 쉬운 수많은
                                    시각 정보를
                                </span>
                                <span>
                                    정확히 이해하고, 현장과 상황에 맞는 실질적인 가치와
                                    솔루션을 제시합니다.
                                </span>
                            </p>
                            <PrimaryButton />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.logoSection} aria-label="Partners">
                <div className={styles.container}>
                    <div className={styles.logoViewport}>
                        <div className={styles.logoRow}>
                            {partnerLogos.map((logo) => (
                                <div
                                    className={`${styles.logoItem} ${styles[logo.itemClassName]}`}
                                    key={logo.alt}
                                >
                                    <Image
                                        alt={logo.alt}
                                        height={logo.height}
                                        loading="eager"
                                        priority
                                        src={logo.src}
                                        unoptimized
                                        width={logo.width}
                                    />
                                </div>
                            ))}
                            <div
                                aria-hidden="true"
                                className={`${styles.logoItem} ${styles.logoAdd} ${styles.logoGhost}`}
                            >
                                <Image
                                    alt=""
                                    height={partnerLogos[0].height}
                                    loading="eager"
                                    priority
                                    src={partnerLogos[0].src}
                                    unoptimized
                                    width={partnerLogos[0].width}
                                />
                            </div>
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
                    <div className={styles.sectionLabelWrap}>
                        <p className={styles.sectionLabel}>Our Products</p>
                    </div>
                    <div className={styles.productList}>
                        {products.map((product) => (
                            <article className={styles.productCard} key={product.title}>
                                <div className={styles.productCopy}>
                                    <div className={styles.productCopyGroup}>
                                        <h2 className={styles.productTitle}>
                                            {product.title}
                                        </h2>
                                        <p className={styles.productSubtitle}>
                                            <span>{product.subtitle}</span>
                                            <span className={product.accentClassName}>
                                                {product.titleAccent}
                                            </span>
                                        </p>
                                        <p className={styles.productDescription}>
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={`${styles.productMedia} ${product.frameClassName}`}
                                >
                                    <div className={styles.productMediaInner} />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.industriesSection}>
                <div className={styles.container}>
                    <div className={styles.industriesHeadingWrap}>
                        <h2 className={styles.industriesTitle}>
                            현장 관제의 완벽한 지능화, 인포지아와 실현하세요.
                        </h2>
                    </div>
                    <div className={styles.industriesCarousel}>
                        <div className={styles.industriesViewport}>
                            <div className={styles.industriesRow}>
                                {industries.map((industry) => (
                                    <article
                                        className={styles.industryCard}
                                        key={industry.title}
                                    >
                                        <Image
                                            alt=""
                                            className={styles.industryImage}
                                            fill
                                            loading="eager"
                                            sizes="360px"
                                            src={industry.image}
                                            unoptimized
                                        />
                                        <div className={styles.industryOverlay} />
                                        <div className={styles.industryText}>
                                            <p className={styles.industryLabel}>
                                                Industries
                                            </p>
                                            <h3 className={styles.industryTitle}>
                                                {industry.title}
                                            </h3>
                                        </div>
                                    </article>
                                ))}
                            </div>
                            <div
                                aria-hidden="true"
                                className={styles.industriesViewportFade}
                            />
                        </div>
                        <div className={styles.carouselStatus}>
                            <button
                                aria-label="Previous industries"
                                className={styles.carouselButton}
                                type="button"
                            >
                                <ChevronIcon
                                    className={styles.carouselButtonIcon}
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
                                    className={styles.carouselButtonIcon}
                                    direction="right"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <video
                    aria-hidden="true"
                    autoPlay
                    className={styles.ctaVideo}
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src={ctaVideoUrl} type="video/mp4" />
                </video>
                <div className={styles.ctaOverlay} />
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <div className={styles.ctaCopy}>
                            <h2 className={styles.ctaTitle}>
                                <span>Vision AI That Sees</span>
                                <span>Beyond The Surface.</span>
                            </h2>
                            <p className={styles.ctaDescription}>
                                산업 지능화의 시작, 인포지아와 함께 하세요.
                            </p>
                            <PrimaryButton />
                        </div>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footerInner}>
                        <div className={styles.footerBrand}>
                            <Image
                                alt="Inforzia"
                                className={styles.footerLogo}
                                height={72}
                                loading="eager"
                                priority
                                src="/images/inforzia/footer-logo.png"
                                width={216}
                            />
                        </div>
                        <div className={styles.footerMeta}>
                            <div className={styles.contactGrid}>
                                {contactItems.map((item) => (
                                    <div className={styles.contactItem} key={item.label}>
                                        <p className={styles.contactLabel}>{item.label}</p>
                                        <p className={styles.contactValue}>{item.value}</p>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.footerLegal}>
                                <Link className={styles.footerPrivacy} href="/">
                                    개인정보 처리방침
                                </Link>
                                <p className={styles.footerCopyright}>
                                    © 2026 Inforzia Corp. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
