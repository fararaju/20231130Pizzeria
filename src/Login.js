
function renderUser(user){
    if(user){
        return <div>{user}</div>
    }
    return <button>Login</button>

    //si no tenemos else debemos de devolver siempre null
}
export default function Login(){
    let user = "Pedro"
    return(        
            <>
                <div>Hello World</div>
                {renderUser(user)}
            </>
            
    )
}