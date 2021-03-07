import React, { Component } from 'react'

class Weather extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {city,country,celcius,temp_max,temp_min,description}=this.props
        return (
        
                <div className="Container">
                <h1 className="Head">Country : {country}, City :{city} </h1>
               <h1><i className="fas fa-sun-dust"></i></h1>
                <h1 className="celcius"><i>{celcius}&deg;</i>c</h1>
                <h2>Min : <i>{temp_min}&deg;</i>c Max : <i>{temp_max}&deg;</i>c</h2>
                <h3>{description}</h3>
                </div>
            
        )
    }
}

export default Weather
