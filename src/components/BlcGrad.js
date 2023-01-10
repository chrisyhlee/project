import React, {useState} from "react";
import promotionday from '../assets/promotionday.jpeg'

const BlcGrad = () => {
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
        <div onClick={msg} className="promotionday" style={{backgroundImage: 'url(' + promotionday + ')', backgroundSize: 'cover', backgroundPositionY: '7%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'black', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>01May2018
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>Promoted to sergeant! Why aren't you at parade rest?!</div>}
        </div>
        </>
    )
}

export default BlcGrad