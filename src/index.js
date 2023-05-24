import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Image() {
  return (
    <div>
     <img src='https://c2.staticflickr.com/6/5307/5616330443_645de45fc6_b.jpg'/>
    </div>
  );
}

function Hello() {
  return React.createElement('div',{},'Hello')
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Image/>) 
