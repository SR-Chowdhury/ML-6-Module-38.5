const API_KEY = 'd97af354b0de425b08543c57932ba0cf';

const loadData = (args) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${args}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data =>displayData(data))
}


const displayData = (data) => {
    console.log(data.weather[0].description);
    document.getElementById('temperatureId').innerText = data.main.temp;
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('weatherType').innerText = data.weather[0].main;
} 


document.getElementById('searchId').addEventListener('click', function() {
    const inputId = document.getElementById('inputId');
    const inputValue = inputId.value;
    loadData(inputValue);
    inputId.value = '';

});


loadData('dhaka');