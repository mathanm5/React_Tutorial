import Car from "./Car";
import Apple from "./Apple";

function Garage(){
    //const brand = 'Bentely';
    const carInfo = {brand:"Ferrari", color:"Red"}
    const appleInfo = {type:"Fuji", color:"Green"}
    return(
        <>
        {/*<Car brand={brand} color={'Black'}>*/}
        <Car carInfo={carInfo}/>
        <Apple appleInfo={appleInfo}/>
        </>
    );
}
export default Garage;