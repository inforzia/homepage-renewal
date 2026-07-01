import type { ReactNode } from "react";
import { SitePrimaryButton } from "./SitePrimaryButton";
import styles from "./SiteHero.module.css";

const VIDEO_EXTENSION_PATTERN =
    /\.(mp4|webm|ogg|ogv|mov|m4v)(?:[?#].*)?$/i;

type SiteHeroProps = {
    action?: ReactNode;
    backgroundSrc: string;
    color?: "dark" | "light";
    description: ReactNode;
    eyebrow?: ReactNode;
    title: ReactNode;
};

function isVideoBackground(src: string) {
    return VIDEO_EXTENSION_PATTERN.test(src);
}

export function SiteHero({
    action,
    backgroundSrc,
    color = "light",
    description,
    eyebrow,
    title,
}: SiteHeroProps) {
    const usesVideo = isVideoBackground(backgroundSrc);

    return (
        <section className={`${styles.hero} ${styles[color]}`}>
            <div aria-hidden="true" className={styles.mediaWrap}>
                {usesVideo ? (
                    <video
                        autoPlay
                        className={styles.media}
                        loop
                        muted
                        playsInline
                        preload="auto"
                    >
                        <source src={backgroundSrc} />
                    </video>
                ) : (
                    <img alt="" className={styles.media} src={backgroundSrc} />
                )}
            </div>
            <div className={styles.overlay}>
                <div className={styles.inner}>
                    {eyebrow ? (
                        <p className={styles.eyebrow}>{eyebrow}</p>
                    ) : null}
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.action}>
                        {action ?? (
                            <SitePrimaryButton dark={color === "dark"} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
