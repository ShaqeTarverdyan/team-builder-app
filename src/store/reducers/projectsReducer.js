import {CONSTANTS} from '../actions/Constants';

const initialState = {
	loading: false,
	error: null,
	projects: [],
}


export default (state=initialState, {payload, type}) => {
	const newState = {...state}
	switch(type) {
		case CONSTANTS.GET_PROJECTS_START: {
			return {
				...newState, 
				loading: true
			}
		}
		case CONSTANTS.GET_PROJECTS_SUCCESS: {
			const fetchedProjects = [...payload];
			return {
				...newState, 
				loading: false,
				projects: [...fetchedProjects],
				error: null
			}
		}

		case CONSTANTS.GET_PROJECTS_ERROR: {
			return {
				...newState,
				loading: false,
				error: payload
			}
		}
		default: {
			return newState;
		}
	}
}