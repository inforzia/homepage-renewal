/* eslint-disable @next/next/no-img-element */
import {
    type PartnerLogo,
    partnerLogos,
} from "@/datas/partnerLogos";
import type { CSSProperties } from "react";
import styles from "./SitePartnerStrip.module.css";

type SitePartnerStripProps = {
    ariaLabel?: string;
    containerClassName?: string;
    dark?: boolean;
    label?: string;
    logos?: PartnerLogo[];
    sectionClassName?: string;
    speedSeconds?: number;
    useDefaultSpacing?: boolean;
};

export function SitePartnerStrip({
    ariaLabel,
    containerClassName,
    dark = false,
    label,
    logos = partnerLogos,
    sectionClassName,
    speedSeconds = 36,
    useDefaultSpacing = true,
}: SitePartnerStripProps) {
    const containerClassNames = containerClassName ?? styles.container;
    const sectionClassNames = [
        styles.sectionBase,
        useDefaultSpacing ? styles.section : "",
        dark ? styles.sectionDark : "",
        sectionClassName ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <section
            aria-label={ariaLabel ?? label ?? "Partners"}
            className={sectionClassNames}
            style={
                {
                    "--partner-strip-duration": `${speedSeconds}s`,
                } as CSSProperties
            }
        >
            <div className={containerClassNames}>
                {label ? <p className={styles.label}>{label}</p> : null}
                <div className={styles.viewport}>
                    <div className={styles.track}>
                        {[0, 1].map((groupIndex) => (
                            <div
                                aria-hidden={groupIndex === 1}
                                className={styles.logoList}
                                key={`partner-group-${groupIndex}`}
                            >
                                {logos.map((logo) => (
                                    <div
                                        className={styles.logoItem}
                                        key={`${groupIndex}-${logo.alt}`}
                                    >
                                        <img
                                            alt={groupIndex === 0 ? logo.alt : ""}
                                            className={styles.logoImage}
                                            height={logo.height}
                                            loading="eager"
                                            src={logo.src}
                                            width={logo.width}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div
                        aria-hidden="true"
                        className={`${styles.fade} ${styles.fadeLeft}`}
                    />
                    <div
                        aria-hidden="true"
                        className={`${styles.fade} ${styles.fadeRight}`}
                    />
                </div>
            </div>
        </section>
    );
}
