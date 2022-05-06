import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
const TopNav = () => {
    return (
        <div className="bg-topNav font-Oswald text-white border-b-4 border-fuchsia-500">
            <div className="flex justify-between px-4 items-center h-14">
                <div>
                    <h1 className="text-xl">
                        <Link to={"/"}>OneFence</Link>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <h1 className="text-xl">
                        <Link to="/">Home</Link>
                    </h1>
                    <h1 className="text-xl">
                        <Link to="/">Contact</Link>
                    </h1>
                </div>
            </div>
            {/*<div className="bg-yellow-300 h-1"> </div>*/}
        </div>
    )
}

export default TopNav;