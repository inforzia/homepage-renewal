import Link from "next/link";
import styles from "./SitePrimaryButton.module.css";

type SitePrimaryButtonProps = {
    dark?: boolean;
    label?: string;
};

export function SitePrimaryButton({
    dark = false,
    label = "Get started",
}: SitePrimaryButtonProps) {
    return (
        <Link href="/company/contact-us">
            <button
                className={`${styles.button}${dark ? ` ${styles.dark}` : ""}`}
                type="button"
            >
                <span className={styles.label}>{label}</span>
                <svg
                    aria-hidden="true"
                    className={styles.icon}
                    viewBox="0 0 11.5004 11.125"
                >
                    <path d="M11.3281 5.18438L5.425 0.0609374C5.37969 0.0218749 5.32188 0 5.26094 0H3.87813C3.7625 0 3.70938 0.14375 3.79688 0.21875L9.26875 4.96875H0.125C0.05625 4.96875 0 5.025 0 5.09375V6.03125C0 6.1 0.05625 6.15625 0.125 6.15625H9.26719L3.79531 10.9063C3.70781 10.9828 3.76094 11.125 3.87656 11.125H5.30625C5.33594 11.125 5.36563 11.1141 5.3875 11.0938L11.3281 5.94063C11.3822 5.89359 11.4256 5.83549 11.4553 5.77026C11.485 5.70503 11.5004 5.63418 11.5004 5.5625C11.5004 5.49082 11.485 5.41997 11.4553 5.35474C11.4256 5.28951 11.3822 5.23141 11.3281 5.18438V5.18438Z" />
                </svg>
            </button>
        </Link>
    );
}
