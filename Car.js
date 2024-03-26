function Car(props){
   // const {brand,color} = props
    //const text = `Hi , I'm a ${brand} Car in ${color} color`
    const {carInfo} = props
    const {brand,color}=carInfo
    const text = `Hi , I'm a ${brand} Car in ${color} color`
    return(
         <>
         <h1>{text}</h1>
         </>
    );
}
export default Car;