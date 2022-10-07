import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bai1 from './Bai1';
import Bai2 from './Bai2';
import Bai3 from './Bai3';

const bai1 = ReactDOM.createRoot(document.getElementById('root'));
bai1.render(
  <Bai1 />
);

const bai2 = ReactDOM.createRoot(document.getElementById('root2'));
bai2.render(
  <Bai2 />
)

const bai3 = ReactDOM.createRoot(document.getElementById('root3'));
bai3.render(
  <Bai3 />
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
