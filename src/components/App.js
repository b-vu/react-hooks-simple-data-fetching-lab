// create your App component here
import {React, useState, useEffect} from "react";

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [dogPic, setDogPic] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setDogPic(data.message);
            setIsLoaded(isLoaded => !isLoaded);
        });
    }, []);

    return(
        <div>
            {
                isLoaded ? <img src={dogPic} alt="A Random Dog"></img>
                : <p>Loading...</p>
            }
        </div>
    )
}

export default App;