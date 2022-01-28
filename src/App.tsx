import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Display} from "./Display";

function App() {
    let [count, setCount] = useState(0);

    let [valueInputMax,setValueInputMax]=useState(0);
    let [valueInputStart,setValueInputStart]=useState(0);

    //---useEffect--valueInputMax-///
    useEffect(()=> {
        let valueString = localStorage.getItem('valueMax');
        if (valueString) {
            let newValueMax = JSON.parse(valueString);
            setValueInputMax(newValueMax)
        }
    },[]);
    useEffect(()=>{
        localStorage.setItem('valueMax',JSON.stringify(valueInputMax))
    },[valueInputMax]);

    //---useEffect--valueInputStart-///

    useEffect(()=> {
        let valueString = localStorage.getItem('valueMin');
        if (valueString) {
            let newValueMin = JSON.parse(valueString);
            setValueInputStart(newValueMin)
        }
    },[]);
    useEffect(()=>{
        localStorage.setItem('valueMin',JSON.stringify(valueInputStart))
    },[valueInputStart]);

    //---count---///
    useEffect(()=> {
        let valueString = localStorage.getItem('count');
        if (valueString) {
            let newCount = JSON.parse(valueString);
            setCount(newCount)
        }
    },[]);
    useEffect(()=>{
        localStorage.setItem('count',JSON.stringify(count))
    },[valueInputStart]);

    //------///

    const onChangeHandlerMax=(event:ChangeEvent<HTMLInputElement>)=>{
        setValueInputMax(+event.currentTarget.value);

    }
    const onChangeHandlerStart=(event:ChangeEvent<HTMLInputElement>)=>{
        setValueInputStart(+event.currentTarget.value);

    }


    let btn_inc=()=> count < valueInputMax ? setCount(count + 1): count;
    let btn_reset=()=> count>valueInputStart ?  setCount( count=valueInputStart): count;

const disabledInc= count===valueInputMax;
    const disabledReset= count===0;




    const setButton=()=>setCount(valueInputStart);


    return (
        <div className="app_wrapper">
        <div className="App one">
            <div className="display_wrapper">
                <div className="max"> max value: <input className={valueInputMax<=valueInputStart ? 'red' : ' '} type='number' onChange={onChangeHandlerMax}   value={valueInputMax}/></div>
                <div className="start"> start value: <input className={valueInputStart<0 || valueInputStart >= valueInputMax ? 'red': ' '} type='number' onChange={onChangeHandlerStart} value={valueInputStart}/></div>

            </div>
            <div className="btn_wrapper_one">
                <Button name='set' callback={setButton} disabled={disabledInc}/>
            </div>
        </div>
            <div className="App two">
                <div className="display_wrapper">
                    <Display count={count} valueInputMax={valueInputMax} valueInputStart={valueInputStart}/>
                </div>
                <div className="btn_wrapper">
                    <Button name='inc' callback={btn_inc} disabled={disabledInc}/>
                    <Button name='reset' callback={btn_reset} disabled={disabledReset}/>
                </div>
            </div>
        </div>
    )
}

export default App;
