import * as React from 'react';
import { IconButton, Drawer, Typography } from '@mui/material';
import { IndianRupee } from 'lucide-react';
import { moneyLadder } from '../../utility/MoneyLadder';
import { useSelector } from 'react-redux';

interface RightNavProps {
  setLadderOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ladderOpen: boolean;
}

interface GameState {
  gameStart: boolean;
}
interface QuestionState {
  currentQuestionIndex: number,
  nextQuestionIndex:number,
  ifLooseQuestionIndex:number
}
const RightNav: React.FC<RightNavProps> = ({ setLadderOpen, ladderOpen }) => {
  const gameStart = useSelector((state:{game:GameState}) => state.game.gameStart);
  const { currentQuestionIndex, nextQuestionIndex, ifLooseQuestionIndex } = useSelector((state:{question:QuestionState}) => state.question);

  return (
    
    <div className={`${gameStart ? 'opacity-1' : 'opacity-0 h-0 w-0'}`}>
      
      <IconButton onClick={() => setLadderOpen(true)} color="inherit">
        <IndianRupee className="h-6 w-6 text-right-nav-text" />
      </IconButton>
      <Drawer anchor="right" className='' open={ladderOpen} onClose={() => setLadderOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#111827', // Set background color
            height: '100%', // Ensure it takes up full height
          },
        }}>
        <div
          className="flex w-[300px] p-2 flex-col h-full bg-right-nav-bg text-right-nav-text"
        >
          <Typography variant="h5" className="py-2 px-4 mb-4 text-center text-right-nav-heading">
            Money Ladder
          </Typography>
          <div className="flex-grow flex flex-col justify-between">
            {moneyLadder.map((amount: string, index: number) => {
              const isCurrent = index === 15 - currentQuestionIndex;
              const isNext = index === 15 - nextQuestionIndex;
              const isIfLoose = index === 15 - ifLooseQuestionIndex;

              return (
                <div key={index} className="relative mb-2 bg-right-nav-bg">
                  <div
                    className={`
                      relative h-8 flex items-center justify-between px-4 
                      ${isCurrent
                        ? 'bg-right-nav-current-item text-right-nav-current-itemText '
                        : isNext
                        ? 'bg-right-nav-next-item text-right-nav-itemText'
                        : isIfLoose
                        ? 'bg-right-nav-loose-item text-right-nav-itemText'
                        : 'bg-right-nav-item text-right-nav-itemText'}
                      rounded-lg shadow-md transition-all duration-300 ease-in-out
                      hover:scale-105 hover:shadow-lg
                    `}
                  >
                    <Typography variant="body2" fontSize={20} >
                      {amount}
                    </Typography>
                    <div className="flex space-x-2">
                      {isCurrent && (
                        <span className="text-xs bg-right-nav-currentTag-item text-right-nav-Tag-itemText px-2 py-1 rounded">
                          Current
                        </span>
                      )}
                      {isNext && (
                        <span className="text-xs bg-right-nav-nextTag-item text-right-nav-Tag-itemText px-2 py-1 rounded">
                          Next
                        </span>
                      )}
                      {isIfLoose && (
                        <span className="text-xs bg-right-nav-looseTag-item text-right-nav-Tag-itemText px-2 py-1 rounded">
                          If Lose
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default RightNav;

