import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Patient_list from './components/Patient_list';

function App() {

  const [patients, setPatients] = useState([])

  return (
    <div className='container mx-auto mt-20'>
      <Header 
        numbers={1}
        isAdmin='is admin'
      />

      <div className='mt-12 md:flex'>
        <Form 
          patients={patients}
          setPatients={setPatients}
        />
        <Patient_list />
      </div>
    </div>
  );
}

export default App;
