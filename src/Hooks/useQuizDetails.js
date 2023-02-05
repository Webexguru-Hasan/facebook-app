import React from 'react'
import { useState } from 'react'

const useQuizDetails = (detailsReducer, initDetails) => {
    const [state, setState] = useState(initDetails)

    function dispatch(action){
        const newState = detailsReducer(state, action)
        setState(newState)
    }
    return [state, dispatch]
}

export default useQuizDetails
