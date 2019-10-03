import React from "react";
import styled from "styled-components";

const StyledAvatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 60%;
  height: 60%;
  img {
    width: auto;
    height: 100%;
    border-radius: 100%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  p {
    width: 50%;
    display: flex;
    justify-content: center;
    &.fullWidth {
      width: 100%;
    }
  }
`;

export default class UserCard extends React.Component {
  render() {
    return (
      <div className="section">
        <StyledAvatar className="avatar">
          <img src={this.props.user.avatar_url} />
        </StyledAvatar>
        <UserInfo className="userInfo">
          <p>{this.props.user.login}</p>
          <p>{this.props.user.name}</p>
          <p className="fullWidth">{this.props.user.bio}</p>
          <p>Followers: {this.props.user.followers}</p>
          <p>Following: {this.props.user.following}</p>
        </UserInfo>
      </div>
    );
  }
}
