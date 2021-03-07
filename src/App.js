import './App.css';
import Weather from "./Components/Weather"
import React, { Component } from 'react'
import Inputdata from './Components/Inputdata';
const API_key ="d9f6147f414746ac92afc0c8f23baf26";
class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    city:undefined,
    country:undefined,
    celcius:undefined,
    temp_max:undefined,
    temp_min:undefined,
    description:undefined,
     error:false
  }
}
celsiusconvert=(x)=>{
  let tem=Math.floor(x-273.15);
  return tem;
}
getweather=async(e)=>{
  e.preventDefault();

  const country = e.target.elements.country.value;
  const city = e.target.elements.city.value;

  if (country && city) {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`
    );

    const response = await api_call.json();
this.setState({
  city:response.name,
  country:response.sys.country,
  celcius:this.celsiusconvert(response.main.temp),
  temp_min:this.celsiusconvert(response.main.temp_min),
  temp_max:this.celsiusconvert(response.main.temp_max),
  description:response.weather[0].description
})
  }
  else{
    alert("Enter country and city")
  }
}

  render() {
    const {city,country,temp_max,temp_min,celcius,description}=this.state
    return (
      <div className="App">
       
        <h1>My Simple Weather App</h1>
        <Inputdata getdata ={this.getweather}/>
        <Weather city={city}
         country={country}
         celcius={celcius}
         temp_max={temp_max}
         temp_min={temp_min}
         description={description}
          />
        
      </div>
    )
  }
}

export default App

