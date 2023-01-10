import React, {useState} from "react";
import bigtree from '../assets/bigtree.jpeg'

const BigTree = () => {
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
        <div onClick={msg} className="bigtree" style={{backgroundImage: 'url(' + bigtree + ')', backgroundSize: 'cover', backgroundPositionY: '70%', backgroundPositionX: 'center',width: '250px', height: '200px', color: 'white', border: '2px solid black', backgroundRepeat: 'no-repeat'}}>25Nov2018
        </div>
        {message && <div style={{width: '250px', border: '2px solid black', backgroundColor: 'beige'}}>Too bad we couldn't find any scooters this day so I could break my ankle</div>}
        </div>
        </>
    )
}

export default BigTree