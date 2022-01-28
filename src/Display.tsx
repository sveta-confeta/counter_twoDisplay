import React, {useState} from 'react';
import s from './Display.module.css'

type DisplayPropsType={
    count:number
    valueInputMax:number
    valueInputStart:number

}

export const Display=(props:DisplayPropsType)=>{
     let [error,setError] =useState(true);

    // let errorValue= error ? <div className={s.errorMessage}>Incorrect value!</div> : props.count;
    return(
        <div className={s.displayWrapper}>
            {(props.valueInputMax <= props.valueInputStart || props.valueInputStart < 0) ?
                <div className={s.errorMessage}>Incorrect value</div> :
                <div className={props.count ===props.valueInputMax ? s.red_count : s.count_wrapper}>{props.count}</div>}
        </div>
    )
}