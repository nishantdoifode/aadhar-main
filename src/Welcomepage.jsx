import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcomepage = () => {
    const navigate = useNavigate();

    // बार-बार एक ही कोड लिखने से बचने के लिए एक फंक्शन बना लिया
    const handleLangClick = (e) => {
        e.preventDefault();
        navigate("/Home");
    };

    return (
        <>
            {/* React में class की जगह className लिखते हैं */}
            <div className='headertitle'>
                <img src="\imgs\aadhaar_english_logo.svg" alt="logo" />
            </div>

            <div id="body">
                <div id="mainpage">
                    <div id="logo">
                        <img src="/imgs/Page-1.svg" alt="main-logo" />
                    </div>
                    
                    <li>Select your Preferred Language to Enter the Website</li>
                    <li>वेबसाइट में प्रवेश करने के लिए अपनी पसंदीदा भाषा का चयन करें</li>

                    <div id="lang">
                        {/* अब हर जगह सिर्फ handleLangClick लगा दिया है */}
                        <li><a href="/Home" onClick={handleLangClick}>English</a></li>
                        <li><a href="/Home" onClick={handleLangClick}>Hindi</a></li>
                        <li><a href="/Home" onClick={handleLangClick}>marathi</a></li>
                        <li><a href="/Home" onClick={handleLangClick}>Tamil</a></li>
                        <li><a href="/Home" onClick={handleLangClick}>Telgu</a></li>
                        <li><a href="/Home" onClick={handleLangClick}>english</a></li>
                        <li><a href="/Home" onClick={handleLangClick}>Bengali</a></li>
                        <li><a href="/Home" onClick={handleLangClick}>Assemese</a></li>
                        <li><a href="/Home" onClick={handleLangClick}>punjabi</a></li>
                        <li><a href="/Home" onClick={handleLangClick}>gujrati</a></li>
                        <li><a href="/Home" onClick={handleLangClick}>Hindi</a></li>
                        <li><a href="/Home" onClick={handleLangClick}>bangla</a></li>
                        <li><a href="/Home" onClick={handleLangClick}>marathi</a></li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcomepage;