import Car from "./Car";
import Apple from "./Apple";

function Garage(){
    //const brand = 'Bentely';
    //const carInfo ={}
    const carInfo = {brand:"Ferrari", color:"Red"}
    const appleInfo = {type:"Fuji", color:"Green"}
    const showcar = carInfo.brand !== undefined && carInfo.color !== undefined
    return(
        <>
        {/*<Car brand={brand} color={'Black'}>*/}
        {showcar?<Car carInfo={carInfo}/>:null}
        <Apple appleInfo={appleInfo}/>
        </>
    );
}
export default Garage;