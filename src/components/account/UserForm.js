import React, {useEffect} from 'react';
import styled from 'styled-components';
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import { Formik, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { FormWrapper, StyledForm, FieldGroup, Label } from '../../generalStyles/index';
import { connect } from 'react-redux';
import { fetchCompanies } from '../../store/actions/companyActions';

const RadioGroup = styled.div`
	display: flex;
	align-self: end;
`;

const UserForm = ({ 
		initialValues, 
		loading, 
		validationSchema, 
		fetchData, 
		companies,
		submitTitle,
		fetchCompanies
	}) => {

	useEffect(() => {
		fetchCompanies()
	},[])


	let history = useHistory();
	return (
		<FormWrapper>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={async(values, { setSubmitting }) => {
			        await fetchData(values, history);
			        setSubmitting(false);
		    	}}
			>
				{
					({ isValid, setSubmitting, values, handleChange}) => (
					<StyledForm>
							<Field 
								type="text" 
								name="firstName"
								placeholder="Your First Name..."
								component={Input}
								value={values.firstName}
							/>
							<Field
								type="text" 
								name="lastName"
								placeholder="Your Last Name..."
								component={Input}
								value={values.lastName}
							/>
							<Field 
								type="email" 
								name="email"
								placeholder="Your Email..."
								component={Input}
								value={values.email}
							/>
							<Field
								type="password" 
								name="password"
								placeholder="Your Password..."
								component={Input}
								value={values.password}
							/>
							<Field
								type="text"
								name="avatarUrl"
								placeholder="your avatarUrl..."
								component={Input}
								value={values.avatarUrl}
							/>
							<Field
								type="date" 
								name="birthDate"
								placeholder="Your birthDate..."
								component={Input}
								value={values.birthDate}
							/>
							<RadioGroup>
								<Label>
									<Field
										type="radio"
										name="sex"
										value="male"
									/>
									Male								
								</Label>
								<Label>
									<Field
										type="radio"
										name="sex"
										value="female"
									/>
									Female
								</Label>
							</RadioGroup>
							<FieldGroup>
								<Field
									type="number"
									name="jsExperience"
									placeholder="your jsExperience ..."
									component={Input}
									value={values.jsExperience}
								/>
								<Field
									type="number"
									name="reactExperience"
									placeholder="your reactExperience ..."
									component={Input}
									value={values.reactExperience}
								/>
							</FieldGroup>
							<Select name="companyId">
								<option value="">Select Your Company</option>
								{
									companies.map(({id, name}) => 
										<option key={id} value={id}>{name}</option>
									)
								}
							</Select>
							<Button 
								type="submit"
								disabled={!isValid || setSubmitting}
								style={{marginTop: '3rem'}}
								backgroundColor={`var(--color-mainLighter)`}
								color={`var(--color-mainDark)`}
							>
								{loading ? 'Loading ...' : `${submitTitle}`}
							</Button>
					</StyledForm>
					)
				}
			</Formik>
		</FormWrapper>
	);
}
const mapStateToProps = state => {
	return {
		companies: state.companyBranch.companies,
		loading: state.authBranch.loading
	}
}

const mapDispatchToState = dispatch => {
	return {
		fetchCompanies: () => dispatch(fetchCompanies())
	}
}


export default connect(mapStateToProps, mapDispatchToState)(UserForm);