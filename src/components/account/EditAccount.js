import React from 'react';
import { connect } from 'react-redux';

import UserForm from './UserForm';
import { editUser } from '../../store/actions/authActions';
import * as Yup from 'yup';

 export const EditAccountSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Your first name is required.'),
  lastName: Yup.string()
    .required('Your last name is required.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
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
  companyId: Yup.number()
  	.required('Please select your company')
});


const EditAccount = ({loading, user, editUser}) => {
	return (
		<UserForm 
			initialValues={user}
			loading={loading}
			fetchData={editUser}
			submitTitle="Edit"
			validationSchema={EditAccountSchema}
			isCreateNewUser={false}
		/>
	)
}

const mapStateToProps = state => {
	return {
		loading: state.authBranch.loading,
		user: state.authBranch.user,
	}
}

const mapDispatchToState = dispatch => {
	return {
		editUser: (updatedUser, history) => dispatch(editUser(updatedUser, history)),
	}
}

export default connect(mapStateToProps, mapDispatchToState)(EditAccount)