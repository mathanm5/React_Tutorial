import { useState } from "react"

function List(){
    const [list, setList] = useState([]);
    const [count, SetCount] = useState(1);

    function addItem(){
        const itemName = 'Item' + count;
        setList((previousState) => {return[...previousState, itemName]});
        SetCount((previousState)=>{return previousState+1})
    }
    return(
        <>
        <h1>My List</h1>
        <button onClick={addItem}>Add Item</button>
        <ul>
          { list.map((item,index)=> <li key={index}>{item}</li>)}
        </ul>
        </>
    )
}
export default List;