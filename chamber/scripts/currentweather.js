// select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const report = document.querySelector('#report');
const forecast = document.querySelector('#forecast');

const latitude = "6.1299";
const longitude = "1.2222";
const key = "d94e9e96f72a29538ac05029ce37f561";

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`;


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// convert a unix time stamp to normal time
function unixtime(timestamp) {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds
    const date = new Date(timestamp * 1000);

    // Hours part from the timestamp
    let hours = date.getHours();
    if (hours > 12) { hours = hours - 12 }

    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();

    // Will display time in 10:30:23 format
    const formattedTime = `${hours}:${minutes.substring(minutes.length - 2)}`;
    return formattedTime
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].main;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    const city = document.createElement('p');
    city.innerHTML = `City: ${data.city.name}`;
    report.appendChild(city);

    const temp = document.createElement('p');
    temp.innerHTML = `${data.list[0].main.temp}&deg;C`;
    report.appendChild(temp);

    const description = document.createElement('p');
    description.innerHTML = data.list[0].weather[0].description;
    report.appendChild(description);

    const high = document.createElement('p');
    high.innerHTML = `High: ${data.list[0].main.temp_max}&deg;C`;
    report.appendChild(high);

    const low = document.createElement('p');
    low.innerHTML = `Low: ${data.list[0].main.temp_min}&deg;C`;
    report.appendChild(low);

    const humidity = document.createElement('p');
    humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`;
    report.appendChild(humidity);

    const sunrise = document.createElement('p');
    sunrise.innerHTML = `Sunrise: ${unixtime(data.city.sunrise)} am`;
    report.appendChild(sunrise);

    const sunset = document.createElement('p');
    sunset.innerHTML = `Sunset: ${unixtime(data.city.sunset)} pm`;
    report.appendChild(sunset);

    //forecast
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();

    const temp1 = document.createElement('p');
    temp1.innerHTML = `${dayNames[d.getDay()]}: ${data.list[0].main.temp}&deg;C`;
    forecast.appendChild(temp1);

    const temp2 = document.createElement('p');
    temp2.innerHTML = `${dayNames[(d.getDay() + 1) % 7]}: ${data.list[8].main.temp}&deg;C`;
    forecast.appendChild(temp2);

    const temp3 = document.createElement('p');
    temp3.innerHTML = `${dayNames[(d.getDay() + 2) % 7]}: ${data.list[16].main.temp}&deg;C`;
    forecast.appendChild(temp3);
}

apiFetch();
