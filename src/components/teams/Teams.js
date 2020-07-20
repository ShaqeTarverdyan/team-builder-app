import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../../store/actions/teamsActions';
import Loader from '../Loader';



const Teams = ({getTeamsAction, teams, loading, error }) => {
	useEffect(() => {
		getTeamsAction()
	},[getTeamsAction])
	if(loading) return <Loader/>
	if(error) return <div>{error}</div>
	return(
		<div>
			teams
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