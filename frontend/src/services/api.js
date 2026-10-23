export async function fetchCompanies() {
  const response = await fetch("http://localhost:8080/api/companies");

  if (!response.ok) {
    throw new Error("Failed to load companies");
  }

  return response.json();
}

export async function fetchJobOffers() {
  const response = await fetch("http://localhost:8080/api/jobOffers");

  if (!response.ok) {
    throw new Error("Failed to load job offers");
  }

  return response.json();
}
