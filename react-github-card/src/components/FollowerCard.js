import React from 'react';

export default class FollowerCard extends React.Component {
    render() {
        return (
            <p>{this.props.followers.login}</p>
        )
    }
}