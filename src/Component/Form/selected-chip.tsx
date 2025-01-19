import { Chip } from '@mui/material'
import { X } from 'lucide-react'
import React from 'react'

const SelectedChip = ({selectedSubjects, subjects,handleSubjectRemove}) => {
  return (
    <div className="flex flex-wrap gap-2">
              {selectedSubjects.map((subjectId) => {
                const subject = subjects.find(s => s.id === subjectId)
                return (
                  <Chip
                    key={subjectId}
                    label={`${subject?.name}`}
                    onDelete={() => handleSubjectRemove(subjectId)}
                    deleteIcon={<X className="h-4 w-4" />}
                    sx={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      color: 'white',
                      borderColor: 'rgba(59, 130, 246, 0.5)',
                      '& .MuiChip-deleteIcon': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': { color: 'white' },
                      },
                    }}
                  />
                )
              })}
            </div>
  )
}

export default SelectedChip
