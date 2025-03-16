import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: "Assistant Professor",
            date: "November 2009 - Present",
            institution: "School of Information and Communication Technology, Gautam Buddha University, Greater Noida, India",
            details: "Serving as an Assistant Professor with AGP of Rs. 8,000 as per the 6th CPC at a Uttar Pradesh State Government University."
        },
        {
            title: "Associate Professor",
            institution: "School of Computer Science and Engineering, VIT University, Vellore, India",
            details: "Worked as an Associate Professor, contributing to teaching and research in Computer Science and Engineering."
        },
        {
            title: "Lecturer",
            institution: "Department of Electronics and Communication Engineering, Jawaharlal Institute of Technology, Khargone, India",
            details: "Taught undergraduate courses and engaged in research activities in the field of Electronics and Communication Engineering."
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

    const titleStyle = {
        color: '#3E8E41',
        fontWeight: 'bold',
    };

    const dateStyle = {
        color: '#A3A3A3',
    };

    const contentStyle = {
        color: '#333',
        fontWeight: '500',
    };

    const institutionStyle = {
        color: '#717171',
        fontWeight: '500',

    }

    return (
        <div className="min-h-screen w-full overflow-auto bg-[#f5f5f5] px-4 py-6 sm:px-6 md:px-8 lg:px-16">
            <div className="font-sans">
                <h1 className="mb-8 border-b border-black pb-2 text-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                    Work Experience
                </h1>

                {experiences.map((exp, index) => (
                    <div key={index} style={cardStyle} className="mb-4 rounded-lg border border-gray-300 p-3 shadow-md transition duration-300 sm:p-4">
                        <div style={titleStyle} className="text-lg font-semibold sm:text-xl">{exp.title}</div>
                        {exp.date && <div style={dateStyle} className="text-sm sm:text-base md:text-lg">{exp.date}</div>}
                        <div
                            style={institutionStyle} className="italic text-sm sm:text-base md:text-lg">{exp.institution}</div>
                        {exp.details && <div style={contentStyle} className="text-sm sm:text-base md:text-lg mt-2">{exp.details}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
