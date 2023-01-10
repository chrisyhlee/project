import React, {useState} from "react";
import elephant from '../assets/elephant.jpeg'

const Elephant = () => {
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
        <div onClick={msg} className="elephant" style={{backgroundImage: 'url(' + elephant + ')', backgroundSize: 'cover', backgroundPositionY: '65%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'white', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>14Feb2020
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>Right before deployment! One of my favorite days</div>}
        </div>
        </>
    )
}

export default Elephant