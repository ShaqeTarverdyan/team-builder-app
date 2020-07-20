import React from 'react';
import Button from '../UI/Button';
import { Wrapper } from './SignedInLinks';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { Link, useHistory } from 'react-router-dom';

const SignedOutLinks = ({ signOut, user, token }) => {
	let history = useHistory();
	if(!token) {
		return history.push("/login")
	}
	const initials = user && Object.entries(user).length > 0 ? user.firstName[0]+ user.lastName[0] : '';
	 return (
	 	<Wrapper>
	 		<Link to="/projects">
	 			<Button 
	 				backgroundColor={`var(--color-mainLighter)`}
	 				color={`var(--color-mainDark)`}
	 			>Projects
	 			</Button>
	 		</Link>
	 		<Link to="/topics">
	 			<Button
	 				backgroundColor={`var(--color-mainLighter)`}
	 				color={`var(--color-mainDark)`}
	 			>Topics</Button>
	 		</Link>
	 		<Link to="/account">
	 			<Button
	 				backgroundColor={`var(--color-mainLighter)`}
	 				color={`var(--color-mainDark)`}
	 			>
	 				{initials}
	 			</Button>
	 		</Link>
	 		<Button 
	 			onClick={() => signOut(history)}
	 			backgroundColor={`var(--color-mainLighter)`}
	 			color={`var(--color-mainDark)`}
	 		>Log Out</Button>
	 	</Wrapper>
	 );
}

const mapStateToProps = state => {
	return {
		user: state.authBranch.user,
		token: state.authBranch.token
	}
}

const mapDispatchToState = dispatch => {
	return {
		signOut: (history) => dispatch(signOut(history)),
	}
}

export default connect(mapStateToProps, mapDispatchToState)(SignedOutLinks);