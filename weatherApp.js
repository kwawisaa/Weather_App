const temperatureLbl = document.querySelector("#temperatureLbl");
const lblCity = document.querySelector("#lblCity");
const lblDateTime = document.querySelector("#lblDateTime");
const weatherIcon = document.querySelector("#icon");
const weatherDescription = document.querySelector("#text");
const searchBar = document.querySelector("#searchBar");
const searchBtn =  document.querySelector("#searchBtn");

function submitLocation(){
    let targetLocation = searchBar.value.trim();
    fetchWeather(targetLocation);
}

const fetchWeather = async(locationTarget)=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=ffe1b76916314b88aac134034252108&q=${locationTarget}&aqi=no`;
    try{
        const res = await fetch(url);
        if(!res.ok) throw new Error ("Location NOT FOUND");
        const data = await res.json();

        let locationName = data.location.name;
        let dateTimeLabel = data.location.localtime;
        let temperature = data.current.temp_c;
        let conditionText = data.current.condition.text;
        let conditionIcon = data.current.condition.icon;

        lblCity.textContent = locationName;
        lblDateTime.textContent = dateTimeLabel;
        temperatureLbl.textContent = `${temperature}°C`;
        weatherDescription.textContent = conditionText;
        weatherIcon.img = conditionIcon;

    }

    catch(err){
        console.error(err);
    }
    
} 
