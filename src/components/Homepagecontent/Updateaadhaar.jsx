import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Updateaadhaar = () => {
    const navigate = useNavigate();

    return (
        <><div className='maincontentleft'>

            <div className="maincontent" id='firstdivofmainc'>
                <div className="space"></div>
                <h3>Aadhaar Update Service</h3>

                {/* 1. Document Update → Dashboard card */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=doc_update')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Document Update ›</a></h3>
                            <p id='p2'>Update The Document In Your Aadhaar Database For Better Service Delivery And Accurate Aadhaar Based Authentication.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Document Update</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 2. Check Update Status → Dashboard card */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=enrolment_status')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Check Aadhaar Update Status ›</a></h3>
                            <p id='p2'>Have Already Sent a request to get your address update in Aadhaar?</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Check Aadhaar Update Status</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 3. Update Address → LOGIN (sensitive operation) */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Login')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Update Address in your Aadhaar ›</a></h3>
                            <p id='p2'>Have You Moved To a new city? or recently changed your address? Do not forget to update Your new address in your aadhaar. you have valid address proof or have received address validation Letter Letter( For Those Without Valid Address proof).you can Update Your address..</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Update Demographics Data &amp; Check Status</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 4. Enrolment & Update Forms → external PDF */}
                <div
                    className='maincontentdiv'
                    onClick={() => window.open('#', '_blank')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Enrolment &amp; Update Forms ›</a></h3>
                            <p id='p2'>This is enrolment &amp; Update Forms.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Enrolment &amp; Update Forms</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 5. Enrolment & Update Charges → external PDF */}
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

                {/* 6. Aadhaar Update History → LOGIN */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Login')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Aadhaar Update History ›</a></h3>
                            <p id='p2'>You Can view the details of the updates you have done in your aadhaar.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Aadhaar Update History</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 7. Duplicate charges → external PDF */}
                <div
                    className='maincontentdiv'
                    onClick={() => window.open('#', '_blank')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Aadhaar Enrolment &amp; Update Charges</span></li>
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
export default Updateaadhaar;