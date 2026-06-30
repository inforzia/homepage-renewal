"use client";
import {
    Children,
    useEffect,
    useRef,
    useState,
    type CSSProperties,
    type MouseEvent,
    type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import styles from "./CardSlider.module.css";

type CardSliderProps = {
    fadeColor?: string;
    heading: string;
    headingClassName?: string;
    itemWidth: number;
    items: ReactNode;
    nextButtonLabel?: string;
    previousButtonLabel?: string;
    gap?: number;
    initialPage?: number;
    pageParamName?: string;
    sectionClassName?: string;
    sectionStyle?: CSSProperties;
};

function getPageFromSearchParams(
    searchParams: URLSearchParams,
    pageParamName: string,
    initialPage: number,
) {
    const pageParamValue = searchParams.get(pageParamName);
    const parsedPage = Number(pageParamValue);

    if (!Number.isFinite(parsedPage) || parsedPage <= 0) {
        return initialPage;
    }

    return Math.floor(parsedPage) - 1;
}

function ChevronIcon({
    className,
    direction,
}: {
    className?: string;
    direction: "left" | "right";
}) {
    return direction === "left" ? (
        <LiaAngleLeftSolid className={className} size={24} />
    ) : (
        <LiaAngleRightSolid className={className} size={24} />
    );
}

export function CardSlider({
    fadeColor = "#fff",
    heading,
    headingClassName,
    itemWidth,
    items,
    gap = 24,
    initialPage = 0,
    nextButtonLabel = "Next items",
    pageParamName,
    previousButtonLabel = "Previous items",
    sectionClassName,
    sectionStyle,
}: CardSliderProps) {
    const router = useRouter();
    const sliderItems = Children.toArray(items);
    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const firstItemRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(() => {
        if (!pageParamName || typeof window === "undefined") {
            return initialPage;
        }

        return getPageFromSearchParams(
            new URLSearchParams(window.location.search),
            pageParamName,
            initialPage,
        );
    });
    const [viewportWidth, setViewportWidth] = useState(0);
    const [trackWidth, setTrackWidth] = useState(0);
    const [measuredItemWidth, setMeasuredItemWidth] = useState(itemWidth);

    useEffect(() => {
        if (!pageParamName) {
            return;
        }

        const syncPageFromLocation = () => {
            const nextPage = getPageFromSearchParams(
                new URLSearchParams(window.location.search),
                pageParamName,
                initialPage,
            );
            setPage(nextPage);
        };

        window.addEventListener("popstate", syncPageFromLocation);

        return () => {
            window.removeEventListener("popstate", syncPageFromLocation);
        };
    }, [initialPage, pageParamName]);

    useEffect(() => {
        const updateMeasurements = () => {
            setViewportWidth(viewportRef.current?.clientWidth ?? 0);
            setTrackWidth(trackRef.current?.scrollWidth ?? 0);
            setMeasuredItemWidth(
                firstItemRef.current?.getBoundingClientRect().width ??
                    itemWidth,
            );
        };

        updateMeasurements();

        const resizeObserver = new ResizeObserver(() => {
            updateMeasurements();
        });

        if (viewportRef.current) {
            resizeObserver.observe(viewportRef.current);
        }

        if (trackRef.current) {
            resizeObserver.observe(trackRef.current);
        }

        if (firstItemRef.current) {
            resizeObserver.observe(firstItemRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [itemWidth]);

    const effectiveItemWidth = measuredItemWidth || itemWidth;
    const itemsPerPage = Math.max(
        1,
        Math.floor((viewportWidth + gap) / (effectiveItemWidth + gap)),
    );
    const maxPage = Math.max(1, Math.ceil(sliderItems.length / itemsPerPage));
    const currentPage = Math.min(page, maxPage - 1);
    const maxOffset = Math.max(0, trackWidth - viewportWidth);
    const pageOffset = currentPage * itemsPerPage * (effectiveItemWidth + gap);
    const translateX = Math.min(pageOffset, maxOffset);

    const canGoPrevious = currentPage > 0;
    const canGoNext = currentPage < maxPage - 1;

    const updatePageInUrl = (nextPage: number) => {
        if (!pageParamName || typeof window === "undefined") {
            return;
        }

        const params = new URLSearchParams(window.location.search);
        params.set(pageParamName, String(nextPage + 1));

        const nextUrl = params.toString()
            ? `${window.location.pathname}?${params.toString()}`
            : window.location.pathname;

        router.replace(nextUrl, { scroll: false });
    };

    const handleItemClickCapture = (event: MouseEvent<HTMLDivElement>) => {
        if (!pageParamName || event.defaultPrevented) {
            return;
        }

        if (
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
        ) {
            return;
        }

        const target = event.target;

        if (!(target instanceof Element)) {
            return;
        }

        const anchor = target.closest("a[href]");

        if (!(anchor instanceof HTMLAnchorElement)) {
            return;
        }

        if (anchor.target && anchor.target !== "_self") {
            return;
        }

        const nextUrl = new URL(anchor.href);

        if (nextUrl.origin !== window.location.origin) {
            return;
        }

        event.preventDefault();
        nextUrl.searchParams.set(pageParamName, String(currentPage + 1));

        router.push(`${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
    };

    return (
        <section
            className={
                sectionClassName
                    ? `${styles.section} ${sectionClassName}`
                    : styles.section
            }
            style={sectionStyle}
        >
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2 className={headingClassName}>{heading}</h2>
                </div>
                <div className={styles.wrap}>
                    <div
                        className={styles.viewport}
                        onClickCapture={handleItemClickCapture}
                        ref={viewportRef}
                    >
                        <div
                            className={styles.track}
                            ref={trackRef}
                            style={
                                {
                                    "--card-gap": `${gap}px`,
                                    "--card-width": `${itemWidth}px`,
                                    transform: `translateX(-${translateX}px)`,
                                } as CSSProperties
                            }
                        >
                            {sliderItems.map((item, index) => (
                                <div
                                    className={styles.item}
                                    key={index}
                                    ref={index === 0 ? firstItemRef : null}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div
                            aria-hidden="true"
                            className={styles.fade}
                            style={{
                                background: `linear-gradient(270deg, ${fadeColor} 0%, rgba(255, 255, 255, 0) 100%)`,
                                opacity: canGoNext ? 1 : 0,
                                transition: "opacity 0.3s",
                            }}
                        />
                    </div>
                    <div className={styles.status}>
                        <button
                            aria-label={previousButtonLabel}
                            className={styles.button}
                            data-disabled={!canGoPrevious}
                            disabled={!canGoPrevious}
                            onClick={() => {
                                if (!canGoPrevious) {
                                    return;
                                }

                                const nextPage = Math.max(0, currentPage - 1);
                                setPage(nextPage);
                                updatePageInUrl(nextPage);
                            }}
                            type="button"
                        >
                            <ChevronIcon
                                className={styles.icon}
                                direction="left"
                            />
                        </button>
                        <p className={styles.indicator}>
                            {currentPage + 1} / {maxPage}
                        </p>
                        <button
                            aria-label={nextButtonLabel}
                            className={styles.button}
                            data-disabled={!canGoNext}
                            disabled={!canGoNext}
                            onClick={() => {
                                if (!canGoNext) {
                                    return;
                                }

                                const nextPage = Math.min(
                                    maxPage - 1,
                                    currentPage + 1,
                                );
                                setPage(nextPage);
                                updatePageInUrl(nextPage);
                            }}
                            type="button"
                        >
                            <ChevronIcon
                                className={styles.icon}
                                direction="right"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
