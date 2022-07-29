import { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Patient_list from './components/Patient_list';

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLS);
    }

    getLS();
  },[]);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  },[patients]);

  const deletePatient = (id) => {
    const patientsUpdates = patients.filter(patient => patient.id !== id);

    setPatients(patientsUpdates);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header numbers={1} isAdmin='is admin' />

      <div className='mt-12 md:flex'>
        <Form 
        patients={patients} 
        setPatients={setPatients} 
        patient={patient}
        setPatient={setPatient}
        />
        <Patient_list 
        patients={patients} 
        setPatient={setPatient} 
        deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
