import { CONSTANTS, URL } from './Constants';
import axios from 'axios';

export const getTopics = () => {
	return(dispatch) => {
		const token = localStorage.getItem('signin_token');
		dispatch({type: CONSTANTS.GET_TOPICS_START})
		axios.get(`${URL}/topics`, {headers: {'token': token}})
			.then((response) => {
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				return response
			})
			.then((response) => dispatch({type: CONSTANTS.GET_TOPICS_SUCCESS, payload: response.data}))
			.catch((error) => dispatch({type: CONSTANTS.GET_TOPICS_ERROR, payload: error.message}))
	}
}

export const addTopic = (topic) => {
	return(dispatch) => {
		const token = localStorage.getItem('signin_token');
		dispatch({type: CONSTANTS.ADD_TOPIC_START})
		axios.post(`${URL}/topics`, topic, {headers: {'token': token}})
			.then((response) => {
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				return response
			})
			.then((response) => dispatch({type: CONSTANTS.ADD_TOPIC_SUCCESS, payload: response.data}))
			.catch((error) => dispatch({type: CONSTANTS.ADD_TOPIC_ERROR, payload: error.message}))
	}
}

export const deleteTopic = (topicId) => {
	return (dispatch) => {
		const token = localStorage.getItem('signin_token');
		axios.delete(`${URL}/topics/${topicId}`, {headers: {'token': token}})
			.then((response) => {
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				return response				
			})
			.then((response) => {
				dispatch({type: CONSTANTS.DELETE_TOPIC_SUCCESS, payload: response.data})
				dispatch(getTopics())
			})
			.catch((error) => dispatch({type: CONSTANTS.DELETE_TOPIC_ERROR}))
	}
}

export const voteTopic = (topicId, type) => {
	return(dispatch) => {
		const token = localStorage.getItem('signin_token');
		axios.post(`${URL}/topics/${topicId}/voting`, {'type': type}, {headers: {'token': token}})
			.then((response) => {
				if(response.status === 200) {
					dispatch(getTopics())
				}
			})
			
	}
}