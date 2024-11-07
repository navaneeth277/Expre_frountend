import React, { useState } from 'react';
import axios from 'axios';
import './Css.css';

export default function SubjectWise() {
  const [inputValue, setInputValue] = useState('');
  const [numOfWords, setNumOfWords] = useState(''); // Default value set to 100
  const [receivedData, setReceivedData] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNumOfWordsChange = (e) => {
    setNumOfWords(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = `${inputValue} with ${numOfWords} words`;
      await axios.post('https://exper-backend.onrender.com/', { data: dataToSend });

      const response = await axios.get('https://exper-backend.onrender.com/');
      setReceivedData(response.data.data);

      setSubmitted(true);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(receivedData).then(() => {
      alert('Text copied to clipboard!');
    }).catch((error) => {
      console.error('Failed to copy text:', error);
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: receivedData,
        });
        alert('Text shared successfully!');
      } catch (error) {
        console.error('Failed to share text:', error);
      }
    } else {
      alert('Web Share API is not supported in this browser.');
    }
  };

  const handleRefresh = () => {
    window.location.reload(); // Refreshes the page
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
          <input
            type='number'
            value={numOfWords}
            onChange={handleNumOfWordsChange}
            placeholder='Enter number of words'
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
          <div className='button-container'>
            <button onClick={handleCopy} className='copy-button'>Copy</button>
            <button onClick={handleShare} className='share-button'>Share</button>
            <button onClick={handleRefresh} className='refresh-button'>Refresh</button> {/* New Refresh Button */}
          </div>
        </div>
      )}
    </div>
  );
}
