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
    axios
      .get(userApi)
      .then(res => {
        this.setState({
          user: res.data,
        })
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
