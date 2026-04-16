import React, { useContext } from 'react';
import { TimelineContext } from '../context/TimelineProvider';
import textImage from "../assets/text.png"

const TextCard = () => {
    const { texts } = useContext(TimelineContext);
    console.log(texts)
    return (
        <div>
            {
                    texts.map((text, ind) => {
                        return (
                            <div key={ind} className="card card-side bg-base-100 shadow-sm">
                                <figure>
                                    <img
                                        className='w-30 p-8'
                                        src={textImage}
                                        alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Text <span className='text-gray-500'>with</span> <span className='text-gray-500'>{text.name}</span></h2>
                                    <p>{text.next_due_date}</p>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    );
};

export default TextCard;