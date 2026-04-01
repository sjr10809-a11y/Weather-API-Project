function checkWeather(type) {
      var api = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=sunshine_duration,uv_index_max&hourly=temperature_2m,rain,showers,snowfall,relative_humidity_2m,weather_code,cloud_cover,visibility&current=relative_humidity_2m,temperature_2m,rain,showers,snowfall,weather_code,precipitation,is_day&timezone=America%2FNew_York&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch";

      fetch(api)
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          showClothes(type, data);
        });
    }

    function showClothes(type, data) {
      var t = data.current.temperature_2m;
      var message = "";

      if (type === "rain") {
        message = "Wear a raincoat and bring an umbrella.";
      } else if (type === "sun") {
        message = "Wear shorts, t-shirt, and maybe sunglasses.";
      } else if (type === "snow") {
        message = "Wear a heavy coat, gloves, and boots.";
      } else if (type === "humid") {
        message = "Wear light and breathable clothes.";
      }

      document.getElementById("output").innerHTML =
        "Temp: " + t + "°F<br><br>" + message;
    }