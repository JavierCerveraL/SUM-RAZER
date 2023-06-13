import React from 'react';

import './App.css';
import Demo from './components/Demo';
import Hero from './components/Hero';

const App = () => {
  return (
    <main className="">
      <div className="mains">
        <div className="gradient bg-slate-900" />
        <div className="app">
          <Hero />
          <Demo />
        </div>
      </div>
    </main>
  );
};

export default App;
