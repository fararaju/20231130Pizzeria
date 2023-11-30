import { useEffect, useState } from "react";

function getTime(date) {
    let options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat('es-ES', options).format(date);
}

export function useTimer(initialValue){
    const [date,setDate] = useState(initialValue)
    useEffect(()=>{
        const interValId = setInterval(()=>setDate(new Date()),1000)
        return ()=>clearInterval(interValId)
    })
    return getTime(date)
}