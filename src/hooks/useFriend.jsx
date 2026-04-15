import React, { use } from 'react';

const friendsPromise = fetch("/public/data.json").then((res) => res.json());

const useFriend = () => {

    const friends = use(friendsPromise);

    return {friends}
};

export default useFriend;