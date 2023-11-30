export default function ChildObject({id,name,children}){
    //const {id,name,children} = props;
    return (<>
        <div>{id}</div>
        <div>{name}</div>
        {children}        
    </>)
}