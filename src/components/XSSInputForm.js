import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const XSSInputForm = () => {
    const [inputText, setInputText] = useState('');
    const [output, setOutput] = useState('');
    const apiUrl = 'http://localhost:5000/predictxssi'; // Change this to the actual URL of your server API

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(apiUrl, { input_text: inputText });
            const prediction = response.data.prediction;
            setOutput(prediction === 0 ? 'SAFE' : 'DANGER');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getOutputStyle = () => {
        return output === 'SAFE' ? 'text-success' : 'text-danger'
    };

    const predictionIcon = () => {
        return output === 'SAFE' ? <FaCheck /> : <RxCross1 />
    }

    return (
        <div>
            {output && <p className={getOutputStyle() + ' h5 '}><b> {output} {predictionIcon()}</b></p>}
            <div className='mx-auto col-md-8'>
                <input className='form-control mx-auto' placeholder='Enter your string' value={inputText} onChange={handleInputChange} />
            </div>
            <button onClick={handleSubmit} className='p-2 px-4 m-2 btn-custom-purple'>Check</button>
            <Link to="/" className='btn mx-2 px-4 btn-dark'>Back</Link>
        </div >
    );
}

export default XSSInputForm;
