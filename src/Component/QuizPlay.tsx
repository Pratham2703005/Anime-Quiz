import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import GameOver from './GameOver';
import GameWin from './GameWin';
import Questions from './GamePanel/Questions';
import Options from './GamePanel/Options';
import { ClockTimer } from './GamePanel/Timer';
import { useDispatch, useSelector } from 'react-redux';
import { nextquestion ,reset} from '../redux/Features/questionSlice.js';
import { gamestartfn } from '../redux/Features/GameSlice.js';
import Lifelines from './LifleLines/lifelines.js';
import OperateButtonsDiv from './GamePanel/showbuttons/OperateButtonsDiv.js';

type QuizQuestion = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  category: string;
  difficulty: string;
};

interface QuizPlayProps {
  questions: QuizQuestion[];
  refreshQuestions: ()=>void;
}
interface GameState {
  gameStart: boolean;
}
interface question {
  currentQuestionIndex: number;
}

const QuizPlay: React.FC<QuizPlayProps> = ({ questions,refreshQuestions }) => {
  const [usedLifelines, setUsedLifelines] = useState([false, false, false]);
  const [activatedLifeline, setActivatedLifeline] = useState(null);
  const gameStart = useSelector((state:{game:GameState}) => state.game.gameStart);
  const dispatch = useDispatch();
  const currentQuestionIndex = useSelector((state:{question:question}) => state.question.currentQuestionIndex);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  
  const [timer, setTimer] = useState<number>(30);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [timerActive, setTimerActive] = useState<boolean>(true);

  const currentQuestion = questions[currentQuestionIndex];

  const shuffleArray = useCallback((array: string[]): string[] => {
    return [...array].sort(() => Math.random() - 0.5);
  }, []);

  const handleOptionClick = useCallback((option: string) => {
    if (gameOver || selectedAnswer) return;
    setSelectedAnswer(option);
    setTimerActive(false);
    dispatch(gamestartfn(false));
    if (option === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 1);
      setShowNextButton(true);
    } else {
      setTimeout(() => {setGameOver(true); dispatch(gamestartfn(false))}, 2000);
    }
  }, [gameOver, selectedAnswer, currentQuestion]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setActivatedLifeline(null);
      dispatch(nextquestion());
      setSelectedAnswer(null);  // Reset answer
      setShowNextButton(false);  // Hide the button
      setTimerActive(true);  // Restart timer
      setTimeLeft(timer);
      
    } else {
      setGameWin(true);
    }
  }, [currentQuestionIndex, questions.length, timer]);

  const handleRetry = useCallback(() => {
    // setCurrentQuestionIndex(0);
    dispatch(reset());
    setScore(0);
    setGameOver(false);
    setGameWin(false);
    setTimer(30);
    setShowNextButton(false)
    refreshQuestions();
    setUsedLifelines([false,false,false]);
    setActivatedLifeline(null)
  }, []);

  useEffect(() => {
    if (currentQuestionIndex < 5) {
      setTimer(30);
    } else if (currentQuestionIndex < 10) {
      setTimer(60);
    } else {
      setTimer(0);
    }
    setTimeLeft(timer);
    const combinedOptions = [
      ...currentQuestion.incorrect_answers,
      currentQuestion.correct_answer,
    ];
    setOptions(shuffleArray(combinedOptions));
    setSelectedAnswer(null);
    setShowNextButton(false);
    setTimerActive(true);
    dispatch(gamestartfn(true));
  }, [currentQuestionIndex, currentQuestion, shuffleArray, timer]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setGameOver(true);
            dispatch(gamestartfn(false));
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  useEffect(()=>{
    console.log(gameStart , " ", showNextButton);
  },[gameStart, showNextButton]);

  useEffect(()=>{
    console.log(gameOver,"  ",gameWin)
  },[gameOver,gameWin])
  return (
    <div className="min-h-[92vh] w-full flex flex-col items-center justify-end p-4 pt-0 pb-24 xl:pb-8 relative">
      {!gameOver && !gameWin && (
        <OperateButtonsDiv selectedAnswer={selectedAnswer} handleNextQuestion={handleNextQuestion} showNextButton={showNextButton} setGameWin={setGameWin}/>
      )}
      {(gameStart && !showNextButton && !gameOver && !gameWin )&& <Lifelines setActivatedLifeline={setActivatedLifeline} setUsedLifelines={setUsedLifelines} usedLifelines={usedLifelines} /> }
      {gameWin  && <GameWin score={score} totalQuestions={questions.length} onRetry={handleRetry} />}
      {gameOver && <GameOver currentQuestion={currentQuestion} score={score} onRetry={handleRetry} />}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="w-full max-w-4xl space-y-8"
      >
        {!gameOver && !gameWin && (
          <div>
            {timer > 0 && (
              <div className="flex justify-center mb-4">
                <ClockTimer timeLeft={timeLeft} totalTime={timer} size={200} />
              </div>
            )}
            <Questions currentQuestionIndex={currentQuestionIndex} ques={currentQuestion.question} />
            <Options
              options={options}
              handleOptionClick={handleOptionClick}
              selectedAnswer={selectedAnswer}
              gameOver={gameOver}
              currentQuestion={currentQuestion}
              activatedLifeline={activatedLifeline}
            />
          </div>
        )}
        
        
      </motion.div>
    </div>
  );
};

export default QuizPlay;
