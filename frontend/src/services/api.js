export async function fetchHello() {
  const resolution = await fetch("http://localhost:8080/api/hello");

  if (!resolution.ok) {
    throw new Error("API request failed");
  }

  return resolution.text();
}export async function fetchCompanies() {
  const response = await fetch("http://localhost:8080/api/companies");

  if (!response.ok) {
    throw new Error("Failed to load companies");
  }

  return response.json();
}
