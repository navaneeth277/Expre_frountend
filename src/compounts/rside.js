import React, { useState } from 'react';
import axios from 'axios';
import './Css.css';

export default function Rside() {
  const [inputValue, setInputValue] = useState('');
  const [receivedData, setReceivedData] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:5000/', { data: inputValue });
      
      const response = await axios.get('http://localhost:5000/');
      setReceivedData(response.data.data);
      
      setSubmitted(true);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className='Rside-container'>
      {!submitted ? (
        <form onSubmit={handleSubmit} className='form-container'>
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter some information'
            className='input-field'
          />
          <button type='submit' className='submit-button'>Submit</button>
        </form>
      ) : (
        <div className='text-box'>
          <textarea
            value={receivedData}
            readOnly
            className='scrollable-text full-screen-textarea'
          />
        </div>
      )}
    </div>
  );
}
