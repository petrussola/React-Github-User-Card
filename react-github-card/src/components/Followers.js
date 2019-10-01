import React from 'react';
import FollowerCard from './FollowerCard';

export default class UserCard extends React.Component {
    render() {
        return (
            <div className='section'>
                Followers: 
                {
                    this.props.followers.map( item => {
                        return ( <FollowerCard followers={item} />)
                    })
                }
            </div>
        )
    }
}