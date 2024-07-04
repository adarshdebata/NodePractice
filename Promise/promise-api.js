// function fetchWeather(city) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const weatherData = {
//         city: city,
//         temperature: (Math.random() * (50.00 - 30.00) + 30.00).toFixed(2),
//         description: 'Summer',
//       };
//       resolve(weatherData);
//     }, Math.random() * 2000);
//   });
// }

// function fetchWeatherDataForCities(cities) {
//   const promises = cities.map(function(city) {
//     return fetchWeather(city);
//   });

//   return Promise.all(promises);
// }

// const citiesToFetch = ['Bhubaneswar', 'New Delhi', 'Mumbai', 'Mohali'];

// fetchWeatherDataForCities(citiesToFetch)
//   .then(weatherDataArray => {
//     console.log('Weather data for all cities:', weatherDataArray);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate error math random function 
      if (Math.random() < 0.15) { 
        reject('Failed to fetch weather for ' + city);
      } else {
        const weatherData = {
          city: city,
          temperature: (Math.random() * (50.00 - 30.00) + 30.00).toFixed(2),
        };
        resolve(weatherData);
      }
    }, Math.random() * 2000);
  });
}

function fetchWeatherDataForCities(cities) {
  const promises = cities.map(function(city) {
    return fetchWeather(city);
  });

  return Promise.all(promises);
}

const citiesToFetch = ['Bhubaneswar', 'New Delhi', 'Mumbai', 'Mohali'];

fetchWeatherDataForCities(citiesToFetch)
  .then(weatherDataArray => {
    console.log('Weather data for all cities:', weatherDataArray);
  })
  .catch(error => {
    console.error('Error:', error);
  });