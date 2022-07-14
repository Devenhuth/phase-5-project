import { useState } from 'react';
import { Link } from "react-router-dom";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState('');

  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((r) => r.json())
        .then((user) => {
            if (user.id) {
                onLogin(user);
            } else {
                setErrors(user.error);
            }
        });
    }
  
    return (
      <>
      <img src='https://38.media.tumblr.com/d30fe069cc48e11eeb31ae08293a159e/tumblr_nbtdxg9d6n1szf0nzo1_250.gif' alt='Ghost' className='Ghost' />
      <img src='https://38.media.tumblr.com/d30fe069cc48e11eeb31ae08293a159e/tumblr_nbtdxg9d6n1szf0nzo1_250.gif' alt='Ghost' className='Ghost1' />
      <h1 className='Title'>Castle of the lost Knight</h1>
        <div className='Login'>
            <h1>Login</h1>
          <form className='form' onSubmit={handleSubmit}>
            <h2>Username:</h2>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br></br>
            <h2>Password:</h2>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <button className="LoginButton" type="submit">Login</button>
            <h4>{errors}</h4>
          </form>
          <Link to="/CreateAcc"><button className="AccountMake" >Make an Account</button></Link>
        </div>
      </>
    );
  }

  export default Login;