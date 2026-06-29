/* eslint-disable @next/next/no-img-element */
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { CardSlider } from "@/components/ui/CardSlider";
import {
    useCaseDetailPageIds,
    useCaseDetailPages,
} from "@/datas/useCaseDetailPages";
import { useCaseSummaries } from "@/datas/useCases";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

type UseCaseDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export function generateStaticParams() {
    return useCaseDetailPageIds.map((id) => ({ id }));
}

export default async function UseCaseDetailPage({
    params,
}: UseCaseDetailPageProps) {
    const { id } = await params;
    const pageData = useCaseDetailPages[id];
    const relatedUseCases = useCaseSummaries.filter(
        (useCase) => useCase.id !== id,
    );

    if (!pageData) {
        notFound();
    }

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.tagRow}>
                        {pageData.tags.map((tag) => (
                            <span className={styles.tag} key={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className={styles.title}>{pageData.title}</h1>
                    <p className={styles.date}>{pageData.date}</p>
                    <div className={styles.heroVisual}>
                        <img alt={pageData.title} src={pageData.image} />
                    </div>
                </div>
            </section>

            <section className={styles.storySection}>
                <div className={styles.storyInner}>
                    <aside className={styles.storyNav}>
                        {pageData.sections.map((section, index) => (
                            <a
                                className={`${styles.storyNavItem} ${index === 0 ? styles.storyNavItemActive : ""}`}
                                href={`#section-${index + 1}`}
                                key={section.title}
                            >
                                {section.title}
                            </a>
                        ))}
                    </aside>
                    <div className={styles.storyContent}>
                        {pageData.sections.map((section, index) => (
                            <article
                                className={styles.storyBlock}
                                id={`section-${index + 1}`}
                                key={section.title}
                            >
                                <h2>{section.title}</h2>
                                <p>{section.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* TODO: 간편 상담 화면 개발 (이미지 대신 비디오 사용) */}
            <section className={styles.consultSection}>
                <div className={styles.consultInner}>
                    <div className={styles.consultVisual}>
                        <div className={styles.consultOverlay}>
                            <p>인포지아의 AI 노하우</p>
                            <strong>전문가와 1:1로 상담해 보세요.</strong>
                        </div>
                    </div>
                    <form className={styles.consultForm}>
                        <label className={styles.field}>
                            <span>
                                이메일{" "}
                                <span className={styles.required}>*</span>
                            </span>
                            <input placeholder="이메일 입력" type="email" />
                        </label>
                        <div
                            aria-hidden="true"
                            className={styles.progressTrack}
                        >
                            <div className={styles.progressFill} />
                        </div>
                        <button className={styles.nextButton} type="button">
                            다음
                        </button>
                    </form>
                </div>
            </section>

            <CardSlider
                fadeColor="#f1f3f5"
                heading="Use Cases"
                headingClassName={styles.useCasesTitle}
                itemWidth={340}
                items={relatedUseCases.map((useCase) => (
                    <Link href={`/use-cases/${useCase.id}`} key={useCase.id}>
                        <article className={styles.caseCard}>
                            <div className={styles.caseImageWrap}>
                                <img alt={useCase.title} src={useCase.image} />
                            </div>
                            <div className={styles.caseCopy}>
                                <div className={styles.caseTags}>
                                    {useCase.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <h3>{useCase.title}</h3>
                            </div>
                        </article>
                    </Link>
                ))}
                nextButtonLabel="Next cases"
                pageParamName="pageStep"
                previousButtonLabel="Previous cases"
                sectionClassName={styles.useCasesSection}
                sectionStyle={{ padding: "106px 0 48px" }}
            />

            <div className={styles.ctaSpacer}>
                <SiteFooterCta
                    button={<SitePrimaryButton />}
                    description="산업 지능화의 시작, 인포지아와 함께 하세요."
                    title={["Vision AI That Sees", "Beyond The Surface."]}
                    variant="vision-ai"
                />
            </div>
            <SiteFooter privacyHref="/" />
        </main>
    );
}
