import React from 'react';
import styled from 'styled-components';

const StyledFollowerCard = styled.p`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.2rem;
`;

export default class FollowerCard extends React.Component {
    render() {
        return (
            <StyledFollowerCard>{this.props.followers.login}</StyledFollowerCard>
        )
    }
}