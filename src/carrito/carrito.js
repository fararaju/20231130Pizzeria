import { useContext, useEffect, useState } from "react";
import { PizzaContext } from "../signal/carritocontext";

export default function Carrito(){
    const signal = useContext(PizzaContext);
    const [pizzas,setPizzas] = useState([])
    const handler = (ev)=>{
        ev.stopPropagation();
        pizzas.push(ev.detail)
        setPizzas([...pizzas])
        console.log(pizzas)
    }
    useEffect(()=>{        
        //window.addEventListener('carrito', handler, false) 
        //return ()=>window.removeEventListener('carrito', handler ,false)  

        const dispose = signal.on((p)=>{
            pizzas.push(p)
            setPizzas([...pizzas])
        })
        return ()=>dispose();
    })
    return (
        <div>Carrito :  {pizzas.length}</div>
    )

}