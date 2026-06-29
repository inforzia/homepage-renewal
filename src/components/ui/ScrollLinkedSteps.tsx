"use client";
/* eslint-disable @next/next/no-img-element */

import {
    type CSSProperties,
    type ReactNode,
    useEffect,
    useEffectEvent,
    useId,
    useRef,
    useState,
} from "react";
import styles from "./ScrollLinkedSteps.module.css";

export type ScrollLinkedStepItem = {
    content: ReactNode;
    image: string;
    label: string;
    title: string;
};

type ScrollLinkedStepsProps = {
    heading: string;
    items: ScrollLinkedStepItem[];
};

function toAnchorId(prefix: string, label: string, index: number) {
    const slug = label
        .toLowerCase()
        .replace(/[^a-z0-9\u3131-\u318e\uac00-\ud7a3]+/g, "-")
        .replace(/^-+|-+$/g, "");

    return `${prefix}-${slug || `step-${index + 1}`}`;
}

export function ScrollLinkedSteps({ heading, items }: ScrollLinkedStepsProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const articleRefs = useRef<Array<HTMLElement | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [imageAspectRatios, setImageAspectRatios] = useState<
        Record<number, number>
    >({});
    const anchorPrefix = useId().replace(/:/g, "");

    const updateActiveIndex = useEffectEvent(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const sectionRect = section.getBoundingClientRect();

        if (sectionRect.bottom <= 0 || sectionRect.top >= window.innerHeight) {
            return;
        }

        const viewportTarget = window.innerHeight * 0.6;

        let nextIndex = 0;

        articleRefs.current.forEach((article, index) => {
            if (!article) {
                return;
            }

            const title = article.querySelector("h3");

            if (!title) {
                return;
            }

            const rect = title.getBoundingClientRect();
            const titleCenter = rect.top + rect.height / 2;

            if (titleCenter <= viewportTarget) {
                nextIndex = index;
            }
        });

        setActiveIndex((previousIndex) =>
            previousIndex === nextIndex ? previousIndex : nextIndex,
        );
    });

    useEffect(() => {
        updateActiveIndex();

        const handleScroll = () => {
            updateActiveIndex();
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const activeWidth = 480;
    const activeAspectRatio = imageAspectRatios[activeIndex] ?? 1.5;
    const activeHeight = Math.round(activeWidth / activeAspectRatio);
    const compactGap = 20;
    const lowerStripTop = activeHeight + compactGap;
    const lowerStripBottomTop = lowerStripTop + 40 + compactGap;
    const visualStackHeight = activeHeight + 40 + 20 + compactGap * 2;

    function getVisualStyle(index: number): CSSProperties {
        const relativeIndex = index - activeIndex;

        if (relativeIndex === -1) {
            return {
                "--visual-height": "40px",
                "--visual-translate-y": "-60px",
                "--visual-width": "448px",
                opacity: 0.82,
                zIndex: 2,
            } as CSSProperties;
        }
        if (relativeIndex === -2) {
            return {
                "--visual-height": "20px",
                "--visual-translate-y": "-100px",
                "--visual-width": "384px",
                opacity: 0.82,
                zIndex: 2,
            } as CSSProperties;
        }
        if (relativeIndex === 0) {
            return {
                "--visual-height": `${activeHeight}px`,
                "--visual-translate-y": "0px",
                "--visual-width": `${activeWidth}px`,
                opacity: 1,
                zIndex: 3,
            } as CSSProperties;
        }

        if (relativeIndex === 1) {
            return {
                "--visual-height": "40px",
                "--visual-translate-y": `${lowerStripTop}px`,
                "--visual-width": "448px",
                opacity: 1,
                zIndex: 2,
            } as CSSProperties;
        }

        if (relativeIndex === 2) {
            return {
                "--visual-height": "20px",
                "--visual-translate-y": `${lowerStripBottomTop}px`,
                "--visual-width": "384px",
                opacity: 1,
                zIndex: 1,
            } as CSSProperties;
        }

        return {
            "--visual-height": "20px",
            "--visual-translate-y": "-100px",
            "--visual-width": "384px",
            opacity: 0,
            zIndex: 0,
        } as CSSProperties;
    }

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>{heading}</h2>
                </div>
                <div className={styles.layout}>
                    <nav
                        aria-label={`${heading} navigation`}
                        className={styles.navigation}
                    >
                        <ol className={styles.navigationList}>
                            {items.map((item, index) => {
                                const targetId = toAnchorId(
                                    anchorPrefix,
                                    item.label,
                                    index,
                                );

                                return (
                                    <li key={targetId}>
                                        <button
                                            className={styles.navigationButton}
                                            data-active={
                                                index === activeIndex
                                                    ? "true"
                                                    : "false"
                                            }
                                            onClick={() => {
                                                document
                                                    .getElementById(targetId)
                                                    ?.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "start",
                                                    });
                                            }}
                                            type="button"
                                        >
                                            <span>{`${index + 1}.`}</span>
                                            <span>{item.label}</span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>

                    <div className={styles.visualRail}>
                        <div
                            className={styles.visualStack}
                            style={
                                {
                                    "--visual-stack-height": `${visualStackHeight}px`,
                                } as CSSProperties
                            }
                        >
                            {items.map((item, index) => (
                                <figure
                                    className={styles.visualCard}
                                    data-active={
                                        index === activeIndex ? "true" : "false"
                                    }
                                    key={toAnchorId(
                                        `${anchorPrefix}-image`,
                                        item.label,
                                        index,
                                    )}
                                    style={getVisualStyle(index)}
                                >
                                    <img
                                        alt=""
                                        onLoad={(event) => {
                                            const {
                                                naturalHeight,
                                                naturalWidth,
                                            } = event.currentTarget;

                                            if (
                                                !naturalHeight ||
                                                !naturalWidth
                                            ) {
                                                return;
                                            }

                                            setImageAspectRatios((previous) => {
                                                const nextRatio =
                                                    naturalWidth /
                                                    naturalHeight;

                                                if (
                                                    previous[index] ===
                                                    nextRatio
                                                ) {
                                                    return previous;
                                                }

                                                return {
                                                    ...previous,
                                                    [index]: nextRatio,
                                                };
                                            });
                                        }}
                                        src={item.image}
                                    />
                                </figure>
                            ))}
                        </div>
                    </div>

                    <div className={styles.copyColumn}>
                        {items.map((item, index) => {
                            const targetId = toAnchorId(
                                anchorPrefix,
                                item.label,
                                index,
                            );

                            return (
                                <article
                                    className={styles.copyBlock}
                                    id={targetId}
                                    key={targetId}
                                    ref={(node) => {
                                        articleRefs.current[index] = node;
                                    }}
                                >
                                    <h3 className={styles.copyTitle}>
                                        {item.title}
                                    </h3>
                                    <div className={styles.copyContent}>
                                        {item.content}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
