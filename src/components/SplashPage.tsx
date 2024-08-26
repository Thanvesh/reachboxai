import React from 'react'
import EmptySectionImage from './NoMailsImage'

const LoadingPage:React.FC = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "150px"}}>
        <EmptySectionImage/>
        <div style={{marginTop: "40px"}}>
           <p style={{fontWeight: "500", fontSize: "24px"}}>It’s the beginning of a legendary sales pipeline </p>
           <p style={{color: "#9E9E9E", fontSize: "18px", marginTop: "20px"}}>When you have inbound E-mails <br /> you’ll see them here</p>
         </div>
    </div>
  )
}

export default LoadingPage
