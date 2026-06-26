import type { ReactNode } from "react";
import styles from "./HomeHero.module.css";

type HomeHeroProps = {
    button?: ReactNode;
    description: string[];
    title: string[];
    videoSrc: string;
};

export function HomeHero({
    button,
    description,
    title,
    videoSrc,
}: HomeHeroProps) {
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
                <source src={videoSrc} type="video/mp4" />
            </video>
            <div className={styles.videoOverlay} />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.copy}>
                        <h1 className={styles.title}>
                            {title.map((line) => (
                                <span key={line}>{line}</span>
                            ))}
                        </h1>
                        <p className={styles.description}>
                            {description.map((line) => (
                                <span key={line}>{line}</span>
                            ))}
                        </p>
                        {button}
                    </div>
                </div>
            </div>
        </section>
    );
}
