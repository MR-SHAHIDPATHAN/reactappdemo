import React from 'react'
import Button from './Button'
import Panel from './Panel'

const Form = ({children}) => {
  return (
  <div>


  <Panel title="Welcome">
  <Button>Sign up</Button>
  <Button>Log in</Button>
  </Panel>
  
  </div>



  )
}

export default Form