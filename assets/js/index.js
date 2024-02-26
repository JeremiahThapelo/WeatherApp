const container = document.querySelector('container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
  const APIKey ='1451db7e08d8145f9c32252db9c3a043'; /*'8dad3db309e50de33c8cdefbe69cec74'*/
  const city = document.querySelector('.search-box input').value;

  if(city === '')
      return;

  fetch('http://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=${API key}').then(response => response.json()).then
  (json => {
      if(json.cod === '404'){
        container.style.height = '400px';
        weatherBox.style.display = 'none';
        weatherDetails.style.display = 'none';
        error404.style.display = 'block';
        error404.classList.add('fadeIn');
        return;
      }
      error404.style.display = 'none';
      error404.classList.remove('fadeIn');

    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

    switch (json.weather[0].main){
      case 'Clear':
        image.src = 'assets/images/clear.jpg';
        break;

      case 'Rain':
        image.src = 'assets/images/clear.jpg';
        break;

      case 'Snow':
        image.src = 'assets/images/clear.jpg';
        break;

      case 'Clouds':
        image.src = 'assets/images/clear.jpg';
        break;

      case 'Haze':
        image.src = 'assets/images/clear.jpg';
        break; 

      default:
        image.src = '':
    }

    temperature.innerHTML = '${parseInt(json.main.temp)}<span>*C</span>';
    description.innerHTML = '${json.weather[0].description}';
    humidity.innerHTML = '${json.main.humidty}%';
    wind.innerHTML = '${parseInt(json.wind.speed)}Km/h';

    weatherBox.style.display = '';
    weatherDetails.style.display = '';
    weatherBox.classList.add('fadeIn');
    weatherDetails.classList.add('fadeIn');
    container.style.height = '590px';
  })
})
