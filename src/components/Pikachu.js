import React, {useState} from "react";
import pikachu from '../assets/pikachu.jpeg'

const Pikachu = () => {
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
        <div onClick={msg} className="pikachu" style={{backgroundImage: 'url(' + pikachu + ')', backgroundSize: 'cover', backgroundPositionY: '50%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'white', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>10Nov2019
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>One of the best stops we made on this trip!</div>}
        </div>
        </>
    )
}

export default Pikachu