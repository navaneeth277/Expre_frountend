import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css.css';

export default function Lside() {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setActiveButton(index);
    if (index === 0) { // Assuming you want to navigate to Rside when the first button is clicked
      navigate('/questions');
    }
    
    else if(index===1)
        navigate('Subject_wise')
    else if(index===2)
        navigate('/discribe')
    else if(index===3)
        navigate('/Summarize')
    else if(index===4)
        navigate('/keyworbs')
    else if(index===5)
        navigate('/importantpoints')
    else if(index===6)
        navigate('/Essay')
    else if(index===7)
      navigate('/code');
    else if(index===8)
        navigate('/pdf')
    else
    navigate('/rside');
    // Add more conditions if other buttons should navigate to different pages
  };

  return (
    <div className='Lside-buttons'>
      {['Question', 'Subjectwise', 'Describe', 'Summarize', 'Keywords', 'Important points', 'Essay','Code',].map((label, index) => (
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
