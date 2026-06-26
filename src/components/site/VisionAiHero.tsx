import type { CSSProperties, ReactNode } from "react";
import styles from "./VisionAiHero.module.css";

type VisionAiHeroProps = {
    backgroundImageSrc: string;
    button?: ReactNode;
    description: string[];
    title: string[];
};

export function VisionAiHero({
    backgroundImageSrc,
    button,
    description,
    title,
}: VisionAiHeroProps) {
    return (
        <section
            className={styles.section}
            style={
                {
                    backgroundImage: `url("${backgroundImageSrc}")`,
                } as CSSProperties
            }
        >
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
