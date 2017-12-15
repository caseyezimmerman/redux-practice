import React, { Component } from 'react'
import { connect } from 'react-redux'

class CountriesList extends Component{
	render(){
		// if (this.countriesList === undefined){
		// 	return null
		// }
		console.log(this.props.countriesList)
		var countryArray = this.props.countriesList.map((country,index)=>{
			return(
				<li key={index}>{country}</li>
			)
		})
		return(
			<div>
				<ul>
				{countryArray}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state){ /////bringing in the root reducer
	return{
		countriesList: state.countries
	}
}

export default connect(mapStateToProps)(CountriesList)