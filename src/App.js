
import React, { useEffect, useState ,Suspense} from 'react'

import './App.css'
import Aboutme from './components/Aboutme'
import ContactMe from './components/ContactMe'
import Header from './components/Header'
import Hero from './components/Hero'
import Loader from './components/Loader'
import Skills from './components/Skills'
import WhatIDo from './components/WhatIDo'
const Projects = React.lazy(()=>import ('./components/Projects' ))  
function App() {
  window.onload= function () {
    window.scrollTo(0,0);
};
  const [loading,setLoading]=useState(false)
    useEffect(()=>{
setTimeout(()=>{
   setLoading(true)
},2500)
return()=>{
  setLoading(false)
}
    },[window.onloadstart])

  return (
    <div className="App">
      {!loading?(<Loader/>):(
        <>
        <Header/>
        
     <Hero/>
     <Aboutme/>
     <WhatIDo/>
     <Skills/>
     <Suspense fallback={<Loader/>}>

     <Projects/>
     </Suspense>
     <ContactMe/>
        </>
      )}
    </div>
  )
}

export default App
