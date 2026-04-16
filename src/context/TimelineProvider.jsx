import React, { useState } from 'react';
import { TimelineContext } from './TimelineContext';



const TimelineProvider = ({children}) => {

     const [calls, setCalls] = useState([]);
     const [texts, setTexts] = useState([]);
     const [videos, setVideos] = useState([]);

    const data ={
        calls,
        setCalls,
        texts,
        setTexts,
        videos,
        setVideos
        
    }
    return (
        <TimelineContext.Provider value={data}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;