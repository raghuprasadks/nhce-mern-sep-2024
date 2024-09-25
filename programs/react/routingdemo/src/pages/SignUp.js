import React from 'react'

const SignUp = () => {
  return (
    <div>
        <h1>SignUp</h1>
        <label for="name">Name:</label><br/>
        <input type="text" id="name" name="name"/><br/>
        <label for="email">Email:</label><br/>
        <input type="text" id="email" name="email"/><br/>
        <label for="password">Password:</label><br/>
        <input type="password" id="password" name="password"/><br/>
        <button>SignUp</button>

    </div>
  )
}

export default SignUp