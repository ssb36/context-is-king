import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Navbar } from './Navbar'

export const Form1 = () => {

  const navigate = useNavigate();

  const { name, age, DOB, handleChange } = React.useContext(UserContext);


  return (
    <div>
      <Navbar />

      <br />
      <input type="text" id='name' placeholder='enter name' required value={name} onChange={handleChange} />
      <br />

      <input type="text" placeholder='age'
        id='age' required value={age} onChange={handleChange} />
      <br />

      <input type="date" id='DOB' required value={DOB} onChange={handleChange} />
      <br /><br />

      <button disabled={!name || !age || !DOB} onClick={() => navigate("/registration/two")} type="submit">Next</button>
    </div>
  )
}
