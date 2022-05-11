import React, { useState} from 'react';
import CoversImages from "../imagesControllers/CoversImages";

import cover_0 from "../images/cover_00.png";
import cover_1 from "../images/cover_01.png";
import cover_2 from "../images/cover_02.png";
import cover_3 from "../images/cover_03.png";
import cover_4 from "../images/cover_04.png";
import cover_5 from "../images/cover_05.png";
import cover_6 from "../images/cover_06.png";
import previous from "../images/previous.png";
import next from "../images/next.png";

//Create an array of image files
const images = [cover_0, cover_1, cover_2, cover_3, cover_4, cover_5, cover_6];

const Covers = (props) => {
    //Lifted states from Customize parent component
    const {section, setSection} = props;
    const {covers, setCovers} = props;

    // //States for images
    const [imageCenter, setImageCenter] = useState(images[1]);
    const [imageNext, setImageNext] = useState(images[2]);
    const [imagePrevious, setImagePrevious] = useState(images[0]);

    const [centerIndex, setCenterIndex] = useState(1)
    const [nextIndex, setNextIndex] = useState(2)
    const [previousIndex, setPreviousIndex] = useState(0)

    //Selection Handler
    const selectionHandler = (event) => {
        event.preventDefault();
        setCovers(CoversImages[centerIndex].name)
        setSection(2);
    };


//Functions for the control of the images movement
    const nextImage = () => {
        if (centerIndex < images.length -2) {
            setImageCenter(images[centerIndex + 1]);
            setCenterIndex(centerIndex + 1);
        }
        if (nextIndex < images.length -1 ) {
            setImageNext(images[nextIndex + 1]);
            setNextIndex(nextIndex + 1);
        }
        if (previousIndex < 4 ) {
            setImagePrevious(images[previousIndex + 1])
            setPreviousIndex(previousIndex + 1);
        }
    }
    const previousImage = () => {
        if (centerIndex > 1 ) {
            setImageCenter(images[centerIndex - 1]);
            setCenterIndex(centerIndex - 1);
        }
        if (previousIndex > 0) {
            setImagePrevious(images[previousIndex - 1]);
            setPreviousIndex(previousIndex -1)
        }
        if ( nextIndex > 2) {
            setImageNext(images[nextIndex -1]);
            setNextIndex(nextIndex -1);
        }
    }

    // useEffect(() => {}, [])

    return (
        <div>
            <div className={"bg-sky-900"}>
                <div className=" pt-9 text-center">
                    <h1 className="text-2xl font-Oswald text-yellow-300 pl-4">Select the Covers</h1>
                    {/*<h1 className="text-2xl font-Oswald text-yellow-300 pl-4">{CoversImages[centerIndex].name}</h1>*/}

                </div>
                <div className="flex justify-center items-center my-12 gap-6">
                    <button onClick={previousImage}>
                        <img
                            className=" opacity-25 mx-6"
                            src={previous}
                            alt="Fence Main"
                            style={{width:"40%"}}/>
                    </button>
                    <img
                        className=" opacity-25"
                        src={imagePrevious}
                        alt="Fence Main"
                        style={{width:"16%"}}/>
                    <img
                        className=""
                        src={imageCenter}
                        alt="Fence Main"
                        style={{width:"30%"}}/>
                    <img
                        className=" opacity-25"
                        src={imageNext}
                        alt="Fence Main"
                        style={{width:"16%"}}/>
                    <button onClick={nextImage}>
                        <img
                            className=" opacity-25 mx-6"
                            src={next}
                            alt="Fence Main"
                            style={{width:"40%"}}/>
                    </button>

                </div>
                <div className={"text-white font-sans text-center pb-6"}>
                    <h3>{CoversImages[centerIndex].name}</h3>
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

export default Covers;