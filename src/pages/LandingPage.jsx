import React from 'react'
import Home from "../components/Home"
import About from "../components/About"
import Services from "../components/Services"
import Process from "../components/Process"
import Contact from "../components/Contact"
const LandingPage = () => {
  return (
    <section>
        <Home/>
        <About/>
        <Services/>
        <Process/>
        <Contact/>
    </section>
  )
}

export default LandingPage