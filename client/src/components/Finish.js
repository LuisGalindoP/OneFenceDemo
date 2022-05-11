import React, {useState} from 'react';
import FinishImages from "../imagesControllers/FinishImages";

import finish_0 from "../images/finish_00.png";
import finish_1 from "../images/finish_01.png";
import finish_2 from "../images/finish_02.png";
import finish_3 from "../images/finish_03.png";
import finish_4 from "../images/finish_04.png";
import finish_5 from "../images/finish_05.png";
import finish_6 from "../images/finish_06.png";

//Create an array of image files
const images = [finish_0, finish_1, finish_2, finish_3, finish_4, finish_5, finish_6];


const Finish = (props) => {
    //Lifted states from Customize parent component
    const {section, setSection} = props;
    const {finish, setFinish} = props;


    const selectionHandler = (event) => {
        event.preventDefault();
        setFinish("Black matte")
        setSection(3);
    };

    return (
        <div>
            <div className={"bg-sky-900"}>
                <div className=" pt-9 text-center">
                    <h1 className="text-2xl font-Oswald text-yellow-300 pl-4">Select a finish for your covers</h1>
                    <h1 className="text-2xl font-Oswald text-yellow-300 pl-4">{finish}</h1>
                    <h1 className="text-2xl font-Oswald text-yellow-300 pl-4">{section}</h1>
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
                    <form onSubmit={selectionHandler}>

                        <button
                            className={"h-8 w-32 bg-fuchsia-500 hover:bg-sky-300 text-white text-l font-bold rounded"}
                            type={"submit"}
                        >
                            Select this
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Finish;