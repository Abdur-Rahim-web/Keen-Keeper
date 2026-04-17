import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../context/TimelineContext';

const Stats = () => {

    const {calls, texts, videos,} = useContext(TimelineContext);

    const data = [
        { name: 'Call', value: calls.length, fill: '#244D3F' },
        { name: 'Text', value: texts.length , fill: '#a04eff' },
        { name: 'Video', value: videos.length, fill: '#00C49F' },
    ];
    return (
        <div className='bg-base-200 py-10'>
            <div className='mx-5'>
                <div className='container mx-auto'>
                <div>
                    <h2 className='text-4xl font-bold pb-5'>Friendship Analytics</h2>
                </div>

                <div className='flex flex-col items-center p-5 sm:p-10 bg-white rounded-2xl'>
                    <PieChart className='w-full max-w-[300px] aspect-square'
                     responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />

                        <Legend verticalAlign="bottom" align="center"></Legend>
                        <Tooltip></Tooltip>

                    </PieChart>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Stats;