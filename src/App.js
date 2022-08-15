import React from 'react'
import NavBar from './component/NavBar'
import Todo from './component/Todo'

function App() {
  
  let title ="My sctivities to do for the week"
  return (
    <div>
    <NavBar title={title} />
    <main>
    <Todo title="learning react" datetime="15th August, 2022" />
    <Todo title="learn HTML" datetime="20th August, 2022" />
    <Todo title="Appointment with the doctor" datetime="29th August, 2022" />
    <Todo title="P T A meeting" datetime="30th August, 2022" />
    <Todo title="Road Trip" datetime="1st September, 2022" />
    
    </main>
   
    </div>
  )
}

export default App