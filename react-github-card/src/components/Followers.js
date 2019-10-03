import React from "react";
import styled from "styled-components";

import FollowerCard from "./FollowerCard";

const StyledFollowers = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

export default class UserCard extends React.Component {
  render() {
    return (
      <div className="sectionFollowers">
        Followers:
        <StyledFollowers >
          {this.props.followers.map(item => {
            return <FollowerCard followers={item} />;
          })}
        </StyledFollowers>
      </div>
    );
  }
}
