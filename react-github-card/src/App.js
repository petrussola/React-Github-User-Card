import React from "react";
import "./App.css";

import UserCard from "./components/UserCard";
import FollowersCard from "./components/FollowersCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      followers: []
    };
  }

  render() {
    return (
      <div>
        <UserCard />
        <FollowersCard />
      </div>
    );
  }
}

export default App;
