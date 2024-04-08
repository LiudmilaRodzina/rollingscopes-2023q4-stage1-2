import API_URL from "./api-url";

const fetchCars = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (error) {
    alert("Failed to fetch cars. Please try again later");
    return Promise.reject(error);
  }
};

export default fetchCars;
