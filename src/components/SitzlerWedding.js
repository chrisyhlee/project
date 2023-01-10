import React, {useState} from "react";
import sitzlerwedding from '../assets/sitzlerwedding.jpeg'

const Sitzler = () => {
    const [message, setMessage] = useState(false)

    const msg = () => {
        if (message === false) {
        setMessage(true)
      } else {
        setMessage(false)
      }
    }

    return (
        <>
        <div>
        <div onClick={msg} className="sitzlerwedding" style={{backgroundImage: 'url(' + sitzlerwedding + ')', backgroundSize: 'cover', backgroundPositionY: '25%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'black', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>26Oct2017
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>Great memory, but RIP suit am I right?</div>}
        </div>
        </>
    )
}

export default Sitzler