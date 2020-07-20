import { combineReducers } from 'redux';
import companyReducer from './companyReducer';
import authReducer from './authReducer';
import topicsReducer from './topicsReducer';
import projectsReducer from './projectsReducer';
import teamsReducer from './teamsReducer';


const rootReducer = combineReducers({
	companyBranch: companyReducer,
	authBranch: authReducer,
	topicsBranch: topicsReducer,
	projectsBranch: projectsReducer,
	teamsBranch: teamsReducer
})

export default rootReducer;