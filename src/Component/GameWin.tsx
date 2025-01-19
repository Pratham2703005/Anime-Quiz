import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useSelector } from 'react-redux';
import { Trophy, Medal, Target, Coins } from 'lucide-react';
import { moneyLadder } from '../utility/MoneyLadder';
import CelebButton from './ui/CelebButton';

interface GameWinProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

interface QuestionState {
  currentQuestionIndex: number;
}

interface UserState{
  user:{
    name:string;
    age:number;
  }
}


const GameWin: React.FC<GameWinProps> = ({ score, totalQuestions, onRetry }) => {
  const fadeStyle = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 20 },
  });
  const { currentQuestionIndex } = useSelector((state: { question: QuestionState }) => state.question);
  const {user} = useSelector((state: {user:UserState}) => state.user);
  console.log(user);
  const moneyWon = moneyLadder[15 - currentQuestionIndex + 1];
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <CelebButton autoTrigger={false}>
      <div className="flex items-center justify-center text-white p-4">
        <animated.div style={fadeStyle} className="w-full max-w-6xl">
        
          <div className="relative grid lg:grid-cols-2 bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-indigo-500/20 overflow-hidden">
            <div className="p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-indigo-500/20">
              <div className="text-center mb-8">
                
                  <Trophy className="w-24 h-24 mx-auto mb-6 text-yellow-400" />
              
                
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                  Congratulations, {user.name}!
                </h2>
                <p className="text-lg text-indigo-300">You've mastered the challenge!</p>
              </div>

              {/* Stats Cards in 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-indigo-900/40 rounded-xl p-4 border border-indigo-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Medal className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-xl text-indigo-300">Final Score</h3>
                  </div>
                  <p className="text-2xl ">{score}/{totalQuestions}</p>
                </div>

                <div className="bg-indigo-900/40 rounded-xl p-4 border border-indigo-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Coins className="w-5 h-5 text-green-400" />
                    <h3 className="text-xl  text-indigo-300">Prize Money</h3>
                  </div>
                  <p className="text-2xl  text-green-400">{moneyWon.toLocaleString()}</p>
                </div>

                <div className="bg-indigo-900/40 rounded-xl p-4 border border-indigo-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-purple-400" />
                    <h3 className="text-xl  text-indigo-300">Age</h3>
                  </div>
                  <p className="text-2xl ">{user.age}</p>
                </div>

                <div className="bg-indigo-900/40 rounded-xl p-4 border border-indigo-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    <h3 className="text-xl text-indigo-300">Questions</h3>
                  </div>
                  <p className="text-2xl ">{totalQuestions}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onRetry}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
                            text-white text-xl transition duration-300 ease-in-out transform hover:scale-[1.02]"
                >
                  Play Again
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="w-full py-3 px-6 rounded-xl bg-transparent border-2 border-indigo-500/50 hover:bg-indigo-900/30
                            text-white text-xl transition duration-300 ease-in-out transform hover:scale-[1.02]"
                >
                  Return Home
                </button>
              </div>
            </div>

            {/* Right Column - Performance Analysis */}
            <div className="p-8 flex flex-col">
              <h3 className="text-3xl mb-6 text-indigo-300 text-center">Performance Analysis</h3>
              
              {/* Circular Progress */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-slate-700 stroke-current"
                    strokeWidth="10"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-green-400 stroke-current"
                    strokeWidth="10"
                    strokeLinecap="round"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                    style={{
                      strokeDasharray: `${2 * Math.PI * 45}`,
                      strokeDashoffset: `${2 * Math.PI * 45 * (1 - percentage / 100)}`,
                      transform: 'rotate(-90deg)',
                      transformOrigin: '50% 50%',
                    }}
                  />
                  <text
                    x="50"
                    y="50"
                    className="text-3xl"
                    fill="currentColor"
                    textAnchor="middle"
                    dy=".3em"
                  >
                    {percentage}%
                  </text>
                </svg>
              </div>

              {/* Performance Details */}
              <div className="bg-indigo-900/40 rounded-xl p-6 border border-indigo-500/20">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl text-indigo-300 mb-2">Accuracy</h4>
                    <div className="relative h-4 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-1000 ease-out"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-center font-medium text-indigo-300">
                    You've mastered {percentage}% of the challenges!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </CelebButton>
  );
};

export default GameWin;