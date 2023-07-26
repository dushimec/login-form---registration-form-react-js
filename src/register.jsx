import React, {useState} from 'react';


export const Register = (props) => {
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(email);
    }
  return (
  <div classname='auth-form-container'>
    <h1>Registration Form</h1>
    <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="email"> Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremal@gmail.com' id="email"/>
      <label htmlFor="name"> Full Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="password" placeholder='For examole john' id="name"/>
      <label htmlFor="password"> Password</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********************************' id="password"/>
      <button type='submit'>Sign up</button>
    </form>
    <button className='link-tbn' onClick={() => props.onFormSwitch('login')}>Allready have an accout? Login here</button>
  </div>
  );
};

