import React from 'react'
import NavBar from '../Navbar/NavBar'
import Footer from '../Footer/Footer'

import Medical from '../Medical/Medical'

import Engineer from '../Engineering/Engineer'


const Pages = () => {
  return (
    <div>
      <NavBar/>
      <Engineer/>
      <Medical/>
      
      <Footer/>
    </div>
  )
}

export default Pages
