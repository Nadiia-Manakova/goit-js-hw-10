export function fetchBreeds() {
  fetch("https://api.thecatapi.com/v1/breeds")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Обработка данных
  })
  .catch(error => {
    Notiflix.Notify.failure('Oops! Something went wrong while fetching data. Please try again later.');
    console.error('Error fetching data:', error);
  });
}