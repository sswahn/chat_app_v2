import { useState } from 'react'
import styles from './main.module.css'
import Header from '../header/Header'
import Feed from './Feed'
import Input from './Input'
import Login from '../login/Login'

export default () => {
  const [state, setState] = useState({ logged_in: true })

  const dragOverHandler = event => {
    // this function prevents default behavior 
    // (Prevents file from being opened)
    event.preventDefault()
  }

  const handleDragAndDrop = event => {
    event.preventDefault()
    const file = event.dataTransfer.items[0].getAsFile()
    console.log('file: ', file)
  }

  return (
    <>
      {state.logged_in 
        ? <main className={styles.main} onDrop={handleDragAndDrop} onDragOver={dragOverHandler}>
            <Header />
            <Feed />
            <Input />
          </main>
        : <Login />
      }
    </>
  )
}