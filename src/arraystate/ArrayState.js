import { useState } from "react";
//https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

export default function ArrayState(){
    const [array,setArray] = useState([])
    function handlerClick(ev){
        ev.stopPropagation();
        array.push(array.length +1)                
        setArray([...array]) //clonar el array
    }
    return(
        <>
            <button onClick={handlerClick}>Add elements</button>
            {array.map(v=><div key={v}>{v}</div>)}            
        </>
        
    )
}