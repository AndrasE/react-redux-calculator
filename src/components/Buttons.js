import React from 'react'
import styles from "../components/styles.module.css"

function Buttons(props) {
  return (
    <div className={styles.floatingButtons}>
    <button onClick={props.changeTheme}>☼</button>
    <button>𐚁</button>
    <button>ⓘ</button>
  </div>
  )
}

export default Buttons