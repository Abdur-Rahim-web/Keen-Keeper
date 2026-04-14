import React from 'react';

const BannerCard = () => {
    return (
        <div>
            <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto'> 
                <div className="card w-96 bg-base-100 card-xl shadow-sm">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-3xl text-center">10</h2>
                        <p className='text-gray-500'>Total Friends</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 card-xl shadow-sm">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-3xl text-center">10</h2>
                        <p className='text-gray-500'>Total Friends</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 card-xl shadow-sm">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-3xl text-center">10</h2>
                        <p className='text-gray-500'>Total Friends</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 card-xl shadow-sm">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-3xl text-center">10</h2>
                        <p className='text-gray-500'>Total Friends</p>
                    </div>
                </div>
            </div>
            
            <hr className='container mx-auto my-10 text-gray-500 border' />
        </div>
    );
};

export default BannerCard;