import React from 'react';

const BannerCard = () => {
    return (
        <div>
            <div className='sm:flex-1 justify-center grid md:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto mt-10'> 
                <div className="card  bg-base-100 card-xl shadow-sm">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-3xl text-center">10</h2>
                        <p className='text-gray-500'>Total Friends</p>
                    </div>
                </div>
                <div className="card  bg-base-100 card-xl shadow-sm">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-3xl text-center">3</h2>
                        <p className='text-gray-500'>On Track</p>
                    </div>
                </div>
                <div className="card  bg-base-100 card-xl shadow-sm">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-3xl text-center">6</h2>
                        <p className='text-gray-500'>Need Attention</p>
                    </div>
                </div>
                <div className="card  bg-base-100 card-xl shadow-sm">
                    <div className="card-body text-center">
                        <h2 className="font-bold text-3xl text-center">12</h2>
                        <p className='text-gray-500'>Interactions This Month</p>
                    </div>
                </div>
            </div>
            
            <hr className='container mx-auto my-10 text-gray-500 border' />
        </div>
    );
};

export default BannerCard;