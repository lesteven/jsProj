import React, { useState } from 'react';
import css from './form.css';
import useForm from '../../custHooks/useForm';


const FormEx = () => {
  const [name, nameChange] = useForm();
  const [pw, pwChange] = useForm();
  const postForm = (e) => {
    e.preventDefault();
    console.log('will post form!');
    console.log(name,pw);
  }
  return (
    <div className= 'center'>
      <form className= 'form' onSubmit = { postForm }>
        <label htmlFor='username'> Username </label>
          <input id='username' type='text' value = {name} 
            onChange = {nameChange}/>
        <label htmlFor='password'> Password </label>
          <input id='password' type='text' value = {pw} 
            onChange = {pwChange} />
          <input type='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default FormEx;
