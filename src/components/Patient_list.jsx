import Patients from './Patients';


const Patient_list = ({ patients, setPatient, deletePatient }) => {


  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {patients && patients.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Patient list</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            manage your {''}
            <span className='text-indigo-600 font-bold'>
              patients and appointments
            </span>
          </p>

          {patients.map(patient => (
            <Patients
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>
            There are no patients
          </h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            add a patient {''}
            <span className='text-indigo-600 font-bold'>
              and it will appear in this place
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default Patient_list;
