export default function addCountry(newcountry){
	console.log(newcountry)
	return{
		type: 'ADD_COUNTRY',
		payload: newcountry
	}
}