import React, { useRef } from "react";
import {
  Download,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Newspaper,
  Tv,
  Radio,
  FileText,
  Quote,
  ClipboardList,
} from "lucide-react";
import "./NewsMediaSection.css";

const SectionSlider = ({ title, icon, children }) => {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstChild.getBoundingClientRect().width + 12;
    track.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <div className="nms-section">
      <div className="nms-section-header">
        <div className="nms-section-heading">
          {icon}
          <h2 className="nms-section-title">{title}</h2>
        </div>
        <a href="#" className="nms-view-all">View All</a>
      </div>

      <div className="nms-slider">
        <div ref={trackRef} className="nms-track">
          {children}
        </div>

        <button onClick={() => scroll(-1)} aria-label="Previous" className="nms-arrow nms-arrow-left">
          <ChevronLeft className="nms-icon-sm" />
        </button>
        <button onClick={() => scroll(1)} aria-label="Next" className="nms-arrow nms-arrow-right">
          <ChevronRight className="nms-icon-sm" />
        </button>
      </div>
    </div>
  );
};

const NewsCard = ({ title, date, type, size }) => (
  <div className="nms-card">
    <p className="nms-card-title">{title}</p>
    <p className="nms-card-date">{date}</p>
    <a href="#" className="nms-card-link">
      <Download className="nms-icon-sm" />
      Download | Type: {type} | Size: {size}
    </a>
  </div>
);

const VideoCard = ({ title }) => (
  <div className="nms-video-card">
    <div className="nms-video-thumb">
      <PlayCircle className="nms-icon-lg" />
    </div>
    <p className="nms-video-title">{title}</p>
  </div>
);

const QuoteCard = ({ quote }) => (
  <div className="nms-quote-card">
    <p className="nms-quote-text">"{quote}"</p>
  </div>
);

const TenderCard = ({ title, date }) => (
  <div className="nms-card">
    <p className="nms-card-title">{title}</p>
    <p className="nms-card-date">{date}</p>
    <a href="#" className="nms-card-link">
      <Download className="nms-icon-sm" />
      Download
    </a>
  </div>
);

export default function NewsMediaSection() {
  const mediaCoverage = [
    { title: "Shri Saurabh Vijay assumes charge as CEO UIDAI", date: "25 May 2026", type: "pdf", size: "6.8 MB" },
    { title: "UIDAI Data Hackathon 2026 Showcases Data Driven Innovations for Inclusive Governance", date: "12 May 2026", type: "pdf", size: "0 KB" },
    { title: "Strong public adoption of new Aadhaar App, 21 million downloads in three months", date: "1 Jan 1970", type: "in", size: "0 KB" },
    { title: "UIDAI joins hands with NFSU to enhance cybersecurity and digital forensics resilience", date: "1 Jan 1970", type: "in", size: "0 KB" },
    { title: "Clarification on some news reports on the \"new look\" of Aadhaar", date: "1 Jan 1970", type: "in", size: "0 KB" },
  ];

  const telecast = [
    "DD News coverage of UIDAI's bug bounty programme",
    "New Aadhaar app designed around principle of data minimisation, strengthens security: DDG UIDAI",
    "CEO UIDAI at Inauguration of Aadhaar Seva Kendras (ASKs) in Delhi",
    "Episode 39 of Digital India Ask Our Experts Highlights Upcoming New Aadhaar App",
    "NDTV Profit Coverage: UIDAI Deactivates over 2Cr Aadhaar Numbers of Deceased Individuals",
  ];

  const broadcast = [
    { title: "CEO UIDAI informing the residents about the benefits of updating the Aadhaar on Radio.", date: "27 Jan 2023" },
    { title: "Dr. Saurabh Garg, CEO UIDAI talks on 'Digital Payments & Role of Aadhaar'.", date: "25 Nov 2022" },
    { title: "CEO UIDAI Dr AB Pandey on AIR prog Samayiki", date: "12 Sep 2018" },
    { title: "CEO UIDAI Dr AB Pandey on All India Radio Spotlight - News Analysis programme", date: "11 Sep 2018" },
    { title: "Countrywide programme of AIR - Interview With Dr Ajay Bhushan Pandey, CEO, UIDAI", date: "11 May 2018" },
  ];

  const pressReleases = [
    { title: "Shri Saurabh Vijay assumes charge as Chief Executive Officer of Unique Identification Authority of India", date: "19 May 2026", type: "in", size: "0 KB" },
    { title: "UIDAI Data Hackathon 2026 Showcases Data-Driven Innovations for Inclusive Governance", date: "12 May 2026", type: "in", size: "0 KB" },
    { title: "Strong public adoption of new Aadhaar App, 21 million downloads in three months", date: "7 May 2026", type: "pdf", size: "0.1 MB" },
    { title: "UIDAI joins hands with NFSU to enhance cybersecurity and digital forensics resilience", date: "6 May 2026", type: "in", size: "0 KB" },
    { title: "Clarification on some news reports on the \"new look\" of Aadhaar", date: "4 May 2026", type: "in", size: "0 KB" },
  ];

  const quotes = [
    "A digital identification system such as India's Aadhaar, by overcoming complex information problems, helps willing governments to promote the inclusion of disadvantaged groups.",
    "When it comes to ID systems, India's Aadhaar initiative sets a high bar for the rest of the world. Aadhaar is a state-of-the-art online system that provides unique 12-digit ID numbers to residents of India.",
    "In scale and ambition, India's unique identification effort is unparalleled. An estimated 600 million people have been enrolled, underscoring how smart public sector investments can accelerate economic development.",
  ];

  const tenders = [
    { title: "Procurement of Cyber Security Risk Rating solution for 1 year as per Scope of Work and Technical Specification", date: "12 Jun 2026" },
    { title: "Procurement of Laptops for official use at UIDAI Head Office (HO)", date: "2 Jun 2026" },
    { title: "GeM Bid Document regarding RFP for Animation Content Production Company hiring", date: "1 Jun 2026" },
    { title: "Comprehensive Maintenance Contract (CMC) services for Fully Automated Shuttle Type Two Stack Car Parking System", date: "24 Apr 2026" },
    { title: "Upgradation of Audio and Video Conferencing System in UIDAI Head Office (HO) building", date: "17 Apr 2026" },
  ];

  return (
    <div className="nms-page">

      {/* LEFT - 70% */}
      <div className="nms-left">
        <h1 className="nms-title">Media Coverage of Aadhaar</h1>

        <SectionSlider title="Media Coverage of Aadhaar" icon={<Newspaper className="nms-section-icon" />}>
          {mediaCoverage.map((item, i) => <NewsCard key={i} {...item} />)}
        </SectionSlider>

        <SectionSlider title="Aadhaar Telecast" icon={<Tv className="nms-section-icon" />}>
          {telecast.map((title, i) => <VideoCard key={i} title={title} />)}
        </SectionSlider>

        <SectionSlider title="Aadhaar Broadcast" icon={<Radio className="nms-section-icon" />}>
          {broadcast.map((item, i) => <NewsCard key={i} title={item.title} date={item.date} type="audio" size="-" />)}
        </SectionSlider>

        <SectionSlider title="Press Release" icon={<FileText className="nms-section-icon" />}>
          {pressReleases.map((item, i) => <NewsCard key={i} {...item} />)}
        </SectionSlider>

        <SectionSlider title="Quote - Unquote" icon={<Quote className="nms-section-icon" />}>
          {quotes.map((q, i) => <QuoteCard key={i} quote={q} />)}
        </SectionSlider>

        <SectionSlider title="Tender" icon={<ClipboardList className="nms-section-icon" />}>
          {tenders.map((item, i) => <TenderCard key={i} {...item} />)}
        </SectionSlider>
      </div>

      {/* RIGHT - 30% */}
      <div className="nms-right">
        <div className="nms-banner">
          <p className="nms-banner-title">Aadhaar App</p>
          <p className="nms-banner-tagline">SHOW • SHARE • VERIFY</p>
          <div className="nms-video-thumb" style={{ height: 180, marginBottom: 12, width: "100%" }}>
            <span style={{ fontSize: 11, color: "#9ca3af" }}>QR Code / App preview</span>
          </div>
          <a href="#" className="nms-banner-btn">
            <Download className="nms-icon-sm" />
            Download Now
          </a>
        </div>
      </div>

    </div>
  );
}