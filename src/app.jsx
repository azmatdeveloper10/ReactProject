import React from 'react';
import Info from './info';
import About from './about';
import Int from './interest';

export default function App() {
  return (
    <React.StrictMode>
      <div className='container'>
        <Info />
        <About />
        <Int />
      </div>
    </React.StrictMode>
  );
}
