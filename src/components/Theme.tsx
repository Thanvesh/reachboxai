import React, { MouseEventHandler} from 'react'



interface themeProps {
    currTheme: Boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}
const Theme: React.FC<themeProps> = ({ currTheme, onClick }) => {
    return (
        <div style={{ marginRight: "25px", width: "51px", height: "30px", background: currTheme ? "#222426" : "#fff", border: "2px solid", borderColor: currTheme ? "#343A40" : "#A3A3A3", transition: "all 1s ease" }} className={`border cursor-pointer ${currTheme ? "border-white-2" : "border-black-2"} rounded-3xl flex justify-center items-center `} onClick={onClick}>
            {!currTheme ?
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "3px",}}>
                    <p style={{ paddingBottom: "4px", paddingRight: "2px"}}>🌙</p>
                    <div style={{ background: "#A3A3A3", height: "16px", width: "16px", borderRadius: "10px", marginRight: "5px" }}></div>
                </div>
                : <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                    <div style={{ background: "#888686", height: "16px", width: "16px", borderRadius: "10px" }}></div>
                    <p style={{ paddingBottom: "2px" }}>🔆</p>
                </div>
            }

        </div>
    )
}

export default Theme
