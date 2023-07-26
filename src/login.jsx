
import React, {useState} from 'react';


export const Login = (props) => {
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(email);
    }
  return (
  <div classname='auth-form-container'>
    <h1>Logi Form</h1>
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email"> Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremal@gmail.com' id="email"/>
      <label htmlFor="password"> Password</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********************************' id="password"/>
      <button type='submit'>Login</button>
    </form>
    <button className='link-tbn' onClick={() => props.onFormSwitch('register')}>Don't have an accont? Register here</button>
  </div>
  );
};



