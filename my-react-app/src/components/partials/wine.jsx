import { useEffect, useState } from "react";
import "./wine.css"

const Wine = () => {
    const [wines, setWines] = useState([]);

    const getWines = async () => {
        const url = "https://api.sampleapis.com/wines/reds";

        const response = await fetch(url, {
            "method": "GET",
            "header": {
                "content-type": "Application/json"
            }
        })
        const result = await response.json();
        setWines(result);
        console.log("rerender");
    }
    //getWines(); Get wine, which chnages the state.

    //Solution : we shouldnot call the getWines 2nd time.
    useEffect(() => {
        getWines();
    }, [])
    //Dependency array

    return (
        <>
            <h1 className="component-title">List of wines: </h1>
            <div className="list">
                {wines && wines.length > 0 && wines.map((wine, index) => (
                    <div className="list-item" key={index}>
                        <div className="thumbnail">
                            <img src={wine.image} alt={wine.wine} />
                        </div>
                        <div className="decription">
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
                    </div>
                ))}
            </div >
        </>
    )
}

export default Wine;