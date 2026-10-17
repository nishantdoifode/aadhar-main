import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
const SeprateNavbar = () => {
  return (
    <>
    <nav className="snav">

    <div><img src="/imgs/uidai.svg" alt="" /></div>
    <div><h3>Unique Identification Authority of India</h3> </div>
    <div><img src="/imgs/adharlogo.gif" alt="" /></div>

    </nav>
    
    <div className="dashboardnav2">
   <div><Link to="/Dashboard" className="Dashlink"><img src="/imgs/dashboard.21335c2c89af71912adf700d228cbecd.svg" alt="" /> MyAadhaar</Link></div>
   <div><img src="/imgs/LanguageSelector.dd14b8054218a45a518df6f26aaff418 (1).svg" alt="" /><select name="" id="">
    <option value="option1">English</option>
    <option value="option2">हिन्दी</option>
    <option value="option3">తెలుగు</option>
    <option value="option1">Tamil</option>
    <option value="option2">Telugu</option>
    <option value="option3">Assamese</option>
    <option value="option1">Bengali</option>
    <option value="option2">Gujarati</option>
    <option value="option3">Kannada</option>
    <option value="option1">Malayalam</option>
    <option value="option2">Marathi</option>
    <option value="option3">Odia</option>
    <option value="option1">Punjabi</option>
    <option value="option2">Urdu</option>
    <option value="option3">Kashmiri</option>
   </select> </div>
   </div>

    
    
    </>
  )
}

export default SeprateNavbar