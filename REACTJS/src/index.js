import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './demo';
import Baitap2 from './baitap2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Baitap2 />
);
// const greeting = <h1 className='title'>Hello, world</h1>;
// const root2 =  ReactDOM.createRoot(document.getElementById('root2'));
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'Vo',
//     lastName: 'Trung'
// };

// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// )
// root.render(
//     <App />
// );
// root2.render(
//    <Demo />
// )

// const element = (
//     <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const liveTime = () => {
//     root.render(
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     )
// };

// setInterval(liveTime, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
