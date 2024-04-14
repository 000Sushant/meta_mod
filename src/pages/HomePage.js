import { Link } from 'react-router-dom';
import '../CSS/Base.css'
import 'react-bootstrap';

const HomePage = () => {
  return (
    <div className='container-fluid body py-4'>
      <div className='row mx-auto text-center'>
        <div className='col-12'>
          <h3 className='title my-4'>MetaMod</h3>
        </div>
        <div className='col-md-6 mx-auto my-auto'>
          <p className='mb-0'>Welcome to</p>
          <h2 className='title'>MetaMod</h2>
          <p className='my-4'>An advance Metaheuristic ML model to detect malware injection<br /> on a web application</p>
          <Link className='btn btn-dark mx-2 ' to='/SQLInjection'>SQL Injection</Link>
          <Link className='btn btn-dark mx-2 ' to='/XSSInjection'>XSS Injection</Link>
          <p className='mt-3'>Based on a research work undertaken by <br /><b>Sushant Kumar</b></p>
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

export default HomePage;
