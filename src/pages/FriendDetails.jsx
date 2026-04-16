import React from 'react';
import { useParams } from 'react-router';
import useFriend from '../hooks/useFriend';
import { MoonLoader } from 'react-spinners';

const FriendDetails = () => {
    const { id } = useParams();
    console.log(id, 'id')

    const { friends } = useFriend()
    console.log(friends)

    const expectedFriend = friends.find((friend) => friend.id === Number(id));
    console.log(expectedFriend, 'expectedFriend')


    if (!expectedFriend) {
        return (
        <div>
            <MoonLoader />
        </div>
        )
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{expectedFriend.name}</h2>
                    <p>{expectedFriend.bio}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">{expectedFriend.status}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;