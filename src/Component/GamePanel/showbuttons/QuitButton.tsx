
import { useDispatch } from "react-redux";
import { moneyLadder } from "../../../utility/MoneyLadder"
import {gamestartfn} from '../../../redux/Features/GameSlice.js';
const QuitButton = ({currentQuestionIndex,setGameWin}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    setGameWin(true);
    dispatch(gamestartfn(false));
  }
  return (
    <button
      onClick={handleClick}
      className={`
        absolute top-0 left-10
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
        clip-path-arrow
        border-[3px] border-solid border-operateBtn-focus
      `}
      aria-label="Quit Button"
    >
      <span className="text-[1.15rem] ml-4">Go Home <br/> with {moneyLadder[15- currentQuestionIndex +1]}</span>
    </button>
  )
}

export default QuitButton

const styles = `
  @layer utilities {
    .clip-path-arrow {
      clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
    }
  }
`

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.textContent = styles
  document.head.appendChild(styleElement)
}

