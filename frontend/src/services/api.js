export async function fetchHello() {
  const resolution = await fetch("http://localhost:8080/api/hello");

  if (!resolution.ok) {
    throw new Error("API request failed");
  }

  return resolution.text();
}