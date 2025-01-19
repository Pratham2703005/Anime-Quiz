import React, { useState } from 'react';
import { lifelinesimg as Img } from "./lifelinesImg";
import ConfirmationDialog from './ConfirmationDialog';

interface LifelinesProps {
  setActivatedLifeline: (index: number) => void;
  setUsedLifelines: (lifelines: boolean[]) => void;
  usedLifelines: boolean[];
}

const Lifelines: React.FC<LifelinesProps> = ({
  setActivatedLifeline,
  setUsedLifelines,
  usedLifelines
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedLifeline, setSelectedLifeline] = useState<number | null>(null);
  
  const handleLifelineClick = (index: number) => {
    if (usedLifelines[index]) return;
    setSelectedLifeline(index);
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    if (selectedLifeline !== null) {
      const updatedLifelines = [...usedLifelines];
      updatedLifelines[selectedLifeline] = true;
      setUsedLifelines(updatedLifelines);
      setActivatedLifeline(selectedLifeline);
    }
    setDialogOpen(false);
    setSelectedLifeline(null);
  };

  const handleCancel = () => {
    setDialogOpen(false);
    setSelectedLifeline(null);
  };

  return (
    <>
      <div className="absolute top-4 right-10 flex flex-col">
        {Img.map((image, index) => (
          <div
            key={index}
            className={`relative w-20 h-20`}
            onClick={() => handleLifelineClick(index)}
            style={{
              pointerEvents: usedLifelines[index] ? 'none' : 'auto',
            }}
          >
            <img
              src={image}
              alt={`Lifeline ${index + 1}`}
              className={`w-full h-full object-contain rounded-md ${
                usedLifelines[index] ? 'opacity-50' : ''
              }`}
            />
          </div>
        ))}
      </div>
      <ConfirmationDialog
        isOpen={dialogOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        selectedLifeline={selectedLifeline}
      />
    </>
  );
};

export default Lifelines;