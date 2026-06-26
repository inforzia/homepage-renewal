/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import styles from "./SiteSplitHero.module.css";

type SiteSplitHeroProps = {
    actions?: ReactNode;
    dark?: boolean;
    description: string;
    eyebrow?: string;
    imageAlt: string;
    imageSrc: string;
    title: ReactNode;
};

export function SiteSplitHero({
    actions,
    dark = false,
    description,
    eyebrow,
    imageAlt,
    imageSrc,
    title,
}: SiteSplitHeroProps) {
    return (
        <section className={`${styles.hero} ${dark ? styles.heroDark : ""}`}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.copy}>
                        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.description}>{description}</p>
                        {actions ? <div className={styles.actions}>{actions}</div> : null}
                    </div>
                    <div className={styles.visual}>
                        <img alt={imageAlt} src={imageSrc} />
                    </div>
                </div>
            </div>
        </section>
    );
}
