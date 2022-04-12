import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Navbar } from './Navbar'

export const Form2 = () => {

  const { name, age, DOB, address, state, pincode, handleChange, handleSubmit } = React.useContext(UserContext);

  if (!name || !age || !DOB) {
    return (
      <>
        <Navigate to={"/registration/one"} />
      </>
    )
  }

  return (
    <div>
      <Navbar />

      <br />
      <input type="text" id='address' placeholder='enter state' required value={address} onChange={handleChange} />
      <br />

      <input type="text" placeholder='enter state'
        id='state' required value={state} onChange={handleChange} />
      <br />

      <input type="text" id='pincode' placeholder='enter pincode' required value={pincode} onChange={handleChange} />
      <br /><br />

      <button disabled={!pincode || !address || !state} onClick={handleSubmit} type="submit">Next</button>
    </div>
  )
}
