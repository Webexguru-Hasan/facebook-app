import React from 'react'
import { AiFillDislike } from 'react-icons/ai';
import styles from './Dislike.module.css'


export default function Dislike() {
    const [countDislike, setCountDislike] = React.useState(0)
    const [isClicked, setIsClicked] = React.useState('')

    const handleDislike = () => {
        setCountDislike(countDislike + 1)
        setIsClicked('#fff') 
       
    }
    return (
        <div>
            <button type='button' onClick={handleDislike} className={styles.btn} style= {{color: isClicked}}><AiFillDislike /></button>
            <h2>{countDislike}</h2>

            
        </div>
    )
}
