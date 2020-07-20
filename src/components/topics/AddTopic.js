import React from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../../store/actions/topicsActions';
import styled from 'styled-components';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Formik, Field } from 'formik';
import { StyledForm } from '../../generalStyles/index';

const Wrapper = styled.div`
	width: 100%;
	margin: auto;
	background-color: var(--color-main);
	padding: 1rem;
	border-radius: 10px;
`;

const Form = styled(StyledForm)`
	display: grid;
	grid-template-columns: 3fr 1fr;
    align-items: center;
    grid-column-gap: 2rem;
    padding: 1rem
`
const AddTopic = ({ addTopic}) => {
	return(
		<Wrapper>
			<Formik
				initialValues={{title: ''}}
				onSubmit={async(values, { setSubmitting, resetForm }) => {
			        await addTopic(values);
			        resetForm()
			        setSubmitting(false);
		    	}}
			>
			{
				({isValid, setSubmitting}) => (
					<Form>
						<Field
							component={Input }
							type="text"
							name="title"
							placeholder="Add new Topic ..."
						/>
						<Button
							type="submit"
							disabled={!isValid || setSubmitting}
							backgroundColor={`var(--color-mainLighter)`}
							color={`var(--color-mainDark)`}
						>
							Add
						</Button>
					</Form>
				)
			}
			</Formik>
		</Wrapper>
	)
}

const mapDispatchToState = dispatch => {
	return {
		addTopic: (newTopic) => dispatch(addTopic(newTopic))
	}
}

export default connect(null, mapDispatchToState)(AddTopic);