import message from "../assets/icons/message.png";
import active from "../assets/icons/active.png";
import React, { useState } from 'react'

type inboxProps ={
    currTheme:Boolean;
    fromEmail:string;
    subject:string;
    id:number;
    handleChangeEmail:any,
    threadId:number,
    onDelete: () => void; // New prop to handle deletion

}
const InboxEmailCard:React.FC<inboxProps> = ({currTheme,threadId,id,fromEmail,onDelete,subject,handleChangeEmail}) => {
    const [holdTimeout, setHoldTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleMouseDown = () => {
        const timeout = setTimeout(() => {
            onDelete(); // Trigger delete modal
        }, 500); // 500ms hold to trigger the modal

        setHoldTimeout(timeout);
    };

    const handleMouseUp = () => {
        if (holdTimeout) {
            clearTimeout(holdTimeout);
            setHoldTimeout(null);
        }
    };
  return (
        <div className='w-full pt-3 pb-3 pl-2' style={{cursor: "pointer"}} onClick={()=> handleChangeEmail(threadId)} 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}  >
        <div className='flex gap-1 justify-between text-[12px]'>
            <p style={{fontSize: "16px", color:`${currTheme? "#ffffff":"#000000"}`, fontWeight: "500"}}>{fromEmail}</p>
            <p className='text-gray-400'> Mar 7</p>
        </div>
        <p style={{fontSize: "12px",  color:`${currTheme? "#d1cfcb":"#595754"}`,fontWeight:600}}>{subject}</p>
        <div style={{marginTop: "15px", display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", gap: "10px"}}>
            <div style={{ height: "20px",  display: "flex", borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "5px", background: currTheme ? '#25262B':'#e1e7ee'}}>
                <img src={active} alt="" />
                <p style={{fontSize: "11px"}} className={`${ currTheme? 'text-green-400':'text-blue-700' }`}>Interested</p>
            </div>
            <div style={{ height: "20px",  display: "flex", borderRadius: "10px", paddingLeft: "10px", paddingRight: "10px", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "5px", background: currTheme ? '#25262B':'#e1e7ee'}}>
                <img src={message} style={{height: "12px"}} alt="" />
                <p style={{fontSize: "11px"}}>Campaign Name</p>
            </div>

        </div>
    </div>
  )
}

export default InboxEmailCard
