import { motion, AnimatePresence } from 'framer-motion';
import { DecodeHTML } from '../../utility/DecodeHTML';
import { lifelinesimg } from '../LifleLines/lifelinesImg';
import { getDisabledOptions } from '../LifleLines/lifelinelogics';

const Options = ({ 
  options, 
  handleOptionClick, 
  selectedAnswer, 
  gameOver, 
  currentQuestion, 
  activatedLifeline 
}) => {
  const disabledOptions = getDisabledOptions(options, currentQuestion, activatedLifeline);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6 relative">
      {activatedLifeline !== null && (
              <img
                src={lifelinesimg[activatedLifeline]}
                alt="Lifeline"
                className="absolute inset-0 w-24 mx-auto my-auto z-10"
              />
            )}
      <AnimatePresence>
        {options.map((option, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: 20 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleOptionClick(option)}
            disabled={selectedAnswer !== null || gameOver || disabledOptions[index]}
            className={` ${disabledOptions[index]? 'opacity-0':''}
              relative w-full group transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-opacity-90
              ${
                selectedAnswer === option && option === currentQuestion.correct_answer
                  ? 'bg-option-correct-bg focus:ring-option-correct-focus border-option-correct-border focus:ring-4'
                  : 'focus:ring-option-focus'
              }
              ${
                selectedAnswer === option && option !== currentQuestion.correct_answer
                  ? 'bg-option-incorrect-bg focus:ring-option-incorrect-focus border-option-incorrect-border'
                  : 'focus:ring-option-focus'
              }
            `}
          >
            <div className="absolute inset-0 option-gradient transform skew-x-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div
              className={`relative ${disabledOptions[index] ? 'bg-option-disable-bg border-option-disable-border group-hover:border-option-disable-hover-border' : 'bg-option-enable-bg border-option-enable-border group-hover:border-option-disable-hover-border' }  text-option-enable-text p-2 sm:p-6 rounded-lg border-2  ${
                selectedAnswer === option && option === currentQuestion.correct_answer
                  ? '!border-option-correct-border group-hover:border-option-correct-hover-border'
                  : ''
              } ${
                selectedAnswer === option && option !== currentQuestion.correct_answer
                  ? '!border-option-incorrect-border group-hover:border-option-incorrect-hover-border'
                  : ''
              } shadow-lg group-hover:shadow-xl transition-all duration-300`}
            >
              <span className={`text-[1.35rem] ${disabledOptions[index]? 'text-option-disable-text': ''}`}>{DecodeHTML(option)}</span>
            </div>
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Options;
