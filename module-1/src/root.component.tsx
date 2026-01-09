import logo from "./assets/logo.svg";

type RootProps = {
  name: string;
};

export default function Root({ name }: RootProps) {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 16,
  };

  const heroStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 16,
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
  };

  return (
    <section>
      <header>
        <h1>Module 1: Hero</h1>
        <p>
          <small>January 9, 2026</small>
        </p>
      </header>

      <div style={heroStyle}>
        <img
          src={logo}
          alt="Module 1 Logo"
          width={120}
          height={120}
          style={{ display: "block" }}
        />
        <div style={containerStyle}>
          <div>
            <h2 style={{ margin: 0 }}>Welcome to Module 1</h2>
            <p style={{ margin: 0, color: "#4b5563" }}>
              This microfrontend demonstrates image assets and mounting in the
              single-spa shell.
            </p>
          </div>
        </div>
      </div>

      <p style={{ marginTop: 16 }}>
        <em>{name} is mounted!</em>
      </p>
    </section>
  );
}
