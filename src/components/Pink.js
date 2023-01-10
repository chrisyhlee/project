import React, {useState} from "react";
import pink from '../assets/pink.jpeg'

const Pink = () => {
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
        <div onClick={msg} className="pink" style={{backgroundImage: 'url(' + pink + ')', backgroundSize: 'cover', backgroundPositionY: '30%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'white', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>10Nov2019
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>Oh look, the place we went broke</div>}
        </div>
        </>
    )
}

export default Pink