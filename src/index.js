import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProblemContextProvider } from './store/problem_context';



ReactDOM.render(
  <ProblemContextProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ProblemContextProvider>

    
  ,
  document.getElementById('root')
);


