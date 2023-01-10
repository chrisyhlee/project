import React, {useState} from "react";
import korealove from '../assets/korealove.jpg'

const KoreaLove = () => {
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
        <div onClick={msg} className="korealove" style={{backgroundImage: 'url(' + korealove + ')', backgroundSize: 'cover', backgroundPositionY: '70%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'green', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>02Dec2018
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>This place was cute, hair looks full blonde here! 😆</div>}
        </div>
        </>
    )
}

export default KoreaLove