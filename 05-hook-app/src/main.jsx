import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { SimpleForms } from './02-useEffect/SimpleForms';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForms />
    {/* <CounterWithCustomHook /> */}
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
  </React.StrictMode>
);
