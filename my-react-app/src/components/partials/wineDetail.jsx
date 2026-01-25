import { useEffect, useState } from "react";
import "./wine.css"
import { useParams } from "react-router-dom";

const WineDetail = () => {
    const [wine, setWine] = useState([]);
    // If state changes, component rerenders.  
    // If rerender changes state then infinite loop occurs.

    const { id } = useParams();

    const getWine = async () => {
        const url = `https://api.sampleapis.com/wines/reds/${id}`;

        const response = await fetch(url, {
            "method": "GET",
            "header": {
                "content-type": "Application/json"
            }
        })

        // Backend => json data to string => FE => String data to json. 
        const result = await response.json();
        setWine(result); // Change in state which triggers rerender. 
        console.log("rerender");
    }
    //getWines(); Get wine, which chnages the state.

    //Solution : we shouldnot call the getWines 2nd time.
    useEffect(() => {
        getWine();
    }, [])
    //Dependency array
    // useEffect will run again when the variable inside dependency array will change.
    return (
        <>
            <h1 className="component-title">Wine detail: </h1>
            <div className="thumbnail">
                <img src={wine.image} alt={wine.wine} />
            </div>
            <div className="description">
                <h3>{wine.wine}</h3>
                <div className="meta">
                    <span>Location: </span>{wine.location}
                </div>
                <div className="meta">
                    <span>Rating Average: </span>{wine.rating?.average}
                </div>
                <div className="meta">
                    <span>Rating Reviews: </span>{wine.rating?.reviews}
                </div>
            </div>
        </>
    )
}

export default WineDetail;