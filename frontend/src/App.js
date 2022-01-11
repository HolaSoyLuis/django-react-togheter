import React, { useState } from "react";

const greet = () => {
    console.log("hi user :D");
    // console.log("hello world!");
}

const App = () => {

    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const handleInput = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submit :D");
        console.log(data);
    }

    return (
        <div>
            Hello world!
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-2">
                                <div className="col">
                                    <label className="form-label" htmlFor="username">Username:</label>
                                    <input type="text" id="username" name="username" placeholder="Enter your username" className="form-control" onChange={handleInput} />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <label className="form-label" htmlFor="userpassword">Password:</label>
                                    <input type="password" id="userpassword" name="userpassword" placeholder="Enter your password" className="form-control" onChange={handleInput} />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col text-center">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*
            <button className="btn btn-primary" onClick={greet}>Hi</button>
            */}
        </div>
    );
}

export default App;
