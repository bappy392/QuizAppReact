

const GameOver=({resetQuiz,gameScore})=>{

    return(

      <div onClick={resetQuiz}>Total Score  {gameScore} GameOver <button>Reset Quiz</button></div>
 
    )

}

export default GameOver