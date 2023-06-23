import React, { useContext } from 'react'
import ThemeContext from './context/ThemeContext'

const Contact = () => {

    const theme = useContext(ThemeContext);
  return (
    <div>Contact  :  {theme} </div>
  )
}

export default Contact