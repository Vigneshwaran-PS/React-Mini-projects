import React, { use, useState } from 'react'
import './UserProfile.css'
import img1 from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/1.jpg'
import img2 from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/2.jpg'


const UserCard = ({user}) => {
    return(
        <div className='user-container'>
            <div className="user-wrapper">
                <div className='user-content'>
                    <h3 style={{backgroundColor:user.isOnline ? "green" : "#FE7743"}}>{user.isOnline ? "Online" : "Offline"}</h3>
                    <picture>
                        <img src={user.img} alt="" />
                    </picture>

                    <p className='user-name'>{user.name}</p>
                    <p className='user-city'>{user.city}</p>
                    <p className='user-role'>{user.role}</p>

                    <div className="buttons">
                        <button className='msg'>Message</button>
                        <button className='follow'>Following</button>
                    </div>
                </div>
                
                <div className='skills'>
                    <ul>
                        {
                            user.skills.map(skill => (
                                <li>{skill}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const UserProfile = () => {

    const users = [
        {
            id : 1,
            name: "Vignesh",
            city : "Madurai",
            isOnline : true,
            role : "Backend Developer",
            skills : ["Java","MySQL","SpringBoot","Java Sript","React JS"],
            img : img2
        },
        {
            id : 2,
            name: "Sai",
            city : "New york",
            isOnline : false,
            role : "Backend Developer",
            skills : ["Djano","MySQL","Postgre"],
            img :img2
        },
        {
            id : 3,
            name: "Maki",
            city : "Illinois",
            isOnline : true,
            role : "Backend Developer",
            skills : ["C","C++",".Net","Java Sript","React JS"],
            img : img1
        },
        {
            id : 4,
            name: "Nami",
            city : "Chicago",
            isOnline : false,
            role : "Backend Developer",
            skills : ["Angular","Vue","Venila JS","Java Sript","React JS"],
            img : img1
        },
        {
            id : 5,
            name: "Luci",
            city : "Madurai",
            isOnline : true,
            role : "Backend Developer",
            skills : ["Cyber Security","Mango DB",".Net"],
            img : img2
        },
        {
            id : 6,
            name: "Ram",
            city : "New york",
            isOnline : false,
            role : "Backend Developer",
            skills : ["Java","MySQL","SpringBoot","Java Sript","React JS"],
            img :img2
        },
        {
            id : 7,
            name: "Rose",
            city : "Illinois",
            isOnline : true,
            role : "Backend Developer",
            skills : ["Java","MySQL","SpringBoot","Java Sript","React JS"],
            img : img1
        },
        {
            id : 8,
            name: "Maria",
            city : "Chicago",
            isOnline : false,
            role : "Backend Developer",
            skills : ["Java","MySQL","SpringBoot","Java Sript","React JS","Java","MySQL","SpringBoot","Java Sript","React JS"],
            img : img1
        }
    ]
  return (
    <div className='user-pro-container'>
        <div className='user-pro-wrapper'>
            <h1>Users</h1>
            <div className="cards">
                {
                    users.map(user => (
                        <UserCard key={user.id} user={user}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default UserProfile