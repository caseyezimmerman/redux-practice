import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddCountry from '../actions/countryAction'
import { bindActionCreators } from 'redux'

class addCountries extends Component{
	constructor(){
		super()
		this.addNewCountry = this.addNewCountry.bind(this)
	}




	addNewCountry(event){
		event.preventDefault()
		var newCountry = document.getElementById('new-country').value
		this.props.countries(newCountry)
		console.log(newCountry)
	}

	render(){

		// var countriesArray = this.state
		return(
		<form onSubmit={this.addNewCountry}>
          <input id="new-country" type="text" placeholder="Enter your favorite country" />
          <button className="btn primary">Add Country</button>
        </form>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		countries: AddCountry
	},dispatch)
}

export default connect(null,mapDispatchToProps)(addCountries)
