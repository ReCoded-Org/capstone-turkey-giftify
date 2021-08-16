import React , {useState}from "react";
import { FiMapPin , FiPhone, FiMail , FiInstagram} from 'react-icons/fi'

import { AiOutlineFacebook } from 'react-icons/ai'

function ConactUS() {

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputMassege, setInputMassege] = useState("");

  return (
    <div>
        <div>
            
       
            <h4> <FiMapPin /> Turkey - Istanbul</h4>
            
            <p><FiPhone /> +90 500 000 00 00</p>
            
            <p><FiMail /> example@gmail.com</p>
            
            <a href = "#"><AiOutlineFacebook /> Giftify</a>
            <br/>
           
           
            <a href = "#"> <FiInstagram /> Giftify</a>
            
        </div>

        <form>
            <label>
            Name
            <input type="text" name="name"  onChange={(e) => setInputName(e.target.value)}
 />
            Email   
            <input type="text" name="email" onChange={(e) => setInputEmail(e.target.value)} />
            Massege
            <input type="text" name="massege" onChange={(e) => setInputMassege(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default ConactUS;
