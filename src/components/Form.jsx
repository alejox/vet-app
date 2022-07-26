import {useState, useEffect } from 'react';

const Form = () => {
  const [name, setName] = useState('');




  
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>

      <p className="text-lg mt-5 text-center mb-10">Add Patients and {''} 
      <span className="text-indigo-600 font-bold ">Manage Them</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="petName" className="block text-gray-700 uppercase font-bold">Pet Name</label>
          <input 
          id="petName"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="text" 
          placeholder="The pet's name" 
          value={name}
          onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Owner's name</label>
          <input 
          id="owner"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="text" 
          placeholder="Owner's name" />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input 
          id="email"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="email" 
          placeholder="Owner contact email" />
        </div>

        <div className="mb-5">
          <label htmlFor="exit" className="block text-gray-700 uppercase font-bold">Discharge date</label>
          <input 
          id="exit"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="date" 
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptom" className="block text-gray-700 uppercase font-bold">Symptom</label>
          <textarea
            id="symptom"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe the symptoms"
          />
        </div>
        <input 
        type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-colors"
        value="Add patient"
        />
      </form>
      
    </div>
  )
}

export default Form