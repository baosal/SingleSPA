import { useEffect, useState } from "react";

type RootProps = {
  name: string;
};

export default function Root({ name }: RootProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const cardStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 12,
    minWidth: 160,
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    background: "#fff",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 12,
    margin: "16px 0",
  };

  return (
    <section>
      <header>
        <h1>Module 2: Dashboard</h1>
        <p>
          <small>Local time: {now.toLocaleString()}</small>
        </p>
      </header>

      <div style={gridStyle}>
        <div style={cardStyle}>
          <h2 style={{ margin: 0 }}>42</h2>
          <p style={{ margin: 0, color: "#666" }}>Active Users</p>
        </div>
        <div style={cardStyle}>
          <h2 style={{ margin: 0 }}>0</h2>
          <p style={{ margin: 0, color: "#666" }}>Errors</p>
        </div>
        <div style={cardStyle}>
          <h2 style={{ margin: 0 }}>99.98%</h2>
          <p style={{ margin: 0, color: "#666" }}>Uptime</p>
        </div>
      </div>

      <button onClick={() => setShowDetails((s) => !s)}>
        {showDetails ? "Hide" : "Show"} details
      </button>

      {showDetails && (
        <article style={{ marginTop: 16 }}>
          <h3 style={{ marginTop: 0 }}>Release Notes</h3>
          <ul>
            <li>Routing verified inside the single-spa shell.</li>
            <li>
              Microfrontend <em>{name}</em> is currently mounted and responsive.
            </li>
            <li>Demo content updated to a compact dashboard layout.</li>
          </ul>
        </article>
      )}
    </section>
  );
}
