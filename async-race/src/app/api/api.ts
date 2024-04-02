export const fetchCars = () =>
  fetch("http://localhost:3000/garage")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch cars");
      }
      return response.json();
    })

    .catch((error) => {
      const errorMessage = error.message || "Unknown error occurred";
      return Promise.reject(errorMessage);
    });

export default fetchCars;
