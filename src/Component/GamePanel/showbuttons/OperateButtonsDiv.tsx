import { useSelector } from 'react-redux'
import NextButton from './NextButton'
import QuizButton from './QuitButton'

interface QuestionState{
    currentQuestionIndex:number,
    nextQuestionIndex:number
}

const OperateButtonsDiv = ({selectedAnswer,handleNextQuestion,showNextButton,setGameWin}) => {
    const {currentQuestionIndex, nextQuestionIndex} = useSelector((state:{question:QuestionState})=>state.question)
  return (
    <div className='absolute top-12 w-full'>
        {currentQuestionIndex !== 0 && (selectedAnswer===null || showNextButton) && (
          <QuizButton currentQuestionIndex={currentQuestionIndex} setGameWin={setGameWin} />
        )}
        {showNextButton && (
          <NextButton nextQuestionIndex={nextQuestionIndex} handleNextQuestion={handleNextQuestion} />
        )}
        
    </div>
  )
}

export default OperateButtonsDiv
