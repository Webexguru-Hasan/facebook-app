import React from 'react'
import { useEffect } from 'react'
import { getQuizzes } from '../api'
import Quiz from '../Components/Quiz/Quiz'
import useQuizess from '../Hooks/useQuizess'
import { Request_Qizzes } from '../Types'

const initQuizes = {
    allQuizess : []
}


const QuizessReducer = (state, action) => {
    switch (action.type) {
        case Request_Qizzes : 
        return {
            ...state,
            allQuizess : action.payload
        }
        default :
        return state
    }
}

const Quizzes = () => {
    const [quizzes, dispatch] = useQuizess(QuizessReducer, initQuizes)

    useEffect(() => {
        getQuizzes().then((data) => {
            dispatch({
                type: Request_Qizzes,
                payload : data.data
            })
        })

    }, )
    
    return (
        <>
      <div className="">
        <div className="justify-self-center">
          <h1 className="font-bold text-2xl text-center m-2">
            Prepare By Topics
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 mt-3 md:ml-3">
          {quizzes.allQuizess.map((quiz) => (
            
            <Quiz key={quiz._id} quiz={quiz} />
          ))}
        </div>
      </div>
    </>
    )
}

export default Quizzes

