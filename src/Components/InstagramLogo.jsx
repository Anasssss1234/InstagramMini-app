import React, { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';

function InstagramLogo() {

  const navigate= useNavigate();
  const [loading, setLoading]=useState(null)

  const handleLogo=()=>{
    setLoading(true)
    setTimeout(()=>{
    setLoading(false)
    navigate('/profile')

    },2000)
  }
  return (
    <>
      <div className="container">
        {
        loading
        ? 
         <>
         <h2>Loading data...</h2>
          
          </>
          :
          <>
           <InstagramIcon 
           onClick={handleLogo}
            sx={{ fontSize: '80px', color:'purple', cursor:'pointer' }}
            />
            </>
            }
     
      </div>
    </>
  )
}

export default InstagramLogo
