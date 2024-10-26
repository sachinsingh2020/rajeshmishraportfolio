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

    return (
        <div className="min-h-screen w-full  h-[100vh] overflow-auto bg-[#e6f7ff] px-4 py-6 sm:px-6 md:px-8 lg:px-16">
            <div className="font-sans">
                <h1 className="mb-8 border-b border-black pb-2 text-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                    Work Experience
                </h1>

                {experiences.map((exp, index) => (
                    <div key={index} style={cardStyle} className="mb-4 rounded-lg border border-gray-300 p-3 shadow-md transition duration-300 sm:p-4">
                        <div style={titleStyle} className="text-lg font-semibold sm:text-xl">{exp.title}</div>
                        <div style={dateStyle} className="text-sm sm:text-base md:text-lg">{exp.date}</div>
                        <div style={contentStyle} className="text-sm sm:text-base md:text-lg">{exp.institution}</div>
                        {exp.subjects && (
                            <ul className="ml-4 list-disc text-sm sm:text-base md:text-lg">
                                {exp.subjects.map((subject, i) => (
                                    <li key={i} style={contentStyle}>{subject}</li>
                                ))}
                            </ul>
                        )}
                        {exp.project && <div style={contentStyle} className="text-sm sm:text-base md:text-lg">Project: {exp.project}</div>}
                        {exp.supervisor && <div style={contentStyle} className="text-sm sm:text-base md:text-lg">{exp.supervisor}</div>}
                    </div>
                ))}

                <h1 className="mb-8 mt-12 border-b border-black pb-2 text-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                    Miscellaneous Experience
                </h1>

                <div style={cardStyle} className="mb-4 rounded-lg border border-gray-300 p-3 shadow-md transition duration-300 sm:p-4">
                    <h2 style={titleStyle} className="text-lg font-bold text-green-600 sm:text-xl md:text-2xl">Professional Affiliations</h2>
                    <ul style={contentStyle} className="ml-4 list-decimal text-sm sm:text-base md:text-lg">
                        {affiliations.map((affiliation, index) => (
                            <li key={index} className="text-gray-800">{affiliation}</li>
                        ))}
                    </ul>
                </div>

                <div style={cardStyle} className="mb-5 rounded-lg border-2 border-blue-500 bg-[#E6F7FF] p-3 shadow-lg transition duration-300 sm:p-4 md:p-5">
                    <h2 className="text-lg font-bold text-green-600 sm:text-xl md:text-2xl">Reviewer</h2>
                    <ul style={contentStyle} className="ml-4 text-sm sm:text-base md:text-lg">
                        {reviewers.map((reviewer, index) => (
                            <li key={index} className="text-gray-800">• {reviewer}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;