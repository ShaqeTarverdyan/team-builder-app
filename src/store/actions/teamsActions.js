import { CONSTANTS, URL } from './Constants';
import axios from 'axios';

export const getTeams = () => {
	return(dispatch) => {
		const token = localStorage.getItem('signin_token');
		dispatch({type: CONSTANTS.GET_TEAMS_START})
		axios.get(`${URL}/teams`, {headers: {'token': token}})
			.then((response) => {
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				return response
			})
			.then(response => {
				dispatch({type: CONSTANTS.GET_TEAMS_SUCCESS, payload: response.data})
			})
			.catch((error) => dispatch({type: CONSTANTS.GET_TEAMS_ERROR, payload: error.message}))
	}
}
