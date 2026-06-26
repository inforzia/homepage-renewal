import type { ReactNode } from "react";
import styles from "./SiteSectionIntro.module.css";

type SiteSectionIntroProps = {
    body?: ReactNode;
    dark?: boolean;
    label?: ReactNode;
    tight?: boolean;
    title: ReactNode;
    titleAs?: "h1" | "h2" | "h3";
};

export function SiteSectionIntro({
    body,
    dark = false,
    label,
    tight = false,
    title,
    titleAs = "h2",
}: SiteSectionIntroProps) {
    const TitleTag = titleAs;

    return (
        <div
            className={`${styles.header} ${tight ? styles.headerTight : ""} ${dark ? styles.headerDark : ""}`}
        >
            {label ? <p className={styles.label}>{label}</p> : null}
            <TitleTag className={styles.title}>{title}</TitleTag>
            {body ? <p className={styles.body}>{body}</p> : null}
        </div>
    );
}
