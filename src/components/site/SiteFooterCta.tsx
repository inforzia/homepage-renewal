import type { ReactNode } from "react";
import styles from "./SiteFooterCta.module.css";

const footerCtaVideoSrc = "/videos/cta-background.mp4";

type SiteFooterCtaProps = {
    button?: ReactNode;
    description: string;
    title: string[];
    variant: "home" | "vision-ai";
};

export function SiteFooterCta({
    button,
    description,
    title,
    variant,
}: SiteFooterCtaProps) {
    const isHome = variant === "home";
    const containerClassName = `${styles.container} ${
        isHome ? styles.containerHome : styles.containerVisionAi
    }`;
    const contentClassName = `${styles.content} ${
        isHome ? styles.contentHome : styles.contentVisionAi
    }`;

    return (
        <section className={styles.section}>
            <video
                aria-hidden="true"
                autoPlay
                className={styles.video}
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src={footerCtaVideoSrc} type="video/mp4" />
            </video>
            <div className={styles.overlay} />
            <div className={containerClassName}>
                <div className={contentClassName}>
                    <div className={styles.copy}>
                        <h2 className={styles.title}>
                            {title.map((line) => (
                                <span key={line}>{line}</span>
                            ))}
                        </h2>
                        <p className={styles.description}>{description}</p>
                        {button}
                    </div>
                </div>
            </div>
        </section>
    );
}
