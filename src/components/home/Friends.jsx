import React from 'react';
import FriendsCard from '../../ui/FriendsCard';
import useFriend from '../../hooks/useFriend';




const Friends = () => {

    const {friends} = useFriend()
    // console.log(friends)

    
    return (
        <div>
            <div className=' font-bold text-2xl container mx-auto'>
                <h2 className=' font-bold text-2xl pb-8'>Your Friends</h2>
            </div>

            <div className='sm:flex-1 justify-center grid md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto'>
                {
                    friends.map((friend,index) =>
                        <FriendsCard key={index} friend={friend}></FriendsCard>
                    )
                }
            </div>
        </div>
    );
};

export default Friends;