import React from "react";
import "./App.css";
import axios from "axios";
import styled from 'styled-components';

import UserCard from "./components/UserCard";
import FollowersCard from "./components/Followers";

const userApi = "https://api.github.com/users/petrussola";
const followersApi = "https://api.github.com/users/petrussola/followers";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  height: 90vh;
  margin: 2rem;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    const userPromise = axios.get(userApi);
    const followersPromise = axios.get(followersApi);
    Promise.all([userPromise, followersPromise])
      .then(([userPromiseRes, followersPromiseRes]) => {
        this.setState({
          user: userPromiseRes.data,
          followers: followersPromiseRes.data
        });
      })
      .catch(error => {
        debugger;
      });
  }

  render() {
    return (
      <StyledDiv>
        <div className='test'></div>
        <UserCard user={this.state.user} />
        <FollowersCard followers={this.state.followers} className='section' />
      </StyledDiv>
    );
  }
}

export default App;
