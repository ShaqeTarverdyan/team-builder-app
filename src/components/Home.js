import React from 'react';
import { Redirect } from "react-router-dom";

import { Wrapper } from '../generalStyles';
import Teams from './teams/Teams';

const Home = ({ loading }) => {
	const token = localStorage.getItem('signin_token');
	
	if(!token) {
		return <Redirect to="/login"/>
	}

	return (
		<Wrapper>
			<Teams/>
		</Wrapper>
	)
}
export default Home;