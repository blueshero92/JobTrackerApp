import { useEffect, useState } from "react";
import { fetchHello } from "./services/api";
import HelloBox from "./components/HelloBox";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchHello()
      .then(setMessage)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>JobTracker App</h1>
      <HelloBox message={message} />
    </div>
  );
}

export default App;