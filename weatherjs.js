 $(document).ready(function(){
    $("#submitWeather").click(function(){//bcos its an id, we use the hash symbol to call it.
        var city = $("#city").val();

        if(city != ''){
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=31025014b7ebeb5eb1d5a286f43f1744",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    //console.log(data);
                    var widget = show(data);
                    $("#show").html(widget);//$ is a select operator
                    $("#city").val('');
                }

            });

        }
        else{
            $("#error").html("<div class='alert alert-danger' id='error'><a href='#' class='close' data-dismiss='alert' aria-label='close'> &times;</a>Field cannot be empty!</div>");
        }

    });
});

function show(data){
    return  "<h2 style='font-size: 40px; color: white; font-weight: bold;' class='text-center'>Current Weather for "+ data.name + "," + data.sys.country + "</h2>" +
            "<h4 style='padding-left:40px; color: white;'><strong>Weather</strong>: "+ data.weather[0].main +"</h4>" +
            "<h4 style='padding-left:40px; color: white;'><strong>Description</strong>: <img src='http://openweathermap.org/img/w/ "+data.weather[0].icon+".png'> "+ data.weather[0].description  +"</h4>" +
            "<h4 style='padding-left:40px; color: white;'><strong>Temperature</strong>: "+ data.main.temp + "&deg;C</h4>" +
            "<h4 style='padding-left:40px; color: white;'><strong>Pressure</strong>: "+ data.main.pressure +" hPa</h4>" +
            "<h4 style='padding-left:40px; color: white;'><strong>Humidity</strong>: "+ data.main.humidity +"%</h2>" +
            "<h4 style='padding-left:40px; color: white;'><strong>Min. Temperature</strong>: "+ data.main.temp_min +"&deg;C</h4>" +
            "<h4 style='padding-left:40px; color: white;'><strong>Max. Temperature</strong>: "+ data.main.temp_max +"&deg;C</h4>" +
            "<h4 style='padding-left:40px; color: white;'><strong>Wind Speed</strong>: "+ data.wind.speed +" m/s</h4>" +
            "<h4 style='padding-left:40px; color: white;'><strong>Wind Direction</strong>: "+ data.wind.deg +"&deg;</h4>" ;

}


