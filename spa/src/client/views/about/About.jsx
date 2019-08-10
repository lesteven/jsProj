import React, { useState } from 'react';
import css from './about.css';

const About = () => {
  const [value, setValue] = useState('');
  console.log(value);
  const enter = (e) => {
    if (e.key == 'Enter') {
      setValue(e.target.value);
    }
  }
  return (
    <div className='about'>
      <p> Hello About! </p>
      <input type = 'text' onKeyPress = { enter } />
      <p> You've entered {value} </p>
    </div>
  )
}

export default About;
