import {CONSTANTS} from '../actions/Constants';


const initialState = {
	loading: false,
	error: null,
	message: '',
	topics: [],
}
export default(state=initialState, {type, payload}) => {
	const newState = {...state}
	switch(type) {
		case 
			CONSTANTS.GET_TOPICS_START: {
			return {
				...newState,
				loading: true
			}
		}
		case CONSTANTS.GET_TOPICS_SUCCESS: {
			const topics = [...payload];
			return {
				...newState,
				loading: false,
				topics
			}
		}

		case CONSTANTS.GET_TOPICS_ERROR: {
			return {
				...newState,
				loading: false,
				error: payload
			}
		}
		case CONSTANTS.ADD_TOPIC_START: {
			return {
				...newState,
				loading: true
			}
		}

		case CONSTANTS.ADD_TOPIC_SUCCESS: {
			const newTopic = {...payload}
			return {
				...newState,
				loading: false,
				topics: [...newState.topics, newTopic]

			}
		}

		case CONSTANTS.ADD_TOPIC_ERROR: {
			return {
				...newState,
				loading: false,
				error: payload
			}
		}

		case CONSTANTS.DELETE_TOPIC_SUCCESS: {
			return {
				...newState,
				message: payload,
				loading: false
			}
		}
		case CONSTANTS.DELETE_TOPIC_ERROR: {
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