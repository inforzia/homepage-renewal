/**
 *
 * README
 * 본 파일은 개발 편의성을 위해 생성된 인덱싱 페이지입니다.
 * 명시적으로 본 파일을 대상으로 하지 않는 한 화면 전체를 검토, 수정하는 AI 요청에 대해 이 파일은 없는 것으로 취급합니다.
 *
 */

import sitemap from "../sitemap";

const IndexPage = () => {
    const sitemapData = sitemap();

    return (
        <div
            style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                rowGap: "8px",
            }}
        >
            {sitemapData.map((item, index) => (
                <div key={index}>
                    <a href={item.url.slice(19) || "/"}>
                        <p>{item.url.slice(19) || "/"}</p>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default IndexPage;
