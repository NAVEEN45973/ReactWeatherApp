import React, { Component } from 'react'

export class Inputdata extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             city:'',
             country:''
        }
    }
    HandleChange=(e)=>
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render() {
        const {city,country}=this.state
        return (
            <div>
                <form onSubmit={this.props.getdata}>
                    <input type="text" name="city" placeholder="Enter City" value={city} onChange={this.HandleChange} ></input>
                    <input type="text" name="country" placeholder="Enter Country" value={country} onChange={this.HandleChange} ></input>
                    <button type="submit">Fetch</button>
                </form>
            </div>
        )
    }
}

export default Inputdata
