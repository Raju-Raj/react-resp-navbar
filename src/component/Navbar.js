import React,{useState} from 'react'
import '../App.css'

const Navbar = () => {

    const [showLinks,setShowLinks]=useState(false)

  return (
    <div className='Navbar'>

        <div className='leftSide'>
            <div className='links' id={showLinks ? "hidden" : ""}>
               <a href='/home'>Home</a>
               <a href='/feedback'>Feedback</a>
               <a href='/aboutus'>AboutUs</a>
               <a href='/contact'>Contact</a>
            </div> 
            <button onClick={()=>setShowLinks(!showLinks)}><i className="fa-solid fa-bars"></i></button>
        </div>


        <div className='rightSide'>
            <input type="text" placeholder='Search...'/>
            <button>Search</button>
        </div>

    </div>
  )
}

export default Navbar