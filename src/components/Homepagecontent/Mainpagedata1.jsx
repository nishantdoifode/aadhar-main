import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'  
import { Bot } from './Bot'
const Mainpagedata1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const sliderData = [
        "Public Notice for the residents of the Union Territory of Ladakh: Update of address information in Aadhaar, pursuant to Jammu and Kashmir Reorganisation Act, 2019 Type: PDF Size:2.0 MB",
        "Waiving off the charges for MBU-1 of children aged 7-15 years for a period of one year w.e.f 1.10.2025 Type: PDF 0.3 MB",
        "UIDAI Sandbox for Developer Community and Fintechs",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [sliderData.length]);

    return (
        <div className='maincontentleft'>
            <div className="maincontent" id='firstdivofmainc'>

                {/* SLIDER SECTION */}
                <div className='slider-main'>
                    <div className="slider-container">
                        <div id="contentdiv">
                            <img src="/imgs/ic_featured.svg" alt="" id='imgdivv' />
                            <div id="twodiv">
                                <section className="slider-section">
                                    <h3>{sliderData[currentIndex]}</h3>
                                </section>
                                <div className="slider-dots-container">
                                    <div className="slider-dots">
                                        {sliderData.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                                onClick={() => setCurrentIndex(index)}
                                            ></span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* UPDATE AADHAAR SECTION */}
                <div className='maincontentdiv'>
                    <div id="updateadharoption">
                        <img src="/imgs/ic_primary.svg" id='imgdivv' />
                        <section id="twdiv">
                            <div>
                                {/* ✅ Arrow added in heading */}
                                <h3><Link to='/Update-A'>Update Aadhaar ›</Link></h3>
                                <p>Keep your Aadhaar details up-to-date.</p>
                                <p id='p2'>It is essential that your Aadhaar Data is correct and remains updated always.</p>
                            </div>
                            <div>
                                {/* ✅ Links wrapped in span for inline separator styling */}
                                <ul id="aadhaar-links">
                                   <li><Link to="/aadhaar-status">Check Aadhaar Update Status</Link></li>
                                    <li><Link to="/DashBoard">Update Demographics Data &amp;Check Status</Link></li>
                                    <li><a href="#">Enrolment &amp; Update Forms</a></li>
                                    <li><a href="#">Aadhaar Enrolment &amp; Update Charges</a></li>
                                    <li><Link to="/DashBoard">Aadhaar Update History</Link></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>

                <div className='maincontentdiv'> <div id="updateadharoption">
                    <img src="/imgs/ic_get_aadhaar.svg" id='imgdivv' />
                    <section id="twdiv">
                        <div>
                            {/* ✅ Arrow added in heading */}
                            <h3><Link to='/Update-B'>Get Aadhaar ›</Link></h3>
                            <p>Aadhaar is for every Resident of India.</p>
                            <p id='p2'>From a new born to a senior citizen, everyone can enrol for Aadhaar.</p>
                        </div>
                        <div>
                        
                            <ul id="aadhaar-links">
                                <li><a href="#">Book an Appointment</a></li>
                                <li><Link to="/DashBoard">Check Aadhaar Status</Link></li>
                                <li><a href="/Home" onClick={(e)=>{e.preventDefault(); navigate("/Dashboard");}}>Download Aadhaar</a></li>
                                <li><Link to="/DashBoard">Order Aadhaar PVC Card</Link></li>
                                <li><a href="#">Check Aadhaar PVC Card Status</a></li>
                                <li><a href="#">Aadhaar Enrolment & Update Charges</a></li>
                                <li><a href="#">Enrolment & Update Forms</a></li>
                            </ul>
                        </div>
                    </section>
                </div></div>
                <div className='maincontentdiv'>
                    <div id="updateadharoption">
                        <img src="/imgs/avail-aadhaar-services.svg" id='imgdivv' />
                        <section id="twdiv">
                            <div>
                                {/* ✅ Arrow added in heading */}
                                <h3><Link to='/Update-C'>Aadhaar services ›</Link></h3>
                                <p>An array of services for Aadhaar holders</p>
                                <p id='p2'>Aadhaar Registered Mobile number is essential to access the following services.</p>
                            </div>
                            <div>
                                {/* ✅ Links wrapped in span for inline separator styling */}
                                <ul id="aadhaar-links">
                                    <li><Link to="/DashBoard">Verify an Aadhaar Number</Link></li>
                                    <li><a href="#">Verify Email/Mobile Number</a></li>
                                    <li><a href="#">Virtual ID (VID) Generator</a></li>
                                    <li><Link to="/DashBoard">Aadhaar Paperless Offline e-kyc (Beta)</Link></li>
                                    <li><Link to="/DashBoard">Lock/Unlock Biometrics</Link></li>

                                </ul>
                            </div>
                        </section>
                    </div>
                </div>

                <div id="videosection">
                    <div id="vnav"><img src="/imgs/ic_telecasts.svg" /> <h3>Media Coverage of Aadhaar </h3> <a href="#">View All</a></div>
                    <div id="vs">
                        <div id="videodiv">
                            <div> UIDAI records 231 Crore aadhaar Authentication transaction in November 2025</div>
                            <div>Dec 25 2025</div>
                            <ul>
                                <li><a href="/imgs/sm.jpg" download>file download </a>|</li>
                                <li> Type : Pdf |</li>
                                <li> Size :3.6 mb</li></ul>
                        </div>
                        <div id="videodiv"><div> UIDAI Deactivate Over 2 crore Aadhaar Numbers of deceased inviduals </div>
                            <div>1 Dec 2025</div>
                            <ul>
                                <li><a href="/imgs/sm.jpg" download>file download </a>|</li>
                                <li> Type : Pdf |</li>
                                <li> Size :3.6 mb</li></ul> </div>
                        

                    </div>
                    <div id="vnav"><img src="/imgs/ic_telecasts.svg" /> <h3>Aadhaar Telecast</h3> <a href="#">View All</a></div>

                    <div id="vs">
                        <div id="videodiv2">
                            <div><video src="#"> </video></div>
                            <p>Episode 39 of Ask India  Our Experts Highlights upcoming New aadhar App </p>

                        </div>
                        <div id="videodiv2">
                            <div><video src="#"> </video></div>
                            <p>NDTV </p>

                        </div>

                    </div>
                     <div id="vnav"><img src="/imgs/ic_telecasts.svg" /> <h3>Press Release</h3> <a href="#">View All</a></div>

                     <div id="vs">
                        <div id="videodiv">
                            <div> UIDAI records 231 Crore aadhaar Authentication transaction in November 2025</div>
                            <div>Dec 25 2025</div>
                            <ul>
                                <li><a href="/imgs/sm.jpg" download>file download </a>|</li>
                                <li> Type : Pdf |</li>
                                <li> Size :3.6 mb</li></ul>
                        </div>
                        <div id="videodiv"><div> UIDAI Deactivate Over 2 crore Aadhaar Numbers of deceased inviduals </div>
                            <div>1 Dec 2025</div>
                            <ul>
                                <li><a href="/imgs/sm.jpg" download>file download </a>|</li>
                                <li> Type : Pdf |</li>
                                <li> Size :3.6 mb</li></ul> </div>
                        

                    </div>



                </div>


            </div>

            {/* RIGHT SIDE - QNA */}


            <div className="rightsection">

            
            <div className="QNA">
                <h3>Frequently Asked Questions</h3>
                <div><a href="#">Use Aadhaar Freely</a></div>
                <div><a href="#">E-Aadhaar</a></div>
                <div><a href="#">mAadhar FAQs</a></div>
                <div><a href="#">Aadhaar Paperless Offline e-kyc</a></div>
                <a href="#">view all</a>
            </div>
             <div className="QNA1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint sit optio quis nulla provident! Eum ullam numquam nemo reprehenderit voluptas minus molestiae?
             </div>


</div>
        <div id="homefooter">
            <div><h2>Aadhaar in Numbers</h2></div>
            <div id='li'>
                <li>
Aadhaar Generated |
                </li>
                <li>Authentication Done</li>
            </div>
<div id='li'>
    <li><a href="#">Aadhaar Saturation Report</a><span> Type :pdf size 2.6mb</span> |</li>
    <li><a href="#">view On Dashboard</a></li>
</div>
        </div>




<Bot />
        </div>
    )
}

export default Mainpagedata1