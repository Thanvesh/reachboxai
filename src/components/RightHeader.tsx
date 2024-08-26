import { ChevronDown } from 'lucide-react'

const Workspace = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent:"center", alignItems: "center"}}>
        <p style={{fontSize: "14px", width: "120px"}}>Tim's Workspace </p>
        <span> <ChevronDown /></span>
    </div>
  )
}

export default Workspace
