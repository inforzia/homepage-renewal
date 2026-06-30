"use client";

/* eslint-disable @next/next/no-img-element */
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { useCaseSummaries } from "@/datas/useCases";
import { useCasesPageData } from "@/datas/useCasesPage";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function UseCasesPage() {
    const [selectedCategory, setSelectedCategory] = useState(
        useCasesPageData.categories[0],
    );
    const tabGroupRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [activeIndicatorStyle, setActiveIndicatorStyle] = useState<{
        height: number;
        left: number;
        top: number;
        width: number;
    } | null>(null);
    const isIndicatorReady = activeIndicatorStyle !== null;

    useLayoutEffect(() => {
        const updateActiveIndicator = () => {
            const groupElement = tabGroupRef.current;
            const activeIndex = useCasesPageData.categories.findIndex(
                (category) => category === selectedCategory,
            );
            const activeTabElement = tabRefs.current[activeIndex];

            if (!groupElement || !activeTabElement) {
                return;
            }

            setActiveIndicatorStyle({
                height: activeTabElement.offsetHeight,
                left: activeTabElement.offsetLeft,
                top: activeTabElement.offsetTop,
                width: activeTabElement.offsetWidth,
            });
        };

        updateActiveIndicator();
        window.addEventListener("resize", updateActiveIndicator);

        return () => {
            window.removeEventListener("resize", updateActiveIndicator);
        };
    }, [selectedCategory]);

    const filteredCases = useCaseSummaries.filter((item) => {
        if (selectedCategory === "전체") {
            return true;
        }

        if (selectedCategory === "재난·안전") {
            return item.tags.some((tag) => ["재난", "안전"].includes(tag));
        }

        if (selectedCategory === "제조·공정") {
            return item.tags.includes("제조");
        }

        if (selectedCategory === "도시·인프라") {
            return item.tags.some((tag) => ["도시", "인프라"].includes(tag));
        }

        if (selectedCategory === "스마트팜·에너지") {
            return item.tags.some((tag) =>
                ["스마트팜", "에너지"].includes(tag),
            );
        }

        return true;
    });

    const [featuredCase, ...gridCases] = filteredCases;

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroCopy}>
                        <h1 className={styles.heroTitle}>Use Cases</h1>
                        <p className={styles.heroBody}>
                            Vision AI 기술로 압도적인 초생산성과 비용 효율을
                            증명한 성공 사례를 확인해 보세요.
                        </p>
                    </div>
                    <div
                        ref={tabGroupRef}
                        className={`${styles.tabGroup} ${isIndicatorReady ? styles.tabGroupReady : ""}`}
                        role="list"
                        aria-label="Use case categories"
                    >
                        {activeIndicatorStyle ? (
                            <span
                                aria-hidden="true"
                                className={styles.tabIndicator}
                                style={{
                                    height: `${activeIndicatorStyle.height}px`,
                                    transform: `translate(${activeIndicatorStyle.left}px, ${activeIndicatorStyle.top}px)`,
                                    width: `${activeIndicatorStyle.width}px`,
                                }}
                            />
                        ) : null}
                        {useCasesPageData.categories.map((category) => (
                            <button
                                className={`${styles.tabPill} ${selectedCategory === category ? styles.tabPillActive : ""}`}
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                ref={(element) => {
                                    tabRefs.current[
                                        useCasesPageData.categories.indexOf(
                                            category,
                                        )
                                    ] = element;
                                }}
                                role="listitem"
                                type="button"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {featuredCase ? (
                <>
                    <section className={styles.featuredSection}>
                        <div className={styles.container}>
                            <Link
                                className={styles.featuredCase}
                                href={`/use-cases/${featuredCase.id}`}
                            >
                                <div className={styles.featuredMedia}>
                                    <img alt="" src={featuredCase.image} />
                                </div>
                                <div className={styles.featuredCopy}>
                                    <div className={styles.caseTags}>
                                        {featuredCase.tags.map((tag) => (
                                            <span
                                                className={styles.caseTag}
                                                key={tag}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className={styles.featuredTitle}>
                                        {featuredCase.title}
                                    </h2>
                                    <p className={styles.featuredBody}>
                                        {featuredCase.description}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </section>

                    <section className={styles.gridSection}>
                        <div className={styles.container}>
                            <div className={styles.caseGrid}>
                                {gridCases.map((item) => (
                                    <Link
                                        className={styles.caseCard}
                                        href={`/use-cases/${item.id}`}
                                        key={item.title}
                                    >
                                        <div className={styles.caseCardMedia}>
                                            <img
                                                alt={item.title}
                                                src={item.image}
                                            />
                                        </div>
                                        <div className={styles.caseTags}>
                                            {item.tags.map((tag) => (
                                                <span
                                                    className={styles.caseTag}
                                                    key={tag}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className={styles.caseTitle}>
                                            {item.title}
                                        </h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            ) : null}

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
