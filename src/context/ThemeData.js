import React, { useState } from 'react';
import ThemeContext from './ThemeContext'
import Form from '../Form';


const ThemeData = (props) => {
    const [theme, setTheme] = useState('light');

  return (
       <div>
        
       <ThemeContext.Provider value={theme} >
        <Form/>
       <label>
       <input
         type="checkbox"
         checked={theme === 'dark'}
         onChange={(e) => {
           setTheme(e.target.checked ? 'dark' : 'light')
         }}
       />

       Use dark mode
     </label>

    













          {props.children}
       
       </ThemeContext.Provider>
       
    
       </div>
  )
}

export default ThemeData