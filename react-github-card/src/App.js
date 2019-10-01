import React from "react";
import "./App.css";
import axios from "axios";

import UserCard from "./components/UserCard";
import FollowersCard from "./components/FollowersCard";

const userApi = "https://api.github.com/users/petrussola";
const followersApi = "https://api.github.com/users/petrussola/followers";

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
        debugger
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
      <div>
        <UserCard user={this.state.user} />
        <FollowersCard />
      </div>
    );
  }
}

export default App;
