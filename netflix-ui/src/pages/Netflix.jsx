import React, { useState } from 'react'
import Navbar from '../components/Navbar';


export const Netflix = () => {
  const [isScrolled,setIsScrolled] = useState(false)
  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset=0 ? false:true);
    return ()=> (window.onscroll=null)
  }
  return (
    <div>
      <Navbar isScrolled={isScrolled} />
    </div>
  )
}
