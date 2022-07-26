import { useState, useEffect } from 'react';
import Error from './Error';

const Form = ({patients ,setPatients,patient, setPatient}) => {

  // Input patient information
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptom, setSymptom] = useState('');

  // Input error
  const [error, setError] = useState(false);

  // useEffect

  useEffect( () => {
    if(Object.keys(patient).length > 0){
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptom(patient.symptom)
    }
  },[patient]);
  

  // Generate id

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date
  }

  const handleSubmit = e => {
    e.preventDefault();

    //Validation form
    if ([name, owner, email, date, symptom].includes('')) {
      setError(true);
      return;
    } 

    setError(false);

    //Object patient
    const objectPatient = {
      name, 
      owner, 
      email, 
      date, 
      symptom,
    };

    if(patient.id){
      // Editing the registry
      objectPatient.id=patient.id;
      console.log(objectPatient);
      console.log(patient);

      const patientsUpdates = patients.map(patientState => patientState.id === patient.id ? objectPatient : patientState );

      setPatients(patientsUpdates);
      setPatient({})

    }else{
      // New record
      objectPatient.id = generateId();
      setPatients([...patients, objectPatient]);
    }

    //Form reset
  
    setName('');
    setOwner('');
    setEmail('');
    setDate('');
    setSymptom('');
  };

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Patient Follow-up</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Add Patients and {''}
        <span className='text-indigo-600 font-bold '>Manage Them</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
      >
        {error && <Error><p>Empty input, fill all inputs</p></Error>}

        <div className='mb-5'>
          <label
            htmlFor='petName'
            className='block text-gray-700 uppercase font-bold'
          >
            Pet Name
          </label>
          <input
            id='petName'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text'
            placeholder="The pet's name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='owner'
            className='block text-gray-700 uppercase font-bold'
          >
            Owner's name
          </label>
          <input
            id='owner'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='text'
            placeholder="Owner's name"
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'
          >
            Email
          </label>
          <input
            id='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='email'
            placeholder='Owner contact email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='exit'
            className='block text-gray-700 uppercase font-bold'
          >
            Discharge date
          </label>
          <input
            id='exit'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type='date'
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='symptom'
            className='block text-gray-700 uppercase font-bold'
          >
            Symptom
          </label>
          <textarea
            id='symptom'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe the symptoms'
            value={symptom}
            onChange={e => setSymptom(e.target.value)}
          />
        </div>
        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-colors'
          value={patient.id ? 'Edit patient' : 'Add patient'}
        />
      </form>
    </div>
  );
};

export default Form;
