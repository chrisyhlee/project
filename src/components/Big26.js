import React, {useState} from "react";
import big26 from '../assets/big26.jpeg'

const Big26 = () => {
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
        <div onClick={msg} className="big26" style={{backgroundImage: 'url(' + big26 + ')', backgroundSize: 'cover', backgroundPositionY: '50%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'white', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>08Jul2021
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>The big 26! Thanks for this day! Mathhew was wayyyy too gone</div>}
        </div>
        </>
    )
}

export default Big26