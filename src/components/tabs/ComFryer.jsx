import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Commercial Fryer Types Repair",
      heading: "Commercial Fryer Types and Their Repair Needs",
      img: "",
      description: (
        <>
         

<h3>Open Pot Fryers</h3>
<p>
Many bustling restaurants prefer using <strong>open pot fryers</strong> for their versatility, ease of cleaning, and suitability for preparing dishes like fries and onion rings. It's worth noting that they may not be the best choice for heavily battered foods. Our team often deals with issues such as <strong>malfunctioning fryer thermostats</strong>, <strong>heating element failures</strong>, and <strong>clogged burners</strong>. Following repairs, we always advise on <strong>maintenance routines</strong>, including cleaning and timely replacement of worn-out parts. Keeping up with maintenance ensures that your fryer operates smoothly and lasts longer. From our experience, focusing on <strong>burner efficiency</strong>, <strong>temperature control calibration</strong>, and proper functioning of <strong>oil filtration systems</strong> are essential aspects of maintaining open pot fryers.
</p>

<h3>Tube-Type Fryers</h3>
<p>
<strong>Tube-type fryers</strong> are commonly used for frying battered items like chicken and fish due to their tube-shaped gas burners that heat the oil. These fryers are known for their durability, making them a popular choice in high-volume restaurant settings. However, they can also encounter issues such as <strong>carbon buildup within the tubes</strong>, leading to poor heating and potential safety risks. Our technicians are frequently called to provide <strong>maintenance for tube-type fryers</strong> because they require more intricate cleaning compared to open-pot fryers. During maintenance visits, we address <strong>descaling needs</strong> and ensure proper <strong>ventilation</strong>.
</p>

<h3>Flat-Bottom Fryers</h3>
<p>
<strong>Flat-bottom fryers</strong> are designed for cooking delicate items such as doughnuts, tempura, and tortilla chips. Their flat-bottom design allows for even heating and easy removal of large quantities of food. However, they are not suitable for high-sediment foods, as there is no cold zone for sediment to settle. Maintenance for flat-bottom fryers typically involves ensuring that the <strong>heating elements</strong> are functioning correctly and that the oil is being <strong>evenly heated</strong>. Common repair issues include fixing or replacing <strong>malfunctioning thermostats</strong>, <strong>repairing heating elements</strong>, and addressing any <strong>electrical issues</strong> that may arise. Regular cleaning to prevent <strong>oil buildup</strong> and <strong>sediment accumulation</strong> is crucial for maintaining their performance.
</p>

<h3>Pressure Fryers</h3>
<p>
<strong>Pressure fryers</strong> are specialized fryers that cook food under pressure, making them ideal for producing crispy and juicy fried chicken. They cook food faster and at lower oil temperatures, which can result in a more consistent product. However, the complexity of pressure fryers means they have unique maintenance and repair needs. Issues such as <strong>gasket wear</strong>, <strong>pressure valve malfunctions</strong>, and problems with the <strong>locking mechanism</strong> are common. Regular maintenance involves checking the integrity of the <strong>gaskets and seals</strong>, ensuring that the <strong>pressure relief valves</strong> are functioning properly, and <strong>calibrating the pressure settings</strong>. When repairs are needed, it often requires <strong>specialized knowledge</strong> to address issues with the pressure system and to ensure that all <strong>safety mechanisms</strong> are operating correctly.
</p>
  </>
      ),
    },
    {
      id: "content2",
      title: "Commercial Fryer Replacement Parts",
      heading:  "Commercial Fryer Replacement Parts",
      img: "",
      description: (
        <>        
        <p>
        At <strong>Same Day Appliance Repair</strong>, our experienced technicians specialize in servicing and replacing key components of <strong>commercial fryers</strong> used across Los Angeles and surrounding areas. Whether you run a busy kitchen or a high-volume restaurant, we understand how crucial properly functioning fryer parts are to your operation.
        </p>
        
        <h3>Thermostats</h3>
        <p>
        <strong>Thermostats</strong> are critical components in commercial fryers, helping regulate and maintain optimal oil temperature for safe and even cooking. Over time, thermostats can wear out or malfunction, causing <strong>inconsistent heat</strong> that compromises food quality and safety. Our technicians inspect calibration and replace faulty thermostats promptly to prevent undercooking, overheating, or fire hazards. We always ensure compatibility with the specific fryer model and recommend <strong>regular maintenance</strong> to catch early signs of thermostat failure.
        </p>
        
        <h3>Heating Elements</h3>
        <p>
        <strong>Heating elements</strong>—whether electric or gas-powered—generate the heat necessary for frying. Common problems include <strong>uneven heating</strong>, <strong>slow preheating</strong>, or complete failure to heat. At Same Day Appliance Repair, we replace burnt-out elements with the correct type and wattage, ensuring safe installation and full recovery of cooking performance. Our team also checks for signs of <strong>corrosion, damage, or electrical issues</strong> during routine inspections.
        </p>
        
        <h3>Burners</h3>
        <p>
        <strong>Gas burners</strong> in commercial fryers are essential for heating oil efficiently. Grease and carbon buildup can lead to <strong>clogging, delayed ignition</strong>, or uneven heating. Our technicians clean and, if needed, replace burners to restore reliable function. We use OEM-compatible burners, verify gas line safety, and perform ignition tests to ensure your fryer operates safely and efficiently.
        </p>
        
        <h3>Gaskets and Seals</h3>
        <p>
        <strong>Gaskets and seals</strong> are especially important in <strong>pressure fryers</strong>, where they contain heat and pressure during cooking. If they become brittle, cracked, or worn, this can lead to <strong>leaks, pressure loss, and safety risks</strong>. Our technicians carefully match and replace fryer gaskets to maintain seal integrity, uphold cooking consistency, and avoid system pressure failures. We inspect these parts regularly to keep your equipment safe.
        </p>
        
        <h3>Oil Filters</h3>
        <p>
        <strong>Oil filters</strong> help maintain clean oil by filtering out food particles and sediment. Dirty oil affects taste and shortens fryer life. If your fryer has <strong>clogged or inefficient filters</strong>, our team will replace them with manufacturer-approved parts. We also recommend a routine oil filter replacement schedule to support better food quality and appliance performance.
        </p>
        
        <h3>Control Panels</h3>
        <p>
        <strong>Control panels</strong> give kitchen staff the ability to manage temperature, time, and safety settings. Over time, these panels can suffer from <strong>unresponsive buttons, display errors, or circuit issues</strong>. Our experts handle diagnostics and full replacement of faulty panels, including <strong>reprogramming and recalibration</strong> as needed. With proper maintenance, you can count on consistent and easy-to-use fryer control.
        </p>
        
        <h3>Pilot Lights and Igniters</h3>
        <p>
        <strong>Pilot lights and igniters</strong> provide the initial flame that powers gas burners. If they fail due to grease buildup, wear, or electrical problems, your fryer won’t ignite. At Same Day Appliance Repair, we clean and replace pilot assemblies and igniters with care, using components that match your model. We ensure <strong>safe ignition and quick startup</strong>—vital for a busy commercial kitchen.
        </p>
        
        <p>
        Our goal is to ensure that your <strong>commercial fryer operates efficiently, safely, and consistently</strong>. With fully equipped vans and same-day availability, Same Day Appliance Repair technicians are ready to replace any worn parts and help prevent future breakdowns. Contact us today for expert service!
        </p>
        
        </>
      ),
    },
    {
      id: "content3",
      title: "Repair or Replace",
      heading: "How to Decide Whether to Repair or Replace a Commercial Fryer",
      img: "",
      description: (
        <>
        <h3>Commercial Fryer Repair Near Me</h3>
        
        <p>
        At <strong>Same Day Appliance Repair</strong>, our technicians are often asked whether it's better to repair or replace a malfunctioning <strong>commercial fryer</strong>. Making the right choice depends on several key factors. Below, we’ve outlined a practical guide to help business owners in Los Angeles and surrounding areas make informed decisions.
        </p>
        
        <h3>Assess the Age of the Fryer</h3>
        <p>
        <strong>Commercial fryers</strong> generally last between 7 to 10 years. If your unit is approaching or has exceeded this lifespan, <strong>replacement may be more cost-effective</strong>. Additionally, if your fryer has a history of frequent breakdowns or declining performance, our team often recommends investing in a new unit to reduce long-term maintenance.
        </p>
        
        <h3>Evaluate Repair Costs</h3>
        <p>
        Our technicians advise clients to consider the <strong>cost of repair versus the value of the fryer</strong>. If the repair estimate exceeds 50% of the fryer's current value, it’s typically best to replace it. Also, if your fryer has required <strong>frequent service in the past year</strong>, the ongoing cost may outweigh the benefits of keeping it.
        </p>
        
        <h3>Consider Energy Efficiency</h3>
        <p>
        Older models often consume more electricity or gas, which results in <strong>higher utility bills</strong>. Newer fryers, especially Energy Star-certified ones, are significantly more efficient. Over time, this <strong>energy efficiency</strong> can translate into substantial cost savings. Our team can help you determine whether upgrading would lower your operating expenses.
        </p>
        
        <h3>Analyze Technological Advancements</h3>
        <p>
        Today’s <strong>commercial fryers</strong> come equipped with <strong>digital temperature controls, timers, programmable presets</strong>, and enhanced safety systems. These features make cooking faster, more accurate, and easier to manage. If your current fryer lacks these capabilities, replacement could improve your kitchen’s productivity and reduce training time for staff.
        </p>
        
        <h3>Safety Considerations</h3>
        <p>
        Outdated fryers may no longer meet current <strong>commercial kitchen safety standards</strong>. If your fryer poses risks such as overheating, oil spills, or electrical hazards, we strongly recommend replacing it with a modern unit. A reliable fryer minimizes safety incidents and improves workplace conditions for your staff.
        </p>
        
        <h3>Downtime and Business Impact</h3>
        <p>
        Frequent fryer breakdowns can interrupt service and disappoint customers. Our clients often choose to replace fryers when downtime affects <strong>customer satisfaction and revenue</strong>. A new fryer restores <strong>operational efficiency</strong> and ensures smooth kitchen workflows, especially during peak hours.
        </p>
        
        <h3>Manufacturer Support and Warranty</h3>
        <p>
        If your fryer is still under manufacturer <strong>warranty</strong>, repair might be the most logical option. However, when parts become unavailable or tech support is limited for older models, <strong>repair costs and delays increase</strong>. Our technicians always check warranty terms before recommending a course of action.
        </p>
        
        <h3>Financial Considerations</h3>
        <p>
        Although a new commercial fryer may require a larger upfront investment, consider the <strong>long-term savings</strong> on utility costs, repairs, and reduced downtime. We also encourage clients to explore <strong>financing options or leasing programs</strong>, which can make equipment upgrades more affordable.
        </p>
        
        <h3>Decision-Making Tips</h3>
        <p>
        Our team at Same Day Appliance Repair can provide a professional on-site assessment of your fryer's condition and a breakdown of <strong>repair vs. replacement costs</strong>. We encourage business owners to perform a simple <strong>cost-benefit analysis</strong>, taking into account all the factors above before making a final decision.
        </p>
        
        <h3>Conclusion</h3>
        <p>
        Deciding whether to repair or replace a <strong>commercial fryer</strong> is an important step toward improving your business operations. At Same Day Appliance Repair, our technicians prioritize <strong>safety, efficiency, and long-term savings</strong> when advising our clients. Contact us today for a personalized evaluation of your commercial fryer and let us help you keep your kitchen running at full capacity.
        </p>
        </>
      ),
    },
    {
      id: "content4",
      title: "Common Fryer Issues We Fix",
      heading:
      img: "",
      description: (
        <>
          <ul>
            <li>Fryer not heating or maintaining temperature</li>
            <li>Oil leaks or overheating</li>
            <li>Uneven burner flame or ignition failure</li>
            <li>Thermostat or control panel malfunctions</li>
            <li>Clogged filters and grease buildup</li>
            <li>Electrical issues or tripped safety switches</li>
          </ul>
        </>
      ),
    },
    {
      id: "content5",
      title: "Professional Diagnosis and Modern Tools",
      heading:
      img: "",
      description: (
        <>
          <ul>
            <li>Temperature sensors</li>
            <li>Burners and thermoblocks</li>
            <li>Electrical wiring and fuses</li>
            <li>Control panels and relays</li>
            <li>Safety switches and sensors</li>
          </ul>
          <p>This approach ensures lasting, effective repairs rather than short-term fixes.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "OEM Parts and Manufacturer Specifications",
      heading:
      img: "",
      description: (
        <>
          <p>To ensure performance and safety, we use only <strong>OEM (Original Equipment Manufacturer) parts</strong>. All repairs are completed according to the manufacturer’s official specifications. For more information, check your brand’s official website or speak to our technician on-site.</p>
        </>
      ),
    },
    {
      id: "content7",
      title: "Step-by-Step Repair Process",
      heading:
      img: "",
      description: (
        <>
          <ol>
            <li><strong>Same-day dispatch</strong> – we send a technician right after your call</li>
            <li><strong>Full inspection</strong> – diagnosis of heating elements, controls, and safety systems</li>
            <li><strong>Cleaning and maintenance</strong> – filters and grease traps thoroughly cleaned</li>
            <li><strong>OEM replacement</strong> – worn or broken parts are replaced using certified components</li>
            <li><strong>Final testing</strong> – unit is tested for heat consistency and safety</li>
            <li><strong>Maintenance tips</strong> – we explain how to keep your fryer running longer</li>
          </ol>
        </>
      ),
    },
    {
      id: "content8",
      title: "Preventative Maintenance to Avoid Breakdowns",
      heading:
      img: "",
      description: (
        <>
          <ul>
            <li>Degreasing and internal cleaning</li>
            <li>Inspection and replacement of worn components</li>
            <li>Calibration of thermostats and controls</li>
            <li>Checking all electrical connections</li>
            <li>Testing built-in safety systems</li>
          </ul>
        </>
      ),
    },
    {
      id: "content9",
      title: "Why Choose Same Day Appliance Repair?",
      heading:
      img: "",
      description: (
        <>
          <ul>
            <li><strong>Same-day service</strong> – we respond fast so you don’t lose business</li>
            <li><strong>Licensed, insured, and certified technicians</strong></li>
            <li><strong>OEM parts and manufacturer-level repairs</strong></li>
            <li><strong>20+ years of experience in commercial equipment repair</strong></li>
            <li><strong>BBB accredited</strong> – we’re a trusted name in the industry</li>
            <li><strong>We serve all foodservice businesses</strong> – from local restaurants to national chains</li>
            <li><strong>Service across Los Angeles, Orange, and Ventura Counties</strong></li>
          </ul>
        </>
      ),
    },
    {
      id: "content10",
      title: "FAQs – Commercial Fryer Repair",
      heading:
      img: "",
      description: (
        <>
          <h4>Which brands do you work with?</h4>
          <p>We repair Frymaster, Pitco, Vulcan, Henny Penny, and many others. A full list is available above.</p>
          <h4>Can you come the same day?</h4>
          <p>Yes! In most cases, we offer same-day dispatch and repair.</p>
          <h4>Do you offer service contracts?</h4>
          <p>Yes, we provide customizable preventative maintenance plans for businesses.</p>
          <h4>Do your repairs come with a warranty?</h4>
          <p>Absolutely. We provide warranties on both parts and labor for all completed repairs.</p>
        </>
      ),
    }
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
