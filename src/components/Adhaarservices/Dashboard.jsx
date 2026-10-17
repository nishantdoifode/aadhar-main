import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SeprateNavbar from './SeprateNavbar';
import Captcha from '../Captcha';
import FaqSidebar from './FaqSidebar';
import Login from './Login';
import { Link } from 'react-router-dom';

// ===== SUB-PAGES =====

const DownloadAadhaarPage = () => (
  <div className="page-container download-view animate-fade-in">
    <div className="form-group">
      <h4>Select 12 digit Aadhaar number / 16 digit virtual Id(VID) Number / 28 Digit Enrollment ID(EID) Number / 28 Digit Session ID(SID) Number</h4>
      <div className="inline-group font-medium my-2">
        <input type="radio" name="idType" defaultChecked /> Aadhaar Number
        <input type="radio" name="idType" /> Enrollment ID
        <input type="radio" name="idType" /> Virtual ID
        <input type="radio" name="idType" /> SID
      </div>
      <input type="text" className="custom-input" placeholder="Enter Name As Per Aadhaar" />
      <div className="inline-group font-medium my-2">
        <input type="text" className="custom-input" placeholder="Enter Captcha" />
        <Captcha />
      </div>
      <button className="submit-btn mt-4">Send OTP</button>
    </div>
    <FaqSidebar faqKey="download" />
  </div>
);

const RetrieveUidPage = () => (
  <div className="page-container retrieve-view animate-fade-in">
    <div className="form-group">
      <div className="card-forms">
        <h4>Select 12 Digit Aadhaar Number/28 Digit Enrollment ID/SID</h4>
        <div className="inline-group">
          <label>
            <input type="radio" name="idType" defaultChecked /> Aadhaar number
          </label>
          <label style={{ marginLeft: '15px' }}>
            <input type="radio" name="idType" /> Enrollment ID
          </label>
        </div>
        <input type="text" className="custom-input" placeholder="Enter Name As Per Aadhaar" />
        <input type="date" className="custom-input" placeholder="Enter Date Of Birth" />
        <div className="inline-group font-medium my-2">
          <input type="number" className="custom-input" placeholder="Enter Mobile Number" />
          <span className="mx-2 font-bold text-gray-500">OR</span>
          <input type="email" className="custom-input" placeholder="Enter Email Address" />
        </div>
        <div className="inline-group captcha-section">
          <input type="text" className="custom-input" placeholder="Enter Captcha" />
          <Captcha />
        </div>
        <button className="submit-btn mt-4">Send OTP</button>
      </div>
    </div>
    <FaqSidebar faqKey="retrieve_uid" />
  </div>
);

const VerifyContactPage = () => (
  <div className="page-container verify-view animate-fade-in">
    <div className="form-group">
      <h4>Please Enter Required Details To Verify Email / Mobile Number</h4>
      <div className="inline-group font-medium my-2">
        <input type="radio" name="idType" defaultChecked /> Verify Mobile Number
        <input type="radio" name="idType" /> Verify Email Address
      </div>
      <input type="text" className="custom-input" placeholder="Enter Aadhaar Number " />
      <input type="text" className="custom-input" placeholder="Enter Mobile Number " />
      <div className="inline-group font-medium my-2">
        <input type="text" className="custom-input" placeholder="Enter Captcha" />
        <Captcha />
      </div>
      <button className="submit-btn mt-4">Send OTP</button>
    </div>
    <FaqSidebar faqKey="verify_contact" />
  </div>
);

const ReportDeathPage = () => (
  <div className="page-container death-view animate-fade-in">
    <Login />
  </div>
);

const DocumentUpdatePage = () => (
  <div className="page-container doc-update-view animate-fade-in">
    <div className="docupdate">
      <p>Update Documents in support of identity And Address</p>
      <h3> Free Till 14/06/2027</h3>
      <div>What to Submit</div>
      <div>How To submit</div>
      <button className='submit-btn mt-4'>click To Submit</button>
    </div>
    <FaqSidebar faqKey="doc_update" />
  </div>
);

const VidGeneratorPage = () => (
  <div className="page-container vid-view animate-fade-in">
    <div className="form-group">
      <h4>Please Select</h4>
      <div className="inline-group font-medium my-2">
        <input type="radio" name="idType" defaultChecked /> Genrate VID
        <input type="radio" name="idType" /> Retrive VID
      </div>
      <input type="text" className="custom-input" placeholder="Enter Name As Per Aadhaar" />
      <div className="inline-group font-medium my-2">
        <input type="text" className="custom-input" placeholder="Enter Captcha" />
        <Captcha />
      </div>
      <button className="submit-btn mt-4">Send OTP</button>
    </div>
    <FaqSidebar faqKey="vid_generator" />
  </div>
);

const LockUnlockPage = () => (
  <div className="page-container lock-view animate-fade-in">
    <Login />
  </div>
);

const BankstatusPage = () => (
  <div className="page-container bank-view animate-fade-in">
    <Login />
  </div>
);

const OrderPvcPage = () => (
  <div className="page-container pvc-view animate-fade-in">
    <div className="form-group">
      <input type="text" className="custom-input" placeholder="Enter SRN" />
      <div className="inline-group font-medium my-2">
        <input type="text" className="custom-input" placeholder="Enter Captcha" />
        <Captcha />
      </div>
      <button className="submit-btn mt-4">Send OTP</button>
    </div>
    <FaqSidebar faqKey="pvc_card_status" />
  </div>
);

const CheckEnrolmentStatusPage = () => {
  // Form state handle karne ke liye
  const [idType, setIdType] = useState('enrolment');
  const [captcha, setCaptcha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap API call ya validation logic laga sakte hain
    alert(`Form Submitted! ID Type: ${idType}`);
  };

  return (
    <div className="page-container enrolment-status-view animate-fade-in">
      <div className="form-group" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        
        <h4 style={{ color: '#000080', marginBottom: '10px' }}>Check Enrolment OR Update Status</h4>
        <p style={{ fontSize: '14px', color: '#555' }}>Check if Your Aadhaar Is Generated Or Updated.</p>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '15px' }}>
          The 14 Digit Enrolment Number is printed on the Acknowledgement Slip provided while physically visiting the Enrolment/Update Center (e.g., 1234/12345/12345).
        </p>
        
        <div style={{ backgroundColor: '#eef6ff', padding: '10px', borderRadius: '5px', marginBottom: '20px', fontSize: '13px' }}>
          In case you lost EID, you can retrieve it using your registered Mobile Number or Email. <a href="#" style={{ color: '#0056b3', fontWeight: 'bold' }}>Click here</a> to Retrieve EID.
        </div>

        {/* Radio Buttons - Working */}
        <div className="inline-group font-medium my-2" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
            <input type="radio" name="idType" value="enrolment" checked={idType === 'enrolment'} onChange={(e) => setIdType(e.target.value)} /> Enrolment Number
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
            <input type="radio" name="idType" value="srn" checked={idType === 'srn'} onChange={(e) => setIdType(e.target.value)} /> SRN
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
            <input type="radio" name="idType" value="urn" checked={idType === 'urn'} onChange={(e) => setIdType(e.target.value)} /> URN
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
            <input type="radio" name="idType" value="sid" checked={idType === 'sid'} onChange={(e) => setIdType(e.target.value)} /> SID
          </label>
        </div>

        {/* Input Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
          <input type="text" className="custom-input" placeholder="Enter 14 Digit Enrolment Number" required />
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '12px', color: '#666', marginBottom: '5px', display: 'block' }}>Date of Enrolment</label>
              <input type="date" className="custom-input" required />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '12px', color: '#666', marginBottom: '5px', display: 'block' }}>Time of Enrolment</label>
              <input type="time" className="custom-input" required />
            </div>
          </div>
        </div>

        {/* Captcha Integration */}
        <div style={{ marginBottom: '20px' }}>
           
           <Captcha onCaptchaChange={(val) => setCaptcha(val)} />
        </div>

        <button type="submit" className="submit-btn mt-4" onClick={handleSubmit} style={{ width: '100%', backgroundColor: '#000080', color: '#fff', padding: '12px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
          Send OTP
        </button>
      </div>
      
      {/* FaqSidebar as it is */}
      <FaqSidebar faqKey="enrolment_status" />
    </div>
  );
}; 

const LocatecenterPage = () => (
  <div className="page-container enrolment-status-view animate-fade-in">
    <h5>Sorry for inconvenience but Can't access Your Location Go to <Link to="/Home">Home</Link></h5>
    <FaqSidebar faqKey="locate_center" />
  </div>
);

const BookAppPage = () => (
  <div className="page-container enrolment-status-view animate-fade-in">
    <div>
      <p>Login To Appointment Portal Via OTP Authentication</p>
      <div className="loginform" id='booka'>
        <div className="inline-group">
          <button>With Mobile OTP</button><button>With Email OTP</button>
        </div>
        <input type="text" className="custom-input" placeholder="Name" />
        <input type="text" className="custom-input" placeholder="Mobile Number" />
        <div className="inline-group font-medium my-2">
          <input type="text" className="custom-input" placeholder="Enter Captcha" />
          <Captcha />
        </div>
        <button className="submit-btn mt-4">Send OTP</button>
      </div>
    </div>
  </div>
);

const CheckValidityPage = () => (
  <div className="page-container enrolment-status-view animate-fade-in">
    <div className="form-group">
      <input type="text" className="custom-input" placeholder="Enter Aadhaar Number" />
      <div className="inline-group font-medium my-2">
        <input type="text" className="custom-input" placeholder="Enter Captcha" />
        <Captcha />
      </div>
      <button className="submit-btn mt-4">Proceed</button>
    </div>
    <FaqSidebar faqKey="check_validity" />
  </div>
);

const GrievancePage = () => (
  <div className="page-container enrolment-status-view animate-fade-in">
    <div className="form-group">
      <input type="text" className="custom-input" placeholder="Enter Name as Per Aadhaar*" />
      <input type="text" className="custom-input" placeholder="Enter Mobile Number*" />
      <input type="text" className="custom-input" placeholder="Enter Email Address " />
      <input type="text" className="custom-input" placeholder="Enter State*" />
      <input type="text" className="custom-input" placeholder="Enter Grievance / Feedback For (Self/Other)*" />
      <input type="text" className="custom-input" placeholder="Enter Grievance / Feedback Type*" />
      <input type="text" className="custom-input" placeholder="Enter Category Type*" />
      <input type="file" />
      <div className="inline-group font-medium my-2">
        <input type="text" className="custom-input" placeholder="Enter Captcha" />
      c  <Captcha />
      </div>
      <button className="submit-btn mt-4">Send OTP</button>
    </div>
    <FaqSidebar faqKey="grievance_feedback" />
  </div>
);

const CheckGrievancePage = () => (
  <div className="page-container enrolment-status-view animate-fade-in">
    <div className="form-group">
      <input type="text" className="custom-input" placeholder="Enter Service Request Number " />
      <div className="inline-group font-medium my-2">
        <input type="text" className="custom-input" placeholder="Enter Captcha" />
        <Captcha />
      </div>
      <button className="submit-btn mt-4">Send OTP</button>
    </div>
    <FaqSidebar faqKey="grievance_status" />
  </div>
);

// ===== CARD =====

const Card = ({ image, heading, description, onClick }) => {
  return (
    <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="card-image">
        <img src={image} alt={heading} />
      </div>
      <div className="card-content">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="card-border"></div>
    </div>
  );
};

// ===== MAIN DASHBOARD =====

export const Dashboard = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const [searchParams] = useSearchParams();

  // JSON load
  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        const response = await fetch('/cardsData.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCardsData(data.cards || data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading cards data:', error);
        setError('Failed to load cards data');
        setLoading(false);
      }
    };
    fetchCardsData();
  }, []);

  // URL ?service=xxx → auto select card
  useEffect(() => {
    const serviceType = searchParams.get('service');
    if (serviceType && cardsData.length > 0) {
      const matchedCard = cardsData.find(c => c.type === serviceType);
      if (matchedCard) {
        setSelectedCard(matchedCard);
      }
    }
  }, [searchParams, cardsData]);

  // Master router
  const renderSpecificPage = () => {
    if (!selectedCard) return null;

    switch (selectedCard.type) {
      case 'download': return <DownloadAadhaarPage />;
      case 'retrieve_uid': return <RetrieveUidPage />;
      case 'verify_contact': return <VerifyContactPage />;
      case 'report_death': return <ReportDeathPage />;
      case 'doc_update': return <DocumentUpdatePage />;
      case 'vid_generator': return <VidGeneratorPage />;
      case 'lock_unlock': return <LockUnlockPage />;
      case 'bank_status': return <BankstatusPage />;
      case 'pvc_status': return <OrderPvcPage />;
      case 'locate_center': return <LocatecenterPage />;
      case 'book_appointment': return <BookAppPage />;
      case 'enrolment_status': return <CheckEnrolmentStatusPage />;
      case 'check_validity': return <CheckValidityPage />;
      case 'file_complaint': return <GrievancePage />;
      case 'complaint_status': return <CheckGrievancePage />;
      default:
        return (
          <div className="page-container default-view animate-fade-in">
            <h2>{selectedCard.heading}</h2>
            <p>{selectedCard.description}</p>
            <div className="mt-4 p-4 bg-orange-100 text-orange-800 rounded">
              ⚠️ Custom application UI for this section is currently under development.
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <SeprateNavbar />

      {selectedCard ? (
        <div className="Dashboardconta subpage-layout">
          <div className="breadcrumbs" style={{ fontSize: '14px', marginBottom: '24px', color: '#64748b', fontWeight: '500' }}>
            <span
              onClick={() => setSelectedCard(null)}
              style={{ cursor: 'pointer', color: '#0056b3', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              Dashboard
            </span>
            <span style={{ margin: '0 8px', color: '#0056b3' }}>&gt;</span>
            <span style={{ color: '#94a3b8', fontWeight: '600' }}>
              {selectedCard.heading}
            </span>
          </div>
          {renderSpecificPage()}
        </div>
      ) : (
        <>
          <div className="BGIMG">
            <div id='laptopimg'>
              <img src="/imgs/laptop.png" alt="" />
            </div>
            <div>
              <text>The new myAadhaar portal has arrived — faster, cleaner, simpler.</text>
              <div>
                <button>Experience now</button>
              </div>
            </div>
            <div id='boxw'>
              <h3>Welcome to myAadhaar</h3>
              <img src="/imgs/fingerPrint.54859169124a05ba0132.jpg" alt="" />
              <div>
                <button>Login</button>
              </div>
            </div>
            <div id="lang0">
              <ul>
                <li>Hindi</li><li>English</li><li>Telugu</li><li>Tamil</li><li>Marathi</li>
                <li>Urdu</li><li>Assamese</li><li>Bengali</li><li>Punjabi</li><li>Kannada</li>
              </ul>
            </div>
          </div>

          <div className="pdfs">
            <li>Aadhaar Enrolment & Update Charges</li>
            <li>Enrolment & Update Forms</li>
            <li>List of Supporting Documents for Aadhaar Enrolment & Update</li>
          </div>

          <div className="Dashboardconta">
            <h5>Services that require mobile number to be registered with Aadhaar</h5>

            {loading ? (
              <div className="card-section-container">
                <p>Loading cards...</p>
              </div>
            ) : error ? (
              <div className="card-section-container">
                <p style={{ color: 'red' }}>{error}</p>
              </div>
            ) : (
              <div className="card-section-container">
                <div className="card-grid">
                  {cardsData.map((card) => (
                    <Card
                      key={card.id}
                      image={card.image}
                      heading={card.heading}
                      description={card.description}
                      onClick={() => setSelectedCard(card)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;