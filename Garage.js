import Car from "./Car";

function Garage(){
    //const brand = 'Bentely';
    const carInfo = {brand:"Ferrari", color:"Red"}
    return(
        <>
        {/*<Car brand={brand} color={'Black'}>*/}
        <Car carInfo={carInfo}/>
        </>
    );
}
export default Garage;