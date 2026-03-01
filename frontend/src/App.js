import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Shop from "./Shop";

function App() {
  const [page, setPage] = useState("login");
  const [userId, setUserId] = useState(null);

  if (userId) {
    return <Shop userId={userId} />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <header style={styles.header}>
        <h1 style={styles.title}>Bhagya Jewelleries</h1>
        <p style={styles.tagline}>Where Elegance Meets Tradition</p>
      </header>

      <div style={styles.card}>
        {page === "login" ? (
          <>
            <Login setUserId={setUserId} />
            <p onClick={() => setPage("register")} style={styles.link}>
              Don’t have an account? Register
            </p>
          </>
        ) : (
          <>
            <Register />
            <p onClick={() => setPage("login")} style={styles.link}>
              Already have an account? Login
            </p>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')", // jewellery background
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    fontFamily: "'Playfair Display', serif",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 0,
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    zIndex: 1,
  },
  title: {
    fontSize: "42px",
    fontWeight: "bold",
    color: "#FFD700", // gold accent
    marginBottom: "10px",
  },
  tagline: {
    fontSize: "18px",
    color: "#f5f5f5",
    fontStyle: "italic",
  },
  card: {
    background: "rgba(255,255,255,0.9)",
    color: "#333",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    width: "400px",
    textAlign: "center",
    zIndex: 1,
  },
  link: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#800000",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

export default App;
