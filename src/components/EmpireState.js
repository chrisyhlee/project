import React, {useState} from "react";
import empirestate from '../assets/empirestate.jpeg'

const EmpireState = () => {
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
        <div onClick={msg} className="empirestate" style={{backgroundImage: 'url(' + empirestate + ')', backgroundSize: 'cover', backgroundPositionY: '25%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'black', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>21Nov2017
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>Could've gotten up there for free, but still worth!</div>}
        </div>
        </>
    )
}

export default EmpireState