
import './App.css';
import { useState } from 'react';
import QuizCard from './QuizCard';
import shuffle from './utils';
import GameOver from './GameOver';

//API
//https://opentdb.com/api_config.php
//https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple
const App=()=>{

  const [quizzes, setQuizzes]=useState(null)
  const [startGame,setStartGame]=useState(false)
  const [selectedQuestion, setSelectedQuestion]=useState(null)
  const [loading, setLoading]=useState(false)
  const [selectedQuestionIndex, setSelectedQuestionIndex]=useState(0)
  const [endGame,setEndGame]=useState(false)
  const [seletedAnswer, setSeletedAnswer]=useState(null)
  const [correctAnswer, setCorrectAnswer]=useState(null)
  const [gameScore, setGameScore]=useState(0)

  const startQuiz= async () =>{
     const res = await fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple')
     const {results}=await res.json()
     setQuizzes(results)
     setStartGame(true)
     setSelectedQuestion({question: results[0].question, answers:shuffle(results[0])})
     setCorrectAnswer(results[0].correct_answer)
     setLoading(true)
    
     console.log(results)
  }

  const nvigateNextQuiz=()=>{
    
    const isLastQuestion=quizzes.length - 1 === selectedQuestionIndex
    if(isLastQuestion){
         
      setEndGame(true)

    }else{
      const currentIndex=selectedQuestionIndex+1
      setSelectedQuestionIndex(currentIndex)
    
      setSelectedQuestion({question: quizzes[currentIndex].question, answers:shuffle(quizzes[currentIndex])})
      setCorrectAnswer( quizzes[currentIndex].correct_answer)
      setSeletedAnswer(null)
    }

  
  }

  const seletAnswer=(answer)=>{

    setSeletedAnswer(answer)

    if(answer === correctAnswer){
      setGameScore((prevScore)=>prevScore+1)
    }

  }

  const resetQuiz=()=>{
    setQuizzes(null)
    setSelectedQuestion(null)
    setSelectedQuestion(0)
    setStartGame(false)
    setLoading(false)
    setEndGame(false)
    setGameScore(0)

  }




 console.log(correctAnswer)
  return(
    <div>
      {endGame && <GameOver resetQuiz={resetQuiz} gameScore={gameScore}/> }

      {startGame && loading && !endGame &&(<QuizCard selectedQuestion={selectedQuestion} quizzes={quizzes} selectedQuestionIndex={selectedQuestionIndex}  nvigateNextQuiz={nvigateNextQuiz} seletAnswer={seletAnswer} seletedAnswer={seletedAnswer} correctAnswer={correctAnswer}/>)}
     
      {!startGame &&  <button onClick={startQuiz}>Start Quiz</button>}
    
    </div>
  )

}

export default App;
