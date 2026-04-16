import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriend from '../hooks/useFriend';
import { MoonLoader } from 'react-spinners';
import callImage from "../assets/call.png"
import textImage from "../assets/text.png"
import videoImage from "../assets/video.png"
import { TimelineContext } from '../context/TimelineProvider';

const FriendDetails = () => {
    const { id } = useParams();
    // console.log(id, 'id')

    const { friends } = useFriend()
    // console.log(friends)

    const expectedFriend = friends.find((friend) => friend.id === Number(id));
    // console.log(expectedFriend, 'expectedFriend')

    const {calls, setCalls, texts, setTexts, videos, setVideos} = useContext(TimelineContext);

    const handleCall = () => {
        setCalls([...calls, expectedFriend])
    }
    console.log(calls,'call')

    const handleText = () => {
        setTexts([...texts, expectedFriend])
    }
    console.log(calls,'call')

    const handleVideos = () => {
        setVideos([...videos, expectedFriend])
    }
    console.log(calls,'call')

    if (!expectedFriend) {
        return (
            <div>
                <MoonLoader />
            </div>
        )
    }

    return (
        <div className='bg-white p-10 rounded-2xl shadow'>
            <h2 className='font-semibold text-xl pb-3'>Quick Check-In</h2>
            <div className="flex gap-4">

                <div onClick={handleCall} className="flex-1 items-center bg-white p-5 rounded-2xl shadow text-center cursor-pointer hover:bg-gray-50">
                    <div className='flex justify-center'>
                        <img src={callImage} alt="" />
                    </div>
                    <p className="mt-2 text-sm">Call</p>
                </div>

                <div onClick={handleText} className="flex-1 bg-white p-5 rounded-2xl shadow text-center cursor-pointer hover:bg-gray-50">
                    <div className='flex justify-center'>
                        <img src={textImage} alt="" />
                    </div>
                    <p className="mt-2 text-sm">Text</p>
                </div>

                <div onClick={handleVideos} className="flex-1 bg-white p-5 rounded-2xl shadow text-center cursor-pointer hover:bg-gray-50">
                    <div className='flex justify-center'>
                        <img src={videoImage} alt="" />
                    </div>
                    <p className="mt-2 text-sm">Video</p>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;