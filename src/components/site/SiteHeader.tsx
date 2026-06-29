"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./SiteHeader.module.css";

const productItems = [
    {
        description: "현장의 모든 순간을 감지하는 Vision AI",
        href: "/product-flomon-vision",
        title: "Flomon Vision",
        image: "/images/vision-ai/overview-visual.png",
    },
    {
        description: "의사결정과 흐름을 설계하는 AI 에이전트",
        href: "/product-flomon-agent",
        title: "Flomon Agent",
        image: "/images/vision-ai/overview-visual.png",
    },
];

const visionIndustryItems = [
    {
        href: "/solution-disaster-safety",
        title: "재난 안전",
    },
    {
        href: "/solution-facility-infrastructure",
        title: "시설 및 인프라",
    },
    {
        href: "/solution-retail-store-management",
        title: "리테일 및 매장",
    },
    {
        href: "/solution-manufacturing-construction",
        title: "제조 및 건설",
    },
    {
        href: "/solution-logistics-distribution",
        title: "물류 및 유통업",
    },
    {
        href: "/solution-smart-farming",
        title: "스마트팜",
    },
];

const companyItems = [
    {
        description:
            "Vision AI Solution의 새로운 기준을 제시하는 인포지아의 미션과 비전을 소개합니다.",
        href: "/contact-us",
        title: "About Inforzia",
    },
];

export function SiteHeader() {
    const [openMenu, setOpenMenu] = useState<
        "company" | "products" | "vision-ai" | null
    >(null);
    const rootRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        function handlePointerDown(event: PointerEvent) {
            if (!rootRef.current?.contains(event.target as Node)) {
                setOpenMenu(null);
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, []);

    function toggleMenu(menu: "company" | "products" | "vision-ai") {
        setOpenMenu((current) => (current === menu ? null : menu));
    }

    function closeMenu() {
        setOpenMenu(null);
    }

    return (
        <header className={styles.header} ref={rootRef}>
            <div className={styles.inner}>
                <Link
                    aria-label="Inforzia home"
                    className={styles.logo}
                    href="/"
                    onClick={closeMenu}
                >
                    <Image
                        alt="Inforzia"
                        className={styles.logoImage}
                        height={64}
                        priority
                        src="/images/inforzia/site-logo-navbar.png"
                        width={140}
                    />
                </Link>

                <nav aria-label="Global" className={styles.nav}>
                    <div className={styles.navGroup}>
                        <button
                            aria-expanded={openMenu === "vision-ai"}
                            className={styles.navTrigger}
                            type="button"
                            onClick={() => toggleMenu("vision-ai")}
                        >
                            Vision AI
                        </button>
                        <div
                            className={`${styles.dropdown} ${styles.visionDropdown} ${
                                openMenu === "vision-ai"
                                    ? styles.dropdownOpen
                                    : ""
                            }`}
                        >
                            <div className={styles.visionDropdownLayout}>
                                <Link
                                    className={styles.visionFeature}
                                    href="/enterprise-vision-ai"
                                    onClick={closeMenu}
                                >
                                    <div className={styles.visionFeatureHeader}>
                                        <strong>Enterprise Vision AI</strong>
                                        <span aria-hidden="true">-&gt;</span>
                                    </div>
                                    <p className={styles.visionFeatureDesc}>
                                        복잡한 현장의 맥락을 이해하고 제어하는
                                        Vision AI 기술로 산업 초생산성의 기준을
                                        제시합니다.
                                    </p>
                                    <div className={styles.visionFeatureImage}>
                                        <Image
                                            alt=""
                                            fill
                                            sizes="(max-width: 1023px) 100vw, 640px"
                                            src="/images/vision-ai/overview-visual.png"
                                        />
                                    </div>
                                </Link>

                                <div className={styles.visionIndustryColumn}>
                                    <p className={styles.visionIndustryLabel}>
                                        Industries
                                    </p>
                                    <div className={styles.visionIndustryList}>
                                        {visionIndustryItems.map((item) => (
                                            <Link
                                                className={
                                                    styles.visionIndustryLink
                                                }
                                                href={item.href}
                                                key={item.title}
                                                onClick={closeMenu}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.navGroup}>
                        <button
                            aria-expanded={openMenu === "products"}
                            className={styles.navTrigger}
                            type="button"
                            onClick={() => toggleMenu("products")}
                        >
                            Products
                        </button>
                        <div
                            className={`${styles.dropdown} ${
                                openMenu === "products"
                                    ? styles.dropdownOpen
                                    : ""
                            }`}
                        >
                            <div className={styles.productGrid}>
                                {productItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        className={styles.visionFeature}
                                        href={item.href}
                                        onClick={closeMenu}
                                    >
                                        <div
                                            className={
                                                styles.visionFeatureHeader
                                            }
                                        >
                                            <strong>{item.title}</strong>
                                            <span aria-hidden="true">
                                                -&gt;
                                            </span>
                                        </div>
                                        <p className={styles.visionFeatureDesc}>
                                            {item.description}
                                        </p>
                                        <div
                                            className={
                                                styles.visionFeatureImage
                                            }
                                        >
                                            <Image
                                                alt=""
                                                fill
                                                sizes="(max-width: 1023px) 100vw, 640px"
                                                src={item.image}
                                            />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            {/* <div className={styles.productGrid}>
                                {productItems.map((item) => (
                                    <Link
                                        className={styles.cardLink}
                                        href={item.href}
                                        key={item.title}
                                        onClick={closeMenu}
                                    >
                                        <strong>{item.title}</strong>
                                        <span>{item.description}</span>
                                    </Link>
                                ))}
                            </div> */}
                        </div>
                    </div>

                    <Link
                        className={styles.navLink}
                        href="/use-cases"
                        onClick={closeMenu}
                    >
                        Use Cases
                    </Link>

                    <div className={styles.navGroup}>
                        <button
                            aria-expanded={openMenu === "company"}
                            className={styles.navTrigger}
                            type="button"
                            onClick={() => toggleMenu("company")}
                        >
                            Company
                        </button>
                        <div
                            className={`${styles.dropdown} ${styles.companyDropdown} ${
                                openMenu === "company"
                                    ? styles.dropdownOpen
                                    : ""
                            }`}
                        >
                            {companyItems.map((item) => (
                                <Link
                                    className={styles.cardLink}
                                    href={item.href}
                                    key={item.title}
                                    onClick={closeMenu}
                                >
                                    <strong>{item.title}</strong>
                                    <span>{item.description}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>

                <div className={styles.actions}>
                    <Link
                        className={styles.contactLink}
                        href="/contact-us"
                        onClick={closeMenu}
                    >
                        문의하기
                    </Link>
                </div>
            </div>
        </header>
    );
}
