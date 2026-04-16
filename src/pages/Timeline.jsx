import React from 'react';
import CallCard from '../ui/CallCard';
import TextCard from '../ui/TextCard';
import VideoCard from '../ui/VideoCard';



const Timeline = () => {

    return (
        <div className='bg-base-200'>
            <div className='container mx-auto py-10 space-y-5'>

                <h2 className='text-3xl font-bold'>Timeline</h2>

                <input className='border p-3 rounded-3xl' type="text" placeholder='Filter timeline' />



                <CallCard></CallCard>
                <TextCard></TextCard>
                <VideoCard></VideoCard>


            </div>
        </div>
    );
};

export default Timeline;