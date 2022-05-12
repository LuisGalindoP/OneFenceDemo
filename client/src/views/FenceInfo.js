import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";
import {Link, useParams} from "react-router-dom";
import defineFinalImage from "../imagesControllers/DefineFinalImage";

import TopNav from "../components/TopNav";
import BottomBar from "../components/BottomBar";

const FenceInfo = (props) => {
    const [fence, setFence] = useState({});
    //Get id from props
    const {id} = useParams();

    //Get the fence details with axios and the id from the url
    useEffect(() => {
        axios.get(`http://localhost:8000/fence/${id}`)
            .then((res) => {
                // console.log(res.data);
                setFence(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    const deleteFence = () => {
        axios.post(`http://localhost:8000/fence/${id}`)
            .then((res) => {
                console.log(res.data);
            }).catch((error) => {
            console.log(error);
        })
        navigate("/").then(()=>{})
    }

    //CALL FUNCTION TO DEFINE FINAL IMAGE TO SHOW
    const finalImage = defineFinalImage(fence.construction, fence.covers, fence.finish);

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
                            <tbody>
                            <tr className=" text-white">
                                <td className={"font-bold pr-2"}>Name: </td>
                                <td>{fence.name}</td>
                            </tr>
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
                                <td className={"font-bold pr-2"}># Posts: </td>
                                <td>{fence.postsNumber}</td>
                            </tr>
                            <tr className=" text-white">
                                <td className={"font-bold pr-2"}># Covers: </td>
                                <td>{fence.coversNumber}</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    <div>
                        <img
                            className="drop-shadow-2xl"
                            src={finalImage}
                            alt="Fence Main"
                            style={{width:"70%"}}/>
                    </div>
                </div>
                <div className={"text-center py-4"}>
                    <form onSubmit={deleteFence}>

                        <button
                            className={"h-8 w-32 bg-red-500 hover:bg-sky-300 text-white text-l font-bold rounded"}
                            type={"submit"}
                        >
                            Delete
                        </button>
                    </form>
                </div>
            </div>
            <BottomBar/>
        </div>
    )
}

export default FenceInfo;
