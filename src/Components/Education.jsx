import React from 'react';

const Education = () => {
    const educationDetails = [
        {
            degree: "Ph.D. (Network Reliability)",
            institution: "Indian Institute of Technology, Kharagpur (WB), India",
            duration: "2005 - 2009",
            thesisTitle: "Minimal Cutset-Based Evaluation of Network Reliability Measures",
            thesisSupervisor: "Prof. Sanjay Kumar Chaturvedi"
        },
        {
            degree: "M.Tech. (Reliability Engineering)",
            institution: "Indian Institute of Technology, Kharagpur, India",
            duration: "2002 - 2004",
            thesisTitle: "Reliability Assessment of Telecommunication Exchange – A Case Study",
            thesisSupervisor: "Prof. V. N. A. Naikan"
        },
        {
            degree: "B.E. (Electronics Engineering)",
            institution: "Swami Ramanand Teerth Marathwada University, Nanded, India",
            duration: "1995 - 1999",
            thesisTitle: "Analysis of Animals Voice Signals",
            thesisSupervisor: "Prof. U. B. Solapurkar"
        }
    ];


    const cardStyle = {
        border: '2px solid #50596a',
        borderRadius: '8px',
        margin: '20px 0',
        padding: '15px',
        backgroundColor: '#eff1f3',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        transition: '0.3s',
    };

    const instituteStyle = {
        color: '#717171',
        fontWeight: '500',
    };

    const dateStyle = {
        color: '#A3A3A3',
    };

    const contentStyle = {
        color: '#333',
        fontWeight: '500',
    };

    return (
        <div className="w-full h-[100vh] overflow-auto py-8 px-4 md:px-16 bg-[#f5f5f5]">
            <h1 className="text-center text-black border-b border-black pb-2 text-3xl md:text-4xl font-bold mb-8">Education</h1>
            {educationDetails.map((edu, index) => (
                <div key={index} style={cardStyle} className="border-2 border-blue-500 rounded-lg p-4 md:p-5 mb-5 bg-[#e6f7ff] shadow-lg transition duration-300">
                    <div className="text-green-600 text-xl md:text-2xl font-bold">{edu.degree}</div>
                    <div style={instituteStyle} className="text-gray-800 text-base md:text-lg uppercase font-medium">{edu.institution}</div>
                    <div style={dateStyle} className="text-gray-500 text-base md:text-lg">{edu.duration}</div>
                    <div style={contentStyle} className="text-base md:text-lg text-gray-800 mt-2">
                        Thesis Title: "<span className="italic">{edu.thesisTitle}"</span>
                    </div>

                    <div style={contentStyle} className="text-base md:text-lg text-gray-800">Thesis Supervisor: {edu.thesisSupervisor}</div>
                    {edu.defenseDate && <div style={contentStyle} className="text-base md:text-lg text-gray-800">Defense Date: {edu.defenseDate}</div>}
                </div>
            ))}
        </div>
    );
};

export default Education;
