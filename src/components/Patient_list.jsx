import Patients from "./Patients"


const Patient_list = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Patient list</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        manage your {''}
        <span className="text-indigo-600 font-bold">patients and appointments</span>
      </p>

      <Patients/>
      <Patients/>
      <Patients/>
      <Patients/>
      <Patients/>
    </div>
  )
}

export default Patient_list