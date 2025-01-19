import { useState } from 'react';

import { subjects } from './subjects';
const SelectedSub = ({setSelectedSubjects}) => {
  // Track the selected option
  const [subject, setSubject] = useState(null);
  const handleSubjectSelect = (event) => {
    setSubject(event.target.value); // Update the selected value
    setSelectedSubjects(event.target.value)
  };

  return (
    <div style={{ width: '100%' }}>
      <select
        id="subjects"
        value={subject} // Dynamically set the selected value
        onChange={handleSubjectSelect}
        style={{
          width: '100%',
          padding: '16.5px 14px',
          borderRadius: '4px',
          backgroundColor: 'var(--form-select-bg)',
          color: 'var(--form-select-text)',
          border: '1px solid var(--form-select-border)',
          outline: 'none',
        }}
      >
        <option value="" disabled>
          Subject
        </option>
        {subjects.map((sub) => (
          <option key={sub.id} value={sub.id}>
            {sub.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectedSub;
