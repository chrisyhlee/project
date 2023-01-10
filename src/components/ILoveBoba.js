import React, {useState} from "react";
import iloveboba from '../assets/iloveboba.jpeg'

const ILoveBoba = () => {
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
        <div onClick={msg} className="iloveboba" style={{backgroundImage: 'url(' + iloveboba + ')', backgroundSize: 'cover', backgroundPositionY: '10%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'white', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>04Aug2019
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>TPumps was alright.....</div>}
        </div>
        </>
    )
}

export default ILoveBoba