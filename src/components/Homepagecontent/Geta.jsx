import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Geta = () => {
    const navigate = useNavigate();

    return (
        <><div className='maincontentleft'>

            <div className="maincontent" id='firstdivofmainc'>
                <div className="space"></div>
                <h3>Aadhaar Update Service</h3>

                {/* 1. Book An Appointment → Dashboard */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=book_appointment')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Book An Appointment ›</a></h3>
                            <p id='p2'>For Enrolment And Update your Aadhaar data you can book an online appointment at an Aadhaar Seva Kendra.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Book an Appointment</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 2. Check Status → Dashboard */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=enrolment_status')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Check Status ›</a></h3>
                            <p id='p2'>Recently enrolled for Aadhaar? check if your Aadhaar is generated. In case you have or updated at an enrolment/update center you can check the update address here too.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Check Aadhaar Status</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 3. Download Aadhaar → Dashboard */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=download')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Download Aadhaar ›</a></h3>
                            <p id='p2'>Download an electronic version of your Aadhaar by giving your Aadhaar number or Enrolment ID. Downloaded Aadhaar is As valid as the original Aadhaar letter.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Download Aadhaar</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 4. Order Aadhaar PVC Card → Dashboard */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=pvc_status')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Order Aadhaar PVC Card ›</a></h3>
                            <p id='p2'>Get your Aadhaar PVC card at nominal cost. Order now!</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Order Aadhaar PVC Card</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 5. Check PVC Card Status → Dashboard */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=pvc_status')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Check Aadhaar PVC Card Status ›</a></h3>
                            <p id='p2'>Check the status of your Aadhaar PVC card request.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Check Aadhaar PVC card status</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 6. Locate Enrolment Center → Dashboard */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=locate_center')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Locate an Enrolment center in Bhuvan Aadhaar</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 7. Enrolment & Update Charges → External PDF */}
                <div
                    className='maincontentdiv'
                    onClick={() => window.open('#', '_blank')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Aadhaar Enrolment &amp; Update Charges ›</a></h3>
                            <p id='p2'>This is Aadhaar Enrolment &amp; Update Charges.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Aadhaar Enrolment &amp; Update Charges</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 8. Enrolment & Update Forms → External PDF */}
                <div
                    className='maincontentdiv'
                    onClick={() => window.open('#', '_blank')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Enrolment &amp; Update Forms ›</a></h3>
                            <p id='p2'>This is Enrolment &amp; Update Forms.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Enrolment &amp; Update Forms</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>

            <div className="rightsection">
                <div className="space"></div>

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

        </div>
        </>
    )
}
export default Geta;