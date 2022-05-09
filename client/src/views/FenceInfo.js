import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import TopNav from "../components/TopNav";
import BottomBar from "../components/BottomBar";

const FenceInfo = (props) => {
    //Create state for the fence
    const [fence, setFence] = useState({});
    //Get id from props
    const {id} = props;

    //Get the fence details with axios and the id from the url
    useEffect(() => {
        axios.get(`http://localhost:8000/fence/${id}`)
            .then((res) => {
                console.log(res.data);
                setFence(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);


    return (
        <div>
            <TopNav/>
            <div className={"bg-sky-900"}>
                <div className="pt-9 text-center mb-8">
                    <h1 className="text-3xl font-Oswald text-yellow-300 pl-4">{fence.name}</h1>
                </div>
                <div className="pb-9 pl-4 grid grid-cols-2 gap-8 items-center justify-items-center">
                    <div className="self-auto">
                        <table className="table-auto">
                            <td>
                                <tr className=" text-white">
                                    <td className={"font-bold pr-2"}>Length: </td>
                                    <td>{fence.length}</td>
                                </tr>
                                <tr className=" text-white">
                                    <td className={"font-bold pr-2"}>Covers: </td>
                                    <td>{fence.covers}</td>
                                </tr>
                                <tr className="t text-white">
                                    <td className={"font-bold pr-2"}>Finish: </td>
                                    <td>{fence.finish}</td>
                                </tr>
                                <tr className=" text-white">
                                    <td className={"font-bold pr-2"}>Construction: </td>
                                    <td>{fence.construction}</td>
                                </tr>
                                <tr className=" text-white">
                                    <td className={"font-bold pr-2"}>Amount of Posts: </td>
                                    <td>{fence.postsNumber}</td>
                                </tr>
                                <tr className=" text-white">
                                    <td className={"font-bold pr-2"}>Amount of Covers: </td>
                                    <td>{fence.coversNumber}</td>
                                </tr>
                            </td>
                        </table>

                    </div>
                    <div>
                        <img
                            className="drop-shadow-2xl"
                            src={require("../images/Fence_10.png")}
                            alt="Fence Main"
                            style={{width:"70%"}}/>
                    </div>
                </div>
            </div>
            <BottomBar/>
        </div>
    )
}

export default FenceInfo;
