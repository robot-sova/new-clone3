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
          
            <h3>Under-Counter Bar Refrigerators</h3>
<p><strong>Under-counter bar refrigerators</strong> are a popular choice for bars and restaurants due to their <strong>space-saving design</strong> and <strong>easy accessibility</strong>.</p>
<p>These units fit snugly beneath the counter, allowing bartenders to quickly grab beverages and ingredients without leaving their station.</p>
<p>Common repair needs for under-counter bar refrigerators include issues with the <strong>thermostat</strong>, which can lead to <strong>improper cooling</strong> and <strong>spoilage of stored items</strong>.</p>
<p>Problems with the <strong>door seal</strong> are also frequent, resulting in <strong>energy loss</strong> and <strong>inefficient cooling</strong>.</p>
<p><strong>Regular maintenance</strong>, such as <strong>cleaning the condenser coils</strong> and <strong>checking the refrigerant levels</strong>, can help prevent these issues and ensure the unit operates efficiently.</p>

<h3>Back Bar Coolers</h3>
<p><strong>Back bar coolers</strong> are designed to <strong>store and display beverages</strong> behind the bar, providing <strong>easy access</strong> for bartenders and an <strong>attractive display</strong> for customers.</p>
<p>These coolers often feature <strong>glass doors</strong> and <strong>adjustable shelving</strong>, making them ideal for showcasing a variety of drinks.</p>
<p>Common repair needs for back bar coolers include <strong>malfunctioning compressors</strong>, which can lead to <strong>inadequate cooling</strong> and <strong>potential beverage spoilage</strong>.</p>
<p>Additionally, issues with the <strong>internal lighting system</strong> can affect the display's appeal.</p>
<p><strong>Routine maintenance</strong>, such as <strong>cleaning the evaporator fan</strong> and <strong>inspecting the door gaskets</strong>, can help keep back bar coolers running smoothly and looking their best.</p>

<h3>Kegerators</h3>
<p><strong>Kegerators</strong> are specialized refrigerators designed to <strong>store and dispense kegs of beer</strong>, making them a staple in many bars and restaurants.</p>
<p>These units typically include a <strong>refrigeration system</strong>, a <strong>tap</strong>, and a <strong>CO2 tank</strong> to keep the beer <strong>carbonated and fresh</strong>.</p>
<p>Common repair needs for kegerators include issues with the <strong>CO2 system</strong>, such as <strong>leaks</strong> or <strong>regulator malfunctions</strong>, which can affect the quality of the beer.</p>
<p>Problems with the <strong>cooling system</strong>, such as a <strong>faulty thermostat</strong> or <strong>compressor</strong>, can also impact the beer's temperature and taste.</p>
<p><strong>Regular maintenance</strong>, including <strong>cleaning the beer lines</strong> and <strong>checking the CO2 levels</strong>, is essential to keep kegerators functioning properly and serving up perfect pints.</p>

<h3>Wine Coolers</h3>
<p><strong>Wine coolers</strong> are designed to <strong>store wine at optimal temperatures</strong>, preserving its <strong>flavor and aroma</strong>.</p>
<p>These units often feature <strong>dual temperature zones</strong>, allowing for the storage of both <strong>red and white wines</strong> at their respective ideal temperatures.</p>
<p>Common repair needs for wine coolers include <strong>thermostat issues</strong>, which can lead to <strong>temperature fluctuations</strong> and potentially spoil the wine.</p>
<p>Problems with the <strong>cooling system</strong>, such as a <strong>failing compressor</strong> or <strong>evaporator fan</strong>, can also affect the unit's performance.</p>
<p><strong>Regular maintenance</strong>, including <strong>cleaning the condenser coils</strong> and <strong>ensuring proper ventilation</strong>, can help prevent these issues and keep wine coolers operating efficiently.</p>

<h3>Display Refrigerators</h3>
<p><strong>Display refrigerators</strong> are used in bars and restaurants to <strong>showcase a variety of beverages</strong> and <strong>attract customers</strong> with their appealing presentation.</p>
<p>These units often feature <strong>glass doors</strong>, <strong>bright internal lighting</strong>, and <strong>adjustable shelving</strong> to maximize visibility and accessibility.</p>
<p>Common repair needs for display refrigerators include issues with the <strong>lighting system</strong>, which can diminish the <strong>visual appeal</strong> of the display, and problems with the <strong>cooling system</strong>, such as a <strong>malfunctioning compressor</strong> or <strong>thermostat</strong>.</p>
<p><strong>Regular maintenance</strong>, such as <strong>cleaning the condenser coils</strong> and <strong>checking the door seals</strong>, is crucial to ensure display refrigerators remain both functional and attractive.</p>


        </>
      ),
    },
    {
      id: "content2",
      title: "Common Bar Refrigerator Issues",
      heading:"Common Bar Refrigerator Issues",
      img: "/bar-refrigerator/bar-refrigerator-repair-2.webp",
      description: (
        <>
              
        <h3>Temperature Fluctuations</h3>
        <p><strong>Temperature fluctuations</strong>: One of the most common issues with bar refrigerators is inconsistent temperature control. This can result in beverages not being chilled to the desired temperature or even freezing.</p>
        <p><strong>Temperature fluctuations</strong> can be caused by a <strong>faulty thermostat</strong>, <strong>poor door seals</strong>, or a <strong>malfunctioning compressor</strong>.</p>
        <p>It's crucial to ensure that the refrigerator is not overstocked and that there's adequate airflow around the unit.</p>
        <p><strong>Regular maintenance</strong>, such as <strong>cleaning the condenser coils</strong> and <strong>checking door gaskets</strong>, can help mitigate these issues and ensure consistent cooling performance.</p>
        
        <h3>Noisy Operation</h3>
        <p><strong>Noisy operation</strong>: Bar refrigerators can sometimes become noisy, which can be particularly bothersome in a social or commercial environment.</p>
        <p>Common sources of noise include the <strong>compressor</strong>, <strong>evaporator fan</strong>, and <strong>condenser fan</strong>.</p>
        <p>A <strong>rattling or humming noise</strong> could indicate that the refrigerator is not level, or that there are <strong>loose components</strong>.</p>
        <p><strong>Regularly inspecting</strong> the unit for any loose parts and ensuring it is placed on a stable, level surface can help reduce noise.</p>
        <p>If the noise persists, it might be necessary to <strong>call a professional</strong> to inspect the internal components.</p>
        
        <h3>Frost Buildup</h3>
        <p><strong>Frost buildup</strong> inside a bar refrigerator can compromise its efficiency and reduce storage space.</p>
        <p>This issue is often due to <strong>warm, moist air</strong> entering the refrigerator, which can happen if the <strong>door isn't sealed properly</strong> or is frequently opened.</p>
        <p>Another cause could be a <strong>malfunctioning defrost timer</strong> or <strong>heater</strong>.</p>
        <p>To prevent frost buildup, ensure that the <strong>door seals</strong> are intact and that the refrigerator door is not left open for extended periods.</p>
        <p><strong>Regularly defrosting</strong> the unit and keeping it clean can also help maintain optimal performance.</p>
        
        <h3>Leaking Water</h3>
        <p><strong>Water leakage</strong> is a common problem with bar refrigerators and can stem from several sources.</p>
        <p>A <strong>blocked or frozen defrost drain</strong> can cause water to pool inside the unit, while a <strong>damaged or misaligned drip pan</strong> can lead to external leaks.</p>
        <p>Additionally, <strong>high humidity levels</strong> can cause excess condensation, which may result in water leakage.</p>
        <p><strong>Regularly inspecting and cleaning</strong> the defrost drain and drip pan, as well as ensuring that the refrigerator is properly sealed and maintained, can help prevent leaks.</p>
        <p>If the issue persists, it may be necessary to have a <strong>professional service</strong> the unit to identify and fix the underlying cause.</p>
        
        <h3>Electrical Issues</h3>
        <p><strong>Electrical problems</strong> can cause a bar refrigerator to stop working entirely or operate inefficiently.</p>
        <p>Common electrical issues include <strong>blown fuses</strong>, <strong>tripped circuit breakers</strong>, or <strong>faulty wiring</strong>.</p>
        <p>These problems can arise from <strong>power surges</strong>, <strong>improper installation</strong>, or wear and tear over time.</p>
        <p>To prevent electrical issues, ensure that the refrigerator is plugged into a <strong>dedicated outlet</strong> and that the <strong>power supply is stable</strong>.</p>
        <p><strong>Regularly inspecting</strong> the electrical components and addressing any signs of wear or damage can help maintain the unit's functionality.</p>
        <p>If an electrical issue occurs, it's advisable to <strong>seek professional assistance</strong> to avoid the risk of electric shock or further damage.</p>
        
        <h3>Poor Energy Efficiency</h3>
        <p><strong>Poor energy efficiency</strong>: Over time, a bar refrigerator may become less energy-efficient, leading to <strong>higher electricity bills</strong> and <strong>reduced performance</strong>.</p>
        <p>This can be due to several factors, including <strong>dirty condenser coils</strong>, an <strong>aging compressor</strong>, or <strong>inadequate insulation</strong>.</p>
        <p>Poor energy efficiency can also result from <strong>frequent door openings</strong> or an <strong>overloaded refrigerator</strong>, which forces the unit to work harder.</p>
        <p>To improve energy efficiency, <strong>clean the condenser coils regularly</strong>, ensure the <strong>door seals</strong> are intact, and avoid overstocking the refrigerator.</p>
        <p>Additionally, consider <strong>upgrading to a more energy-efficient model</strong> if the current unit is old or frequently requires repairs.</p>
        <p><strong>Regular maintenance and mindful usage</strong> can help extend the lifespan of the refrigerator while keeping energy consumption in check.</p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Bar Refrigeration Replacement Parts",
      heading:"Bar Refrigeration Replacement Parts",
      img: "/bar-refrigerator/bar-refrigerator-repair-3.webp",
      description: (
        <>
               
        <h3>Compressor</h3>
        <p><strong>Compressor</strong>: The compressor is the heart of any refrigeration system, responsible for circulating refrigerant and maintaining the desired temperature.</p>
        <p>It's a mechanical pump that compresses the refrigerant gas, turning it into a high-pressure, high-temperature vapor.</p>
        <p>Over time, compressors can wear out due to continuous operation, leading to inefficiency or complete failure.</p>
        <p>Replacing a faulty compressor can significantly restore the cooling performance of a bar refrigerator.</p>
        <p>However, it's a complex task that usually requires professional expertise to ensure proper installation and system recharging.</p>
        
        <h3>Thermostat</h3>
        <p><strong>Thermostat</strong>: The thermostat in a bar refrigerator regulates the internal temperature by controlling the compressor's on and off cycles.</p>
        <p>If the thermostat is malfunctioning, it can lead to temperature fluctuations, resulting in beverages that are either too warm or frozen.</p>
        <p>Replacing a defective thermostat is a relatively straightforward process and can restore the refrigerator's ability to maintain a consistent temperature.</p>
        <p>It's essential to ensure that the replacement thermostat is compatible with the specific model of the refrigerator for optimal performance.</p>
        
        <h3>Condenser Coils</h3>
        <p><strong>Condenser coils</strong>: The condenser coils dissipate heat removed from the refrigerator's interior, playing a crucial role in the cooling process.</p>
        <p>Over time, these coils can accumulate dirt and dust, reducing their efficiency and causing the refrigerator to work harder.</p>
        <p>In some cases, if the coils are damaged or corroded, they may need to be replaced.</p>
        <p>Regular cleaning can extend their lifespan, but replacement may be necessary to maintain optimal cooling efficiency.</p>
        <p>It's important to use the right type and size of coils to match the refrigerator's specifications.</p>
        
        <h3>Evaporator Fan</h3>
        <p><strong>Evaporator fan</strong>: The evaporator fan circulates air over the evaporator coils, facilitating the absorption of heat from the refrigerator's interior.</p>
        <p>A malfunctioning fan can lead to uneven cooling and frost buildup.</p>
        <p>If the fan motor burns out or the blades become damaged, replacing the evaporator fan is essential to restore proper airflow and cooling efficiency.</p>
        <p>This replacement generally involves accessing the fan located inside the refrigerator, which can be a moderately complex task depending on the model.</p>
        
        <h3>Door Gaskets</h3>
        <p><strong>Door gaskets</strong>: Door gaskets (or seals) are the flexible, rubber-like strips that line the edges of the refrigerator door, creating an airtight seal.</p>
        <p>Damaged or worn-out gaskets can allow warm air to enter, causing the refrigerator to work harder to maintain the set temperature, leading to increased energy consumption and potential frost buildup.</p>
        <p>Replacing old gaskets with new ones can enhance the refrigerator's efficiency and prolong its lifespan.</p>
        <p>It's a relatively simple and cost-effective repair that can make a significant difference in performance.</p>
        
        <h3>Defrost Timer</h3>
        <p><strong>Defrost timer</strong>: The defrost timer controls the defrost cycle in a bar refrigerator, ensuring that the evaporator coils remain free of frost.</p>
        <p>A faulty defrost timer can either cause excessive frost buildup or unnecessary defrost cycles, both of which impair the refrigerator's efficiency.</p>
        <p>Replacing a malfunctioning defrost timer involves locating the component, which is typically found in the control panel or near the compressor, and installing a compatible new timer.</p>
        <p>This replacement can help maintain the refrigerator's optimal cooling performance and energy efficiency.</p>
        
        <h3>Water Filter</h3>
        <p><strong>Water filter</strong>: Many bar refrigerators come equipped with built-in water dispensers or ice makers that utilize water filters to ensure the purity and taste of the water.</p>
        <p>Over time, these filters can become clogged with contaminants, reducing water flow and affecting the quality of the dispensed water or ice.</p>
        <p>Replacing the water filter is a straightforward task that involves locating the filter compartment, usually inside the refrigerator or behind a panel, and swapping out the old filter for a new one.</p>
        <p>Regular replacement of water filters is essential for maintaining the quality of water and ice, as well as the overall efficiency of the refrigerator.</p>
        
        <h3>Shelving and Racks</h3>
        <p><strong>Shelving and racks</strong>: Shelving and racks inside a bar refrigerator can become damaged or worn out due to heavy use, making it difficult to organize and store beverages effectively.</p>
        <p>Replacing broken or missing shelves and racks can improve the functionality and aesthetic appeal of the refrigerator.</p>
        <p>Most replacement shelves and racks are designed to be easily installed, often simply sliding into place or clicking into designated slots.</p>
        <p>Ensuring that the replacements are the correct size and type for the specific refrigerator model is crucial for maximizing storage space and usability.</p>
        
        <p><strong>Each of these replacement parts</strong> plays a critical role in the overall functionality and efficiency of a bar refrigerator, and <strong>timely replacement</strong> can help extend the appliance's lifespan and maintain optimal performance.</p>
        </>
      ),
    },
    {
      id: "content4",
      title: "Repair or Replace a Bar Refrigerator",
      heading: "Repair or Replace a Bar Refrigerator",
      img: "/bar-refrigerator/bar-refrigerator-repair-4.webp",
      description: (
        <>

              
        <p>Deciding whether to <strong>repair or replace a bar refrigerator</strong> can be challenging. Here are some key factors to consider, along with guidelines to help you make an informed decision:</p>
        
        <h3>Age of the Refrigerator</h3>
        <p><strong>Lifespan</strong>: Bar refrigerators typically last around 8–12 years.</p>
        <p><strong>Guideline</strong>: If your refrigerator is nearing or has surpassed its expected lifespan, replacement may be more cost-effective.</p>
        
        <h3>Cost of Repair vs. Replacement</h3>
        <p><strong>Repair Costs</strong>: Obtain a detailed estimate for the repair, including labor and parts.</p>
        <p><strong>Replacement Costs</strong>: Research the cost of a new bar refrigerator with similar features.</p>
        <p><strong>Guideline</strong>: If the repair costs exceed 50% of the price of a new unit, consider replacing it.</p>
        
        <h3>Energy Efficiency</h3>
        <p><strong>Older Models</strong>: Older refrigerators are generally less energy-efficient and may result in higher utility bills.</p>
        <p><strong>Energy Star</strong>: Newer models often have better energy ratings and can save money in the long run.</p>
        <p><strong>Guideline</strong>: If your current refrigerator is an older, less efficient model, a replacement could reduce energy consumption and operating costs.</p>
        
        <h3>Frequency of Repairs</h3>
        <p><strong>Repair History</strong>: Consider the number and frequency of previous repairs.</p>
        <p><strong>Guideline</strong>: If your refrigerator has required multiple repairs in a short period, it may indicate underlying issues and warrant replacement.</p>
        
        <h3>Performance and Condition</h3>
        <p><strong>Temperature Issues</strong>: Frequent inability to maintain the right temperature.</p>
        <p><strong>Physical Condition</strong>: Check for rust, cracks, or other signs of wear and tear.</p>
        <p><strong>Guideline</strong>: If performance is consistently poor or the physical condition is deteriorating, replacement is likely the better option.</p>
        
        <h3>Environmental Impact</h3>
        <p><strong>Recycling</strong>: Many new refrigerators are designed to be more environmentally friendly and may be easier to recycle.</p>
        <p><strong>Guideline</strong>: Consider the environmental impact of disposing of your old refrigerator and the benefits of a more eco-friendly model.</p>
        
        <h3>Availability of Parts</h3>
        <p><strong>Older Models</strong>: Parts for older models may be harder to find or more expensive.</p>
        <p><strong>Guideline</strong>: If parts are scarce or costly, replacing the refrigerator may be more practical.</p>
        
        <h3>Manufacturer's Warranty</h3>
        <p><strong>Warranty Coverage</strong>: Check if your refrigerator is still under warranty.</p>
        <p><strong>Guideline</strong>: If repairs are covered under warranty, it may be more economical to repair rather than replace.</p>
        
        <h3>Decision Checklist</h3>
        <ul>
          <li><strong>Age</strong>: Is the refrigerator over 8–12 years old?</li>
          <li><strong>Repair Costs</strong>: Do repair costs exceed 50% of the cost of a new unit?</li>
          <li><strong>Energy Efficiency</strong>: Is the current model significantly less energy-efficient?</li>
          <li><strong>Repair Frequency</strong>: Has the refrigerator required multiple recent repairs?</li>
          <li><strong>Performance</strong>: Is the refrigerator consistently failing to perform well?</li>
          <li><strong>Parts Availability</strong>: Are parts for the current model hard to find or expensive?</li>
          <li><strong>Warranty</strong>: Is the refrigerator still under warranty?</li>
        </ul>
        
        <p>By carefully evaluating these factors, you can make a more informed decision about whether to <strong>repair or replace your bar refrigerator</strong>. If you're still uncertain, <strong>consulting with a professional technician</strong> can provide additional insights and recommendations tailored to your specific situation.</p>
        
        </>
      ),
    },
    {
      id: "content5",
      title: "Expert Bar Refrigerator Services",
      heading: "Same Day Appliance Repair: Expert Bar Refrigerator Services",
      img: "/bar-refrigerator/bar-refrigerator-repair-5.webp",
      description: (
        <>

        <p>Welcome to <strong>Same Day Appliance Repair</strong>! As a <strong>family-owned business</strong>, we are dedicated to enhancing your customer experience with prompt, reliable, and transparent appliance repair services.</p>
        
        <p>We recognize the inconvenience a <strong>malfunctioning bar refrigerator</strong> can cause, and we're here to ensure your appliance is back to optimal performance as quickly as possible.</p>
        
        <h3>Have Questions? We're Here to Help!</h3>
        
        <p>Feel free to reach out to us with any questions or concerns. Our dedicated team is here to assist you and ensure your satisfaction with our services.</p>
         </>
      ),
    },
    {
      id: "content6",
      title: "FAQs",
      heading: "FAQs",
      img: "/bar-refrigerator/bar-repair-process.webp",
      description: (
        <>
        <h3>Why is my bar refrigerator not cooling?</h3>
        <p>At <strong>Same Day Appliance Repair</strong>, we understand the importance of keeping your bar refrigerator in optimal condition, especially for businesses that rely on <strong>commercial refrigeration</strong>. If your bar refrigerator is not cooling, it can disrupt your operations and impact your bottom line. Here are some common reasons why your commercial refrigerator might not be functioning properly and how we can help:</p>
        
        <p><strong>Common Reasons for Cooling Issues:</strong></p>
        <ul>
          <li><strong>Faulty Thermostat</strong>: The thermostat regulates the temperature inside your refrigerator. A malfunctioning thermostat can prevent the refrigerator from maintaining the desired temperature.</li>
          <li><strong>Dirty Condenser Coils</strong>: Over time, condenser coils can accumulate dust and debris, reducing their efficiency. This can cause your refrigeration equipment to struggle to cool properly.</li>
          <li><strong>Malfunctioning Compressor</strong>: The compressor is a critical component of your commercial refrigerator. If it's not working correctly, the refrigerator won't be able to cool.</li>
          <li><strong>Refrigerant Leaks</strong>: Leaks in the refrigerant lines can significantly impact the cooling performance. Signs of a refrigerant leak include hissing sounds and reduced cooling capacity.</li>
          <li><strong>Door Seal Issues</strong>: Damaged or worn-out door seals can allow warm air to enter the refrigerator, making it difficult to maintain the proper temperature.</li>
        </ul>
        
        <p><strong>How We Can Help:</strong></p>
        <ul>
          <li><strong>Visit Your Business</strong>: We'll walk into your establishment, whether it's a restaurant, school, or any other business, to assess and repair your refrigerator on-site.</li>
          <li><strong>Inspect and Diagnose</strong>: We thoroughly review all components, including the thermostat, compressor, condenser coils, and door seals, to identify the problem.</li>
          <li><strong>Provide Immediate Solutions</strong>: Our goal is to serve you promptly, ensuring your refrigerator or freezer is back to optimal performance as quickly as possible.</li>
          <li><strong>Walk-in Freezers</strong>: We also specialize in repairing walk-in freezers, ensuring your frozen goods remain at the right temperature.</li>
          <li><strong>Preventative Maintenance</strong>: Regular maintenance can prevent future issues. We offer scheduled maintenance services to keep your refrigeration equipment running efficiently.</li>
        </ul>
        
        <p>If your bar refrigerator is not cooling, don't let it affect your business. Contact <strong>Same Day Appliance Repair</strong> for a quick and reliable solution. We are committed to ensuring your refrigeration equipment operates efficiently, keeping your beverages and perishables at the perfect temperature.</p>
        
        <p><strong>For immediate assistance, call us today and schedule your appointment. Let us help you keep your business running smoothly!</strong></p>
        
        <h3>What should I do if my bar refrigerator is making unusual noises?</h3>
        <p>When your bar refrigerator starts making unusual noises, it can be concerning, especially if you rely on it for your restaurant or business. At <strong>Same Day Appliance Repair</strong>, we specialize in <strong>commercial refrigeration</strong> and are here to help you diagnose and fix the issue promptly. Here's what you should do if you notice strange sounds coming from your commercial refrigerator:</p>
        
        <p><strong>Common Causes of Unusual Noises:</strong></p>
        <ul>
          <li><strong>Loose Components</strong>: Over time, components inside your bar refrigerator can become loose, causing rattling or banging sounds.</li>
          <li><strong>Condenser or Evaporator Fan Issues</strong>: The fans in your commercial refrigerator or freezer can malfunction or get obstructed, leading to buzzing or grinding noises.</li>
          <li><strong>Compressor Problems</strong>: If the compressor is failing or working excessively hard, it can produce loud humming or knocking sounds.</li>
          <li><strong>Ice Buildup</strong>: Ice around the fan or coils can create noise as fan blades hit the ice.</li>
          <li><strong>Vibration</strong>: An unlevel unit can vibrate and produce sound. Leveling may solve this issue.</li>
        </ul>
        
        <p><strong>Steps to Take:</strong></p>
        <ul>
          <li>Inspect for loose parts and tighten them.</li>
          <li>Check condenser and evaporator fans for obstructions or wear.</li>
          <li>Listen to the compressor—if it's loud, call a professional.</li>
          <li>Defrost the unit if you suspect ice buildup.</li>
          <li>Ensure the refrigerator is level using adjustable legs.</li>
        </ul>
        
        <p><strong>How We Can Help:</strong></p>
        <ul>
          <li><strong>Expert Diagnosis</strong>: Our trained technicians accurately identify the source of the noise.</li>
          <li><strong>Prompt Service</strong>: We provide same-day service to minimize downtime.</li>
          <li><strong>Comprehensive Solutions</strong>: We handle all levels of refrigeration issues.</li>
          <li><strong>Preventative Maintenance</strong>: Plans are available to reduce long-term problems.</li>
        </ul>
        
        <p>If your bar refrigerator is making unusual noises, don't wait. Contact <strong>Same Day Appliance Repair</strong> for a quick and reliable solution.</p>
        
        <p><strong>Call us today for a thorough review and immediate assistance. Let us help you maintain the performance and reliability of your commercial refrigeration systems.</strong></p>
        
        <h3>Why is there water pooling at the bottom of my bar refrigerator?</h3>
        <p>Here are some common reasons why water might be pooling at the bottom of your bar refrigerator:</p>
        
        <ul>
          <li><strong>Clogged Defrost Drain</strong>: This drain channels excess water from the defrost cycle. If it’s clogged, water accumulates at the bottom.</li>
          <li><strong>Freezer Drain Issues</strong>: A clogged freezer drain can overflow into the refrigerator compartment.</li>
          <li><strong>Damaged Door Seal</strong>: Warm air can enter, leading to condensation and water buildup.</li>
          <li><strong>Improper Leveling</strong>: A tilted refrigerator may cause water to pool in specific areas.</li>
          <li><strong>High Humidity</strong>: Moist air may lead to excess condensation inside the fridge.</li>
        </ul>
        
        <p><strong>Steps to Resolve the Issue:</strong></p>
        <ul>
          <li>Unplug the unit for safety.</li>
          <li>Clear the defrost drain with warm water or a pipe cleaner.</li>
          <li>Inspect and replace damaged door seals.</li>
          <li>Use a level tool and adjust refrigerator legs.</li>
          <li>Clear any clogs in the freezer drain.</li>
          <li>Monitor humidity and keep the door closed as much as possible.</li>
        </ul>
        
        <p>If you've tried these steps and are still experiencing issues, it may be time to call in the experts. At <strong>Same Day Appliance Repair</strong>, our skilled technicians are ready to diagnose and fix your appliance problems promptly.</p>
        
        <p><strong>Contact Us Today!</strong></p>
          </>
      ),
    },
    {
      id: "content7",
      title: "Preventative Maintenance Services",
      heading:"Preventative Maintenance Services",
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
      heading:"Why Choose Same Day Appliance Repair?",
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
