import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Theme from '../components/Theme';
import Workspace from '../components/RightHeader';
import { useLocation} from 'react-router';
import { jwtDecode } from "jwt-decode";
import { ChevronDown } from 'lucide-react';
import { deleteMailResponse, getMailList, getMailMasseges } from '../actions/actions';
import InboxEmailCard from '../components/InboxEmailCard';
import InboxHeader from '../components/InboxHeader';
import LoadingPage from '../components/SplashPage';
import SearchBar from '../components/SearchBar';
import UserDetails from '../components/UserDetails';
import ReplySection from '../components/ReplySection';
import { Modal } from './Modal';

const Dashboard = () => {
    const [currTheme, setcurrTheme] = useState<Boolean>(true);
    const [data, setData ]= useState([]);
    const [singleMail, setSingleMail ]= useState<any>({});
    const [render, setRender]= useState<Boolean>(false)


    const location = useLocation();
    const [showEmailDesktop, setShowEmailDesktop]= useState(0)

    let token:string =localStorage.getItem("reachinbox-auth") || takeToken();
    console.log(token)
    
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


    const openModal = (): void => {
      setIsModalOpen(true);
    };
  
    const closeModal = (): void => {
      setIsModalOpen(false);
    };

    const fetchData =()=>{
        getMailList(token).then(res => {
           setData(res);
            if (res?.length > 0) {
               setSingleMail(res[0]);
                const id: number = res[0]?.threadId;
                if (id !== undefined)  return getMailMasseges(id);
                else  console.log("error id not found")
                
            } else  console.log("Email not Found")
            
        }).then(messages => setSingleMail(messages))
        .catch(error => console.error('Error:', error));
    }
    
    useEffect(()=>{
      token = location.search.split("?token=")?.join("");
      if(token)
      {
        let ParseData = jwtDecode(token);
        localStorage.setItem("reachinbox-auth",JSON.stringify(token));
        localStorage.setItem("reachinbox-auth-firstname",JSON.stringify((ParseData as any).user.firstName));
        localStorage.setItem("reachinbox-auth-lastname",JSON.stringify((ParseData as any).user.lastName));
        localStorage.setItem("reachinbox-auth-email",JSON.stringify((ParseData as any).user.email));
      }
      fetchData()
    },[token,render]);
  
    function takeToken(): string {
        try {
            const token = localStorage.getItem("reachinbox-auth");
            return token ? JSON.parse(token) : ""; 
        } catch (e) {
            console.log("Error:", e);
            return ""; 
        }
    }

    useEffect(()=>{},[singleMail,showEmailDesktop,isModalOpen])
   
    const handleChangeEmail = (id: number) => {
        getMailMasseges(id).then(messages =>{
            setSingleMail(messages);
        }) 
        .catch(error => console.error('Error:', error));
    }


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if(event.key === "d" || event.key === "D")
          {
            openModal();
          }
        };
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [isModalOpen]);

    const handleChange=(index:number)=> setShowEmailDesktop(index);

    const deleteEmail =()=>{
        const id:number = singleMail[0].threadId
        deleteMailResponse(id).then((res)=>{
            alert(`The ${id} has been Deleted Successful`);
            setRender(!render)
            closeModal()
        }).catch(err => alert("Error Please try again"))
        
    }


    let firstName = localStorage.getItem('reachinbox-auth-firstname');
    firstName = firstName ? JSON.parse(firstName):''
    let lastName = localStorage.getItem('reachinbox-auth-lastname') 
    lastName = lastName ? JSON.parse(lastName):''
    const username = firstName ? (firstName[0] + (lastName ? lastName[0] : '')) : '';
 
    return (
        <div style={{width: "100%"}} className={`w-full h-full ${currTheme ? "bg-black" : "bg-white"} ${currTheme ? "text-white" : "text-black"} h-10 flex`}>
            <div style={{width: "56px", height: "100vh"}}>
                <Sidebar currTheme={currTheme} username = {username} showEmailDesktop={showEmailDesktop} handleChange={handleChange} />
            </div>
            <div style={{margin: "0"}}>
                <div style={{display: "flex", flexDirection: "row", border: "2px solid" ,borderColor: currTheme ? "#343A40" :  "#DFE3E8", justifyContent: "center", width: "1484px", alignItems: "center", height: "64px", background: currTheme? "#1F1F1F" : "white"}}>
                    <p style={{paddingLeft: "30px"}} className={`w-full text-left text-xl ${currTheme ? "text-white-900" : "text-black-900"} `}>Onebox</p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent:"center", alignItems: "center", marginRight: "20px"}}>
                      <Theme currTheme={currTheme} onClick = {()=> setcurrTheme(!currTheme)} />
                      <Workspace/>
                    </div>
                </div>
                {
                showEmailDesktop !==5? <LoadingPage/>
                : <div className={`flex borderColor: currTheme ? "#343A40" :  "#DFE3E8"`}>
                    <div style={{marginLeft: "30px", marginRight: "30px", width: "280px"}}>
                        <div className='flex justify-between mt-4 items-center'>
                           <InboxHeader currTheme={currTheme}/>
                        </div>
                        <p className='text-left  text-[14px] mt-2.5'>25/25 <span className=' text-[#7F7F7F]'>Inboxes selected</span></p>
                        <div style={{marginTop: "20px", marginBottom: "20px"}}>
                           <SearchBar currTheme ={currTheme}/>
                        </div>
                        <div className='flex justify-between  text-[14px]'>
                            <div className='flex items-center gap-2 '>
                                <p className={`text-blue-500 w-8 h-7 pt-0.5 rounded-2xl ${ currTheme? 'bg-[#25262B]':'bg-[#e1e7ee]' }`}>26</p>
                                <p>New Replies</p>
                            </div>
                            <div style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                                <p>Newest</p>
                                <ChevronDown/>
                            </div>
                        </div>
                        <hr className='mt-2.5'/>
                        <div className=' text-left'>
                            {
                                data?.length >0 && data.map((item:any) =>{
                                    return <div key={item.id}>
                                        <InboxEmailCard currTheme = {currTheme} {...item} handleChangeEmail={handleChangeEmail} onDelete={openModal}/>
                                        <hr />
                                    </div>
                                })
                                // <div>
                                //     <InboxEmailCard currTheme={currTheme} handleChangeEmail={handleChangeEmail} fromEmail={'rajeshkumar@gmail.com'} subject={'Hello world world'} id={0} threadId={0}/>
                                //     <hr />
                                // </div>
                            }
                        </div>
                    </div>
                    <ReplySection currTheme={currTheme} singleMail = {singleMail}/>
                    <UserDetails currTheme={currTheme}/>
                </div>
                }
            </div>
            <div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className='w-[440px] h-[240px] text-white '>
                        <div className=' h-full '>
                            <h1 className='text-[24px] font-bold mt-8'>Are you Sure ?</h1>
                            <p className='mt-8 text-[#E8E8E8]'>Your selected email will be deleted.</p>
                            <div className='mt-8 flex justify-center gap-5 '>
                                <button className='w-[120px] h-12 bg-[#25262B] ' onClick={closeModal}>Cancel</button>
                                <button className='w-[140px] h-12 bg-[#FA5252] ' onClick={deleteEmail}>Delete</button>
                            </div>
                        </div>
                    </div>
                </Modal>

            </div>
        </div>
    );
}

export default Dashboard
