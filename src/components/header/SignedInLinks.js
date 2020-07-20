import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../UI/Button'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;

	& > a {
		margin: 10px
	}
`

const SignedInLinks = () => {
	 return (
	 	<Wrapper>
	 		<Link to="/register" style={{textDecoration: 'none'}}>
	 			<Button 
	 				backgroundColor={`var(--color-mainLighter)`}
	 				color={`var(--color-mainDark)`}
	 			>Register</Button>
	 		</Link>
	 		<Link to="/login" style={{textDecoration: 'none'}}>
	 			<Button 
	 				backgroundColor={`var(--color-mainDark)`}
	 				color={`var(--color-mainLighter)`}
	 			>Sign In</Button>
	 		</Link>
	 	</Wrapper>
	 );
}

export default SignedInLinks;