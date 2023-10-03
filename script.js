const apiKey = "2e680da7e9a42179a102e21428c9faf6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const search = document.querySelector(".input input");
const searchbtn = document.querySelector(".input button");
const image = document.querySelector("#img1");

let input = document.getElementById("input");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

async function weather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".card1").style.display = "none";
    document.body.style.backgroundImage =
      "url(https://icon-library.com/images/weather-icon-gif/weather-icon-gif-22.jpg)";
  } else {
    document.querySelector(".city").style.display = "none";
    let data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML =
      Math.floor(data.main.temp - 273.15) + " <sup>o</sup>C";
    document.querySelector(".name").innerHTML =
      data.name + " ( " + data.weather[0].main + " )";
    const dateObject = new Date();
    let date = dateObject.toUTCString();
    document.querySelector(".timeDate").innerHTML = date;
    document.querySelector(".timeDate").style.fontSize = "1.5rem";
    document.querySelector(".timeDate").style.marginLeft = "18%";
    document.querySelector(".humidity").innerHTML =
      "humidity : " + data.main.humidity + " %";
    document.querySelector(".speed").innerHTML =
      "wind speed : " + data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      image.src =
        "https://classroomclipart.com/image/static2/preview2/sun-peeking-over-clouds-clipart-16298.jpg";
      document.body.style.backgroundImage =
        "url(https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148639325.jpg)";
    } else if (data.weather[0].main == "Clear") {
      image.src = "https://clipart-library.com/image_gallery/n963480.png";
      document.body.style.backgroundImage =
        "url(https://t3.ftcdn.net/jpg/00/13/19/36/360_F_13193603_FVfBgi1FYY6pL1ROAIDoCHIaeLLDIRON.jpg)";
    } else if (data.weather[0].main == "Drizzle") {
      image.src =
        "https://img.freepik.com/premium-vector/cute-friendly-smiling-yellow-sun-white-rain-cloud-with-falling-raindrops_376504-102.jpg?w=2000";
      document.body.style.backgroundImage =
        "url(https://png.pngtree.com/thumb_back/fh260/background/20220525/pngtree-rain-storm-background-vector-illustration-at-rainy-weather-with-scenery-cityscape-image_1400787.jpg)";
    } else if (data.weather[0].main == "Mist") {
      image.src =
        "https://static.vecteezy.com/system/resources/previews/015/011/098/original/foggy-weather-icon-color-outline-vector.jpg";
      document.body.style.backgroundImage =
        "url(https://media.istockphoto.com/id/1055906130/photo/foggy-rural-asphalt-highway-perspective-with-white-line-misty-road-road-with-traffic-and.jpg?s=612x612&w=0&k=20&c=NS_1x0gGJQkJ7RfC1J17bzu5PFj2xJGYoLA6L3BCZzg=)";
    } else if (data.weather[0].main == "Haze" && "Smoke") {
      image.src =
        "https://i.pinimg.com/474x/47/1c/e9/471ce9bac951380bc7e02801c153cb76.jpg";
      document.body.style.backgroundImage =
        "url(https://media.tenor.com/5ImWLS5QAJgAAAAC/foggy-fog.gif)";
    } else if (data.weather[0].main == "Rain") {
      image.src =
        "https://www.pngkit.com/png/detail/52-525172_image-of-rain-cloud-clipart-clipartoons-rain-clip.png";
      document.body.style.backgroundImage =
        "url(https://t4.ftcdn.net/jpg/03/66/90/39/360_F_366903907_RzCXMYTOdWnfEmm8wZ3fKnfEOLE2Qhmh.jpg)";
    } else if (data.weather[0].main == "Snow") {
      image.src =
        "https://img.freepik.com/free-vector/scene-with-snow-falling-field_1308-43997.jpg";
      document.body.style.backgroundImage =
        "url(https://i.pinimg.com/originals/b0/45/68/b0456861e9dbf784217a3772748c6101.gif)";
    }
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    document.querySelector(".card1").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  weather(search.value);
});
