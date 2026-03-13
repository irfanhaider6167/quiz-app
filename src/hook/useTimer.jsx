import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../quizContext/quizcontext';

const useTimer = (second) => {
    const {state,dispatch}=useContext(QuizContext)
    const [time, setTime]=useState(second);
    useEffect(()=>{
        if(time == 0){
      dispatch({type:"ANSWER", score: state.score})
      setTime(second)
    }
        const interval= setInterval(()=>{
            setTime((prev)=>prev-1)
        },1000)
        return ()=> clearInterval(interval)
    },[time])
  return {time, reset: ()=> setTime(second)}
}

export default useTimer