import Form from './components/Form';
import Header from './components/Header';
import Patient_list from './components/Patient_list';


function App() {
  return (
    <div className='container mx-auto mt-20'>
      <Header />

      <div className='mt-12 md:flex'>
        <Form />
        <Patient_list/>
      </div>
    </div>
  );
}

export default App;
