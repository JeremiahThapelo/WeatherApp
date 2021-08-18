var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
	fetch('http://api.openweathermap.org/data/2.5/forecast?id='+inputValue.value+'&appid=a42df7c63904861c13900df4c12bdeac')
	.then(response => response.json())
	.then(data => {
		var nameValue = data['name'];
		var tempValue = data['main']['temp'];
		var descValue = data['weather'][0]['description'];
		
		name.innerHTML = nameValue;
		temp.innerHTML = tempValue;
		desc.innerHTML = descValue;
	})
	/* if it doesn't work error message*/
	.catch(err => alert("Wrong city name"))
})
