import {CONSTANTS} from '../actions/Constants';

const initialState = {
	loading: false,
	error: null,
	teams: []
}

export default(state=initialState, { payload, type}) => {
	const newState = {...state };
	switch(type) {
		case CONSTANTS.GET_TEAMS_START: {
			return {
				...newState,
				loading: true,
			}
		}

		case CONSTANTS.GET_TEAMS_SUCCESS: {
			const fetchedReams = [...payload]
			return {
				...newState,
				loading: false,
				error: null,
				teams: [...fetchedReams]
			}
		}

		case CONSTANTS.GET_TEAMS_ERROR: {
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