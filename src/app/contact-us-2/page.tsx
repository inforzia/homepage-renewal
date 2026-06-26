import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteFooterCta } from "@/components/site/SiteFooterCta";
import { SitePartnerStrip } from "@/components/site/SitePartnerStrip";
import { SitePrimaryButton } from "@/components/site/SitePrimaryButton";
import { SiteSectionIntro } from "@/components/site/SiteSectionIntro";
import styles from "./page.module.css";

const contactSteps = [
    "기본정보와 관심 분야를 남겨주세요.",
    "전문 담당자가 입력 내용을 검토합니다.",
    "솔루션 안내와 후속 미팅 일정을 빠르게 조율합니다.",
];

export default function ContactUsPage() {
    return (
        <main className={styles.page}>
            <section className={styles.detailHero}>
                <div className={styles.container}>
                    <SiteSectionIntro
                        body="인포지아의 기술과 솔루션에 대해 궁금한 점을 남겨주시면, 전문 담당자가 신속하게 안내해 드리겠습니다."
                        title="문의하기"
                        titleAs="h1"
                    />
                </div>
            </section>

            <SitePartnerStrip label="인포지아와 함께하는 기업들" />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        <form className={styles.formCard}>
                            <div className={styles.fieldGroup}>
                                <h2 className={styles.fieldTitle}>기본정보</h2>
                                <div className={styles.fieldRow}>
                                    <label className={styles.field}>
                                        <span className={styles.fieldLabel}>
                                            이름 <span className={styles.required}>*</span>
                                        </span>
                                        <input
                                            className={styles.input}
                                            placeholder="이름 입력"
                                            type="text"
                                        />
                                    </label>
                                    <label className={styles.field}>
                                        <span className={styles.fieldLabel}>
                                            회사명 <span className={styles.required}>*</span>
                                        </span>
                                        <input
                                            className={styles.input}
                                            placeholder="회사명 입력"
                                            type="text"
                                        />
                                    </label>
                                </div>
                                <div className={styles.fieldRow}>
                                    <label className={styles.field}>
                                        <span className={styles.fieldLabel}>
                                            이메일 <span className={styles.required}>*</span>
                                        </span>
                                        <input
                                            className={styles.input}
                                            placeholder="이메일 입력"
                                            type="email"
                                        />
                                    </label>
                                    <label className={styles.field}>
                                        <span className={styles.fieldLabel}>
                                            전화번호 <span className={styles.required}>*</span>
                                        </span>
                                        <input
                                            className={styles.input}
                                            placeholder="'-' 제외하고 입력"
                                            type="tel"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className={styles.fieldGroup}>
                                <h2 className={styles.fieldTitle}>문의 내용</h2>
                                <label className={styles.field}>
                                    <span className={styles.fieldLabel}>
                                        관심 분야 <span className={styles.required}>*</span>
                                    </span>
                                    <select className={styles.select} defaultValue="">
                                        <option value="" disabled>
                                            선택
                                        </option>
                                        <option>Flomon Vision</option>
                                        <option>Flomon Agent</option>
                                        <option>Disaster Safety</option>
                                        <option>기타 문의</option>
                                    </select>
                                </label>
                                <label className={styles.field}>
                                    <span className={styles.fieldLabel}>
                                        문의 내용 <span className={styles.required}>*</span>
                                    </span>
                                    <textarea
                                        className={styles.textarea}
                                        placeholder="내용을 입력해주세요"
                                    />
                                </label>
                                <label className={styles.field}>
                                    <span className={styles.fieldLabel}>첨부파일</span>
                                    <input className={styles.input} type="file" />
                                </label>
                                <label className={styles.agreement}>
                                    <input type="checkbox" />
                                    <span>개인정보 수집 및 이용 동의 (필수)</span>
                                </label>
                                <button className={styles.submitButton} type="submit">
                                    문의 남기기
                                </button>
                            </div>
                        </form>

                        <aside className={styles.asideCard}>
                            <h2 className={styles.caseTitle}>문의 절차</h2>
                            <p className={styles.caseBody}>
                                화면 우선 구현 단계에서는 원본의 폼 구성을 정적
                                형태로 재현했습니다. 실제 전송 로직은 추후 연결할
                                수 있습니다.
                            </p>
                            <ol className={styles.simpleList}>
                                {contactSteps.map((step) => (
                                    <li key={step}>{step}</li>
                                ))}
                            </ol>
                            <div className={styles.articlePanel}>
                                <h3 className={styles.caseTitle}>직접 연락하기</h3>
                                <p className={styles.caseBody}>
                                    02-6959-2540
                                    <br />
                                    inforzia@inforzia.io
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

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
