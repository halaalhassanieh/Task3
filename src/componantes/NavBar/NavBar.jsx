import { useState } from "react";
import { IoCalendarClear } from "react-icons/io5";
import { Link } from "react-router-dom";
import './NavBar.css'
import { FaBars } from "react-icons/fa";


const NavBar = () => {
    const [Show,setShow]=useState(true)
    const [links] =useState([
        {
            path:"/",
            label:"Home"
        },
        {
            path:"/properties",
            label:"Properties"
        },
        {
            path:"/propertyDetails",
            label:"Property Details"
        },
        {
            path:"/contactUs",
            label:"Contact Us"
        },

    ])

    return ( <>
     
     <div>

     <nav className="NavBar">
        
        <h1>VILLA</h1>
         <div>
        <ul>
          
          {
            links.map((e,i)=>{
                return(
                    <li key={i}>
                        <Link to={e.path} className="navItems" >{e.label}</Link>
                    </li>
                )
            })
          }
        
        </ul>

        <button className="schedule"> <span><IoCalendarClear/></span>Schedule a visit</button>
        <button className="bars" onClick={()=>setShow(!Show )}>
        <FaBars />
        </button>
        </div>
     </nav>
     
     <div className={(Show)?'nav-menu ':'nav-menu active'}>
     <ul>
          
          {
            links.map((e,i)=>{
                return(
                    <li key={i}>
                        <Link to={e.path} className="navItems" >{e.label}</Link>
                    </li>
                )
            })
          }
        
        </ul>

        <button className="schedule"> <span><IoCalendarClear/></span>Schedule a visit</button>
     </div>
           
    </div>
    </> );

}
 
export default NavBar;


