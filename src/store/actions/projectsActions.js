import { CONSTANTS, URL } from './Constants';
import axios from 'axios';


export const getProjects = () => {
	return(dispatch) => {
		const token = localStorage.getItem('signin_token');
		dispatch({type: CONSTANTS.GET_PROJECTS_START})
		axios.get(`${URL}/projects`, {headers: {'token': token}})
			.then((response) => {
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				return response
			})
			.then(response => {
				dispatch({type: CONSTANTS.GET_PROJECTS_SUCCESS, payload: response.data})
			})
			.catch((error) => dispatch({type: CONSTANTS.GET_PROJECTS_ERROR, payload: error.message}))
	}
}


export const voteProject = (projectId, type) => {
	return(dispatch) => {
		const token = localStorage.getItem('signin_token');
		axios.post(`${URL}/projects/${projectId}/voting`, {'type': type}, {headers: {'token': token}})
			.then((response) => {
				if(response.status === 200) {
					dispatch(getProjects())
				}
			})
			
	}
}