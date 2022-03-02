const API_KEY = `675a653134f2250b4bf17fe5333b7516`;
const searchTem = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTem(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTem = tem => {
setInnerText('city',tem.name);
setInnerText('temp',tem.main.temp);
setInnerText('condition',tem.weather[0].main);
    // console.log(tem);
    // set weather icon.....
     const url = `http://openweathermap.org/img/wn/${tem.weather[0].icon}@2x.png`;
     const imageIcon = document.getElementById('weather-icon');
     imageIcon.setAttribute('src',url)
}