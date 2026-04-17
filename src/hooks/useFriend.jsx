import { useEffect, useState } from 'react';

const useFriend = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network error')
                }
                return res.json();
            })
            .then((data) => {
                setFriends(data);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { friends, loading };
};

export default useFriend;