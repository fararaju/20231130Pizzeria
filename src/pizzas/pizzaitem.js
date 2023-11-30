export default function PizzaItem({id,name}){
    return(
        <>
            <div>{id}</div>
            <div>{name}</div>
            <button data-id={id}>Agregar al carrito</button>
        </>
    )
}