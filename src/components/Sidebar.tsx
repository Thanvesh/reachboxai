import { BarChart2, Home, InboxIcon, List, Mail, Send, UserRoundSearchIcon } from 'lucide-react';
import React, { useState } from 'react';
import Icon from './Icons';
import logoo from "../assets/icons/logoo.png"
import whitelogo from '../assets/whiteLogo.png'
import { useNavigate } from 'react-router';

interface SidebarProps {
    currTheme: Boolean;
    username: string;
    showEmailDesktop: number;
    handleChange: any
}




const Sidebar: React.FC<SidebarProps> = ({ currTheme, username, handleChange }) => {
    const navigate = useNavigate();


    const [activeIcon, setActiveIcon] = useState<number>(0);

    const handleIconClick = (index: number) => {
        setActiveIcon(index);
        handleChange(index)
    };

    const handleLogout = () => {
        ["reachinbox-auth", "reachinbox-auth-firstname", "reachinbox-auth-lastname", "reachinbox-auth-email"].forEach(item => localStorage.removeItem(item));
        navigate('/');
    };
    

    return (
        <div style={{borderRight: "1px solid", borderColor: currTheme ? "#343A40" :  "#DFE3E8", background: currTheme ? "#101113" : "white", height: "100vh", display: "flex", flexDirection: "column",}}>
            <div style={{height:"90vh",display:"Flex",flexDirection:"column",justifyContent:"start",alignItems:"center"}}>
                <div className='w-12 h-[70px] flex justify-center items-center' style={{height: "10%"}}>
                    <img src={currTheme? logoo: whitelogo} alt="logo" className='w-6 h-6 rounded' />
                </div>
                <div style={{ display: "flex", flexDirection: "column",justifyContent:"space-around", alignItems: "center", marginTop: "60px",  height:"70%"}}>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 0} onClick={() => handleIconClick(0)}>
                        <Home style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 1} onClick={() => handleIconClick(1)}>
                        <UserRoundSearchIcon style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 2} onClick={() => handleIconClick(2)}>
                        <Mail style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 3} onClick={() => handleIconClick(3)}>
                        <Send style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 4} onClick={() => handleIconClick(4)}>
                        <List style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 5} onClick={() => handleIconClick(5)}>
                        <InboxIcon style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                    <Icon currTheme={currTheme} color={currTheme ? 'white' : 'black'} isActive={activeIcon === 6} onClick={() => handleIconClick(6)}>
                        <BarChart2 style={{height: "18px"}} color={currTheme ? 'white' : "black"} />
                    </Icon>
                </div>
            </div>

            <div style={{
  width: "40px", /* Set a width equal to height for a circular shape */
  height: "40px", /* Ensure height and width are equal */
  display: "flex",
  alignSelf:"center",
  alignItems: "center",
  justifyContent: "center",
  background: "#054F31",
  borderRadius: "50%", /* Makes the container round */
  textAlign: "center" /* Center text inside the <p> */
}}>
  <p onClick={handleLogout} style={{ margin: 0 }}>RT</p>
</div>
        </div>
    );
}

export default Sidebar;

