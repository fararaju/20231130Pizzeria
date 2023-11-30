import Child from "./child"
import ChildObject from "./childobject"
export default function Parent(){
    const data = [1,2,3,4,5,6]
    const foo = {id:1,name:'curso react'}
    return (
        <>
            <div>Hello Parent</div>
            <Child data={[...data]}/>
            <ChildObject {...foo}>
                 <div>Html Child</div>   
            </ChildObject>

        </>
        
    )
}