import React, {useEffect} from 'react';

const TopNav = () => {
    return (
        <div className="bg-topNav font-Oswald text-white border-b-4 border-fuchsia-500">
            <div className="flex justify-between px-4 items-center h-14">
                <div>
                    <h1 className="text-xl">OneFence</h1>
                </div>
                <div className="flex gap-4">
                    <h1 className="text-xl">Home</h1>
                    <h1 className="text-xl">Contact</h1>
                </div>
            </div>
            {/*<div className="bg-yellow-300 h-1"> </div>*/}
        </div>
    )
}

export default TopNav;