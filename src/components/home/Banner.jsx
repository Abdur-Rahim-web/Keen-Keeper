import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div className="bg-base-200 min-h-screen flex justify-center items-center">
                <div className="flex justify-center text-center pt-10">
                    <div className="">
                        <h1 className="text-5xl md:text-7xl font-bold">Friends to keep close in your life</h1>
                        <p className="md:font-semibold py-8 text-gray-500">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.
                        </p>
                        <button className="btn font-bold rounded-xl p-2 bg-[#244D3F] text-white"><FaPlus />Add a Friend</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;