import  styles from './Timer.module.css'
import { useTimer } from "./useTimer";


export default function Timer(){
    const date = useTimer(new Date())
    return(
        <div className={styles.timer}>{date}</div>
    )
}