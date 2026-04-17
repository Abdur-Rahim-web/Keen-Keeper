import React, { useContext } from 'react';
import { TimelineContext } from '../context/TimelineContext';
import callImage from "../assets/call.png"

const CallCard = () => {
    const { calls } = useContext(TimelineContext);
    console.log(calls)
    return (
        <div className='space-y-5'>
            {
                calls.map((call, ind) => {
                    return (
                        <div key={ind} className="card card-side bg-base-100 shadow-sm">
                            <figure>
                                <img
                                    className='w-35 md:w-30 p-8'
                                    src={callImage}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Meetup <span className='text-gray-500'>with</span> <span className='text-gray-500'>{call.name}</span></h2>
                                <p>{call.next_due_date}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CallCard;