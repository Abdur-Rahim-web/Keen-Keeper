import React from 'react';
import { useParams } from 'react-router';
import useFriend from '../hooks/useFriend';

const FriendDetails = () => {
    const {id} = useParams();
    console.log(id,'id')

    const {friends} = useFriend()
    console.log(friends)

    
    return (
        <div>
            CardDetails
        </div>
    );
};

export default FriendDetails;