fetch("https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=35&appid=94563c94df882a6083a9ac3f597f1472")
.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));