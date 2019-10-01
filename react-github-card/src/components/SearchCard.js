import React from 'react';

export default class SearchCard extends React.Component {
    render() {
        return (
            <div>
                <input type='text' value={this.props.searchTerm} placeholder='...search a github user ' onChange={this.props.onChangeSearchHandler} />
                <button onClick={this.props.onClickSearchHandler} >Search</button>
            </div>
        )
    }
}