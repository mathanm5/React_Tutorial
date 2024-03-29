import Car from "./Car";
import Apple from "./Apple";

function Garage(){
    //const brand = 'Bentely';
    //const carInfo ={}
    const carInfo = {brand:"Ferrari", color:"Red"}
    const appleInfo = {type:"Fuji", color:"Green"}
    const carList = [{brand:"BMW", color:"Green"},
                    {brand:"Audi", color:"yellow"},
                    {brand:"Mercedes", color:"White"},];

    const NumList =[1,2,3,3,4,5,6,7,7,8,9,10];
    const showcar = carInfo.brand !== undefined && carInfo.color !== undefined
    return(
        <>
        {/*<Car brand={brand} color={'Black'}>*/}
        {showcar?<Car carInfo={carInfo}/>:null}
        <Apple appleInfo={appleInfo}/>
        <ul>
            {carList.map((carInfo)=> <li key={carInfo.brand}><Car carInfo={carInfo}/></li>)}
        </ul>
        <ul>
            {NumList.map((e,index)=><li key={index}>{e}</li>)}
        </ul>
        </>
    );
}
export default Garage;