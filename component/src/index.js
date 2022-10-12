import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddComponent from './components/AddComponent';
import Alert from './components/alert/Alert';
import StudentComponent from './components/studentInfoComponent/StudentComponent'
import Demo1 from './Demo1';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Alert className="alert alert-warning" role="alert" text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
// );

// const root2 = ReactDOM.createRoot(document.getElementById('root2'));
// root2.render(
//   <StudentComponent />
// )


const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
  <Demo1 />
)