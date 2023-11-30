import { useRef } from "react";

export default function Form() {
    const id = useRef()
    const name = useRef()
    function handlerSubmit(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        const data = {
            id: Number(id.current.value),
            name: name.current.value,
        }
        console.log(data)
    }
    return (<form onSubmit={handlerSubmit}>
        <label htmlFor="id">Introduzca el id</label>
        <input ref={id} id="id"></input>
        <label htmlFor="name">Introduzca el nombre</label>
        <input ref={name} id="name"></input>
        <button type="submit">Enviar datos</button>
    </form>)
}