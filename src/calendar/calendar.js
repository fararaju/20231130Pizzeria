import styles from './Calendar.module.css'

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
function* getDays(){
    for(let i=0;i<31;i++){
        yield i+1
    }
}

export default function Calendar(){
    const days = [...getDays()]
    function handlerClick(ev){
        ev.stopPropagation();        
        const {nativeEvent} = ev;
        const node = nativeEvent.composedPath().find(n=>n.dataset && 'day' in n.dataset);
        if(node){
            const {day} = node.dataset;
            console.log(day)
        }
    }
    return(
        <>
            <div className={styles.calendar} onClick={handlerClick}>
                {days.map(d=><div data-day={d}  className={styles.day} key={d}>{d}</div>)}              
            </div>
        </>
    )
}