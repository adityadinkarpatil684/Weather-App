let input =document.querySelector('input');
let btn =document.querySelector('button');
let display=document.querySelectorAll('h3');


btn.addEventListener("click",(e)=>{
	e.preventDefault();
let city_name=input.value;

const url = `https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding?city=${city_name}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '33811b7e79msh588066b78c352b8p19e90fjsn7a7f81729b69',
		'x-rapidapi-host': 'geocoding-by-api-ninjas.p.rapidapi.com'
	}
};
const a=async()=>{
	let response=await fetch(url,options);
	let data=await response.json();
	b(data);
}

const option = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '33811b7e79msh588066b78c352b8p19e90fjsn7a7f81729b69',
		'x-rapidapi-host': 'meteostat.p.rapidapi.com'
	}
};

const b=async(data)=>{
	let weather_response=await fetch(`https://meteostat.p.rapidapi.com/point/monthly?lat=${data[0].latitude}&lon=${data[0].longitude}&alt=43&start=2020-01-01&end=2020-12-31`,option);
	let weather_data=await weather_response.json();
	display[0].innerHTML=`Temperature:${weather_data.data[11].tavg}`;
	display[1].innerHTML=`Wind Speed:${weather_data.data[11].wspd}`;
	display[2].innerHTML=`Precipitation:${weather_data.data[11].prcp}`;
}
a();

});




























// const url = 'https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding?city=Pune';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '33811b7e79msh588066b78c352b8p19e90fjsn7a7f81729b69',
// 		'x-rapidapi-host': 'geocoding-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// const a=async()=>{
// 	let response=await fetch(url,options);
// 	let data=await response.json();
// 	// console.log(data[0].latitude);
// 	// console.log(data[0].longitude);
// 	b(data);
// }

// //***********************************************************************************************/

// //const weather_url = `https://meteostat.p.rapidapi.com/point/monthly?lat=${data[0].latitude}&lon=${data[0].longitude}&alt=43&start=2020-01-01&end=2020-12-31`;
// const option = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '33811b7e79msh588066b78c352b8p19e90fjsn7a7f81729b69',
// 		'x-rapidapi-host': 'meteostat.p.rapidapi.com'
// 	}
// };

// const b=async(data)=>{
// 	let weather_response=await fetch(`https://meteostat.p.rapidapi.com/point/monthly?lat=${data[0].latitude}&lon=${data[0].longitude}&alt=43&start=2020-01-01&end=2020-12-31`,option);
// 	let weather_data=await weather_response.json();
// 	console.log(weather_data.data[11].tavg);
// 	console.log(weather_data.data[11].wspd);
// 	console.log(weather_data.data[11].prcp);
// }