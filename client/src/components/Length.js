import React, {useState} from 'react';

const Length = (props) => {

    //Lifted states from Customize parent component
    const {section, setSection} = props;
    const {length, setLength} = props;
    const [error, setError] = useState(false);

    const selectionHandler = (event) => {

        console.log(length)
        if (length > 5) {
            event.preventDefault();
            setLength(length);
            setSection(1);
        } else {
            event.preventDefault();
            setError(true);
            // console.log("NO NO NO NO")
        }

    };

    return (
        <div>
            <div className={"bg-sky-900"}>
                <div className=" pt-9 text-center">
                    <h1 className="text-2xl font-Oswald text-yellow-300 pl-4">What is the length of your project?</h1>
                    <form onSubmit={selectionHandler} className="rounded mx-4 py2">
                        <div className=" flex justify-center items-center gap-2">
                            <input
                                onChange={(event) => {setLength(event.target.value)}}
                                type="number"
                                className={"my-6 rounded w-16 text-center"}
                            />
                            <h1 className="text-xl font-Oswald text-yellow-300">ft</h1>
                        </div>
                            <h1 className="text-l font-Oswald text-red-500" style={{display: error ? "block" : "none"}}>Length should be more than 6 ft</h1>
                        <button
                            className={"h-8 w-32 bg-fuchsia-500 hover:bg-sky-300 text-white text-l font-bold rounded my-6"}
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

export default Length;