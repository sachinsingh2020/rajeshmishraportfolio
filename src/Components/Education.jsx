import React from 'react';

const Education = () => {
    const educationDetails = [
        {
            degree: "Ph.D.",
            institution: "Indian Institute of Science Education and Research Bhopal, India",
            duration: "August 2018 - May 2024",
            thesisTitle: "Quantifying soil moisture from satellite images: Algorithm to Application",
            thesisSupervisor: "Dr. Kumar Gaurav, Associate Professor, EES, IISER Bhopal",
            defenseDate: "Defense date: May 28th, 2024"
        },
        {
            degree: "Integrated Dual Degree (B.Tech. + M.Tech.)",
            institution: "Gautam Buddha University, Greater Noida, India",
            duration: "August 2012 - May 2017",
            thesisTitle: "Intelligent Algorithm Approach Towards Optimal Coverage in Wireless Sensor Networks",
            thesisSupervisor: "Dr. Sandeep Sharma"
        },
        {
            degree: "Integrated Dual Degree (B.Tech. + M.Tech.)",
            institution: "Gautam Buddha University, Greater Noida, India",
            duration: "August 2012 - May 2017",
            thesisTitle: "Intelligent Algorithm Approach Towards Optimal Coverage in Wireless Sensor Networks",
            thesisSupervisor: "Dr. Sandeep Sharma"
        }
    ];

    return (
        <div className="w-full h-[100vh] overflow-auto py-8 px-4 md:px-16 bg-[#3b85ee]">
            <h1 className="text-center text-white border-b border-white pb-2 text-3xl md:text-4xl font-bold mb-8">Education</h1>
            {educationDetails.map((edu, index) => (
                <div key={index} className="border-2 border-blue-500 rounded-lg p-4 md:p-5 mb-5 bg-gray-200 shadow-lg transition duration-300">
                    <div className="text-green-600 text-xl md:text-2xl font-bold">{edu.degree}</div>
                    <div className="text-gray-800 text-base md:text-lg">{edu.institution}</div>
                    <div className="text-gray-500 text-base md:text-lg">{edu.duration}</div>
                    <div className="text-base md:text-lg text-gray-800 mt-2">Thesis Title: {edu.thesisTitle}</div>
                    <div className="text-base md:text-lg text-gray-800">Thesis Supervisor: {edu.thesisSupervisor}</div>
                    {edu.defenseDate && <div className="text-base md:text-lg text-gray-800">Defense Date: {edu.defenseDate}</div>}
                </div>
            ))}
        </div>
    );
};

export default Education;
