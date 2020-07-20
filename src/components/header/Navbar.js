import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { getUser, setTokeninStore } from '../../store/actions/authActions';


const Container = styled.div`
	border-bottom: 1px solid lightgray;
	width: 90%;
	margin: 0 auto;
	padding: 1rem 0;
	margin-bottom: 1rem;
	display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
	font-size: 2rem;
	font-weight: bold;
	letter-spacing: 1px
`;
const Links = styled.div``


const Navbar = ({ isLoggedIn , getUser, setTokeninStore, token}) =>  {
	useEffect(() => {
		setTokeninStore();
		getUser();
	}, [getUser,setTokeninStore ]);

	return(
		<Container>
			<Link to="/" style={{color: 'var(--color-mainDark)'}}>
				<Logo>Team-builder</Logo>
			</Link>
			<Links>
				{token ? <SignedOutLinks/> : <SignedInLinks/>}
			</Links>

		</Container>
	)
}
const mapStateToProps = state => {
	return {
		token: state.authBranch.token,
	}
}

const mapDispatchToState = dispatch => {
	return {
		getUser: () => dispatch(getUser()),
		setTokeninStore: () => dispatch(setTokeninStore())
	}
}

export default connect(mapStateToProps, mapDispatchToState)(Navbar)