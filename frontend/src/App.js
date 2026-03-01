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
    <div style={{ textAlign: "center" }}>
      <h1>Bhagya Jewelleries</h1>
      {page === "login" ? (
        <>
          <Login setUserId={setUserId} />
          <p onClick={() => setPage("register")} style={{ cursor: "pointer" }}>
            Don't have an account? Register
          </p>
        </>
      ) : (
        <>
          <Register />
          <p onClick={() => setPage("login")} style={{ cursor: "pointer" }}>
            Already have an account? Login
          </p>
        </>
      )}
    </div>
  );
}

export default App;
