import React from 'react';
import {Link} from "react-router-dom";

import TopNav from "../components/TopNav";
import BottomBar from "../components/BottomBar";
import Covers from "../components/Covers";
import Length from "../components/Length";

const Customize = () => {
    return (
        <div>
            <div>
                <TopNav/>
            </div>
                <Covers/>
                <Length/>
            <div>
                <BottomBar/>
            </div>
        </div>
    )
}

export default Customize;