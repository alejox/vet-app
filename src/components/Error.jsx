const Error = ({children}) => {
  return (
    <div className='bg-red-700 text-center font-bold p-3 rounded-lg text-white uppercase mb-3'>
      {children}
    </div>
  );
};

export default Error;
