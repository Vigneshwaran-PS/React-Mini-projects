import React, { useState } from 'react'
import './FormHandling.css'
import { useNavigate } from 'react-router-dom'
const FormHandling = () => {

    const [data,setData] = useState({
        fullname : '',
        phone : '',
        dob : '',
        married : false,
        gender : 'male',
        role : '',
        address : ''
    })

    const [error,setError] = useState({
        nameError : false,
        phoneError : false,
        dobError : false,
        roleError : false
    })

    const nagivate = useNavigate()

    const handleChange = (e) => {

        if(e.target.name === 'fullname' || e.target.name === 'address'){
            setData({...data,[e.target.name]:e.target.value.trimStart()})

            if(e.target.name === 'fullname'){
                setError({...error,nameError:false})
            }

            if(e.target.name === 'address'){
                setError({...error,nameError:false})
            }
        }

        if(e.target.name === 'phone'){
            const numericValue = e.target.value.replace(/\D/g, '');
            setData({...data,phone:numericValue})
        }

        if(e.target.name === 'dob'){
            setData({...data,dob:e.target.value})
            setError({...error,dobError:false})
        }

        if(e.target.name === 'married'){
            setData({...data,married: e.target.checked})
        }

        if(e.target.name === 'gender'){
            setData({...data,gender:e.target.value})
        }

        if(e.target.name === 'role'){
            setData({...data,role:e.target.value})
            setError({...error,roleError:false})
        }
    }


    const handleSubmit = () => {
        let pass = true;
    
        // Name check
        if (data.fullname.trim() === '') {
            setError(prev => ({ ...prev, nameError: true }));
            pass = false;
        } else {
            setError(prev => ({ ...prev, nameError: false }));
        }
    
        // Phone check
        if (data.phone.trim() === '') {
            setError(prev => ({ ...prev, phoneError: true }));
            pass = false;
        } else {
            setError(prev => ({ ...prev, phoneError: false }));
        }


        if (data.dob === '') {
            setError(prev => ({ ...prev, dobError: true }));
            pass = false;
        } else {
            setError(prev => ({ ...prev, dobError: false }));
        }


        if (data.role === '') {
            setError(prev => ({ ...prev, roleError: true }));
            pass = false;
        } else {
            setError(prev => ({ ...prev, roleError: false }));
        }
    
        if (pass) {
            nagivate("/emp-save", { state: data });
        }
    };
    

  return (
    <div className='form-container'>
        <h1>Employee Details</h1>
        <div className='form-wrapper'>
            <div className="emp-details">
                    <div className="emp-name-phone">
                        <div className="fullname">
                            <p>Full name:</p>
                            <input type="text" 
                                    value={data.fullname}
                                    name='fullname'
                                    onChange={handleChange}
                            />
                            {error.nameError && <p className='error'>please enter name</p>}
                        </div>

                        <div className="phone">
                            <p>Phone no:</p>
                            <input type="text" 
                                    value={data.phone}
                                    name='phone'
                                    onChange={handleChange}
                            />
                            {error.phoneError && <p className='error'>please enter phone no</p>}
                        </div>
                    </div>
                    
                    <div className="dob">
                        <div>Date of Birth:</div>
                        <input type="date" 
                                value={data.dob}
                                name='dob'
                                min="1900-01-01"
                                max="2010-12-31"
                                onChange={handleChange}
                        />
                        {error.dobError && <p className='error'>please enter date of birth</p>}
                    </div>

                    <div className="married">
                            <div>Married</div> 
                            <input type="checkbox" 
                                    checked={data.married}
                                    name='married'
                                    onChange={handleChange}
                            />
                    </div>

                    <div className="gender">
                        <label htmlFor="">
                             <input type="radio" 
                                    name='gender' 
                                    value="male"
                                    checked = {data.gender === 'male'}
                                    onChange={handleChange}
                             /> Male
                        </label>
                        <label htmlFor="">
                             <input type="radio" 
                                    name='gender' 
                                    value="female"
                                    checked = {data.gender === 'female'}
                                    onChange={handleChange}
                            /> Female
                        </label>
                    </div>

                    <div className="role">
                        <p>Select Role</p>
                        <select name="role" id="" value={data.role} onChange={handleChange}>
                            <option value=""></option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Fullstack Developer">Fullstack Developer</option>
                            <option value="Devops">Devops</option>
                            <option value="HR">HR</option>
                        </select>
                        {error.roleError && <p className='error'>please select a role</p>}
                    </div>

                    <div className="add">
                        <div>Address:</div>
                        <textarea name="address" id="" value={data.address} onChange={handleChange}></textarea>
                    </div>

                    <div className="submit">
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                    
            </div>
        </div>
    </div>
  )
}

export default FormHandling