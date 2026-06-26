/* eslint-disable @next/next/no-img-element */
import styles from "./SiteFooter.module.css";

const contactItems = [
    { label: "전화", value: "02-6959-2540" },
    { label: "메일", value: "inforzia@inforzia.io" },
    {
        label: "주소",
        value: "(16942) 경기도 용인시 수지구 광교중앙로 338(상현동, 광교우미뉴브) A동 627호",
    },
];

type SiteFooterProps = {
    privacyHref?: string;
};

export function SiteFooter({ privacyHref = "/" }: SiteFooterProps) {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerInner}>
                    <img
                        alt="Inforzia"
                        className={styles.footerLogo}
                        height={72}
                        src="/images/inforzia/footer-logo.png"
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
