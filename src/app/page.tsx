export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px 20px 96px",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          display: "grid",
          gap: "24px",
        }}
      >
        <section
          style={{
            background: "var(--surface)",
            border: "1px solid var(--surface-border)",
            borderRadius: "32px",
            padding: "48px",
            boxShadow: "0 20px 60px rgba(30, 27, 24, 0.05)",
          }}
        >
          <p
            style={{
              color: "var(--accent)",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Inforzia Homepage Renewal
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              marginBottom: "20px",
            }}
          >
            Static-first corporate website starter
          </h1>
          <p
            style={{
              maxWidth: "720px",
              color: "var(--muted)",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            This initial screen is a placeholder for the actual homepage design.
            Use Figma-linked documentation to connect frames to implementation
            targets and replace each section with production content as the design
            system is defined.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              title: "Static export ready",
              body: "Configured for static output so Netlify deployment stays simple for a content-heavy homepage.",
            },
            {
              title: "Figma mapping workflow",
              body: "Track frame URLs, node IDs, and target component files in the dedicated note document before implementation.",
            },
            {
              title: "Logic preservation",
              body: "Treat design sync as a visual update path. Keep business logic and data handling under direct code ownership.",
            },
          ].map((item) => (
            <article
              key={item.title}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--surface-border)",
                borderRadius: "24px",
                padding: "28px",
              }}
            >
              <h2
                style={{
                  fontSize: "20px",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.7,
                }}
              >
                {item.body}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
