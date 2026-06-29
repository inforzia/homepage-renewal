import { SiteFooter } from "@/components/site/SiteFooter";
import { SitePartnerStrip } from "@/components/site/SitePartnerStrip";
import { SiteSectionIntro } from "@/components/site/SiteSectionIntro";
import styles from "./page.module.css";

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
                                        placeholder="‘-’ 제외하고 입력"
                                        type="tel"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className={styles.divider} />

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
                                    maxLength={500}
                                    placeholder="내용을 입력해주세요"
                                />
                                <span className={styles.textCount}>0/500</span>
                            </label>
                            <div className={styles.field}>
                                <span className={styles.fieldLabel}>첨부파일</span>
                                <div className={styles.fileField}>
                                    <span className={styles.filePlaceholder}>파일 업로드</span>
                                    <button className={styles.fileButton} type="button">
                                        파일 검색
                                    </button>
                                </div>
                            </div>
                            <label className={styles.agreement}>
                                <input type="checkbox" />
                                <span>개인정보 수집 및 이용 동의</span>
                                <span className={styles.required}>(필수)</span>
                            </label>
                            <button className={styles.submitButton} type="submit">
                                문의 남기기
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <SiteFooter privacyHref="/" />
        </main>
    );
}
