import { CONSTANTS, URL } from './Constants';
import axios from 'axios';

export const fetchCompanies = () => {
	return (dispatch) => {
		dispatch({type: CONSTANTS.COMPANY_FETCH_START})
		axios.get(`${URL}/companies`)
			.then(response => {
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				return response
			})
			.then(response => {
				dispatch({type: CONSTANTS.COMPANY_FETCH_SUCCESS, payload: response.data})
			})
			.catch((error) => dispatch({type: CONSTANTS.COMPANY_FETCH_ERROR, payload: error.message}))
	}
}