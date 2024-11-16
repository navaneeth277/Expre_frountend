import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css.css';

export default function Lside() {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setActiveButton(index);
    if (index === 0) {
      navigate('/questions');
    } else if (index === 1) {
      navigate('/subjectwise');
    } else if (index === 2) {
      navigate('/describe');
    } else if (index === 3) {
      navigate('/summarize');
    } else if (index === 4) {
      navigate('/keywords');
    } else if (index === 5) {
      navigate('/importantpoints');
    } else if (index === 6) {
      navigate('/essay');
    } else if (index === 7) {
      navigate('/code');
    } else if (index === 8) {
      navigate('/pdf');
    } else {
      navigate('/rside');
    }
  };

  return (
    <div className='Lside-buttons'>
      {['Question', 'Subject Wise', 'Describe', 'Summarize', 'Keywords', 'Important Points', 'Essay', 'Code', ].map((label, index) => (
        <button
          key={index}
          className={`L-Button ${activeButton === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <p>{label}</p>
        </button>
      ))}
    </div>
  );
}
