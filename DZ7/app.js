const cityName = document.querySelector('.cityName');
const temp = document.querySelector('.temp');
const apikey = 'e417df62e04d3b1b111abeab19cea714';

const cityNameValue = document.querySelector('.cityNameValue');
const weatherStatus = document.querySelector('.weatherStatus');
const weatherIcon = document.querySelector('.weatherIcon');

cityNameValue.addEventListener('input', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${apikey}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            cityName.innerText = data?.name;
            temp.innerText = Math.round(data?.main?.temp - 273) + "°C";

            const temperature = data?.main?.temp - 273; // Convert to Celsius

            if (temperature < 10) {
                showWeatherStatus('Cold⛄️');
                // showWeatherIcon('snow');
            } else if (temperature >= 10 && temperature <= 30) {
                showWeatherStatus('Normal☁️');
                // showWeatherIcon('cloud');
            } else {
                showWeatherStatus('Hot☀️');
                // showWeatherIcon('sun');
            }
        })
        .catch(error => {
            console.log('An error occurred:', error);
        });
});

function showWeatherStatus(status) {
    weatherStatus.innerText = status;
}

// function showWeatherIcon(icon) {
//     weatherIcon.innerText = getWeatherIcon(icon);
// }

// function getWeatherIcon(icon) {
//     switch (icon) {
//         case 'snow':
//             return '⛄️sd';
//         case 'cloud':
//             return '☁️';
//         case 'sun':
//             return '☀️df';
//         default:
//             return '';
//     }
// }

