/* eslint-disable @next/next/no-img-element */
import styles from "./SitePartnerStrip.module.css";

const partnerLogos = [
    {
        alt: "Roadpia",
        height: 60,
        src: "/images/inforzia/logo-roadpia.png",
        width: 180,
    },
    {
        alt: "FUTURE ICT",
        height: 60,
        src: "/images/inforzia/logo-future-ict.png",
        width: 110,
    },
    {
        alt: "D&C",
        height: 60,
        src: "/images/inforzia/logo-dnc.png",
        width: 170,
    },
    {
        alt: "thingspire",
        height: 60,
        src: "/images/inforzia/logo-thingspire.png",
        width: 200,
    },
    {
        alt: "WAPPLAB",
        height: 60,
        src: "/images/inforzia/logo-wapplab.png",
        width: 96,
    },
    {
        alt: "Nkia",
        height: 60,
        src: "/images/inforzia/logo-nkia.png",
        width: 150,
    },
    {
        alt: "COWEAVER",
        height: 60,
        src: "/images/inforzia/logo-coweaver.png",
        width: 120,
    },
];

type SitePartnerStripProps = {
    dark?: boolean;
    label: string;
};

export function SitePartnerStrip({
    dark = false,
    label,
}: SitePartnerStripProps) {
    return (
        <section className={`${styles.section} ${dark ? styles.sectionDark : ""}`}>
            <div className={styles.container}>
                <p className={styles.label}>{label}</p>
                <div className={styles.viewport}>
                    <div className={styles.track}>
                        {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                            <div className={styles.logoItem} key={`${logo.alt}-${index}`}>
                                <img
                                    alt={index < partnerLogos.length ? logo.alt : ""}
                                    height={logo.height}
                                    loading="eager"
                                    src={logo.src}
                                    width={logo.width}
                                />
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
