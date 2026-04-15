import React from 'react';
import FriendsCard from '../../ui/FriendsCard';
import useCard from '../../hooks/usecard';



const Friends = () => {

    const {friends} = useCard()
    // console.log(friends)


    return (
        <div>
            <div className=' font-bold text-2xl container mx-auto'>
                <h2 className=' font-bold text-2xl pb-8'>Your Friends</h2>
            </div>

            <div className='grid grid-cols-4 gap-5 container mx-auto'>
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