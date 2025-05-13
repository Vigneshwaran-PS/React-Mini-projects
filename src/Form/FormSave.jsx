import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './FormHandling.css'

const FormSave = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const employee = location.state;

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className='formsave-container'>
      <h2>Employee Summary</h2>

      <div className="emp-data">
        <p>Name: {employee.fullname}</p>
        <p>Phone: {employee.phone}</p>
        <p>DOB: {employee.dob}</p>
        <p>Gender: {employee.gender}</p>
        <p>Married: {employee.married ? 'Yes' : 'No'}</p>
        <p>Role:  {employee.role}</p>
        <p>Address: {employee.address}</p>
        <div>
            <button onClick={goBack}>Go Back</button>
        </div>
      </div>
    </div>
  )
}

export default FormSave;
