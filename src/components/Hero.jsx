import React from 'react';
import { logo } from '../assets';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <Navbar />
      <h1 className="head_text ">
        Summarize Articules with
        <br className="max-md:hidden" />
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with + RAZER, an open-source articule summarizer
        that transforms lenghty articules into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
