import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqSidebar = ({ faqKey }) => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch('/faqs.json')
      .then(res => res.json())
      .then(data => setFaqs(data[faqKey] || []))
      .catch(err => console.error("Error loading FAQs:", err));
  }, [faqKey]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="right-sidebar">
      <div className="Que">
        <div id="Askque">
          <h3>Frequently Asked Questions</h3>
        </div>

        <div id="Quearea">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={faq.id}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <p>{faq.question}</p>
                <ChevronDown
                  size={18}
                  className={`faq-icon ${openIndex === index ? 'rotated' : ''}`}
                />
              </div>

              <div className={`faq-description ${openIndex === index ? 'open' : ''}`}>
                <p className="que-text">{faq.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSidebar;