import { useEffect, useState } from "react";
import "./wine.css"

const Coffee = () => {
    const [coffees, setCoffees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // If state changes, component rerenders.  
    // If rerender changes state then infinite loop occurs.

    const getCoffees = async () => {
        const url = "https://api.sampleapis.com/coffee/hot";

        const response = await fetch(url, {
            "method": "GET",
            "header": {
                "content-type": "Application/json"
            }
        })

        // Backend => json data to string => FE => String data to json. 
        const result = await response.json();
        setCoffees(result) // Change in state which triggers rerender. 
        setIsLoading(false)
        console.log("rerender");
    }
    //getWines(); Get wine, which chnages the state.

    //Solution : we shouldnot call the getWines 2nd time.
    useEffect(() => {
        getCoffees();
    }, [])
    //Dependency array
    // useEffect will run again when the variable inside dependency array will change.
    return (
        <>
            <h1 className="component-title">List of coffees: </h1>
            <div className="list">
               {isLoading && <div className="loader"></div>}
                {coffees && coffees.length > 0 && coffees.map((coffee, index) => (
                    <div className="list-item" key={index}>
                        <div className="thumbnail">
                            <img src={coffee.image} alt={coffee.title} />
                        </div>
                        <div className="decription">
                            <h3>{coffee.title}</h3>
                            <div className="meta">
                                <span>Description: </span>{coffee.description}
                            </div>
                            <div className="meta">
                                <span>Ingredients: </span>
                                {coffee.ingredients && coffee?.ingredients.length > 0 && typeof coffee.ingredients != "string" &&
                                    coffee.ingredients.map((ingredient, index) => (
                                        <span key={index}>
                                            {ingredient}
                                        </span>
                                    )
                                    )}
                                <div className="meta">
                                    <span>Coffee ID: </span>{coffee.id}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}

export default Coffee;