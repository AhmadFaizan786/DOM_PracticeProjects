// const url = 'https://api.thecatapi.com/v1/images/search';

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































// const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=1'; // Fetch one image at a time
// const catContainer = document.getElementById('cat-container'); // Use ID for efficient selection

// const getCatImage = () => {
//   fetch(API_URL)
//     .then(response => response.json())
//     .then(data => {
//       const catImage = document.createElement('img'); // Create an image element
//       catImage.src = data[0].url; // Access the URL from the first object in the response
//       catContainer.appendChild(catImage); // Append the image to the container
//     })
//     .catch(error => {
//       // Handle errors gracefully, e.g., display an error message or retry logic
//       console.error('Error fetching cat image:', error);
//     });
// };

// const getCatBtn = document.querySelector('.btn');
// getCatBtn.addEventListener('click', getCatImage); // Add event listener for button click
// const getCatBtn = document.querySelector('.btn');

// const getCatImage = async () => {
//     const response = await fetch(url);
//     const myImage = await response.json();

//     const output = document.querySelector(".container");
//     output.innerHTML = (myImage[0].url);
//     console.log(myImage[0].url);
//     // Add event listener for button click

// };
// getCatBtn.addEventListener('click', getCatImage); // Add event listener for button click




// let p = fetch(url)
// p.then((value1)=>{
//     console.log(value1.status)
//     console.log(value1.ok)
//     return value1.json()
// }).then((value2)=>{
//     console.log(value2.status)
//     console.log(value2)
// })