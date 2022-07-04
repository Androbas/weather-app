function getCitiesFromLocalStorage() {
  let cities = localStorage.getItem("CITIES");

  if (cities) {
    cities = JSON.parse(cities);
  } else {
    cities = [];
  }
  return cities;
}

async function consultAPI(cityName) {
  let apiKey = "df1223f46cbb9aee997a0d2b150e1b23"; //cambiar por una propia
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`
  )
    .then((response) => {
      if (response.ok) {return response.json()}
      else { throw new Error("error");};
    })
    // .then((data) => {
    //   console.log("show data: ",data);
    //   // showWeather(data);
    // })
    .catch((error) => {
      return "error";
    });
}
