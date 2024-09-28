import React, { useState } from 'react';
import axios from 'axios';
import './../SignUpUpdated.css';

const SignUpUpdated = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [validationMessages, setValidationMessages] = useState({
        name: '',
        email: '',
        mobile: '',
        password: ''
    });

    let url = "http://localhost:3000/user";

    const validateInputs = () => {
        let isValid = true;
        let messages = { name: '', email: '', mobile: '', password: '' };

        if (!name) {
            messages.name = 'Name is required';
            isValid = false;
        }
        if (!email) {
            messages.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            messages.email = 'Email is invalid';
            isValid = false;
        }
        if (!mobile) {
            messages.mobile = 'Mobile number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(mobile)) {
            messages.mobile = 'Mobile number is invalid';
            isValid = false;
        }
        if (!password) {
            messages.password = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            messages.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setValidationMessages(messages);
        return isValid;
    };

    const signUp = async (event) => {
        event.preventDefault();
        if (!validateInputs()) {
            return;
        }
        let user = { name, email, mobile, password };
        
        try {
            let response = await axios.post(url, user);
            console.log("response ",response)
            if (response.status==200) {
                setMessage('Successful Signup');
            } else if(response.status==400){ 
                setMessage('A user already signed up with this Email id :Try with another email id');
            }else{
                setMessage('Signup failed');
            }
        } catch (error) {
            setMessage('Signup failed: ' + error.message);
        }
        
        reset();
    };
    
    const reset = () => {
        setName('');
        setEmail('');
        setMobile('');
        setPassword('');
        setMessage('');
        setValidationMessages({ name: '', email: '', mobile: '', password: '' });
    };

    return (
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={signUp}>
            <div>
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              {validationMessages.name && <span>{validationMessages.name}</span>}
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {validationMessages.email && <span>{validationMessages.email}</span>}
            </div>
            <div>
              <label>Mobile:</label>
              <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
              {validationMessages.mobile && <span>{validationMessages.mobile}</span>}
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {validationMessages.password && <span>{validationMessages.password}</span>}
            </div>
            <button type="submit">Sign Up</button>
            {message && <p>{message}</p>}
          </form>
        </div>
      );
    };
    
    export default SignUpUpdated;