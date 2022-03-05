

const AnswerCard=({answer,seletAnswer,seletedAnswer,correctAnswer})=>{

    const isRightAnswer= seletedAnswer && answer === correctAnswer
    const isWrongAnswer= seletedAnswer && answer !== correctAnswer
    const correctClass=  isRightAnswer ? 'correct-answer':''
    const wrongClass= isWrongAnswer ? 'incorrect-answer':''
    const disableClass= seletedAnswer ? 'disable-answer':''


    console.log(isRightAnswer)

    return(
        <p className={`${correctClass} ${wrongClass} ${disableClass}`} onClick={()=>seletAnswer(answer)}>{answer}</p>
    )
}

export default AnswerCard