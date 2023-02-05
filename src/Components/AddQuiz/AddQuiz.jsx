import React, { useState } from 'react'
import { useEffect } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { addQuiz } from '../../api'
import ModalView from '../../Customs/ModalView'
import useAddQuiz from '../../Hooks/useAddQuiz'
import { Request_Add_Quiz } from '../../Types'

const initAddQuiz = {
  name : "",
  desription : "",
  price : "",
  duration : "",
  answerType : "",
  image : 'image'
}

const addQuizReducer = (state, action) => {
  switch (action.type) {
    case Request_Add_Quiz : 
    return {
      ...state,
      [action.payload.name]: action.payload.value
    }
    default :
    return state
  }

}

const AddQuiz = () => {
  const [quizinformation, dispatch] = useAddQuiz(addQuizReducer, initAddQuiz)
  const {name, description, price, duration, answerType, image} = quizinformation
  const [addimg, setImage] = useState()
  const navigate = useNavigate()

  function onInputChange(e){
    const {name, value} = e.target
    dispatch({
      type: Request_Add_Quiz,
      payload : {name, value}
    })
  }

  useEffect(() => {
    addQuiz().then((data) => {
      console.log(data)
      dispatch({
        type : Request_Add_Quiz,
        payload : data.data
      })
    })
  })

  function quizImageUpload(e){
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0])
  }

  function onSubmitQuiz(e){
    e.preventDefault()
    navigate('/')
    sessionStorage.setItem('state', JSON.stringify({...initAddQuiz}))
  }

    return (
        <>
        <ModalView>
            <div>
              <form>
                <label htmlFor="text">A Short Name!</label>
                <input type="text" />
              </form>
            <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="text">A Short Name!</Form.Label>
              <Form.Control
                autoFocus
                id="name"
                type="text"
                placeholder="What is the type or name of quiz"
                value={name}
                name="name"
                onChange={onInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="text">A Short Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                autoFocus
                placeholder="What would be quiz's best description, describe a short description and key point"
                value={description}
                onChange={onInputChange}
                id="description"
                as="textarea"
                rows={2}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="text">How much Cost?</Form.Label>
              <Form.Control
                id="price"
                type="text"
                placeholder="How much cost you will define for quiz. e.g: paid, free, 0.0"
                value={price}
                name="price"
                onChange={onInputChange}
                autoFocus
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="text">
                What would be the Quiz time duration?
              </Form.Label>
              <Form.Control
                as="select"
                id="duration"
                type="text"
                name="duration"
                value={duration}
                onChange={onInputChange}
                required
              >
                <option value="">Choose Quiz Duration</option>
                <option value="quiz_based">Quiz Based</option>
                <option value="question_based">Question Based</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="text">
                What would be the quiz answer showing option?
              </Form.Label>
              <Form.Control
                as="select"
                id="answerType"
                type="text"
                name="answerType"
                value={answerType}
                onChange={onInputChange}
                required
              >
                <option value="">Choose Quiz Answer Option</option>
                <option value="quiz_based">Quiz Based</option>
                <option value="question_based">Question Based</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="text">
                What would be the quiz answer showing option?
              </Form.Label>
              <Form.Control
                type="file"
                required
                name="image"
                accept="image/*"
                onChange={quizImageUpload}
              />
            </Form.Group>
            <button className='bg-cyan-500 px-5 py-4 text-white text-[16px] font-[poppins]'  type='submit' onClick={onSubmitQuiz}>Submit Quiz</button>
          </Form>
            </div>
        </ModalView>
            
        </>
    )
}

export default AddQuiz

