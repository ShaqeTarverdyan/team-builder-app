import React, {useEffect} from 'react';
import UserForm from '../account/UserForm';

import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { fetchCompanies } from '../../store/actions/companyActions';

import * as Yup from 'yup';


 export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Your first name is required.'),
  lastName: Yup.string()
    .required('Your last name is required.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
  	.required('The passoword is required.')
  	.min(8, 'Too short.'),
  avatarUrl: Yup.string()
    .required('Your avatarUrl is required.'),
  birthDate: Yup.date()
	.required('Your first name is required.'),
  sex: Yup.string()
	.required('Your gender is required.'),
  jsExperience: Yup.number()
	.required('Your jsExperience is required.'),
  reactExperience: Yup.number()
	.required('Your reactExperience is required.'),
  companyId: Yup.string()
  	.required('Please select your company')

});

const SignUp = ({ companies, signUp,loading}) => {
	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		avatarUrl: '',
		birthDate: '',
		sex: '',
		jsExperience: '',
		reactExperience: '',
		companyId: ''
	}
	return (
		<UserForm 
			initialValues={initialValues}
			loading={loading}
			validationSchema={SignUpSchema}
			fetchData={signUp}
			submitTitle="Submit"
			isCreateNewUser={true}
		/>
	)
}

const mapStateToProps = state => {
	return {
		loading: state.authBranch.loading
	}
}


const mapDispatchToState = dispatch => {
	return {
		signUp: (newUser, history) => dispatch(signUp(newUser, history)),
	}
}

export default connect(mapStateToProps, mapDispatchToState)(SignUp);