import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriend from '../hooks/useFriend';
import { MoonLoader } from 'react-spinners';
import callImage from "../assets/call.png"
import textImage from "../assets/text.png"
import videoImage from "../assets/video.png"
import { TimelineContext } from '../context/TimelineContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const FriendDetails = () => {
    const { id } = useParams();
    // console.log(id, 'id')

    const { friends } = useFriend()
    // console.log(friends)

    const expectedFriend = friends.find((friend) => friend.id === Number(id));
    // console.log(expectedFriend, 'expectedFriend')

    const { calls, setCalls, texts, setTexts, videos, setVideos } = useContext(TimelineContext);

    const handleCall = () => {
        setCalls([...calls, expectedFriend])
        toast.success("Call added successfully")
    }
    // console.log(calls, 'call')

    const handleText = () => {
        setTexts([...texts, expectedFriend])
        toast.success("Text added successfully")
    }
    // console.log(calls, 'call')

    const handleVideos = () => {
        setVideos([...videos, expectedFriend])
        toast.success("Video added successfully")
    }
    // console.log(calls, 'call')

    if (!expectedFriend) {
        return (
            <div>
                <MoonLoader />
            </div>
        )
    }

    return (
        <>
            <div className='bg-base-200'>
                <div className='flex flex-col lg:flex-row gap-5 container mx-auto py-10 px-7'>
                    {/* friend card */}
                    <div >
                        <div className="bg-base-100 w-80 shadow-sm rounded-xl mb-5">
                            <div className="card-body flex justify-center items-center">
                                <img className='rounded-full' src={expectedFriend.picture} alt={expectedFriend.picture} />
                                <h2 className="card-title">
                                    {expectedFriend.name}
                                </h2>
                                <p className='text-gray-500 font-semibold'>{expectedFriend.days_since_contact}d ago</p>
                                <div className="grid grid-cols-1 gap-3 justify-center">
                                    <div className='flex justify-between items-center gap-2'>
                                        {
                                            expectedFriend.tags.map((tag, index) =>
                                                <div key={index} className="badge badge-primary fle">{tag}</div>)
                                        }
                                    </div>

                                    <div className='flex justify-center items-center '>
                                        <div className={`badge badge-info`}>{expectedFriend.status}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="btn bg-base-100 w-80 shadow-sm mb-5">
                                <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                                Snooze 2 weeks
                            </button>
                            <br />
                            <button className="btn bg-base-100 w-80 shadow-sm mb-5">
                                <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                                Archive
                            </button>
                            <br />
                            <button className="btn bg-base-100 w-80 shadow-sm mb-5">
                                <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                                Delete
                            </button>
                        </div>

                    </div>

                    <div className='flex-1 space-y-5'>
                        {/* 3-card */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <div className="card  bg-base-100 card-xl shadow-sm">
                                <div className="card-body text-center">
                                    <h2 className="font-bold text-3xl text-center">62</h2>
                                    <p className='text-gray-500'>Days Since Contact</p>
                                </div>
                            </div>
                            <div className="card  bg-base-100 card-xl shadow-sm">
                                <div className="card-body text-center">
                                    <h2 className="font-bold text-3xl text-center">30</h2>
                                    <p className='text-gray-500'>Goal (Days)</p>
                                </div>
                            </div>
                            <div className="card  bg-base-100 card-xl shadow-sm">
                                <div className="card-body text-center">
                                    <h2 className="font-bold text-3xl text-center">Feb 27, 2026</h2>
                                    <p className='text-gray-500'>Next Due</p>
                                </div>
                            </div>

                        </div>

                        {/* middle-card */}
                        <div className='flex-1'>
                            <div className="card  bg-base-100 card-xs shadow-sm">
                                <div className="card-body p-5">
                                    
                                    <div className="justify-between card-actions">
                                        <h2 className="card-title font-SEMIbold text-xl">Relationship Goal</h2>
                                        <button className="btn">Edit</button>
                                    </div>
                                    <p className='text-[15px] text-gray-500'>Connect every <span className='font-bold '>30 days</span></p>
                                </div>
                            </div>
                        </div>

                        {/* function btn */}
                        <div className='card bg-base-100 card-xs shadow-sm p-5'>
                            <h2 className='font-semibold text-xl pb-3'>Quick Check-In</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

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
                    </div>
                </div>
            </div>
        </>
    );
};

export default FriendDetails;