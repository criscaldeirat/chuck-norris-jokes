import React, { useEffect, useState } from "react";


export default function RandomJoke() {
    const [jokes, setJokes] = useState([]);

    const FetchJokes = async() => {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        setJokes(data);
    }

    useEffect(() => {
        FetchJokes();
    },[]);

    return (
        <div className="App-body">
            <button className="btn-random" onClick={ FetchJokes }> Click here to get a new joke! </button>
            <p className="jokesBoard">{ jokes.value }</p>
        </div>
    );

} 