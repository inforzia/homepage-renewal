/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import styles from "./SiteCaseCard.module.css";

type SiteCaseCardProps = {
    dark?: boolean;
    description?: ReactNode;
    imageAlt?: string;
    imageSrc?: string;
    title: ReactNode;
    tags?: string[];
};

export function SiteCaseCard({
    dark = false,
    description,
    imageAlt = "",
    imageSrc,
    tags,
    title,
}: SiteCaseCardProps) {
    return (
        <article className={`${styles.card} ${dark ? styles.cardDark : ""}`}>
            {imageSrc ? (
                <div className={styles.media}>
                    <img alt={imageAlt} src={imageSrc} />
                </div>
            ) : null}
            {tags?.length ? (
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span className={styles.tag} key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            ) : null}
            <h3 className={styles.title}>{title}</h3>
            {description ? <p className={styles.body}>{description}</p> : null}
        </article>
    );
}
