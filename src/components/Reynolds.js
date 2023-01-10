import React, {useState} from "react";
import reynolds from '../assets/reynolds.jpeg'

const Reynolds = () => {
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
        <div onClick={msg} className="reynolds" style={{backgroundImage: 'url(' + reynolds + ')', backgroundSize: 'cover', backgroundPositionY: '10%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'black', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>26Mar2022
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>Our other fam, hope we're close for the rest of our lives</div>}
        </div>
        </>
    )
}

export default Reynolds