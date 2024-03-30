import { useState } from "react";
function FavoriteColor(){
    //let color='red';
    const [color, setColor] = useState('Red');

    return(
        <>
         <h1>My Favorite Color is {color}!</h1>
         <button onClick={()=>{setColor('Blue') }}>Change Color!</button>
        </>
     
    );
}
export default FavoriteColor;