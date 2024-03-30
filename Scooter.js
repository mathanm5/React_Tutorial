import { useState } from "react"

function Scooter(){
    const [scooter, Setscooter] = useState(
        {
            brand:"Honda",
            color:"Red",
            model:"Activa-6G",
            year:"2020",
        }
    );

    function UpdateScooter(){
        Setscooter(previousState =>{
            return{...previousState, color:"Blue", model:"Bravo-7K"} // spread operator(...)
        })
    }
    return(
        <>
          <h1>My Scooter</h1>
          <p>Color:{scooter.color}</p>
          <p>Brand:{scooter.brand}</p>
          <p>Model:{scooter.model}</p>
          <p>Year:{scooter.year}</p>
          <button onClick={UpdateScooter}>Change color</button>

        </>
    )
}
export default Scooter;