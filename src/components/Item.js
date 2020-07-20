import React from 'react';
import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

const StyledTopic = styled.div`
	border: 1px solid var(--color-border);
	border-radius: 10px;
	padding: 1rem;
	margin: 1rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	color: var(--color-text)
`;
const Title = styled.p`
`;
const Description = styled.div``;
const Content = styled.div``;

const IconsGroup = styled.div`
	display: flex
`;

const Icon = styled.div`
	cursor: pointer;
	margin: 0 5px;

	:hover {
		color: var(--color-mainDark)
	}
`;
const UNLIKE = 'unlike';
const LIKE = 'like';
const Item = ({args, ...props}) => {
	const { title, votedByMe, canDelete, id , description} = args
	return(
		<StyledTopic>
			<Content>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</Content>
			<IconsGroup>
				{
					votedByMe ? 
					<Icon onClick={() => props.vote(id, UNLIKE)}><AiFillLike/></Icon> : 
					<Icon onClick={() => props.vote(id, LIKE)}><AiOutlineLike/></Icon>}
				{
					canDelete && 
					<Icon onClick={() => props.deleteTopic(id)}>
						<RiDeleteBinLine/>
					</Icon>
				}
			</IconsGroup>
		</StyledTopic>
	)
}
export default Item;