
import { motion } from 'framer-motion';
import { Trophy, Frown, RotateCcw, Home, Target, Award } from 'lucide-react';
import { useSelector } from 'react-redux';
import { DecodeHTML } from '../utility/DecodeHTML';
import { moneyLadder } from '../utility/MoneyLadder';

type QuizQuestion = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  category: string;
  difficulty: string;
};

interface GameOverProps {
  currentQuestion: QuizQuestion;
  score: number;
  onRetry: () => void;
  totalQuestions?: number;
}

interface QuestionState {
  ifLooseQuestionIndex: number;
}

export default function GameOver({ currentQuestion, score, onRetry, totalQuestions = 16 }: GameOverProps) {
  const { ifLooseQuestionIndex } = useSelector((state: { question: QuestionState }) => state.question);
  const moneyWon = moneyLadder[15 - ifLooseQuestionIndex];
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className=" flex items-center justify-center text-white p-4 md:p-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl"
      >
        <div className="grid lg:grid-cols-2 bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-slate-700 overflow-hidden">
          {/* Left Column - Status and Score */}
          <div className="p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-700">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="mb-6"
              >
                {ifLooseQuestionIndex !== -1 ? (
                  <Trophy className="mx-auto w-24 h-24 text-yellow-500" />
                ) : (
                  <Frown className="mx-auto w-24 h-24 text-slate-400" />
                )}
              </motion.div>
              
              <h2 className="text-5xl mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                Game Over
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-xl text-slate-300">Final Score</h3>
                </div>
                <p className="text-2xl text-indigo-400">{score}/{totalQuestions}</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl text-slate-300">Accuracy</h3>
                </div>
                <p className="text-2xl text-purple-400">{percentage}%</p>
              </div>

              
                <div className="col-span-2 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  {/* <div className="flex items-center gap-2 mb-2"> */}
                    {/* <DollarSign className="w-5 h-5 text-emerald-400" /> */}
                    <h3 className="inline text-xl text-slate-300">Prize Money : {" "}</h3>
                  {/* </div> */}
                  <span className="text-2xl text-emerald-400">
                  {ifLooseQuestionIndex !== -1 ? moneyWon.toLocaleString() : '₹0'}
                  </span>
                </div>
              
            </div>

            {/* Action Buttons */}
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <button
                onClick={onRetry}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
                          text-white text-xl transition duration-300 ease-in-out transform hover:scale-[1.02]"
              >
                <RotateCcw className="inline-block w-5 h-5 mr-2" />
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="w-full py-3 px-6 rounded-xl bg-transparent border-2 border-slate-700 hover:bg-slate-800
                          text-white text-xl transition duration-300 ease-in-out transform hover:scale-[1.02]"
              >
                <Home className="inline-block w-5 h-5 mr-2" />
                Return Home
              </button>
            </div>
          </div>

          {/* Right Column - Answer Details */}
          <div className="p-8 flex flex-col">
            <h3 className="text-center text-4xl mb-6 text-slate-300">Question Review</h3>

            {/* Circle Progress for Score */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <svg className="w-full h-full transform" viewBox="0 0 100 100">
                <circle
                  className="text-slate-700 stroke-current"
                  strokeWidth="10"
                  fill="transparent"
                  r="45"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-indigo-500 stroke-current"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="transparent"
                  r="45"
                  cx="50"
                  cy="50"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 45}`,
                    strokeDashoffset: `${2 * Math.PI * 45 * (1 - score / totalQuestions)}`,
                  }}
                />
                <text
                  x="50"
                  y="50"
                  className="text-3xl "
                  fill="currentColor"
                  textAnchor="middle"
                  dy=".3em"
                >
                  {percentage}%
                </text>
              </svg>
            </div>

            {/* Answer Details */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h4 className="text-xl text-slate-300 mb-3">Correct Answer:</h4>
              <p className="text-xl text-white mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                {DecodeHTML(currentQuestion.correct_answer)}
              </p>
              <div className="h-1 w-full bg-slate-700 rounded-full mb-4" />
              <p className="text-center text-lg text-slate-400">
                Keep practicing to improve your score!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}