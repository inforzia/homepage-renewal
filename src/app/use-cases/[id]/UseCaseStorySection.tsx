"use client";

import { type UseCaseDetailSection } from "@/datas/useCaseDetailPages";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import styles from "./UseCaseStorySection.module.css";

type UseCaseStorySectionProps = {
    sections: UseCaseDetailSection[];
};

export function UseCaseStorySection({ sections }: UseCaseStorySectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const articleRefs = useRef<Array<HTMLElement | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateActiveIndex = useEffectEvent(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const sectionRect = section.getBoundingClientRect();

        if (sectionRect.bottom <= 0 || sectionRect.top >= window.innerHeight) {
            return;
        }

        const viewportTarget = window.innerHeight * 0.35;

        let nextIndex = 0;

        articleRefs.current.forEach((article, index) => {
            if (!article) {
                return;
            }

            const title = article.querySelector("h2");

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
    }, [sections.length]);

    return (
        <section className={styles.storySection} ref={sectionRef}>
            <div className={styles.storyInner}>
                <aside className={styles.storyNav}>
                    {sections.map((section, index) => (
                        <a
                            className={`${styles.storyNavItem} ${index === activeIndex ? styles.storyNavItemActive : ""}`}
                            href={`#section-${index + 1}`}
                            key={section.title}
                            onClick={() => {
                                setActiveIndex(index);
                            }}
                        >
                            {section.title}
                        </a>
                    ))}
                </aside>
                <div className={styles.storyContent}>
                    {sections.map((section, index) => (
                        <article
                            className={styles.storyBlock}
                            id={`section-${index + 1}`}
                            key={section.title}
                            ref={(node) => {
                                articleRefs.current[index] = node;
                            }}
                        >
                            <h2>{section.title}</h2>
                            <p>{section.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
