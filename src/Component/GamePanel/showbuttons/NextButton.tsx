
import { moneyLadder } from "../../../utility/MoneyLadder";
const NextButton = ({ nextQuestionIndex,handleNextQuestion }) => {
  return (
    <button
      onClick={handleNextQuestion}
      className={`
        absolute top-0 right-10
        flex items-center justify-center
        operateBtn-gradient
        text-operateBtn-text
        hover:operateBtn-gradient
        focus:outline-none focus:ring-2 focus:ring-operateBtn-focus focus:ring-opacity-50
        active:from-operateBtn-active-to active:to-operateBtn-active-from
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200 
        px-8 py-3
        text-sm font-medium 
        shadow-md hover:shadow-lg 
        clip-path-arrow-right
        border-[3px] border-solid border-operateBtn-focus
      `}
      aria-label="Next Question"
    >
      <span className="text-[1.15rem] mr-4">Next Question <br/> for {moneyLadder[15-nextQuestionIndex]}</span>
    </button>
  )
}

export default NextButton

const styles = `
  @layer utilities {
    .clip-path-arrow-right {
      clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    }
  }
`

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.textContent = styles
  document.head.appendChild(styleElement)
}

