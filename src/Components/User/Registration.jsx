import React from 'react'
import { useReducer } from 'react'
import { Link } from 'react-router-dom'
import ModalView from '../../Customs/ModalView'
import { registerUser } from '../../api'
import { registerState } from '../../Types'

const initState = {
  name : "",
  email : "",
  password : ""
}


const registerReducer = (state, action) => {
  switch (action.type){
    case registerState : 
    return {
      ...state,
      [action.payload.name] : action.payload.value
    }
    default : 
    return state
      
  }
}

const Registration = () => {

  const [registerInfo, dispatch] = useReducer(registerReducer, initState)
  
  function handleOnSubmit(e){
    e.preventDefault()
    dispatch(registerUser(registerInfo))
  }

  function onInputChange(e){
    const {name, value} = e.target
    dispatch({ type : registerState, payload : {name, value}})
  }
  return (
    <>
    <ModalView>
      <form onSubmit={handleOnSubmit}>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0 ">
            Register an account
          </p>
        </div>

        <div className="mb-6">
          <input
            type="name"
            name="name"
            required
            onChange={onInputChange}
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="what's your name?"
          />
        </div>

        <div className="mb-6">
          <input
            type="email"
            name="email"
            required
            onChange={onInputChange}
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Enter your unique email"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            name="password"
            required
            onChange={onInputChange}
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Enter strong password"
          />
        </div>

        <div className="text-center lg:text-left  ">
          <button className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Register
          </button>
          <p className="text-sm font-semibold mt-2 pt-1 mb-0">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </ModalView>
  </>
  )
}

export default Registration
