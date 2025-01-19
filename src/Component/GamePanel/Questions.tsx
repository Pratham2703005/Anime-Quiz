import {motion} from 'framer-motion';
import { DecodeHTML } from '../../utility/DecodeHTML';

const Questions = ({currentQuestionIndex,ques }) => {
  return (
    <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative mb-2 md:mb-8"
            >
              <div className="absolute inset-0 operateBtn-gradient transform skew-x-6 rounded-lg opacity-30" />
              <div className="relative bg-operateBtn-active-to text-question-text p-2 md:p-8 rounded-lg border-4 border-operateBtn-focus border-r-0 border-l-0 shadow-2xl">
                <h2 className="text-[1.25rem] md:text-[1.65rem] text-center pr-6">
                  {DecodeHTML(ques)}
                </h2>
              </div>
            </motion.div>
  )
}

export default Questions
