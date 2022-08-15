import React from 'react'
//passing props
function NavBar(props) {
  return (
    <nav>
    <h1>{props.title}</h1>
    </nav>
  )
}

export default NavBar