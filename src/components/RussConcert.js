import React, {useState} from "react";
import russconcert from '../assets/russconcert.jpeg'

const RussConcert = () => {
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
        <div onClick={msg} className="russ" style={{backgroundImage: 'url(' + russconcert + ')', backgroundSize: 'cover', backgroundPositionY: '70%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'white', border: '2px solid black'}}>04June2017
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>Back when I could actually stand for a while without my back hurting!</div>}
        </div>
        </>
    )
}

export default RussConcert