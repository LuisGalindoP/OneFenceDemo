import React from 'react';
import {Link} from "react-router-dom";

const Covers = () => {
    return (
        <div>
            <div className={"bg-sky-900"}>
                <div className=" pt-9 text-center">
                    <h1 className="text-2xl font-Oswald text-yellow-300 pl-4">Let's get some covers</h1>
                </div>
                <div className="flex justify-center items-center my-12">
                    <div className={"w-18 h-60 bg-white opacity-10 mx-6"}>
                        arrow left
                    </div>
                    <img
                        className=" opacity-25"
                        src={require("../images/Fence_10.png")}
                        alt="Fence Main"
                        style={{width:"16%"}}/>
                    <img
                        className=""
                        src={require("../images/Fence_10.png")}
                        alt="Fence Main"
                        style={{width:"30%"}}/>
                    <img
                        className=" opacity-25"
                        src={require("../images/Fence_10.png")}
                        alt="Fence Main"
                        style={{width:"16%"}}/>
                    <div className={"w-18 h-60 bg-white opacity-10 mx-6"}>
                        arrow right
                    </div>

                </div>
                <div className={"text-white font-sans text-center pb-6"}>
                    <h3>Wood description from DB</h3>
                </div>
                <div className={"text-center pb-8"}>
                    <button
                        className={"h-8 w-32 bg-fuchsia-500 hover:bg-sky-300 text-white text-l font-bold rounded"}>
                        <Link to={"/customize"}>Select this</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Covers;