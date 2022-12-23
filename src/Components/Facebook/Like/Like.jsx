import React from 'react'
import { AiFillLike } from 'react-icons/ai';
import styles from './like.module.css'

export default function Like() {
    const [countLike, setCountLike] = React.useState(0)

    const handleLike = (e) => {
        setCountLike(countLike + 1)
        e.target.style.color = 'red'

    }

    return (
        <div>
            <button type='button' onClick={handleLike} className={styles.btn}><AiFillLike /></button>
            <h2>{countLike}</h2>
            
        </div>
    )
}
