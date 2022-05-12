import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

import TopNav from "../components/TopNav";
import BottomBar from "../components/BottomBar";
import Covers from "../components/Covers";
import Length from "../components/Length";
import Finish from "../components/Finish";
import Construction from "../components/Construction";
import Submit from "../components/Submit";
import Name from "../components/Name";

const Customize = (props) => {
    //Parent states
    const [section, setSection] = useState(0);
    const [covers, setCovers] = useState("");
    const [length, setLength] = useState("");
    const [finish, setFinish] = useState("")
    const [construction, setConstruction] = useState("")
    const [name, setName] = useState("");

    const {allFences, setAllFences} = props;

    useEffect (() => {
        // console.log(section)
    }, [section])

    return (
        <div>
            <div>
                <TopNav/>
            </div>
            <div style={{display: section === 0 ? "block" : "none"}}>
                <Length
                    length = {length}
                    setLength = {setLength}
                    section = {section}
                    setSection = {setSection}
                />
            </div>
            <div style={{display: section === 1 ? "block" : "none"}}>
                <Covers
                    covers = {covers}
                    setCovers = {setCovers}
                    section = {section}
                    setSection = {setSection}
                />
            </div >
            <div style={{display: section === 2 ? "block" : "none"}}>
                <Finish
                    finish = {finish}
                    setFinish = {setFinish}
                    section = {section}
                    setSection = {setSection}
                />
            </div >
            <div style={{display: section === 3 ? "block" : "none"}}>
                <Construction
                    construction = {construction}
                    setConstruction = {setConstruction}
                    section = {section}
                    setSection = {setSection}
                />
            </div >
            <div style={{display: section === 4 ? "block" : "none"}}>
                <Name
                    name = {name}
                    setName = {setName}
                    section = {section}
                    setSection = {setSection}
                />
            </div >
            <div style={{display: section === 5 ? "block" : "none"}}>
                <Submit
                    section = {section}
                    setSection = {setSection}
                    section = {section}
                    covers = {covers}
                    length = {length}
                    finish = {finish}
                    construction = {construction}
                    allFences = {allFences}
                    setAllFences = {setAllFences}
                    name = {name}
                />
            </div >

            <div>
                <BottomBar/>
            </div>
            {/*<h1>Covers: {covers}</h1>*/}
            {/*<h1>Length: {length}</h1>*/}
            {/*<h1>Section: {section}</h1>*/}
            {/*<h1>Finish: {finish}</h1>*/}
            {/*<h1>Construction: {construction}</h1>*/}
            {/*<h1>Name: {name}</h1>*/}
        </div>
    )
}

export default Customize;