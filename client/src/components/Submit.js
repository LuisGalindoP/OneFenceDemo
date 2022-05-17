import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {navigate} from "@reach/router";
import defineFinalImage from "../imagesControllers/DefineFinalImage";

const Submit = (props) => {
    const {section, covers, length, finish, construction, name,  allFences, setAllFences, idUpdate, id} = props;

    let postsNumber = Math.round(length/6 + 1);
    let coversNumber = Math.round(postsNumber * 2);

    const createFence = (event) => {
        if (!idUpdate) {
            axios.post('http://localhost:8000/fence/new', {
                "name": name,
                "length": length,
                "covers": covers,
                "finish": finish,
                "construction": construction,
                "postsNumber": postsNumber,
                "coversNumber": coversNumber
            })
                .then((response) =>{
                    setAllFences([...allFences, response.data]);
                })
                .catch((error) => {
                    console.log(error);
                })
            navigate("/").then(()=>{});
        } else {
            axios.put(`http://localhost:8000/fence/edit/${idUpdate}`, {
                "name": name,
                "length": length,
                "covers": covers,
                "finish": finish,
                "construction": construction,
                "postsNumber": postsNumber,
                "coversNumber": coversNumber
            })
                .then((response) =>{
                    setAllFences([...allFences, response.data]);
                })
                .catch((error) => {
                    console.log(error);
                })
            navigate("/").then(()=>{});

        }
    }

    //CALL FUNCTION TO DEFINE FINAL IMAGE TO SHOW
    const finalImage = defineFinalImage(construction, covers, finish);

    return (
        <div>
            <div className={"bg-sky-900"}>
                <div className=" pt-9 text-center">
                    <h1 className="text-2xl font-Oswald text-yellow-300 pl-4">Does it look right?</h1>
                </div>
                <div className="pb-9 pl-4 grid grid-cols-2 gap-8 items-center justify-items-center">
                    <div className="self-auto">
                        <table className="table-auto">
                            <tbody>
                            <tr className=" text-white">
                                <td className={"font-bold pr-2"}>Name: </td>
                                <td>{name}</td>
                            </tr>
                            <tr className=" text-white">
                                <td className={"font-bold pr-2"}>Length: </td>
                                <td>{length}</td>
                            </tr>
                            <tr className=" text-white">
                                <td className={"font-bold pr-2"}>Covers: </td>
                                <td>{covers}</td>
                            </tr>
                            <tr className="t text-white">
                                <td className={"font-bold pr-2"}>Finish: </td>
                                <td>{finish}</td>
                            </tr>
                            <tr className=" text-white">
                                <td className={"font-bold pr-2"}>Construction: </td>
                                <td>{construction}</td>
                            </tr>
                            <tr className=" text-white">
                                <td className={"font-bold pr-2"}>Amount of Posts: </td>
                                <td>{postsNumber}</td>
                            </tr>
                            <tr className=" text-white">
                                <td className={"font-bold pr-2"}>Amount of Covers: </td>
                                <td>{coversNumber}</td>
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
                <div className={"flex justify-center gap-8"}>
                    <div className={"text-center pb-8"}>
                        <button
                            className={"h-8 w-32 bg-gray-400 hover:bg-sky-300 text-white text-l font-bold rounded"}>
                            <Link to={`/`}>Cancel</Link>

                        </button>
                    </div>
                    <div className={"text-center pb-8"}>
                        <form onSubmit={createFence}>
                            <button
                                className={"h-8 w-32 bg-fuchsia-500 hover:bg-sky-300 text-white text-l font-bold rounded"}
                                type={"submit"}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Submit;