import React from 'react';
import { connect } from 'react-redux';

import UserForm from './UserForm';
import { editUser } from '../../store/actions/authActions';

const EditAccount = ({loading, user, editUser}) => {
	return (
		<UserForm 
			initialValues={user}
			loading={loading}
			fetchData={editUser}
			submitTitle="Edit"
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