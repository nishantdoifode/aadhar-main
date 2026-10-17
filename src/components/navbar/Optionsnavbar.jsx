import React from 'react'
import { useNavigate,Link } from 'react-router-dom'  
export const Optionsnavbar = () => {
  return (
         <div id="details">
        <div>
          <li> <Link to='/Ecosystem'>Aadhaar Seva Kendra |</Link></li>
          <li>
            <span><a href="/imgs/Aadhaar_Enrolment__and__Update__-__English.pdf" target="_blank" rel="noopener noreferrer">Aadhaar Enrolment & Update Charges |</a></span>
          </li>
          <li><a href="/imgs/Form_1_Eng.pdf" target="_blank" rel="noopener noreferrer">Enrolment & Update Forms |</a></li>
        </div>
        <div>
          <li><a href="/imgs/List_of_Supporting_Document_for_Aadhaar_Enrolment_and_Update.pdf" target="_blank" rel="noopener noreferrer">List of Acceptable Documents For Aadhaar Enrolment & update |</a></li>
          <li>Download mAadhaar. Android |</li>
          <li>iOS |</li>
          <li>Tender |</li> |<li>Circulars, Notifications & OMs |</li>
          <li>
            Grievance <span>(NEET/Competitive Exam)</span>/ Feedback |
          </li>
          <li>RTI |</li>
          <li>OVSE Registration |</li>
        </div>
      </div>
  )
}
export default Optionsnavbar
