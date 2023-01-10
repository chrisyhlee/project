import React, {useState} from "react";
import guns from '../assets/guns.jpeg'

const Guns = () => {
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
        <div onClick={msg} className="guns" style={{backgroundImage: 'url(' + guns + ')', backgroundSize: 'cover', backgroundPositionY: '50%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'white', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>11Jul2020
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>Teaching the fam how to shoot! Fun day!</div>}
        </div>
        </>
    )
}

export default Guns