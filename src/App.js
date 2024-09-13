import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './compounts/Header';
import Footer from './compounts/footer';
import Lside from './compounts/lside';
import Rside from './compounts/rside';
import Pdf from './compounts/pdf';
import Question from './compounts/questions';
import Subjectwise from './compounts/Subject_wise';
import Essay from './compounts/Essay';
import Summarize from './compounts/summarize';
import Importantpoints from './compounts/importantpoints';
import Keyworbs from './compounts/keyworbs';
import Discribe from './compounts/discribe'
import Code from './compounts/code';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className='main-content'>
        <Lside />
        <Routes>
          <Route path="/" element={<div className='Start_page'>Welcome! Click a button to see content.</div>} />
          <Route path="/rside" element={<Rside />} />
          <Route path="/pdf" element={<Pdf />} />
          <Route path="/keyworbs" element={<Keyworbs />} />
          <Route path="/questions" element={<Question />} />
          <Route path="/importantpoints" element={<Importantpoints />} />
          <Route path="/discribe" element={<Discribe />} />
          <Route path="/Summarize" element={<Summarize />} />
          <Route path="/Essay" element={<Essay />} />
          <Route path="/Subject_wise" element={<Subjectwise />} />
          <Route path="/code" element={<Code />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
