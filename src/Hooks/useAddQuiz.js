import React from 'react'
import { useState } from 'react'

const useAddQuiz = (addQuizReducer, initAddQuiz) => {
    const [state, setState] = useState(initAddQuiz)

    function dispatch(action){
        const newState = addQuizReducer(state, action)
        setState(newState)

    }
    return [state, dispatch]
}

export default useAddQuiz
