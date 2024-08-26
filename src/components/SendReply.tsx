import { ChevronDown, Eye, X, Zap } from 'lucide-react'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import { postMailMasseges } from '../actions/actions';

interface SendReplyProps {
    handleCancel: MouseEventHandler<HTMLDivElement>;
    currTheme: Boolean;
    singleMail: any;
}

interface InitialStateType {
    toName: string;
    to: string;
    from: string;
    fromName: string;
    subject: string;
    body: string;
    references: string[]; // Array of strings
    inReplyTo: string;
}

const initialState: InitialStateType = {
    toName: "",
    to: "",
    from: "",
    fromName: "",
    subject: "",
    body: "",
    references: [
        "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",
        "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",
        "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",
        "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
    ],
    inReplyTo: "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
};

const SendReply: React.FC<SendReplyProps> = ({ currTheme, handleCancel, singleMail }) => {
    const [formData, setFormData] = useState<InitialStateType>(initialState);

    // Retrieve token from localStorage
    const token = localStorage.getItem("reachinbox-auth") || "";

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            toName: singleMail.toEmail,
            fromName: singleMail.fromEmail,
            to: singleMail.toEmail,
            from: singleMail.fromEmail
        }));
    }, [singleMail]);

    const handleSubmit = () => {
        if (!token) {
            alert("No authentication token found. Please log in again.");
            return;
        }

        postMailMasseges(singleMail.threadId, formData)
            .then(() => {
                alert("Reply has been sent");
            })
            .catch(err => {
                console.error("Error:", err);
                alert("Failed to send reply");
            });
    };

    return (
        <div className='flex flex-col w-full h-full'>
            <div>
                <div className={`h-10 flex justify-between px-8 py-2 text-[16px] ${currTheme ? 'bg-[#23272C]' : 'bg-white'}`}>
                    <p>Reply</p>
                    <p onClick={handleCancel} className='cursor-pointer'><X /></p>
                </div>
                <hr className='border-t border-gray-700' />
                <div className={`text-[12px] h-10 flex pt-2 px-8 py-2 h-7 items-center gap-2`}>
                    <p className='text-gray-400'>To :- </p>
                    <input
                        type="text"
                        placeholder=''
                        value={formData.to}
                        className={`${currTheme ? 'bg-[#141517]' : "bg-white"} outline-none`}
                        onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                    />
                </div>
                <hr className='border-t border-gray-700' />
                <div className={`text-[12px] h-10 flex pt-2 px-8 py-2 h-7 items-center gap-2`}>
                    <p className='text-gray-400'>From :- </p>
                    <input
                        type="text"
                        placeholder=''
                        value={formData.from}
                        className={`${currTheme ? 'bg-[#141517]' : "bg-white"} outline-none`}
                        onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                    />
                </div>
                <hr className='border-t border-gray-700' />
                <div className={`text-[12px] h-10 flex pt-2 px-8 py-2 h-7 items-center gap-2`}>
                    <p className='text-gray-400'>Subject :- </p>
                    <input
                        type="text"
                        placeholder=''
                        value={formData.subject}
                        className={`${currTheme ? 'bg-[#141517]' : "bg-white"} outline-none`}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                </div>
                <hr className='border-t border-gray-700' />
                <div className={`text-[12px] p-2 text-left`}>
                    <textarea
                        placeholder='Hello John...'
                        value={formData.body}
                        className={`ml-6 h-[250px] w-[500px] outline-none ${currTheme ? 'bg-[#141517]' : 'bg-white'}`}
                        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                    />
                </div>
            </div>
            <div className='h-[54px] 0 w-full'>
                <hr className='border-t border-gray-700 mb-2' />
                <div className='flex text-[12px] gap-1'>
                    <div className='w-[100px] h-8 bg-[#4B63DD] flex items-center ml-4 mb-3 rounded gap-1 flex justify-center gap-2 cursor-pointer items-center'>
                        <button className='text-white' onClick={handleSubmit}>Send</button>
                        <ChevronDown color={"white"} />
                    </div>
                    <div className='w-[100px] h-8 flex items-center mb-3 rounded gap-1 flex justify-center cursor-pointer items-center'>
                        <Zap className='h-4' />
                        <button>Variables</button>
                    </div>
                    <div className='w-[120px] h-8 flex items-center mb-3 rounded gap-1 flex justify-center cursor-pointer items-center'>
                        <Eye className='h-4' />
                        <button>Preview Email</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SendReply;
