import React from 'react';
import { useParams } from 'react-router';
import useCard from '../hooks/usecard';

const FriendDetails = () => {
    const {id} = useParams();
    console.log(id,'id')

    const {friends} = useCard()
    console.log(friends)

    
    return (
        <div>
            CardDetails
        </div>
    );
};

export default FriendDetails;