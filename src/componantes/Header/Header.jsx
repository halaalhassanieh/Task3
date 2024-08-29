import { FaMap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import './Header.css'


const Header = () => {
    return (<>
    <div className="line">
        <div className="left-side">
        <i><MdEmail /></i><div> info@company.com</div>
        <i><FaMap /></i><div>  Sunny Isles Beach, FL 33160 </div>
        </div>
        <div className="right-side">
        <i> <FaFacebook /></i>
          <i> <FaSquareTwitter /></i>
          <i> <FaLinkedin /></i>
            <i> <FaSquareInstagram /></i>
            
        </div>
        <hr />
    </div>
    
    





    </> 


);
}
 
export default Header;
