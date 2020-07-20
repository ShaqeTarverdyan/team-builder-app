import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Redirect, Link } from "react-router-dom";
import { fetchCompanies } from '../../store/actions/companyActions';
import { FaUserEdit } from 'react-icons/fa';
import Loader from '../Loader';
import { Wrapper, H2 } from '../../generalStyles';

const Content = styled.div`
	padding: 1rem;
	border: 1px solid var(--color-border);
	border-radius: 10px
`;

const Image = styled.img`
	width: 100%;
	object-fit: contain;
	margin: 0 auto;
`

const Detail = styled.div`
    font-size: medium;
    color: var(--color-text);
    text-align: center;
    padding: 10px 0;
    width: 70%;
    margin: auto;
`;

const AccountEditButton = styled.div`
	display: flex;
    justify-content: flex-end;
    height: 35px;
    align-items: center;
    font-size: xx-large;
    color: green;
    cursor: pointer;

    :hover {
    	opacity: 0.8
    }
}
`;

const AccountPage = ({user, companies, fetchCompanies}) => {
	useEffect(() => {
		fetchCompanies();
	},[fetchCompanies]);
	const currentCompany = companies.length > 0  && Object.entries(user).length > 0?
		companies.find(company => company.id === user.companyId) : '';

	const token = localStorage.getItem('signin_token');
	if(!token) {
		return <Redirect to="/login"/>
	}
	return (
		<Wrapper>
			<H2>Account Details</H2>
			<Link to="/account/edit">
				<AccountEditButton>
					<FaUserEdit/>
				</AccountEditButton>
			</Link>
			{
				Object.entries(user).length > 0 ?
				<Content>
					<Detail>
						<Image src={user.avatarUrl}/>
					</Detail>
					<Detail>{`${user.firstName} ${user.lastName}`}</Detail>
					<Detail>{`Email -  ${user.email}`}</Detail>
					<Detail>{`Birth Date -  ${user.birthDate}`}</Detail>
					<Detail>{`Gender -  ${user.sex}`}</Detail>
					<Detail>{`Javascript Experience -  ${user.jsExperience}`}</Detail>
					<Detail>{`React Experience -  ${user.reactExperience}`}</Detail>
					<Detail>
						{ currentCompany ? `Company -  ${currentCompany.name}` : ''}
					</Detail>
				</Content> :
				<Loader/>
			}
		</Wrapper>
	);
}

const mapStateToProps = state => {
	return {
		user: state.authBranch.user,
		companies: state.companyBranch.companies
	}
}
const mapDispatchToState = dispatch => {
	return {
		fetchCompanies: () => dispatch(fetchCompanies())
	}
}

export default connect(mapStateToProps,mapDispatchToState)(AccountPage);