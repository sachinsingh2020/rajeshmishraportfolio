import React from 'react';

const Achievements = () => {
    return (
        <div className="w-full h-[100vh] overflow-auto py-8 px-4 md:px-16 text-[#50596a] bg-[#f5f5f5]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-black border-b border-black pb-2">
                Awards and Achievements
            </h2>
            <ul className="text-base md:text-lg text-[#50596a]">
                <li className="mb-4 border-b border-[#50596a] pb-2 text-[#50596a] font-semibold">
                    <strong className="text-red-700 font-bold">Founder JCC Member:</strong> Established the Centre of Rapid and Alternative Energy Mobility at Gautam Buddha University, focusing on research in High-Speed Railway and Metro Trains, with strong academia and industry collaborations including DMRC, NMRC, RDSO, L&T, Alstom, and IITs.
                </li>
                <li className="mb-4 border-b border-[#50596a] pb-2 text-[#50596a] font-semibold">
                    <strong className="text-red-700 font-bold">Chairperson:</strong> Leading the Centre of Excellence - Drone Technology at Gautam Buddha University.
                </li>
                <li className="mb-4 border-b border-[#50596a] pb-2 text-[#50596a] font-semibold">
                    <strong className="text-red-700 font-bold">International Webinar Coordinator:</strong> Organized a webinar on Reliability, Availability, Maintainability & Safety (RAMS) and Prognostics Health Management (PHM) for Railways, in collaboration with RDSO, ALSTOM (France), and Lulea University, Sweden (June 25, 2020).
                </li>
                <li className="mb-4 border-b border-[#50596a] pb-2 text-[#50596a] font-semibold">
                    <strong className="text-red-700 font-bold">Industry-Academia Roundtable Organizer:</strong> Conducted a discussion on Metro and High-Speed Train research with over 20 leading academicians and industry experts (Nov 14, 2018).
                </li>
                <li className="mb-4 border-b border-[#50596a] pb-2 text-[#50596a] font-semibold">
                    <strong className="text-red-700 font-bold">Research and Innovation Events:</strong>
                    <ul className="list-disc list-inside ml-5">
                        <li>Organized a national seminar and workshop on Rapid and Alternative Energy Mobility research (Jan 24 & April 12, 2019).</li>
                        <li>Coordinated summer internships for 85 GBU students in collaboration with Noida Metro Rail Corporation Ltd. (May 26 - June 29, 2019).</li>
                    </ul>
                </li>
                <li className="mb-4 border-b border-[#50596a] pb-2 text-[#50596a] font-semibold">
                    <strong className="text-red-700 font-bold">Conference Organizer & Technical Chair:</strong>
                    <ul className="list-disc list-inside ml-5">
                        <li>Convener of the 9th International Conference on Heterogeneous Networking for Quality, Reliability, Security, and Robustness (Q-Shine), held at GBU (Jan 11-13, 2013). Proceedings published in LNCS Springer.</li>
                        <li>Technical Session Chair Member at International Conference on Information, Communication, Instrumentation & Control (Aug 17-19, 2017, Medi-Caps University, Indore).</li>
                        <li>Technical Session Chair Member at International Conference on NANO (Nov 15-17, 2017, Gautam Buddha University).</li>
                    </ul>
                </li>
                <li className="mb-4 text-[#50596a] font-semibold">
                    <strong className="text-red-700 font-bold">IETE Best Paper Award:</strong> Received the IETE Gowri Memorial Award (2016) for the paper “Design of LMS adaptive radar detector for non-homogeneous interferences,” published in IETE Technical Review.
                </li>
            </ul>
        </div>
    );
}

export default Achievements;
