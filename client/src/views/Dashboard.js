import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

import TopNav from "../components/TopNav";
import BottomBar from "../components/BottomBar";
import * as response from "autoprefixer";



const Dashboard = (props) => {
    //State from App using props
    const {allFences, setAllFences, idUpdate, setIdUpdate} = props;
    const [deletedId, setDeletedId] = useState(0);

    //Get axios requests
    useEffect(()=>{
        setIdUpdate(null);
        axios.get('http://localhost:8000/')
            .then((res)=>{
                setAllFences(res.data);
            })
            .catch((err)=>{
                console.log('Error when requesting allFences in axios function');
            })
    }, []);

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
                            className={"h-32 w-32 bg-fuchsia-500 hover:bg-sky-300 text-white text-xl font-bold rounded-full"}>
                            <Link to={"/customize"}>Start Here</Link>
                        </button>

                    </div>
                    <div>
                        <img
                            className="drop-shadow-2xl"
                            src={require("../images/Fence_10.png")}
                            alt="Fence Main"
                            style={{width:"70%"}}/>
                    </div>
                </div>
                <div className="bg-topNav py-8">
                    <div>
                        <h1 className="text-4xl font-Oswald text-yellow-300 mb-9 pl-4 text-center">Previous designs</h1>
                    </div>
                    <div className="px-12">
                        <table className="table-auto m-auto">
                            <thead>

                            </thead>
                            <tbody>
                            {allFences.map((fence, index) => {
                                return (
                                    <tr key={index} className="text-center text-white">
                                        <td>
                                            <button>
                                                <Link to={`/fence/${fence._id}`}>{fence.name}</Link>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
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