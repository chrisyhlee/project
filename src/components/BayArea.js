import React, {useState} from "react";
import bayarea from '../assets/bayarea.jpeg'

const BayArea = () => {
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
        <div onClick={msg} className="bayarea" style={{backgroundImage: 'url(' + bayarea + ')', backgroundSize: 'cover', backgroundPositionY: '7%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'white', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>25Nov2018
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>What are you pointing at bruv? 🫰</div>}
        </div>
        </>
    )
}

export default BayArea