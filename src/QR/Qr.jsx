import React, { useReducer, useState } from 'react'
import './QR.css'


const Qr = () => {

    const [data,setData] = useState({code:'',size:150,img: ''})
    const [loading,setLoading] = useState(false)
    const [codeError,setCodeError] = useState(false)
    const [sizeError,setSizeError] = useState(false)

    const handleCode = (e) => {
        setCodeError(false)
        const input = e.target.value.replace(/\s/g, ''); // remove all spaces
        setData(prev => ({ ...prev, code: input }));
    };

    const handleSize = (e) => {
        setSizeError(false)
        const input = e.target.value;
        // Only allow digits (no letters or special characters)
        const numericValue = input.replace(/\D/g, ''); // removes non-digits
        setData(prev => ({ ...prev, size: numericValue }));
    };
    
     const generateQR = async () => {
        if(data.code === ''){
            setCodeError(true)
            return
        }

        if(data.size > 500){
            setSizeError(true)
            return
        }

        setLoading(true)
        setData(prev=>({...prev,img:''}))
        setTimeout(()=> {

            let url = `https://api.qrserver.com/v1/create-qr-code/?size=${data.size}x${data.size}&data=${data.code}`
            console.log(url)
            setData(prev=>({...prev,img:url}))
            setLoading(false)
        },2000)  
    }


    const downloadQR = () => {
        if (!data.img) return;
        
        fetch(data.img)
        .then((response)=>response.blob())
        .then((blob) => {
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = "qr.png"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
      };
      

  return (
    <div className='qr-container'>
        <h1>QR Code Generator</h1>


        {
            data.img && 
            <div className='qr'>
                <img src={data.img} alt="" />
            </div>
        }
        {
            loading && <p>Please wait loading..</p> 
        }
        <div className='qr-content'>
            <div className="data">
                <h5>Data for QR Code</h5>
                <input type="text" 
                    onChange={handleCode}
                    value={data.code}
                />
                {
                    codeError && <p>Please enter a valid code to genreate QR</p>
                }
            </div>

            <div className='size'>
                <h5>Image Size (e.g, 150)</h5>
                <input type="text" 
                    onChange={handleSize}
                    value={data.size}
                />
                {
                    sizeError && <p>Size should be in 500px</p>
                }
            </div>

            <div className="buttons">
                <button className="generate" onClick={()=>generateQR()} disabled={loading}>Generate QR Code</button>
                <button className="download" onClick={()=>downloadQR()}>Download QR Code</button>
            </div>
        </div>
    </div>
  )
}

export default Qr