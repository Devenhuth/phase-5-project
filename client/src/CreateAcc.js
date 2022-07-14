import { useState } from 'react';
import { Link } from "react-router-dom";

function CreateAcc({setCurrentUser}) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState([]);


    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch('/users', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(setCurrentUser)
            } else {
                setErrors(user.error);
            }
        })
    }
    return (
        <>
        <img src='https://38.media.tumblr.com/d30fe069cc48e11eeb31ae08293a159e/tumblr_nbtdxg9d6n1szf0nzo1_250.gif' alt='Ghost' className='Ghost' />
        <img src='https://38.media.tumblr.com/d30fe069cc48e11eeb31ae08293a159e/tumblr_nbtdxg9d6n1szf0nzo1_250.gif' alt='Ghost' className='Ghost1' />
        <h1 className='Title'>Castle of the lost Knight</h1>
        <div className='Login' >
            <h1>Create Account</h1>
            <form className="Create" onSubmit={onSubmit}>
                <label>
                    <h2>Username:</h2>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
                </label>
                <br></br>
                <label>
                    <h2>Password:</h2>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                </label>
                <br></br>
                <button className="LoginButton" type="submit">Create</button>
                <h3>{errors}</h3>
            </form>
            <Link to="/"><button className="AccountMake" >Already Have an Account</button></Link>
        </div>    
        </> 
    )
}

export default CreateAcc;