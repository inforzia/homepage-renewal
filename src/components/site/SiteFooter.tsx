/* eslint-disable @next/next/no-img-element */
import styles from "./SiteFooter.module.css";

const siteOrigin = "https://seed-bronze-70048020.figma.site";

const contactItems = [
    { label: "전화", value: "02-6959-2540" },
    { label: "메일", value: "inforzia@inforzia.io" },
    {
        label: "주소",
        value: "(16942) 경기도 용인시 수지구 광교중앙로 338(상현동, 광교우미뉴브) A동 627호",
    },
];

type SiteFooterProps = {
    className?: string;
    containerClassName?: string;
    privacyHref?: string;
};

export function SiteFooter({
    className,
    containerClassName,
    privacyHref = "/",
}: SiteFooterProps) {
    return (
        <footer className={`${styles.footer}${className ? ` ${className}` : ""}`}>
            <div className={containerClassName}>
                <div className={styles.footerInner}>
                    <img
                        alt="Inforzia"
                        className={styles.footerLogo}
                        height={72}
                        src={`${siteOrigin}/_assets/v11/2607c73eb4429b9e83b47ee444f5515f6877e388.png`}
                        width={216}
                    />
                    <div className={styles.footerMeta}>
                        <div className={styles.contactGrid}>
                            {contactItems.map((item) => (
                                <div className={styles.contactItem} key={item.label}>
                                    <p className={styles.contactLabel}>{item.label}</p>
                                    <p className={styles.contactValue}>{item.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className={styles.footerLegal}>
                            <a href={privacyHref}>개인정보 처리방침</a>
                            <p>© 2026 Inforzia Corp. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
