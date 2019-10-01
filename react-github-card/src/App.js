import React from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

import UserCard from "./components/UserCard";
import FollowersCard from "./components/Followers";
import SearchCard from "./components/SearchCard";

const userApi = `https://api.github.com/users/petrussola`;
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
      followers: [],
      searchTerm: "",
    };
  }

  onClickSearchHandler = (event, searchTerm) => {
    event.preventDefault();
    this.setState({
      searchTerm: searchTerm,
    })
  };

  componentDidMount() {
    const userPromise = axios.get(`https://api.github.com/users/petrussola`);
    const followersPromise = axios.get(
      `https://api.github.com/users/petrussola/followers`
    );
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

  componentDidUpdate() {
    const searchUserPromise = axios.get(
      `https://api.github.com/users/${this.state.searchTerm}`
    );
    const searchUserFollowers = axios.get(
      `https://api.github.com/users/${this.state.searchTerm}/followers`
    );
    Promise.all([searchUserPromise, searchUserFollowers])
      .then(([searchUserPromiseRes, searchUserFollowersRes]) => {
        this.setState({
          user: searchUserPromiseRes.data,
          followers: searchUserFollowersRes.data
        });
      })
      .catch(error => {
        debugger;
      });
  }

  render() {
    return (
      <div>
        <SearchCard
          searchTerm={this.state.searchTerm}
          onChangeSearchHandler={this.onChangeSearchHandler}
          onClickSearchHandler={this.onClickSearchHandler}
        />
        <StyledDiv>
          <div className="test"></div>
          <UserCard user={this.state.user} />
          <FollowersCard followers={this.state.followers} className="section" />
        </StyledDiv>
      </div>
    );
  }
}

export default App;
