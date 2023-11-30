export default function Child({data}){    
    return (
        <>
           {data.map(v=><div key={v}>{v}</div>)}
        </>
    )
}