import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../../store/actions/teamsActions';
import Loader from '../Loader';
import Team from './Team';
import { H2 } from '../../generalStyles';
import styled from 'styled-components';


const TeamsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2rem;
`;

const Teams = ({getTeamsAction, teams, loading, error }) => {
	useEffect(() => {
		getTeamsAction()
	},[getTeamsAction])

	if(loading) return <Loader/>
	if(error) return <div>{error}</div>
	return(
		<div>
			<H2>Teams</H2>
			<TeamsWrapper>
				{
					teams.map(team => 
						<Team key={team.id} team={team}/>
					)
				}
			</TeamsWrapper>
		</div>
	)
}


const mapStateToProps = state => {
	return {
		teams: state.teamsBranch.teams,
		loading: state.teamsBranch.loading,
		error: state.teamsBranch.error
	}
}

const mapDispatchToState = dispatch => {
	return {
		getTeamsAction: () => dispatch(getTeams())
	}
}


export default connect(mapStateToProps, mapDispatchToState)(Teams);