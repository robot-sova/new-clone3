import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Bar Refrigerator Types We Repair",
      heading:"Bar Refrigerator Types and Their Repair Needs",
      img: "/bar-refrigerator/bar-refrigerator-repair-1.webp",
      description: (
        <>
          <p><h2>Under-Counter Bar Refrigerators</h2>
<p><strong>Under-counter bar refrigerators</strong> are a popular choice for bars and restaurants due to their <strong>space-saving design</strong> and <strong>easy accessibility</strong>.</p>
<p>These units fit snugly beneath the counter, allowing bartenders to quickly grab beverages and ingredients without leaving their station.</p>
<p>Common repair needs for under-counter bar refrigerators include issues with the <strong>thermostat</strong>, which can lead to <strong>improper cooling</strong> and <strong>spoilage of stored items</strong>.</p>
<p>Problems with the <strong>door seal</strong> are also frequent, resulting in <strong>energy loss</strong> and <strong>inefficient cooling</strong>.</p>
<p><strong>Regular maintenance</strong>, such as <strong>cleaning the condenser coils</strong> and <strong>checking the refrigerant levels</strong>, can help prevent these issues and ensure the unit operates efficiently.</p>

<h2>Back Bar Coolers</h2>
<p><strong>Back bar coolers</strong> are designed to <strong>store and display beverages</strong> behind the bar, providing <strong>easy access</strong> for bartenders and an <strong>attractive display</strong> for customers.</p>
<p>These coolers often feature <strong>glass doors</strong> and <strong>adjustable shelving</strong>, making them ideal for showcasing a variety of drinks.</p>
<p>Common repair needs for back bar coolers include <strong>malfunctioning compressors</strong>, which can lead to <strong>inadequate cooling</strong> and <strong>potential beverage spoilage</strong>.</p>
<p>Additionally, issues with the <strong>internal lighting system</strong> can affect the display's appeal.</p>
<p><strong>Routine maintenance</strong>, such as <strong>cleaning the evaporator fan</strong> and <strong>inspecting the door gaskets</strong>, can help keep back bar coolers running smoothly and looking their best.</p>

<h2>Kegerators</h2>
<p><strong>Kegerators</strong> are specialized refrigerators designed to <strong>store and dispense kegs of beer</strong>, making them a staple in many bars and restaurants.</p>
<p>These units typically include a <strong>refrigeration system</strong>, a <strong>tap</strong>, and a <strong>CO2 tank</strong> to keep the beer <strong>carbonated and fresh</strong>.</p>
<p>Common repair needs for kegerators include issues with the <strong>CO2 system</strong>, such as <strong>leaks</strong> or <strong>regulator malfunctions</strong>, which can affect the quality of the beer.</p>
<p>Problems with the <strong>cooling system</strong>, such as a <strong>faulty thermostat</strong> or <strong>compressor</strong>, can also impact the beer's temperature and taste.</p>
<p><strong>Regular maintenance</strong>, including <strong>cleaning the beer lines</strong> and <strong>checking the CO2 levels</strong>, is essential to keep kegerators functioning properly and serving up perfect pints.</p>

<h2>Wine Coolers</h2>
<p><strong>Wine coolers</strong> are designed to <strong>store wine at optimal temperatures</strong>, preserving its <strong>flavor and aroma</strong>.</p>
<p>These units often feature <strong>dual temperature zones</strong>, allowing for the storage of both <strong>red and white wines</strong> at their respective ideal temperatures.</p>
<p>Common repair needs for wine coolers include <strong>thermostat issues</strong>, which can lead to <strong>temperature fluctuations</strong> and potentially spoil the wine.</p>
<p>Problems with the <strong>cooling system</strong>, such as a <strong>failing compressor</strong> or <strong>evaporator fan</strong>, can also affect the unit's performance.</p>
<p><strong>Regular maintenance</strong>, including <strong>cleaning the condenser coils</strong> and <strong>ensuring proper ventilation</strong>, can help prevent these issues and keep wine coolers operating efficiently.</p>

<h2>Display Refrigerators</h2>
<p><strong>Display refrigerators</strong> are used in bars and restaurants to <strong>showcase a variety of beverages</strong> and <strong>attract customers</strong> with their appealing presentation.</p>
<p>These units often feature <strong>glass doors</strong>, <strong>bright internal lighting</strong>, and <strong>adjustable shelving</strong> to maximize visibility and accessibility.</p>
<p>Common repair needs for display refrigerators include issues with the <strong>lighting system</strong>, which can diminish the <strong>visual appeal</strong> of the display, and problems with the <strong>cooling system</strong>, such as a <strong>malfunctioning compressor</strong> or <strong>thermostat</strong>.</p>
<p><strong>Regular maintenance</strong>, such as <strong>cleaning the condenser coils</strong> and <strong>checking the door seals</strong>, is crucial to ensure display refrigerators remain both functional and attractive.</p>
</p>

        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Bar Refrigeration Equipment We Repair",
      img: "/bar-refrigerator/bar-refrigerator-repair-2.webp",
      description: (
        <>
          <p>Our certified technicians have hands-on experience with all types of commercial bar cooling systems, including:</p>
          <p><strong>Back bar coolers</strong></p>
          <p><strong>Undercounter beverage coolers</strong></p>
          <p><strong>Keg refrigerators (kegerators)</strong></p>
          <p><strong>Glass door display fridges</strong></p>
          <p><strong>Bottle coolers and beer dispensers</strong></p>
          <p><strong>Reach-in bar refrigerators</strong></p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Brands We Service",
      img: "/bar-refrigerator/bar-refrigerator-repair-3.webp",
      description: (
        <>
          <p>We repair a wide range of trusted commercial bar refrigeration brands, including: <strong>True, Beverage-Air, Turbo Air, Perlick, Avantco, Continental, Arctic Air, U-Line, Maxx Cold, Migali, Glastender, Krowne, Hoshizaki, Everest, Omcan, Randell, Delfield, Summit, Atosa, Norlake, Victory</strong>, and others.</p>
        </>
      ),
    },
    {
      id: "content4",
      title: "Common Issues with Bar Refrigerators",
      img: "/bar-refrigerator/bar-refrigerator-repair-4.webp",
      description: (
        <>
          <p>Bar refrigerators are used daily and often run 24/7. Over time, they can develop performance issues. We handle problems such as:</p>
          <p>Fridge not cooling or maintaining temperature</p>
          <p>Frost buildup or condensation inside the unit</p>
          <p>Unusual noises from the compressor or fan</p>
          <p>Leaks or puddles beneath the unit</p>
          <p>Faulty thermostats or control board failures</p>
          <p>Door gasket issues and poor sealing</p>
        </>
      ),
    },
    {
      id: "content5",
      title: "Advanced Diagnostics & OEM Part Replacements",
      img: "/bar-refrigerator/bar-refrigerator-repair-5.webp",
      description: (
        <>
          <p>Our technicians use modern tools to assess the compressor, evaporator, thermostat, and airflow systems. We’ll quickly identify the cause of the issue and replace worn components using <strong>OEM (original equipment manufacturer)</strong> parts to maintain performance and ensure food safety compliance.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "Our Repair Process",
      img: "/bar-refrigerator/bar-repair-process.webp",
      description: (
        <>
          <p><strong>Same-day dispatch</strong> – call us and we’ll send a technician immediately</p>
          <p><strong>In-depth inspection</strong> – full check of cooling system, seals, fans, and electronics</p>
          <p><strong>Component cleaning</strong> – remove buildup, defrost coils, and clean drains</p>
          <p><strong>OEM part replacement</strong> – swap out worn thermostats, motors, or compressors</p>
          <p><strong>System test</strong> – verify temperature control and consistent operation</p>
          <p><strong>On-site consultation</strong> – advice on usage and long-term care</p>
        </>
      ),
    },
    {
      id: "content7",
      title: "Preventative Maintenance Services",
      img: "/bar-refrigerator/bar-refrigerator-maintenance.webp",
      description: (
        <>
          <p>Routine service prevents emergency breakdowns and extends equipment lifespan. Our bar fridge maintenance services include:</p>
          <p>Cleaning evaporators and condensers</p>
          <p>Checking refrigerant levels and pressure</p>
          <p>Testing thermostats, relays, and compressors</p>
          <p>Inspecting door seals and hinges</p>
          <p>Clearing drain lines and defrost systems</p>
        </>
      ),
    },
    {
      id: "content8",
      title: "Why Choose Same Day Appliance Repair?",
      img: null,
      description: (
        <>
          <p><strong>Same-day repair service available</strong></p>
          <p><strong>Certified, insured, and experienced technicians</strong></p>
          <p><strong>OEM parts and manufacturer-compliant repairs</strong></p>
          <p><strong>Over 20 years of experience</strong> in commercial refrigeration</p>
          <p><strong>BBB accredited and trusted by hundreds of local businesses</strong></p>
          <p><strong>Serving Los Angeles, Orange, and Ventura Counties</strong></p>
        </>
      ),
    },
  ];
  
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="tabs-container" ref={containerRef}>
      {!isMobile ? (
        <div className="tabs-layout">
          <div className="tabs-sidebar">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`tabs-title ${activeTab === item.id ? "active" : ""}`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="tabs-content">
            {items.map((item) => (
             <div className={`tab-panel ${activeTab === item.id ? "active-tab" : ""}`}>
             <h2>{item.title}</h2>
             <div className="tab-body-float">
             {item.img && (
  <img src={item.img} alt={item.title} className="image-float" loading="lazy" />
)}
               <div>{item.description}</div>
             </div>
             <a href="#form">
  <button className="tabs-button">Book</button>
</a>
<a href="tel:3238704790">
  <button className="tabs-button">Call: (323) 870-4790</button>
</a>
           </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="accordion-mobile">
          {items.map((item) => (
            <div key={item.id} className="accordion-item">
              <div
                onClick={() =>
                  setActiveTab((prev) => (prev === item.id ? null : item.id))
                }
                className="accordion-header"
              >
                {item.title}
                <span className="accordion-icon">
                  {activeTab === item.id ? "−" : "+"}
                </span>
              </div>
              {activeTab === item.id && (
               <div className="accordion-content">
               <h2>{item.title}</h2>
               {item.img && (
  <img src={item.img} alt={item.title} className="image-float" loading="lazy" />
)}
               <div>{item.description}</div>
               <a href="#form">
  <button className="tabs-button">Book</button>
</a>
<a href="tel:3238704790">
  <button className="tabs-button">Call: (323) 870-4790</button>
</a>
             </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
