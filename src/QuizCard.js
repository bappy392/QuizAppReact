import AnswerCard from "./AnswerCard"


const QuizCard=({selectedQuestion,nvigateNextQuiz,seletAnswer,seletedAnswer,correctAnswer,quizzes,selectedQuestionIndex})=>{
    console.log(selectedQuestion)
    const {question,answers}=selectedQuestion

    const nvigateNext=()=>{
        nvigateNextQuiz()
    }

    return(
        <div> 
            <p>
                Question: {selectedQuestionIndex+1}/{quizzes.length}
            </p>
           <h2>{question}</h2>
           {/* <p>{answers}</p> */}
           {answers.map((answer,i)=><AnswerCard key={i} answer={answer} seletAnswer={seletAnswer} seletedAnswer={seletedAnswer} correctAnswer={correctAnswer}/>)}
           
           <button onClick={nvigateNext}>Next Question</button>

        </div>
    )
}

export default QuizCard