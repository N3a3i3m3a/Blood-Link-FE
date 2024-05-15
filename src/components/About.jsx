import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className=" mt-32">
      <div className="about-text px-10 pt-20 pb-10 rounded-b-lg shadow-md bg-white ">
      <Link to="/Admin"> <h2 className="text-3xl font-semibold text-center mb-5">About Us</h2></Link>
        <div className="grid grid-cols-12 gap-10"> {/* Grid for row layout */}
          <div className="col-span-4"> {/* Image container */}
            <img
              className="w-full h-auto rounded-lg object-cover"
              src="contactimg.avif"
              alt="Logo"
            />
          </div>
          <div className="col-span-8"> {/* Paragraphs container */}
            <div className="space-y-5 my-12"> {/* Spacing between paragraphs */}
              <p className="leading-relaxed text-left">
                Welcome to our innovative blood donation application, designed to revolutionize the way blood donors and hospitals connect and coordinate life-saving donations. Here's more about us:

                Our application offers a seamless registration process for blood donors. Users can easily create profiles, providing essential information such as blood type and location, ensuring quick identification when the need arises.
              </p>
              <p className="leading-relaxed text-left">
                With real-time tracking features, donors can monitor the status of their donations, from the moment they schedule an appointment to when their blood is received by the hospital. This transparency provides reassurance and encourages ongoing participation.

                Hospitals facing urgent blood shortages can send instant alerts through the application, notifying nearby donors of the specific blood types needed and the urgency of the situation. This immediate communication helps mobilize donors quickly, potentially saving lives in emergencies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0"> {/* Triangle after content */}
        <div className="w-0 h-0 border-t-transparent border-l-80 border-r-80 border-b-white"></div>
      </div>
    </div>
  );
};

export default About;