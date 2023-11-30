
import { useContext } from "react";
import PizzaItem from "./pizzaitem"
import  { PizzaContext } from "../signal/carritocontext";

function createEvent(pizza){
    const event = new CustomEvent("carrito",{
        bubbles:true,
        cancelable:true,
        composed:true,
        detail:pizza
    })
    return event;
}

export default function Pizzas(){   
    const pizzaContext = useContext(PizzaContext) 
    const pizzas = [
        {id:1,name:'carbonara'},
        {id:2,name:'4 quesos'}
      ]
    function getPizza(id){
        return pizzas.find(p=>p.id===id)
    }
    function handlerClick(ev){
        ev.stopPropagation();
        const node = ev.nativeEvent.composedPath().find(n=>n.dataset && 'id' in n.dataset )
        if(node){            
            const {id} = node.dataset
            const pizza = getPizza(Number(id))            
            //node.dispatchEvent(createEvent({...pizza}))   
                 
            pizzaContext.set({...pizza})

        }
    }
    return (<div  onClick={handlerClick}>
        {pizzas.map(p=><PizzaItem key={p.id} {...p}/>)}
    </div>)
}