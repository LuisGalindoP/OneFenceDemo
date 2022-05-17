import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";

import TopNav from "../components/TopNav";
import BottomBar from "../components/BottomBar";
import Covers from "../components/Covers";
import Length from "../components/Length";
import Finish from "../components/Finish";
import Construction from "../components/Construction";
import Submit from "../components/Submit";
import Name from "../components/Name";
import axios from "axios";

const Customize = (props) => {
    //Parent states
    const [section, setSection] = useState(0);
    const [covers, setCovers] = useState("");
    const [length, setLength] = useState("");
    const [finish, setFinish] = useState("")
    const [construction, setConstruction] = useState("")
    const [name, setName] = useState("");
    const [updatedFence, setUpdatedFence] = useState({})

    const {allFences, setAllFences} = props;
    const {id} = useParams();
    const {idUpdate, setIdUpdate} = props;

    useEffect (() => {
        if (idUpdate) {
            axios.get(`http://localhost:8000/fence/${idUpdate}`)
                .then((res) => {
                    console.log(res.data);
                    // setIdUpdate(id);
                    setLength(res.data.length);
                    setCovers(res.data.covers);
                    setFinish(res.data.finish);
                    setConstruction(res.data.construction)
                    setName(res.data.name);
                    setUpdatedFence(res.data);

                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [id])



    return (
        <div>
            <div>
                <TopNav/>
            </div>
            <div style={{display: section === 0 ? "block" : "none"}}>
                <Length
                    idUpdate = {idUpdate}
                    updatedFence = {updatedFence}
                    length = {length}
                    setLength = {setLength}
                    section = {section}
                    setSection = {setSection}
                    id = {id}
                />
            </div>
            <div style={{display: section === 1 ? "block" : "none"}}>
                <Covers
                    idUpdate = {idUpdate}
                    covers = {covers}
                    setCovers = {setCovers}
                    section = {section}
                    setSection = {setSection}
                    id = {id}
                />
            </div >
            <div style={{display: section === 2 ? "block" : "none"}}>
                <Finish
                    idUpdate = {idUpdate}
                    finish = {finish}
                    setFinish = {setFinish}
                    section = {section}
                    setSection = {setSection}
                    id = {id}
                />
            </div >
            <div style={{display: section === 3 ? "block" : "none"}}>
                <Construction
                    idUpdate = {idUpdate}
                    construction = {construction}
                    setConstruction = {setConstruction}
                    section = {section}
                    setSection = {setSection}
                    id = {id}
                />
            </div >
            <div style={{display: section === 4 ? "block" : "none"}}>
                <Name
                    idUpdate = {idUpdate}
                    name = {name}
                    setName = {setName}
                    section = {section}
                    setSection = {setSection}
                    id = {id}
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
                    id = {id}
                    idUpdate = {idUpdate}
                />
            </div >

            <div>
                <BottomBar/>
            </div>
        </div>
    )
}

export default Customize;