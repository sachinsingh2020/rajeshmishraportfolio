import React from 'react';
import image from "../assets/profilePic.jpg"

const AboutMe = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
            <div className="w-full h-[100vh] overflow-auto py-4 md:py-8 px-4 md:px-16 border border-gray-300 rounded-lg shadow-lg bg-[#f5f5f5]">
                <div className="bg-white shadow-md p-5 rounded-lg border border-gray-300 mb-4 md:mb-6 flex items-center">
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-5xl font-bold text-black text-center mb-4 md:mb-6">Dr. Rajesh Mishra</h1>
                        <h2 className="text-xl md:text-4xl text-[#000072] text-center mb-3 md:mb-4 font-semibold">Assistant Professor</h2>
                        {/* <h3 className="text-lg md:text-2xl text-green-700 text-center mb-2 md:mb-1 font-semibold">Department of Electronics and Communication Engineering</h3>
                        <h3 className="text-lg md:text-2xl text-green-700 text-center mb-4 md:mb-1 font-semibold">University School of Information and Communication Technology</h3>
                        <h3 className="text-lg md:text-2xl text-green-700 text-center mb-4 md:mb-8 font-semibold">Gautam Buddha University, Greater Noida, Uttar Pradesh-201312 (INDIA)</h3> */}
                    </div>
                    <div className="w-1/5 flex justify-center">
                        <img src={image} alt="" className="object-contain rounded-lg h-full w-full" />
                    </div>
                </div>

                <div className='mb-4'>
                    <div className="bg-white shadow-md p-5 rounded-lg border border-gray-400 flex flex-col items-center text-center">
                        <p className="text-gray-700 text-lg md:text-xl font-semibold">Department</p>
                        <div className='text-blue-700 text-base md:text-2xl font-medium'>
                            Department of Electronics and Communication Engineering,
                        </div>
                        <div className='text-blue-700 text-base md:text-2xl font-medium'>
                            University School of Information and Communication Technology
                        </div>
                    </div>
                </div>

                <div className='mb-6'>
                    <div className="bg-white shadow-md p-5 rounded-lg border border-gray-400 flex flex-col items-center text-center">
                        <p className="text-gray-700 text-lg md:text-xl font-semibold">University</p>
                        <div className='text-blue-700 text-base md:text-2xl font-medium'>
                            Gautam Buddha University, Greater Noida, Uttar Pradesh-201312 (INDIA)
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 md:mb-10">
                    <div className="bg-white shadow-md p-5 rounded-lg border border-gray-400 flex flex-col items-center text-center">
                        <p className="text-gray-700 text-lg md:text-xl font-semibold">Email ID</p>
                        <a href="mailto:rmishra@gbu.ac.in" className="text-blue-500 hover:underline text-base md:text-lg font-medium">
                            rmishra@gbu.ac.in
                        </a>
                    </div>
                    <div className="bg-white shadow-md p-5 rounded-lg border border-gray-400 flex flex-col items-center text-center">
                        <p className="text-gray-700 text-lg md:text-xl font-semibold">Mobile</p>
                        <a href="tel:+919717949251" className="text-blue-500 hover:underline text-base md:text-lg font-medium">
                            +91-9717949251
                        </a>
                    </div>
                    <div className="bg-white shadow-md p-5 rounded-lg border border-gray-400 flex flex-col items-center text-center">
                        <p className="text-gray-700 text-lg md:text-xl font-semibold">Office</p>
                        <a href="tel:+919717949251" className="text-blue-500 hover:underline text-base md:text-lg font-medium">
                            +91-120-2346076
                        </a>
                    </div>
                </div>

                <div className="bg-white shadow-md p-5 rounded-lg border border-gray-300 mb-4 md:mb-6 ">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600">Specialization</h3>
                    <p className="text-gray-700 mt-2 text-base md:text-lg font-semibold">
                        Specializing in Networks, Signal Processing, and Communication Systems, Dr. Mishra focuses on data transmission, signal analysis, and system reliability. His expertise extends to RAMS (Reliability, Availability, Maintainability, and Safety), ensuring robust and efficient technological solutions.
                    </p>
                </div>

                <div className="bg-white shadow-md p-5 rounded-lg border border-gray-300 mb-4 md:mb-6 ">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600">Research Interests:</h3>
                    <p className="text-gray-700 mb-3 md:mb-4 text-base md:text-lg font-semibold">My research primarily focuses on:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 text-base md:text-lg font-semibold">
                        <li>Integrating AI and satellite data for environmental monitoring.</li>
                        <li>Exploring new avenues in evolutionary algorithms.</li>
                        <li>Enhancing predictive models for resource management.</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md p-5 rounded-lg border border-gray-300 mb-4 md:mb-6 ">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600">Courses Taught (UG/PG Levels)</h3>
                    <ul className="list-disc list-inside text-gray-700 text-base md:text-lg font-semibold">
                        <li>Reliability Engineering/ Software Reliability/ Reliability Testing and Estimation Lab</li>
                        <li>Signal and Systems/ Digital Signal Processing/ Communication Systems</li>
                        <li>Communication Systems/ Advanced Communication Networks</li>
                        <li>Soft Computing Techniques/ Introduction to Information Technology</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md p-5 rounded-lg border border-gray-300 mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600">Professional Participation</h3>
                    <ul className="list-disc list-inside text-gray-700 text-base md:text-lg font-semibold">
                        <li>Participated in a 03-day workshop on System Science: Complex Networks & Applications, organized by IIT Rajasthan, during 07-09 May 2012, at IIT Jodhpur.</li>
                        <li>Participated in 01-weak workshop on Fuzzy and Rough Sets for Knowledge Discovery, organized by School of SC & SS) JNU, during 05-09 September 2016, at Jawaharlal Nehru University Delhi.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600">Connect with Me:</h3>
                    <p className="text-gray-700 mb-3 md:mb-4 text-base md:text-lg font-semibold">
                        Feel free to connect with me on <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">LinkedIn</a> or reach out via email for collaboration opportunities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;