import React from "react";
import styled from "styled-components";

const StyledFollowerCard = styled.div`
  width: 75px;
  height: 75px;
  margin: 0.2rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

export default class FollowerCard extends React.Component {
  render() {
    return (
      <StyledFollowerCard>
        <img src={this.props.followers.avatar_url} />
      </StyledFollowerCard>

      // <StyledFollowerCard>{this.props.followers.login}</StyledFollowerCard>
    );
  }
}
