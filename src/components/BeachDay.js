import React, {useState} from "react";
import beachday from '../assets/beachday.jpeg'

const BeachDay = () => {
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
        <div onClick={msg} className="beachday" style={{backgroundImage: 'url(' + beachday + ')'}}>26May2017
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>I miss those free movie theater sunglasses...</div>}
        </div>
        </>
    )
}

export default BeachDay