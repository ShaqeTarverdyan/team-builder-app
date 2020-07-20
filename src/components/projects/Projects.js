import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getProjects, voteProject } from '../../store/actions/projectsActions';
import { Wrapper, Empty } from '../../generalStyles';
import Item from '../Item.js';
import Loader from '../Loader';


const Projects = ({ getProjectsAction, projects, loading, error, voteAction }) => {

	useEffect(() => {
		getProjectsAction()
	},[getProjectsAction]);

	if(loading) return <Loader/>
	if(error) return <div>{error}</div>
	return (
		<Wrapper>
			{
				projects.map(project => 
					<Item 
						key={project.id}
						args={project}
						vote={voteAction}
					/>
				)
			}
		</Wrapper>
	);
}

const mapStateToProps = state => {
	return {
		loading: state.projectsBranch.loading,
		error: state.projectsBranch.error,
		projects: state.projectsBranch.projects
	}
}

const mapDispatchToState = dispatch => {
	return {
		getProjectsAction: () => dispatch(getProjects()),
		voteAction: (id, type) => dispatch(voteProject(id, type))
	}
}


export default connect(mapStateToProps, mapDispatchToState)(Projects);