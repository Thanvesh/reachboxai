import React from 'react'

interface SingleProps {
  currTheme: Boolean;
  subject: string;
  fromEmail: string;
  toEmail: string;
  body: string
}
const SingleMail: React.FC<SingleProps> = ({ currTheme, subject, fromEmail, toEmail, body }) => {
  return (
    <div style={{ borderRadius: "10px",background:`${currTheme? "#141517":"white"}`, border: "2px solid #DFE3E8", padding: "20px",borderColor: `${currTheme ? "#343A40" :  "#DFE3E8"}` , width: "760px", fontSize: "14px", marginTop: "20px", display: "flex", flexDirection: "column", justifyContent: "start"}}>
      <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
        <p style={{fontWeight: "500", fontSize: "16px"}}>{subject}</p>
        <p style={{color: "#7F7F7F"}}>20 june 2022 : 9:16AM</p>
      </div>
      <p style={{textAlign: "left", color: currTheme ? "text-[#706f6e]" : "text-[#2a2626]", paddingTop: "8px" ,opacity:0.8}}>from : {fromEmail} </p>
      <p style={{textAlign: "left", color: currTheme ? "text-[#706f6e]" : "text-[#2a2626]", paddingTop: "8px",opacity:0.8}}>to : {toEmail}</p>
      <p style={{paddingTop: "14px", textAlign: "left", color: currTheme ? "text-[#b7abab]" : "text-[#2a2626]"}}>{body.split("<p>").join("").split("</p>").join("").split("<br/>").join("").split(",")[0]} ,</p>
      <p style={{paddingTop: "5zpx", textAlign: "left",color: currTheme ? "text-[#b7abab]" : "text-[#2a2626]"}}>{body.split("<p>").join("").split("</p>").join("").split("<br/>").join("").split(",").slice(1)}</p>

    </div>
  )
}

export default SingleMail
