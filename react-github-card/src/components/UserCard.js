import React from 'react';

export default class UserCard extends React.Component {
    render() {
        debugger
        return (
            <div>
                <div>
                    <img src={this.props.user.avatar_url} />
                </div>
                <p>{this.props.user.login}</p>
                <p>{this.props.user.name}</p>
                <p>{this.props.user.bio}</p>
                <p>{this.props.user.followers}</p>
                <p>{this.props.user.following}</p>
            </div>
        )
    }
}