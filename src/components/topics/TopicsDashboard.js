import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTopics } from '../../store/actions/topicsActions';
import AddTopic from './AddTopic';
import Topics from './Topics';
import { Wrapper } from '../../generalStyles';
import Loader from '../Loader';



const TopicsDashboard = ({ getTopics, loading }) => {
	useEffect(() => {
		getTopics()
	}, [getTopics])
	return (
		<Wrapper>
			<AddTopic/>
			{loading ? <Loader/> : <Topics/>}
		</Wrapper>
	);
}

const mapStateToProps = state => {
	return {
		loading: state.topicsBranch.loading
	}
}
const mapDispatchToState = dispatch => {
	return {
		getTopics: () => dispatch(getTopics()),
	}
}

export default connect(mapStateToProps, mapDispatchToState)(TopicsDashboard);