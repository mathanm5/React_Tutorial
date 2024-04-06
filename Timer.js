const { useEffect, useState } = require("react")

function Timer(){
    const [count, setCount] = useState(1)

    useEffect(()=>{
            console.log("screen rendered")
            checkCount()
    },[count])
    
    function checkCount(){
         if(count > 10){
            setCount(0)
         }
    }
   
    function updateCount(){
        setCount((previousState)=>{
            return previousState+1
        })
    }
    return <>
    <h1> I have Rendered this page is {count} times !</h1>
    <button onClick={updateCount}>Increase Count!</button>
    </>
}
export default Timer