function HelloBox({ message }) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Backend Response:</h2>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default HelloBox;