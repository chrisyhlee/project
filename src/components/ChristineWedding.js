import React, {useState} from "react";
import christinewedding from '../assets/christinewedding.jpg'

const CWedding = () => {
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
        <div onClick={msg} className="christinewedding" style={{backgroundImage: 'url(' + christinewedding + ')', backgroundSize: 'cover', backgroundPositionY: '50%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'white', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>06Jun2021
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>Beautiful 🥰</div>}
        </div>
        </>
    )
}

export default CWedding