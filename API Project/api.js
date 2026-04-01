//1) add document.query selector command to below line, use the class .output
let tempOutput = document.querySelector(".temp")
let output =document.querySelector(".output");
let image =document.querySelector("img");
let weatherData;
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=sunshine_duration,uv_index_max&hourly=temperature_2m,rain,showers,snowfall,relative_humidity_2m,weather_code,cloud_cover,visibility&current=relative_humidity_2m,temperature_2m,rain,showers,snowfall,weather_code,precipitation,is_day&timezone=America%2FNew_York&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //2) console.log the data variable on this line
  console.log(data);
  weatherData=data;
    //3) look at the api documentaion, what property stores the yes or no? that property gets placed bel;ow after the data. then the inner html should be placed into output.
   // output.innerHTML = data.answer;
    //5) add the src to the img (hint) ____.src="___" is how you can set an image
  //image.src=data.image;
  tempOutput.innerHTML=weatherData.current.temperature;
  });