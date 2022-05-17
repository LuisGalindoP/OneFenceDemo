import React, {useState} from 'react';

const Name = (props) => {
    //Lifted states from Customize parent component
    const {section, setSection} = props;
    const {name, setName} = props;
    const [error, setError] = useState(false);

    const selectionHandler = (event) => {
        console.log(name)
        if (name.length > 2) {
        event.preventDefault();
        setName(name)
        setSection(5);
        } else {
            event.preventDefault();
            setError(true);
            console.log("Add more letters mate")
        }
    };

    return (
        <div>
            <div className={"bg-sky-900"}>
                <div className=" pt-9 text-center">
                    <h1 className="text-2xl font-Oswald text-yellow-300 pl-4">Add a name for your design</h1>
                </div>
                <div className={"text-center pb-8"}>
                    <form onSubmit={selectionHandler}>
                        <div className="mb-3">
                            <input
                                onChange={(event) => {setName(event.target.value)}}
                                type="text"
                                value={name}
                                className={"my-6 rounded w-64 text-center"}
                            />
                            <h1 className="text-l font-Oswald text-red-500"
                                style={{display: error ? "block" : "none"}}>
                                Name should be at least 3 characters long
                            </h1>
                        </div>
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

export default Name;