import React from "react";

export default class SearchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  onChangeSearchHandler = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchTerm}
          placeholder="...search a github user "
          onChange={this.onChangeSearchHandler}
        />
        <button onClick={event => this.props.onClickSearchHandler(event, this.state.searchTerm)}>Search</button>
      </div>
    );
  }
}
