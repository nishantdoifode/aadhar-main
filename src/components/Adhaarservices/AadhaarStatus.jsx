import React from 'react';
import { Link } from 'react-router-dom';
import SeprateNavbar from './SeprateNavbar';
import FaqSidebar from './FaqSidebar';
import Captcha from '../Captcha';
const AadhaarStatus = () => {
  return (
    <>
      <SeprateNavbar />
      <Link to="/DashBoard">Dashboard</Link>

      <div className="page-container enrolment-status-view animate-fade-in">
        <div className="form-group">
          <h4>Check Enrolment OR Update Status</h4>
          <p>Check if Your Aadhaar Is Genrated Or Updated</p>
          <p>The 14 Digit Enrolment Number Printed On Acknowledgement Slip While physically Visiting Enrolment / Update Center 1234/12345/12345</p>
          <p>
            in Case Of You Lost EID You Can Retrive Lost or Fogotten EID By Your Registered Mobile Number or Email{" "}
            <a href="#">Click here</a> To Retrive EID
          </p>

          <div className="inline-group font-medium my-2">
            <input type="radio" name="idType" defaultChecked /> Enrolment Number
            <input type="radio" name="idType" /> SRN
            <input type="radio" name="idType" /> URN
            <input type="radio" name="idType" /> SID
          </div>

          <input type="text" className="custom-input" placeholder="Enter 14 Digit Enrolment Number" />
          <input type="date" className="custom-input" placeholder="Select Date" />
          <input type="time" className="custom-input" placeholder="Select Time" />

          <div className="inline-group font-medium my-2">
            <input type="text" className="custom-input" placeholder="Enter Captcha" />
            <Captcha />
          </div>

          <button className="submit-btn mt-4">Send OTP</button>
        </div>

        <FaqSidebar faqKey="enrolment_status" />
      </div>
    </>
  );
};

export default AadhaarStatus;