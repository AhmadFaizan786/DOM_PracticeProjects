const URL = `https://api.openweathermap.org/data/2.5/weather?q=city&appid=404f6b24a42241e4a616989d3b3d3c2e&units=metric`;

const myBtn = document.getElementById("btn");
const myDetails = document.querySelector(".details");
const myCity = document.querySelector("#city-input");

myDetails.style.display = "none";


const getWeatherData =async()=>{

    const cityName = myCity.value;
    try {
        // const cityName = myCity.value;
        const response = await fetch(URL.replace("city",cityName));
        if(!response.ok){
            throw new Error(`Network response was not Ok`)
        }
        const  data = await response.json();
        // const cityName = data.name;
        const temp = data.main.temp;
        const pressure = data.main.pressure;
        const humidity = data.main.humidity;
        const country = data.sys.country;
        const wind = data.wind.speed;

        const detailsHTML=`
        <p>${cityName}, ${country}</p>
        <p>Temperature:${temp}°C</p>
        <p>Pressure:${pressure}mb</p>
        <p>Humidity:${humidity}%</p>
        <p>Wind:${wind}km/hr</p>

        `;
    // Update the div content
    myDetails.innerHTML = detailsHTML;
    myDetails.style.display = "block";

    } catch (error) {
        console.log("Error fetching weather data!",error);
    }
};

myBtn.addEventListener('click',getWeatherData);