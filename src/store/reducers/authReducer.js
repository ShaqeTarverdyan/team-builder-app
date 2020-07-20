import {CONSTANTS} from '../actions/Constants';

const initialState = {
	loading: false,
	error: null,
	successMessage: '',
	user: {},
	token:''
}


export default(state=initialState, {type, payload}) => {
	const newState = {...state};
	switch (type) {
		case 
			CONSTANTS.SIGNUP_START : {
			return {...newState, loading: true}
		}
		case CONSTANTS.SIGNUP_SUCCESS : {
			return {
				...newState,
				loading: false,
				successMessage: payload
			}
		}
		case CONSTANTS.SIGNUP_ERROR : {
			return {...newState, loading: false, error: payload}
		}

		case CONSTANTS.SIGNIN_START : {
			return {...newState, loading: true}
		}
		case CONSTANTS.SIGNIN_ERROR : {
			return {...newState, loading: false, error: payload}
		}

		case CONSTANTS.SIGNIN_SUCCESS : {
			return {
				...newState,
				loading: false,
				error: null,
				token: payload.token
			}
		}

		case CONSTANTS.SIGNOUT_SUCCESS : {
			return {
				...newState,
				user: {},
				token: ''
			}
		}

		case CONSTANTS.GET_USER_SUCCESS : {
			const user = {...payload}
			return {
				...newState,
				user,
				loading: false
			}
		}
		case CONSTANTS.SET_TOKEN_IN_STORE_START : {
			return {
				...newState,
				loading: true
			}
		}

		case CONSTANTS.SET_TOKEN_IN_STORE_SUCCESS : {
			return {
				...newState,
				token: payload,
				loading: false
			}
		}

		case CONSTANTS.REMOVE_TOKEN_IN_STORE : {
			return {
				...newState,
				token: ''
			}
		}

		case CONSTANTS.EDIT_USER_START : {
			return {
				...newState,
				loading: true
			}
		}
		 case CONSTANTS.EDIT_USER_SUCCESS : {
		 	const updatedUser = {...payload}
		 	return {
		 		...newState,
		 		loading: false,
		 		user: updatedUser

		 	}
		 }

		 case CONSTANTS.EDIT_USER_ERROR : {
			return {...newState, loading: false, error: payload}
		}

		
		default: {
			return newState
		}

	}
}