import React, { useContext } from 'react'
import ThemeContext from './context/ThemeContext';

const Panel = ({title , children}) => {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <div>
    <section className={className}>
    <h1>{title}</h1>
    {children}
  </section>
    
    </div>
  )
}

export default Panel;