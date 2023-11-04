import React from 'react'
import questions from './QuizData'

function QuizzResult(props) {
  return (
    <div className='score-section'>
        <h2>Completed!</h2>
        <h4>Total Score {props.score}/20</h4>
        <h4>Your correct Question {props.correctAns} out of {questions.length}</h4>
        <button onClick={props.handleTryAgain} style={{width:'150px'}} className='btn btn-light'>Try Again</button>
    </div>
  )
}

export default QuizzResult