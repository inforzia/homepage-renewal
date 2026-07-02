/* eslint-disable @next/next/no-img-element */
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SiteHero } from "@/components/site/SiteHero";
import { SitePartnerStrip } from "@/components/site/SitePartnerStrip";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { CardSlider } from "@/components/ui/CardSlider";
import Link from "next/link";
import type { CSSProperties } from "react";
import styles from "./page.module.css";

const heroVideoUrl = "/videos/inforzia/hero-background.mp4";

const products = [
    {
        accentClassName: styles.visionAccent,
        description:
            "제조·건설 현장의 세밀한 공정 변화부터 안전 상태와 위험 예측까지, 현장의 모든 징후와 순간을 데이터화하여 관제 환경을 지능형 자동화 체계로 혁신합니다.",
        frameImage: "/images/inforzia/product-vision-frame.png",
        title: "Flomon Vision",
        titleAccent: "Vision AI",
        titlePrefix: "현장의 모든 순간을 감지하는",
        url: "/products/flomon-vision",
    },
    {
        accentClassName: styles.agentAccent,
        description:
            "Vision AI가 포착한 현장의 상황을 스스로 추론하고 분석하여, 현장 대응부터 시스템 제어까지 전 과정을 유기적으로 연결해 완벽한 자율 제어를 실현합니다.",
        frameImage: "/images/inforzia/product-agent-frame.png",
        title: "Flomon Agent",
        titleAccent: "AI 에이전트",
        titlePrefix: "의사결정과 흐름을 설계하는",
        url: "/products/flomon-agent",
    },
];

const solutions = [
    {
        image: "/images/inforzia/industry-disaster.png",
        title: "재난 안전",
        url: "/solutions/disaster-safety",
    },
    {
        image: "/images/inforzia/industry-facility.png",
        title: "시설물 및 인프라",
        url: "/solutions/facility-infrastructure",
    },
    {
        image: "/images/inforzia/industry-retail.png",
        title: "리테일 및 매장",
        url: "/solutions/retail-store-management",
    },
    {
        image: "/images/inforzia/industry-manufacturing.png",
        title: "제조 및 건설",
        url: "/solutions/manufacturing-construction",
    },
    {
        image: "/images/inforzia/industry-logistics.png",
        title: "물류 및 유통업",
        url: "/solutions/logistics-distribution",
    },
    {
        image: "/images/inforzia/industry-smartfarm.png",
        title: "스마트팜",
        url: "/solutions/smart-farming",
    },
];

export default function HomePage() {
    return (
        <main className={styles.page}>
            <SiteHero
                action={<SitePrimaryButton />}
                backgroundSrc={heroVideoUrl}
                description={
                    <>
                        인포지아의 Vision AI 기술은 우리가 놓치기 쉬운 수많은
                        시각 정보를
                        <br />
                        정확히 이해하고, 현장과 상황에 맞는 실질적인 가치와
                        솔루션을 제시합니다.
                    </>
                }
                title={
                    <>
                        Vision AI That Sees
                        <br />
                        Beyond The Surface.
                    </>
                }
            />

            <SitePartnerStrip
                ariaLabel="Partners"
                containerClassName={styles.container}
                sectionClassName={styles.logoSection}
                useDefaultSpacing={false}
            />

            <section className={styles.productsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeading}>
                        <p>Our Products</p>
                    </div>
                </div>
                <div className={styles.productList}>
                    {products.map((product) => (
                        <Link href={product.url} key={product.title}>
                            <div
                                className={styles.productContainer}
                                key={product.title}
                            >
                                <article className={styles.productCard}>
                                    <div className={styles.productCopy}>
                                        <h2 className={styles.productTitle}>
                                            {product.title}
                                        </h2>
                                        <p className={styles.productSubtitle}>
                                            <span>{product.titlePrefix}</span>
                                            <span
                                                className={
                                                    product.accentClassName
                                                }
                                            >
                                                {product.titleAccent}
                                            </span>
                                        </p>
                                        <p
                                            className={
                                                styles.productDescription
                                            }
                                        >
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
                                        <div
                                            className={styles.productInnerFrame}
                                        />
                                    </div>
                                </article>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <CardSlider
                heading="현장 관제의 완벽한 지능화, 인포지아와 실현하세요."
                itemWidth={360}
                items={solutions.map((solution) => (
                    <Link
                        className={styles.solutionCardLink}
                        href={solution.url}
                        key={solution.title}
                    >
                        <article
                            className={styles.solutionCard}
                            key={solution.title}
                        >
                            <img alt="" src={solution.image} />
                            <div className={styles.solutionOverlay} />
                            <div className={styles.solutionText}>
                                <p>Industries</p>
                                <h3>{solution.title}</h3>
                            </div>
                        </article>
                    </Link>
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
