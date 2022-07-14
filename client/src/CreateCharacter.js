import React, {useState} from "react";
import { Link } from "react-router-dom";

function CreateCharacter({ user, addNewCharacter }) {
    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')
    const [dead, setDead] = useState(false)
    const [userId, setUserId] = useState(user.id)

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch("/characters", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                picture: picture,
                dead: dead,
                user_id: userId
            }),
        })
        .then(res => res.json())
        .then(newCharacter => addNewCharacter(newCharacter))

        setName('')
        setPicture('')
    }


    return (
        <div className="Login">
            <h1>Recruit new adventurers</h1>
            <form onSubmit={handleSubmit}>
                <h2>Name:</h2>
                <input type='text' name='name' placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <br />
                <h2>Picture:</h2>
                <input type='text' name='picture' placeholder="Picture-URL" value={picture} onChange={e => setPicture(e.target.value)} />
                <br />
                <button type="submit" className="LoginButton">Recruit</button>
            </form>
            <Link to="/"><button className="AccountMake" >Head back</button></Link>
        </div>
    )


}

export default CreateCharacter