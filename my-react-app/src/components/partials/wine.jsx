import { useEffect, useState } from "react";
import "./wine.css"
import { Link } from "react-router-dom";

const Wine = () => {
    const [wines, setWines] = useState([]);
    // If state changes, component rerenders.  
    // If rerender changes state then infinite loop occurs.

    const getWines = async () => {
        const url = "https://api.sampleapis.com/wines/reds";

        const response = await fetch(url, {
            "method": "GET",
            "header": {
                "content-type": "Application/json"
            }
        })

        // Backend => json data to string => FE => String data to json. 
        const result = await response.json();
        setWines(result); // Change in state which triggers rerender. 
        console.log("rerender");
    }
    //getWines(); Get wine, which chnages the state.

    //Solution : we shouldnot call the getWines 2nd time.
    useEffect(() => {
        getWines();
    }, [])
    //Dependency array
    // useEffect will run again when the variable inside dependency array will change.
    return (
        <>
            <h1 className="component-title">List of wines: </h1>
            <div className="list">
                {wines && wines.length > 0 && wines.map((wine, index) => (
                    <div className="list-item" key={index}>
                        <Link to= {`/wine/${wine.id}`}>
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
                        </Link>
                    </div>
                ))}
            </div >
        </>
    )
}

export default Wine;