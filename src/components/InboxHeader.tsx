import { ChevronDown } from 'lucide-react'
import React from 'react'
import refresh from '../assets/icons/refresh.png'

interface headerProps {
    currTheme:Boolean
}

const InboxHeader:React.FC<headerProps> = ({currTheme}) => {


    return (<>
    <div style={{display:"flex", alignItems: "center", justifyContent: "center", borderColor: currTheme ? "#343A40" :  "#DFE3E8"}}>
       <h1 style={{color: "#4285F4", fontSize: "20px"}}>All Inbox(s)</h1>
        <ChevronDown color="#4285F4" className='cursor-pointer'/>
    </div>
    <div style={{height: "24px", width: "24px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px", color: "#25262B"}} className={`${ currTheme? 'bg-[#25262B]':'bg-[#]' }`}>
        <img src={refresh} alt="" />
    </div>
    </>
    
    )
}

export default InboxHeader
