import React, { useContext } from 'react';
import { TimelineContext } from '../context/TimelineProvider';
import videoImage from "../assets/video.png"

const VideoCard = () => {
    const { videos } = useContext(TimelineContext);
    console.log(videos)
    return (
        <div>
            {
                    videos.map((video, ind) => {
                        return (
                            <div key={ind} className="card card-side bg-base-100 shadow-sm">
                                <figure>
                                    <img
                                        className='w-30 p-8'
                                        src={videoImage}
                                        alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Video <span className='text-gray-500'>with</span> <span className='text-gray-500'>{video.name}</span></h2>
                                    <p>{video.next_due_date}</p>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    );
};

export default VideoCard;