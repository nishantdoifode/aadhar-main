import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Optionnavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Mega menu data (Aapka same data, koi change nahi)
  const megaMenuData = {
    myAadhaar: {
      title: "My Aadhaar",
      sections: [
        {
          heading: " Update Your Aadhaar",
          links: [
            { text: "Document Update", url: "/Dashboard?service=doc_update" },
            { text: "Update Demographics Data & Check Status", url: "/Dashboard?service=doc_update" },
            { text: "Enrolment And Update Forms", url: "#" },
            { text: "Aadhaar Enrolment And Upgrade Charges", url: "#" },
            { text: "Aadhaar Update History", url: "#" },
            { text: "Update Aadhaar at Enrolment/Update Center", url: "#" }
          ]
        },
        {
          heading: "Get Aadhaar",
          links: [
            { text: "Book an Appointment", url: "/Dashboard?service=book_appointment" },
            { text: "Check aadhaar Status", url: "/Dashboard?service=enrolment_status" },
            { text: "Download Aadhaar", url: "/Dashboard?service=download" },
            { text: "Order PVC Card", url: "/Dashboard?service=pvc_status" },
            { text: "Check Aadhaar PVC Order Status", url: "/Dashboard?service=pvc_status" },
            { text: "Locate An Enrolment Center in Bhuvan Aadhar", url: "/Dashboard?service=locate_center" }
          ]
        },
        {
          heading: "Aadhaar Services",
          links: [
            { text: "Verify an Aadhaar number", url: "/Dashboard?service=check_validity" },
            { text: "Verify Email/number", url: "/Dashboard?service=verify_contact" },
            { text: "Retrieve Lost an Forgotten UID/EID", url: "/Dashboard?service=retrieve_uid" },
            { text: "Virtual ID (VID)", url: "/Dashboard?service=vid_generator" },
            { text: "Aadhaar Paperless Offline eKYC", url: "/Login" },
            { text: "Bank Seeding Status ", url: "/Dashboard?service=bank_status" },
            { text: "Check Aadhaar Validity ", url: "/Dashboard?service=check_validity" },
            { text: "Lock/Unlock Biometrics", url: "/Dashboard?service=lock_unlock" },
            { text: "Aadhaar Authentication History ", url: "/Login" },
            { text: "aadhaar Lock and Unlock Service ", url: "/Dashboard?service=lock_unlock" },
            { text: "Aadhaar Service on SMS ", url: "#" },
          ]
        },
        {
          heading: "About Aadhaar",
          links: [
            { text: "Features Of Aadhaar", url: "#" },
            { text: "Useage of aadhaar", url: "#" },
            { text: "Enrolment aadhaar", url: "#" },
            { text: "aadhaar Generation", url: "#" },
            { text: "Updating Data on Aadhaar", url: "#" },
            { text: "Security On UIDAI System", url: "#" },
            { text: "aadhaar Myth Busters", url: "#" },
          ]
        },
        {
          heading: "Aadhaar On Your Mobile",
          links: [
            { text: "mAadhar For Mobile", url: "#" },
            { text: "mAadhar App Links For lOS", url: "#" },
          ]
        }
      ]
    },
    aboutUidai: {
      title: "About UIDAI",
      sections: [
        {
          heading: "Organization",
          links: [
            { text: "About Us", url: "#" },
            { text: "Vision & Mission", url: "#" },
            { text: "Leadership", url: "#" },
            { text: "Organization Structure", url: "#" }
          ]
        },
        {
          heading: "Legal",
          links: [
            { text: "Aadhaar Act", url: "#" },
            { text: "Regulations", url: "#" },
            { text: "Circulars", url: "#" },
            { text: "Notifications", url: "#" }
          ]
        },
        {
          heading: "Careers",
          links: [
            { text: "Current Openings", url: "#" },
            { text: "How to Apply", url: "#" },
            { text: "Recruitment Process", url: "#" }
          ]
        },
        {
          heading: "Transparency",
          links: [
            { text: "RTI", url: "#" },
            { text: "Tenders", url: "#" },
            { text: "Annual Reports", url: "#" },
            { text: "Financial Statements", url: "#" }
          ]
        }
      ]
    },
    ecosystem: {
      title: "Ecosystem",
      sections: [
        {
          heading: "Partners",
          links: [
            { text: "Enrolment Agencies", url: "#" },
            { text: "Authentication User Agencies", url: "#" },
            { text: "KYC User Agencies", url: "#" },
            { text: "Requesting Entities", url: "#" }
          ]
        },
        {
          heading: "Developers",
          links: [
            { text: "API Documentation", url: "#" },
            { text: "Developer Guidelines", url: "#" },
            { text: "Testing Facility", url: "#" },
            { text: "SDK Download", url: "#" }
          ]
        },
        {
          heading: "Authentication",
          links: [
            { text: "Authentication Types", url: "#" },
            { text: "eKYC Services", url: "#" },
            { text: "Offline Verification", url: "#" }
          ]
        },
        {
          heading: "Resources",
          links: [
            { text: "Technical Specifications", url: "#" },
            { text: "Best Practices", url: "#" },
            { text: "FAQs for Partners", url: "#" }
          ]
        }
      ]
    },
    media: {
      title: "Media & Resources",
      sections: [
        {
          heading: "News & Updates",
          links: [
            { text: "Press Releases", url: "#" },
            { text: "News", url: "#" },
            { text: "Events", url: "#" },
            { text: "Photo Gallery", url: "#" }
          ]
        },
        {
          heading: "Publications",
          links: [
            { text: "Newsletters", url: "#" },
            { text: "Annual Reports", url: "#" },
            { text: "Brochures", url: "#" },
            { text: "Posters", url: "#" }
          ]
        },
        {
          heading: "Downloads",
          links: [
            { text: "Forms", url: "#" },
            { text: "User Manuals", url: "#" },
            { text: "Templates", url: "#" },
            { text: "Software", url: "#" }
          ]
        },
        {
          heading: "Awareness",
          links: [
            { text: "Videos", url: "#" },
            { text: "Infographics", url: "#" },
            { text: "Social Media", url: "#" },
            { text: "Campaigns", url: "#" }
          ]
        }
      ]
    },
    contact: {
      title: "Contact & Support",
      sections: [
        {
          heading: "Help & Support",
          links: [
            { text: "FAQs", url: "#" },
            { text: "Contact Us", url: "#" },
            { text: "Regional Offices", url: "#" },
            { text: "Helpline Numbers", url: "#" }
          ]
        },
        {
          heading: "Grievances",
          links: [
            { text: "File a Complaint", url: "/Dashboard?service=file_complaint" },
            { text: "Track Complaint Status", url: "/Dashboard?service=complaint_status" },
            { text: "Grievance Redressal", url: "#" }
          ]
        },
        {
          heading: "Feedback",
          links: [
            { text: "Submit Feedback", url: "#" },
            { text: "Suggestions", url: "#" },
            { text: "Rate Our Services", url: "#" }
          ]
        },
        {
          heading: "Special Support",
          links: [
            { text: "NEET/Exam Grievance", url: "#" },
            { text: "Senior Citizen Support", url: "#" },
            { text: "Disability Support", url: "#" }
          ]
        }
      ]
    }
  };

  // Mobile par menu band karne ke liye function
  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  return (
    <>
      <nav id="optionnav">
        
        {/* ⭐ HAMBURGER BUTTON (Mobile Only) */}
        <div className="btn" onClick={() => setIsOpen(!isOpen)} style={{ backgroundColor: 'transparent' }}>
  <div style={{ backgroundColor: '#02084d' }}></div>
  <div style={{ backgroundColor: '#02084d' }}></div>
  <div style={{ backgroundColor: '#02084d' }}></div>
</div>
        {/* ⭐ MAIN UL (Mobile me .mobile-show class se slide hoga) */}
        <ul className={isOpen ? "mobile-show" : ""}>
          
          {/* My Aadhaar */}
          <li
            onMouseEnter={() => setActiveMenu('myAadhaar')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/Home" onClick={closeMobileMenu}>
              My Aadhaar
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 4L6 9L11 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>

          {/* About UIDAI */}
          <li
            onMouseEnter={() => setActiveMenu('aboutUidai')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/About" onClick={closeMobileMenu}>
              About UIDAI
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 4L6 9L11 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>

          {/* Ecosystem */}
          <li
            onMouseEnter={() => setActiveMenu('ecosystem')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/Ecosystem" onClick={closeMobileMenu}>
              Ecosystem
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 4L6 9L11 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>

          {/* Media */}
          <li
            onMouseEnter={() => setActiveMenu('media')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/Media" onClick={closeMobileMenu}>
              Media & Resources
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 4L6 9L11 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>

          {/* Contact */}
          <li
            onMouseEnter={() => setActiveMenu('contact')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/Contact" onClick={closeMobileMenu}>
              Contact & Support
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 4L6 9L11 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>

          {/* Search */}
          <li>
            <input type="search" id="search" placeholder="Search" />
            <input type="button" value="Go" />
          </li>
        </ul>

        {/* ⭐ MEGA MENU RENDER LOGIC */}
        {activeMenu && megaMenuData[activeMenu] && (
          <div 
            className="mega-menu"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <h2 className="mega-menu-title">{megaMenuData[activeMenu].title}</h2>
            
            <div className="mega-menu-content">
              {megaMenuData[activeMenu].sections.map((section, idx) => (
                <div className="mega-menu-column" key={idx}>
                  <h3>{section.heading}</h3>
                  <ul>
                    {section.links.map((link, linkIdx) => (
                      // Agar URL '#' nahi hai (matlab React route hai) toh <Link>, warna <a>
                      link.url.startsWith('/') ? (
                        <li key={linkIdx}>
                          <Link to={link.url} onClick={closeMobileMenu}>{link.text}</Link>
                        </li>
                      ) : (
                        <li key={linkIdx}>
                          <a href={link.url}>{link.text}</a>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Optionnavbar;