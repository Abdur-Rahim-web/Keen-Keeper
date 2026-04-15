import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({friend}) => {

    // const {color,setColor} = useState(false);


    return (
        <Link to={`/card/${'id'}`} >
            <div className="bg-base-100 w-80 shadow-sm rounded-2xl mb-15">
                <div className="card-body flex justify-center items-center">
                    <img className='rounded-full' src={friend.picture} alt={friend.picture} />
                    <h2 className="card-title">
                        {friend.name}
                    </h2>
                    <p className='text-gray-500 font-semibold'>{friend.days_since_contact}d ago</p>
                    <div className="grid grid-cols-1 gap-3 justify-center">
                        <div className='flex justify-between items-center gap-2'>
                            {
                                friend.tags.map((tag, index) =>
                                    <div key={index} className="badge badge-primary fle">{tag}</div>)
                            }
                        </div>

                        <div className='flex justify-center items-center '>
                            <div className={`badge badge-info`}>{friend.status}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FriendsCard;