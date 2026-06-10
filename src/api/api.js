const BASE_URL = "http://localhost:5000";

export const fetchData = async (url) => {
  const res = await fetch(`${BASE_URL}${url}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
