import React, { use } from 'react';

const friendsPromise = fetch("/data.json").then((res) => res.json());

const useFriend = () => {

    const friends = use(friendsPromise);

    return {friends}
};

export default useFriend;