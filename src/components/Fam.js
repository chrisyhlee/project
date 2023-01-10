import React, {useState} from "react";
import fam from '../assets/fam.jpg'

const Fam = () => {
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
        <div onClick={msg} className="fam" style={{backgroundImage: 'url(' + fam + ')', backgroundSize: 'cover', backgroundPositionY: '50%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'black', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>01Jan2022
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>New Years in dirty Jersey with the fam!</div>}
        </div>
        </>
    )
}

export default Fam