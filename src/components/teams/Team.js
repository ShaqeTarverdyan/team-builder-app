import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const TeamWrapper = styled.div`
	width: 100%;
	max-width: 450px;
	margin: auto;
	height: auto;
	border: 1px solid var(--color-border);
	border-radius: 10px;
	padding: 1rem;
	text-align: center;
	color: var(--color-text)
`;
const Name = styled.p`
	font-size: 20px;
	font-weight: bold;
`;

const Member = styled.div`
	border-bottom: 1px solid var(--color-border);
	margin: 1rem 2rem;
    padding: 0.5rem;
    font-size: 14px
`;

const Content = styled.div``;
const ContentItem = styled.div`
	font-size: 15px;
    margin: 0.5rem;
    text-align: left;
    border-bottom: 1px solid var(--color-border);
`;
const Team = ({team}) => {
	const [showMembers, setShowMembers] = useState(false)
	const { name, topic, project, members } = team;

	const handleShowMembers = () => {
		setShowMembers(!showMembers)
	}
	return (
		<TeamWrapper>
			<Name>{name}</Name>
			<Content>
				<ContentItem>{`Topic - ${topic}`}</ContentItem>
				<ContentItem>{`Project - ${project}`}</ContentItem>
				<ContentItem 
					onClick={handleShowMembers} 
					style={{
						cursor: 'pointer',
						display: 'flex',
    					justifyContent: 'space-between'
					}}
				>
					<span>Members</span>
					<span>
						{showMembers? <AiOutlineUp/>: <AiOutlineDown/>}
					</span>
				</ContentItem>
				{
					showMembers && members.map(({email, firstName, lastName}) => 
						<Member key={email}>{`${firstName} ${lastName}`}</Member>
					)
				}
			</Content>
		</TeamWrapper>
	)
}

export default Team;