import '../CSS/Base.css'
import 'react-bootstrap';
import SQLInputForm from '../components/SQLInputForm';
import { Link } from 'react-router-dom';

const SQLInjection = () => {
  return (
    <div className='container-fluid body py-4'>
      <div className='row mx-auto text-center'>
        <div className='col-12'>
          <h3 className='title my-4'>MetaMod</h3>
        </div>
        <div className='col-md-6 mx-auto my-auto'>
          <p className='mb-0'>Welcome to</p>
          <h2 className='title'>MetaMod/SQLi</h2>
          <p className='my-4'>Validate SQL Injection with 99.21% accuracy</p>
          <SQLInputForm />
          <Link className='text-dark text-decoration-none'>Learn more about <b>metamod/sqli</b></Link>
        </div>
        <div className='col-md-6 mx-auto'>
          <div className='img-fluid'>
            <img src={require("../images/data_lock.png")} alt='error in loading' width="80%"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SQLInjection;
