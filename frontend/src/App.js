import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState(null);
  const [usingDemo, setUsingDemo] = useState(false);

  // Generate demo data when API is not reachable
  const generateDemoData = () => {
    const temperature = +(Math.random() * (35 - 15) + 15).toFixed(1);
    const distance = +(Math.random() * (40 - 3) + 3).toFixed(1);
    const doorState = distance < 15 ? "OPEN" : "CLOSED";

    return {
      temperature,
      distance,
      doorState,
      lastUpdated: new Date().toISOString(),
    };
  };

  // Fetch from API or fallback to demo data
  const fetchStatus = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/box-status");
      if (!res.ok) throw new Error("Network response not ok");
      const data = await res.json();
      setStatus(data);
      setUsingDemo(false);
    } catch (err) {
      console.warn("Backend unreachable — using demo data instead.");
      setStatus(generateDemoData());
      setUsingDemo(true);
    }
  };

  // Fetch on load and refresh every 5 seconds
  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <div style={styles.page}>
        <h1 style={styles.title}>Smart Delivery Box – Loading...</h1>
      </div>
    );
  }

  const { temperature, distance, doorState, lastUpdated } = status;

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Smart Delivery Box – Live Status</h1>

      {usingDemo && (
        <p style={styles.demoNote}>
          Backend not reachable — showing simulated demo data.
        </p>
      )}

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2>Temperature</h2>
          <p style={styles.value}>{temperature} °C</p>
        </div>

        <div style={styles.card}>
          <h2>Package Distance</h2>
          <p style={styles.value}>{distance} cm</p>
        </div>

        <div style={styles.card}>
          <h2>Door State</h2>
          <p
            style={{
              ...styles.value,
              color: doorState === "OPEN" ? "lightgreen" : "salmon",
            }}
          >
            {doorState}
          </p>
        </div>
      </div>

      <p style={styles.updated}>
        Last updated: {new Date(lastUpdated).toLocaleTimeString()}
      </p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0A192F",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    padding: "20px",
  },
  title: {
    marginBottom: "16px",
  },
  demoNote: {
    marginBottom: "16px",
    fontSize: "12px",
    color: "#FFEB3B",
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    background: "#112240",
    padding: "20px 30px",
    borderRadius: "12px",
    minWidth: "180px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  value: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  updated: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#B0BEC5",
  },
};

export default App;