import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { FormWrapper, StyledForm } from '../../generalStyles/index';

import styled from 'styled-components';

const Error = styled.span`
    font-size: small;
    letter-spacing: 1px;
    color: var(--color-errorRed);
    margin-top: 1rem
`;

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
  	.required('The passoword is required.')
  	.min(8, 'Too short.'),
});

const SignIn = ({ signIn, isLoggedIn, loading, error }) => {
	let history = useHistory();

	return (
		<FormWrapper>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={SignInSchema}
				onSubmit={async(values, { setSubmitting }) => {
			        await signIn(values, history);
			        setSubmitting(false);
		    	}}
			>
			{({ isValid, setSubmitting}) => (
				<StyledForm>
					<Field 
						type="email" 
						name="email"
						placeholder="Your Email..."
						component={Input}
					/>
					<Field
						type="password" 
						name="password"
						placeholder="Your Password..."
						component={Input}
					/>
					<Button 
						type="submit"
						disabled={!isValid || setSubmitting}
						backgroundColor={`var(--color-mainLighter)`}
						color={`var(--color-mainDark)`}
					>
						{loading ? 'Loading ...' : 'Submit'}
					</Button>
					<Error>{error}</Error>
				</StyledForm>
			)}
			</Formik>
		</FormWrapper>
	)
}

const mapStateToProps = state => {
	return {
		loading: state.authBranch.loading,
		error: state.authBranch.error
	}
}

const mapDispatchToState = dispatch => {
	return {
		signIn: (newUser, history) => dispatch(signIn(newUser, history)),
	}
}


export default connect(mapStateToProps, mapDispatchToState)(SignIn);