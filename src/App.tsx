import React, { useState } from 'react';

import FormFill from './Component/FormFill';
import Quiz from './Component/Quiz'; 
import Navbar from './Component/NavBar/NavBar';

const App = () => {
  const [sub, setSub] = useState<string>();
  const [form, setForm] = useState<boolean>(true);

  const handleFormSubmit = (subjects: string) => {
    setSub(subjects);
    console.log('Form submitted:', {subjects});
    setForm(false);
    
  };

  return (
    <div>
      <Navbar/>
      {form && <FormFill handleFormSubmit={handleFormSubmit} />}
      
      {!form &&  
        <Quiz sub={sub} />
        
      }
    </div>
  );
};

export default App;
