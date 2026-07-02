import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SiteHero } from "@/components/site/SiteHero";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { partnerLogos } from "@/datas/partnerLogos";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const certifications = [
    {
        description: "기술 혁신성 및 사업 성장성 평가 통과",
        image: "/images/company/about/certification-venture-enterprise.avif",
        title: "벤처기업확인기관 인증",
    },
    {
        description: "경영시스템 국제 표준 통합 인증",
        image: "/images/company/about/certification-iso-integrated.avif",
        title: "ISO 9001·14001·45001",
    },
    {
        description: "소프트웨어 품질인증 GS 1등급 획득",
        image: "/images/company/about/certification-gs-grade-1.avif",
        title: "한국정보통신기술협회(TTA)",
    },
    {
        description: "공공조달 우선구매 대상 혁신제품",
        image: "/images/company/about/certification-innovative-product.avif",
        title: "대한민국 조달청 지정",
    },
];

const businessCards = [
    {
        description:
            "초정밀 AI로 광범위한 지역의 재난 징후를 조기에 탐지하고 전파합니다. 사각지대 없는 상시 감시 체계를 통해 복합 재난 상황에서도 실시간으로 골든타임을 확보합니다.",
        href: "/vision-ai",
        image: "/images/products/flomon-vision/industry-disaster-safety.png",
        title: "Vision AI",
    },
    {
        description:
            "노후 설비와 건축물의 미세한 이상 징후를 실시간으로 판독해 예측합니다. 육안 검사의 한계를 극복하고 24시간 모니터링하여 구조물 사고를 사전에 원천 차단합니다.",
        href: "/products/flomon-vision",
        image: "/images/inforzia/industry-facility.png",
        title: "AI 구축 플랫폼, Flomon",
    },
];

export default function CompanyAboutPage() {
    return (
        <main className={styles.page}>
            <SiteHero
                action={<SitePrimaryButton />}
                backgroundSrc="/images/company/about/hero-background.png"
                color="light"
                description="제약 없는 환경. 오차 없는 정확함. 인포지아는 새로운 Vision AI Solution의 기준을 제시합니다."
                title={
                    <>
                        Vision AI That Sees
                        <br />
                        Beyond The Surface.
                    </>
                }
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.copyBlock}>
                        <h2 className={styles.sectionTitle}>Our Mission</h2>
                        <p className={styles.sectionBody}>
                            Inforzia는 산업 현장에서 일상 공간에 이르기까지,
                            모든 환경에 최적화된 Vision AI 솔루션을 제공합니다.
                            우리는 Enterprise Vision AI를 통해 세상이 마주할
                            완벽한 자동화와 완전 자율의 미래를 앞당깁니다.
                        </p>
                    </div>
                    <div className={styles.certificationGrid}>
                        {certifications.map((item) => (
                            <article
                                className={styles.certificationCard}
                                key={item.title}
                            >
                                <div className={styles.certificationImageWrap}>
                                    <Image
                                        alt=""
                                        className={styles.certificationImage}
                                        fill
                                        sizes="(max-width: 767px) 180px, 220px"
                                        src={item.image}
                                    />
                                </div>
                                <div className={styles.certificationContent}>
                                    <p className={styles.certificationTitle}>
                                        {item.title}
                                    </p>
                                    <p
                                        className={
                                            styles.certificationDescription
                                        }
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.copyBlock}>
                        <h2 className={styles.sectionTitle}>Our Partner</h2>
                    </div>
                    <div className={styles.partnerGrid}>
                        {partnerLogos.map((logo) => (
                            <div className={styles.partnerItem} key={logo.alt}>
                                <Image
                                    alt={logo.alt}
                                    className={styles.partnerLogo}
                                    height={logo.height}
                                    src={logo.src}
                                    width={logo.width}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.copyBlock}>
                        <h2 className={styles.sectionTitle}>Our Business</h2>
                        <p className={styles.sectionBody}>
                            우리가 만드는 Vision AI 기술은 엔터프라이즈 AI 구축
                            플랫폼 Flomon를 통해 빠르게 구현되어 어떤 환경에서도
                            인공지능의 실질적인 가치를 증명합니다.
                        </p>
                    </div>
                    <div className={styles.businessGrid}>
                        {businessCards.map((item) => (
                            <article
                                className={styles.businessCard}
                                key={item.title}
                            >
                                <div className={styles.businessImageWrap}>
                                    <Image
                                        alt=""
                                        className={styles.businessImage}
                                        fill
                                        sizes="(max-width: 1023px) 100vw, 640px"
                                        src={item.image}
                                    />
                                </div>
                                <div className={styles.businessContent}>
                                    <h3 className={styles.businessTitle}>
                                        {item.title}
                                    </h3>
                                    <p className={styles.businessDescription}>
                                        {item.description}
                                    </p>
                                    <Link
                                        className={styles.learnMore}
                                        href={item.href}
                                    >
                                        Learn More
                                        <svg
                                            aria-hidden="true"
                                            className={styles.learnMoreIcon}
                                            viewBox="0 0 11.5004 11.125"
                                        >
                                            <path d="M11.3281 5.18438L5.425 0.0609374C5.37969 0.0218749 5.32188 0 5.26094 0H3.87813C3.7625 0 3.70938 0.14375 3.79688 0.21875L9.26875 4.96875H0.125C0.05625 4.96875 0 5.025 0 5.09375V6.03125C0 6.1 0.05625 6.15625 0.125 6.15625H9.26719L3.79531 10.9063C3.70781 10.9828 3.76094 11.125 3.87656 11.125H5.30625C5.33594 11.125 5.36563 11.1141 5.3875 11.0938L11.3281 5.94063C11.3822 5.89359 11.4256 5.83549 11.4553 5.77026C11.485 5.70503 11.5004 5.63418 11.5004 5.5625C11.5004 5.49082 11.485 5.41997 11.4553 5.35474C11.4256 5.28951 11.3822 5.23141 11.3281 5.18438V5.18438Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.copyBlock}>
                        <h2 className={styles.sectionTitle}>Our Office</h2>
                    </div>
                    <div className={styles.officeCard}>
                        <div className={styles.officeMapWrap}>
                            <Image
                                alt="인포지아 기술연구소 위치 지도"
                                className={styles.officeMap}
                                fill
                                sizes="(max-width: 1439px) 100vw, 1400px"
                                src="/images/company/about/office-map.webp"
                            />
                        </div>
                        <div className={styles.officeContent}>
                            <h3 className={styles.officeTitle}>
                                인포지아 기술연구소
                            </h3>
                            <p className={styles.officeAddress}>
                                (16942) 경기도 용인시 수지구 광교중앙로
                                338(상현동, 광교우미뉴브) A동 627호
                            </p>
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
