import React, {useState} from "react";
import dinomuseum from '../assets/dinomuseum.jpeg'

const DinoMuseum = () => {
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
        <div onClick={msg} className="russ" style={{backgroundImage: 'url(' + dinomuseum + ')', backgroundSize: 'cover', backgroundPositionY: '75%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'black', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>12Aug2017
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>Remember when you took that bite out of that dino?</div>}
        </div>
        </>
    )
}

export default DinoMuseum