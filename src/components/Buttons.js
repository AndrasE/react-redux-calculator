import React from 'react'
import styles from "../components/styles.module.css"
import chuck from "../images/chuck.svg"

function Buttons(props) {
  return (
    <div className={styles.floatingButtons}>
    <button onClick={props.changeTheme}>☼</button>
    <button>𐚁</button>

    <button> <img src={chuck} alt='chuck'  /></button>
  </div>
  )
}

export default Buttons