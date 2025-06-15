import React, { useRef, useState } from 'react'
import './Notification.css'

const Notification = () => {


    const [toasts,setToasts] = useState([])
    const timeRef = useRef([])


    const showToast = (message, type) => {
        const id = new Date().getTime();
        const newToast = {
            id,
            message,
            type
        };
    
        // Use the setter function properly
        setToasts(prevToasts => [...prevToasts, newToast]);

        timeRef.current[id] = setTimeout(() =>  closeToast(id), 5000)
    };
    

    const closeToast = (id) => {
        clearTimeout(timeRef.current[id])
        delete timeRef.current[id]
        setToasts(toasts => {
            let toast = toasts.filter(t => t.id !== id)
            return toast
        })
    }

  return (
    <div className='notification-container'>
        <div className='notification-content'>
            <h1>Notification</h1>
            
            <div className="toast-container">
                {
                    toasts.map(toast => (
                        <div className={`toast ${toast.type}`}
                             key={toast.id}
                             >
                            {toast.message}
                            <span onClick={() => {closeToast(toast.id)}}>&times;</span>
                        </div>
                    ))
                }
            </div>

            <div className="button-container-toast">
                <button className='success' onClick={() => showToast("Success message..",  "success")}>Success</button>
                <button className='warning' onClick={() => showToast("Warning message..",  "warning")}>Warning</button>
                <button className='info' onClick={() => showToast("Info message..",  "info")}>Info</button>
                <button className='danger' onClick={() => showToast("Danger message..",  "danger")}>Danger</button>
            </div>
        </div>
    </div>
  )
}

export default Notification