import { CONSTANTS, URL } from './Constants';
import axios from 'axios';



export const getUser = () => {
	return (dispatch) => {
		const token = localStorage.getItem('signin_token');
		token && axios.get(`${URL}/users`, {headers: {'token': token}})
			.then((response) => {
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				return response
			})
			.then((response) => {
				dispatch({type: CONSTANTS.GET_USER_SUCCESS, payload: response.data})
			})
			.catch((error) => console.log(error.message))
	}
}
export const signUp = (user, history) => {
	user = {...user, companyId: Number(user.companyId)}
	return (dispatch) => {
		dispatch({type: CONSTANTS.SIGNUP_START})
		axios.post(`${URL}/users/register`, user)
			.then((response) => {
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				return response
			})
			.then(response => {
				dispatch({type: CONSTANTS.SIGNUP_SUCCESS, payload: response.data})
				history.push("/login")
			})
			.catch((error) => dispatch({type: CONSTANTS.SIGNUP_ERROR, payload: error.message}))
	}
}


export const signIn = (user, history) => {
	return (dispatch) => {
		dispatch({type: CONSTANTS.SIGNIN_START})
		axios.post(`${URL}/users/login`, user)
			.then((response) => {
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				return response
			})
			.then((response) => {
				dispatch({type: CONSTANTS.SIGNIN_SUCCESS, payload: response.data})
				setToken(response.data.token);
				dispatch(getUser());
				console.log('hist',history)
				history.push("/account")
			})
			.catch((error) => dispatch({type: CONSTANTS.SIGNIN_ERROR, payload: error.message}))
	}
}

export const signOut = (history) => {
	return (dispatch) => {
		const token = localStorage.getItem('signin_token');
		axios.get(`${URL}/users/logout`,{headers: {'token': token}})
			.then((response) => {
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				return response
			})
			.then((response) => {
				dispatch(({type: CONSTANTS.SIGNOUT_SUCCESS}))
				localStorage.removeItem('signin_token');
				dispatch(removeTokenInStore());
				history.push("/login")
			})
			.catch((error) => dispatch({type: CONSTANTS.SIGNOUT_ERROR, payload: error.message}))
	}
}

export const setTokeninStore = () => {
	return (dispatch) => {
		const getSigninToken = localStorage.getItem('signin_token');
		getSigninToken && dispatch({type: CONSTANTS.SET_TOKEN_IN_STORE_START});
		getSigninToken && dispatch({type: CONSTANTS.SET_TOKEN_IN_STORE_SUCCESS, payload:  getSigninToken})	
	}
}

export const removeTokenInStore = () => {
	return (dispatch) => {
		dispatch({type: CONSTANTS.REMOVE_TOKEN_IN_STORE})
	}
}


async function setToken(token) {
    return localStorage.setItem('signin_token', token);
}


export const editUser = (updatedUser, history) => {
	return (dispatch) => {
		const token = localStorage.getItem('signin_token');
		dispatch({type: CONSTANTS.EDIT_USER_START})
		axios.put(
				`${URL}/users/update`, 
				updatedUser,
				{headers: {'token': token}
			})
			.then((response) => {
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				return response
			})
			.then((response) => {
				dispatch({type: CONSTANTS.EDIT_USER_SUCCESS, payload: response.data});
				history.push("/account")
			})
			.catch((error) => dispatch({type: CONSTANTS.EDIT_USER_ERROR, payload: error.message}))
	}
}
