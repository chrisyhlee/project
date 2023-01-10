import React, {useState} from "react";
import paowedding from '../assets/paowedding.jpg'

const PaoWedding = () => {
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
        <div onClick={msg} className="paowedding" style={{backgroundImage: 'url(' + paowedding + ')', backgroundSize: 'cover', backgroundPositionY: '50%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'white', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>30Sep2022
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>Wow 2 in a row, guess they really made it in our lives</div>}
        </div>
        </>
    )
}

export default PaoWedding