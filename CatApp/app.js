const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=1'; // Fetch one image at a time

const catContainer = document.querySelector('.container'); // Use ID for efficient selection

const getCatImage = async () => {
  
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const imageUrl = data[0].url; // Access the URL from the first object

    const image = document.createElement('img');
    image.src = imageUrl;

    catContainer.innerHTML = ""; // Clear the container before adding the image
    catContainer.appendChild(image);

    // Optional: Add a loading indicator or animation while fetching

  } catch (error) {
    console.error('Error fetching cat image:', error);
    // Handle error gracefully, e.g., display an error message or retry logic
  }
};
document.querySelector(".btn")
.addEventListener('click', getCatImage);
