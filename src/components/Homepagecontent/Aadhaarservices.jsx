import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Aadhaarservices = () => {
    const navigate = useNavigate();

    return (
        <><div className='maincontentleft'>

            <div className="maincontent" id='firstdivofmainc'>
                <div className="space"></div>
                <h3>Aadhaar Service</h3>

                {/* 1. Verify Aadhaar → Dashboard (enrolment_status) */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=enrolment_status')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Verify Aadhaar ›</a></h3>
                            <p id='p2'>Aadhaar number can be verified to acertain Aadhaar number is valid and is not deactivated.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>verify an Aadhaar Number</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 2. Verify Mobile/Email → Dashboard (verify_contact) */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=verify_contact')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Verify Registered mobile or email id ›</a></h3>
                            <p id='p2'>You can verify your email adress and mobile number that has been decalred at the time of enrolment or dusring latest Aadhaar detail update.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>verify Email/Mobile Number</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 3. Retrieve Aadhaar → Dashboard (retrieve_uid) */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=retrieve_uid')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Retrive Aadhaar ›</a></h3>
                            <p id='p2'>Lost your Aadhaar number? Retrive it have on your registered mobile.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Retrive Lost or Forgotten EID/UID</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 4. Generate VID → Dashboard (vid_generator) */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=vid_generator')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Genrate VID ›</a></h3>
                            <p id='p2'>VID is temporary revocable 146-digit random number mapped with Aadhaar number. it can be ysed in leeu of Aadhaar number whenever authentication or e-kyc services are performed. it is not possible to derive Aadhaar number from VID.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Virtual IF(VID) Generator</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 5. Offline Aadhaar e-KYC → LOGIN */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Login')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Offline Aadhaar Verification ›</a></h3>
                            <p id='p2'>Aadhaar Paperless e-Kyc is secure sharable document which can be used by any Aadhaar number holder for offline verification of identification.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Aadhaar Paperless Offline e-Kyc (Beta)</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 6. Aadhaar Linking Status → Dashboard (bank_status) */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=bank_status')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Aadhaar Linkinmg Status ›</a></h3>
                            <p id='p2'>view your Aadhaar and your Bank linking status. Aadhaar Linking is fetched from NPCL Server.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Bank Seeding status</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 7. Lock Biometrics → Dashboard (lock_unlock) */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=lock_unlock')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Secure your Biometrics ›</a></h3>
                            <p id='p2'>Aadhaar number holders can secure their biometric authentication by locking their biometrics.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Lock/Unlock Biometrics</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 8. Authentication History → LOGIN */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Login')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Authentication History ›</a></h3>
                            <p id='p2'>View up to 50 previous authentication transactions on your Aadhaar.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Aadhaar Authentication History</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 9. Aadhaar Lock/Unlock → Dashboard (lock_unlock) */}
                <div
                    className='maincontentdiv'
                    onClick={() => navigate('/Dashboard?service=lock_unlock')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Aadhaar Lock/Unlock ›</a></h3>
                            <p id='p2'>By Locking Aadhaar Number. Resident Will not be able to perform any Authentication using Aadhaar number. however , Residnet can perform Authentication using Virtual ID.</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Aadhaar Lock and Unlock Service</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 10. Aadhaar Service on SMS → External Info */}
                <div
                    className='maincontentdiv'
                    onClick={() => window.open('#', '_blank')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <h3><a href="#">Aadhaar Service on SMS ›</a></h3>
                            <p id='p2'>You can Avail Aadhaar services by sending an SMS from Registered Mobile to 1947 in the formate mentioned in below link;</p>
                        </div>
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Aadhaar Service on SMS</span></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* 11. Enrolment & Update Charges → External PDF */}
                <div
                    className='maincontentdiv'
                    onClick={() => window.open('#', '_blank')}
                    style={{ cursor: 'pointer' }}
                >
                    <section id="twdiv">
                        <div>
                            <ul id="aadhaar-links">
                                <li><span>Aadhaar Enrolment And Update Charges</span></li>
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
export default Aadhaarservices;