import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-7 text-gray-700">
      <h2 className="mx-80 text-3xl font-semibold mb-5">About Us</h2>
      <div className="space-y-10">

      <p className='mx-10'>Welcome to our innovative blood donation application, designed to revolutionize the way blood donors and hospitals connect and coordinate life-saving donations. Here's more abou us:</p>
        <p className=" leading-relaxed">
        <img className='h-5' src='/Slogo.PNG'alt="Logo" />
            Our application offers a seamless registration process for blood donors. Users can easily create profiles, providing essential information such as blood type and location, ensuring quick identification when the need arises.
            
            Donors can schedule donation appointments directly through the application, selecting convenient times and locations. This streamlined booking system eliminates the hassle of long waiting times and ensures a steady supply of blood for hospitals.
            
            With real-time tracking features, donors can monitor the status of their donations, from the moment they schedule an appointment to when their blood is received by the hospital. This transparency provides reassurance and encourages ongoing participation.</p>
       <p className="leading-relaxed">
        <img className='h-5' src='/Slogo.PNG'alt="Logo" />  
           Hospitals facing urgent blood shortages can send instant alerts through the application, notifying nearby donors of the specific blood types needed and the urgency of the situation. This immediate communication helps mobilize donors quickly, potentially saving lives in emergencies.
           
           Our application fosters a sense of community among donors and hospitals, encouraging collaboration and support. Users can share their donation experiences, participate in blood drives, and connect with others passionate about making a difference in healthcare.
        
           We prioritize the security and confidentiality of user data, implementing robust privacy measures to protect sensitive information. Donors can feel confident that their personal details are safe and only accessible to authorized parties.</p>
    
      </div>
    </div>
  );
};

export default About;
