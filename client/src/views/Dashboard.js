import React, {useEffect} from 'react';
import {
    Link
} from "react-router-dom";

import TopNav from "../components/TopNav";
import BottomBar from "../components/BottomBar";


const Dashboard = () => {
    return (
        <div>
            <div>
                <TopNav/>
            </div>
            <div className="bg-sky-900 pt-9">
                <h1 className="text-6xl font-Oswald text-yellow-300 mb-9 pl-4">Customize your OneFence</h1>
                <h4 className=" text-white mb-9 pl-4 font-sans">
                    The one post is the most versatile, diy friendly metal fence post on the market.
                    <br/>Built to last and built for design. build a horizontal, vertical, or “fastenless” fence,
                    <br/>and use our interchangeable post covers to express your style.
                </h4>
                <div className="pb-9 pl-4 grid grid-cols-2 gap-8 items-center justify-items-center">
                    <div className="self-auto">
                        <button
                            className={"h-12 w-40 bg-fuchsia-500 hover:bg-sky-300 text-white text-xl font-bold p-2 rounded"}>
                            <Link to={"/customize"}>Start Here</Link>
                        </button>

                    </div>
                    <div>
                        <img
                            className="drop-shadow-2xl"
                            src={require("../images/Fence_10.png")}
                            alt="Fence Main"
                            style={{width:"50%"}}/>
                    </div>
                </div>
                <div className="bg-topNav py-8">
                    <div>
                        <h1 className="text-4xl font-Oswald text-white mb-9 pl-4 text-center">Previous designs</h1>
                    </div>
                    <div className="px-12">
                        <table className="table-auto m-auto">
                            <thead>
                            <tr className="text-center text-yellow-300">
                                <th className="px-4">Design Name</th>
                                <th className="px-4">Edit</th>
                                <th className="px-4">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="text-center text-white">
                                <td className="">Super long design name</td>
                                <td className="">Edit</td>
                                <td className="">Delete</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            <div>
                <BottomBar/>
            </div>
        </div>
    )
}

export default Dashboard;