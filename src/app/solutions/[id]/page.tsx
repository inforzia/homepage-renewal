/* eslint-disable @next/next/no-img-element */
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SiteHero } from "@/components/site/SiteHero";
import { SitePartnerStrip } from "@/components/site/SitePartnerStrip";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { CardSlider } from "@/components/ui/CardSlider";
import { ScrollLinkedSteps } from "@/components/ui/ScrollLinkedSteps";
import { solutionPageIds, solutionPages } from "@/datas/solutions";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

type SolutionPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export function generateStaticParams() {
    return solutionPageIds.map((id) => ({ id }));
}

function renderSolutionIcon(
    icon: (typeof solutionPages)[string]["solutionFeatures"][number]["icon"],
) {
    if (icon.kind === "image") {
        return (
            <img alt="" className={styles.solutionIconImage} src={icon.src} />
        );
    }

    if (icon.kind === "number") {
        return <span className={styles.solutionNumberIcon}>{icon.value}</span>;
    }
}

export default async function SolutionPage({ params }: SolutionPageProps) {
    const { id } = await params;
    const pageData = solutionPages[id];

    if (!pageData) {
        notFound();
    }

    return (
        <main className={styles.page}>
            <SiteHero
                backgroundSrc={pageData.hero.backgroundSrc}
                description={pageData.hero.description}
                eyebrow={pageData.hero.eyebrow}
                title={pageData.hero.title}
            />

            <SitePartnerStrip label="Our Vision AI Solutions are Featured On" />

            <section className={styles.solutionSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>
                        {pageData.sections.solutionHeading}
                    </h2>
                    <div className={styles.solutionVisual}>
                        <img alt="" src={pageData.sections.solutionVisualSrc} />
                    </div>
                    <div className={styles.solutionGrid}>
                        {pageData.solutionFeatures.map((item) => (
                            <article
                                className={styles.solutionCard}
                                key={item.title}
                            >
                                <div className={styles.solutionIconWrap}>
                                    {renderSolutionIcon(item.icon)}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ScrollLinkedSteps
                heading={pageData.sections.workflowHeading}
                items={pageData.workflow.map((item) => ({
                    content: item.body,
                    image: item.image,
                    label: item.label,
                    title: item.title,
                }))}
            />

            {pageData.story ? (
                <section className={styles.storySection}>
                    <img
                        alt=""
                        className={styles.storyImage}
                        src={pageData.story.image}
                    />
                    <div className={styles.storyInner}>
                        <h2 className={styles.storyTitle}>
                            {pageData.story.titleLines.map((line) => (
                                <span key={line}>{line}</span>
                            ))}
                        </h2>
                    </div>
                </section>
            ) : null}

            <CardSlider
                fadeColor="#f1f3f5"
                heading={pageData.sections.useCasesHeading}
                headingClassName={styles.useCasesTitle}
                itemWidth={340}
                items={pageData.useCases.map((item) => (
                    <article className={styles.caseCard} key={item.title}>
                        <div className={styles.caseImageWrap}>
                            <img alt="" src={item.image} />
                        </div>
                        <div className={styles.caseCopy}>
                            <div className={styles.caseTags}>
                                {item.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            <h3>{item.title}</h3>
                        </div>
                    </article>
                ))}
                nextButtonLabel="Next cases"
                previousButtonLabel="Previous cases"
                sectionClassName={styles.useCasesSection}
                sectionStyle={{ padding: "96px 0 48px" }}
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
