import { useState } from "react";

export default function Counter(){
    //desectruturing array
    const [count,setCount] = useState(0)
    
    function handlerClick(ev){
        ev.stopPropagation();
        setCount(count+1);
    }
    return(
        <>
            <div>{count}</div>
            <button onClick={handlerClick}>add</button>
        </>
    )
}