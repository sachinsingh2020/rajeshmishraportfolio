import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: "Research Fellow",
            date: "September 2024 - Present",
            institution: "Faculty of Engineering and Physical Science, School of Mathematics, Department of Applied Mathematics, University of Leeds, Leeds, United Kingdom."
        },
        {
            title: "Senior Research Fellow",
            date: "August 2023 - May 2024",
            institution: "Department of EES, Indian Institute of Science Education and Research, Bhopal."
        },
        {
            title: "Teaching Assistant",
            date: "August 2019 - July 2022",
            institution: "Department of EES, Indian Institute of Science Education and Research, Bhopal.",
            subjects: [
                "Data Analysis and Statistics (Fall 2019) [Blog written by me on Data Science]",
                "Remote Sensing and GIS (Spring 2020, 2021, 2022) (Theory and Practical)",
                "Geo-hydrology (Fall 2020, 2021)"
            ]
        },
        {
            title: "Junior Research Fellow",
            date: "March 2018 - July 2018",
            institution: "Department of EES, Indian Institute of Science Education and Research, Bhopal.",
            project: "NISAR (NASA-ISRO Synthetic Aperture Radar)."
        },
        {
            title: "Summer Research Intern",
            date: "June 2015 - July 2015",
            institution: "DRDO, Dehra Dun Area, India.",
            project: "Verilog Simulation of Elementary SRAM and its Controller on Model Sim (Student Edition 10.4a).",
            supervisor: "Project Supervisor: Mr. Asheesh Thapliyal, Scientist D."
        }
    ];

    const affiliations = [
        "ISPRS Individual Membership (Member Id: 61733, Member since 2018).",
        "IEEE Membership (Member Id: 95635042, Member since 2019). (IEEE Geoscience and Remote Sensing, IEEE Communications, IEEE Sensors Council, IEEE Signal Processing & IEEE Young Professionals).",
        "Indian Radio Science Society (Member Id: S2019022, Member since 2019).",
        "European Geosciences Union (Member Id: 474981, Member since 2020).",
        "American Geophysical Union (Member Id: 1367956, Member since 2021)."
    ];

    const reviewers = [
        "Remote Sensing of Environment (Elsevier)",
        "Artificial Intelligence Review (Springer)",
        "Complex & Intelligent Systems (Springer)",
        "Journal of Ambient Intelligence and Humanized Computing (Springer)",
        "Journal of Intelligent and Fuzzy Systems (IOS Press)",
        "IEEE Access (IEEE)",
        "The Journal of Open Source Software",
        "Advances in Space Research (Elsevier)",
        "Wireless Personal Communications (Springer)",
        "Journal of The Institution of Engineers (India): Series B (Springer)",
        "Expert Systems With Applications (Elsevier)",
        "Big Data Mining and Analytics",
        "Engineering Applications of Artificial Intelligence (Elsevier)",
        "International Journal of Digital Earth (Taylor & Francis)",
        "Cybernetics and Systems (Taylor & Francis)",
        "Web Intelligence (IOS Press)",
        "Computer Methods in Biomechanics and Biomedical Engineering (Taylor & Francis)",
        "The Journal of Supercomputing (Springer)",
        "Connection Science (Taylor & Francis)",
        "Intelligent Systems with Applications (Elsevier)",
        "Remote Sensing (MDPI)",
        "Computer Networks (Elsevier)",
        "Computers and Electronics in Agriculture (Elsevier)",
        "Sensors (MDPI)",
        "International Journal of Communication Systems (Wiley)",
        "GIScience & Remote Sensing (Taylor & Francis)",
        "Geomatics, Natural Hazards and Risk (Taylor & Francis)",
        "Information Fusion (Elsevier)",
        "Geocarto International (Taylor & Francis)",
        "Geo-spatial Information Science (Taylor & Francis)",
        "IEEE Transactions on Geoscience and Remote Sensing",
        "GIScience & Remote Sensing (Taylor & Francis)"
    ];

    const cardStyle = {
        border: '2px solid #4A90E2',
        borderRadius: '8px',
        margin: '20px',
        padding: '15px',
        backgroundColor: '#E6F7FF',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        transition: '0.3s',
    };

    const titleStyle = {
        color: '#3E8E41',
        fontSize: '24px',
        fontWeight: 'bold',
    };

    const dateStyle = {
        color: '#A3A3A3',
        fontSize: '20px',
    };

    const contentStyle = {
        fontSize: '18px',
        color: '#333',
    };

    return (
        <div >
            <div
                className='w-full h-[100vh]  overflow-auto py-8 px-16 bg-[#3b85ee]'
                style={{ fontFamily: 'Arial, sans-serif' }}>
                <h1
                    className='border-b border-white pb-2 '
                    style={{ textAlign: 'center', color: 'white', fontSize: '36px', fontWeight: "bold" }}>Work Experience</h1>
                {experiences.map((exp, index) => (
                    <div key={index} style={cardStyle}>
                        <div style={titleStyle}>{exp.title}</div>
                        <div style={dateStyle}>{exp.date}</div>
                        <div style={contentStyle}>{exp.institution}</div>
                        {exp.subjects && (
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                {exp.subjects.map((subject, i) => (
                                    <li key={i} style={contentStyle}>{subject}</li>
                                ))}
                            </ul>
                        )}
                        {exp.project && <div style={contentStyle}>Project: {exp.project}</div>}
                        {exp.supervisor && <div style={contentStyle}>{exp.supervisor}</div>}
                    </div>
                ))}

                <h1 className="text-center text-white border-b border-white text-4xl font-bold mb-8 mt-16">Miscellaneous Experience</h1>

                <div
                    className='bg-[#E6F7FF] border-2 border-blue-500 rounded-lg p-5 mb-5 shadow-lg transition duration-300'>

                    <h2 className="text-green-600 text-2xl font-bold">Professional Affiliations</h2>
                    <ul className="list-decimal pl-5 mb-5">
                        {affiliations.map((affiliation, index) => (
                            <li key={index} className="text-lg text-gray-800">{affiliation}</li>
                        ))}
                    </ul>
                </div>

                <div
                    className='bg-[#E6F7FF] border-2 border-blue-500 rounded-lg p-5 mb-5 shadow-lg transition duration-300'
                >
                    <h2 className="text-green-600 text-2xl font-bold">Reviewer</h2>
                    <ul className="list-none pl-5">
                        {reviewers.map((reviewer, index) => (
                            <li key={index} className="text-lg text-gray-800">• {reviewer}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default Experience;
