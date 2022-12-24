import React from 'react'
import styles from "../SearchBox/SearchBox.module.css"

export default function SearchBox() {
    return (
        <div className={styles.searchBox}>
            <input type="text" /><br/>
            <input type="checkbox" />
            <label htmlFor="checkbox">This is for checkbox</label>
            
        </div>
    )
}
