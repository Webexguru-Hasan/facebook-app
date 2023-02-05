import React from 'react'
import { useState } from 'react'

const useQuizess = (QuizessReducer, initQuizzes) => {
    const [state, setState] = useState(initQuizzes)

    function dispatch(action){
        const newState = QuizessReducer(state, action)
        setState(newState)
    }

    return [state, dispatch]

}

export default useQuizess
