const BASE_URL = "http://localhost:5000"; // use real api

export const fetchData = async (url) => {
  const res = await fetch(url);
  // const res = await fetch(`${BASE_URL}${url}`); // use real api
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
