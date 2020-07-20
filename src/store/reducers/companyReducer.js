import { CONSTANTS } from '../actions/Constants';
const initialState = {
	loading: false,
	error: null,
	companies: []
}


export default(state=initialState, {type, payload}) =>{
	const newState = {...state};
	switch(type) {
		case CONSTANTS.COMPANY_FETCH_START: {
			return {
				...newState,
				loading: true,
			} 
		}
		case CONSTANTS.COMPANY_FETCH_ERROR: {
			return {
				...newState,
				loading: false,
				error: payload
			}
		}
		case CONSTANTS.COMPANY_FETCH_SUCCESS: {
			const fetchedCompanies = payload;
			return {
				...newState,
				loading: false,
				error: null,
				companies: [...fetchedCompanies]
			}
		}
		default: {
			return newState;
		}
	}
}