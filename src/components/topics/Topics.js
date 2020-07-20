import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Empty } from '../../generalStyles';
import Item from '../Item.js';
import { voteTopic, deleteTopic } from '../../store/actions/topicsActions';

const Wrapper = styled.div``;

const Topics = ({ topics, voteAction, deleteTopicAction }) => {
	return (
		<Wrapper>
			{
				topics.length ? topics.map(topic => 
					<Item 
						key={topic.id}
						args={topic}
						deleteTopic={deleteTopicAction}
						vote={voteAction}
					/> 
				): <Empty>There is no topic yet!</Empty>
			}
		</Wrapper>
	);
}

const mapStateToProps = state => {
	return {
		topics: state.topicsBranch.topics
	}
}

const mapDispatchToState = dispatch => {
	return {
		deleteTopicAction: (id) => dispatch(deleteTopic(id)),
		voteAction: (id, type) => dispatch(voteTopic(id, type))
	}
}


export default connect(mapStateToProps, mapDispatchToState)(Topics);