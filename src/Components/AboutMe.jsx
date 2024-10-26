import React from 'react';

const AboutMe = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full h-[100vh] overflow-auto py-4 md:py-8 px-4 md:px-16 border border-gray-300 rounded-lg bg-white shadow-lg bg-[#e2e9ff]">
                <h1 className="text-3xl md:text-5xl font-bold text-black text-center mb-4 md:mb-6">Dr. Rajesh Mishra</h1>
                <h2 className="text-xl md:text-3xl text-blue-600 text-center mb-3 md:mb-4 font-semibold">Assistant Professor</h2>
                <h3 className="text-lg md:text-2xl text-green-600 text-center mb-2 md:mb-4 font-semibold">Department of Electronics and Communication Engineering</h3>
                <h3 className="text-lg md:text-2xl text-green-600 text-center mb-4 md:mb-6 font-semibold">University School: University School of Information and Communication Technology</h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4 md:mb-6">
                    <div>
                        <p className="text-gray-700 mb-1 text-base md:text-lg">
                            <strong>Email ID:</strong> <a href="mailto:rmishra@gbu.ac.in" className="text-blue-500 hover:underline">rmishra@gbu.ac.in</a>
                        </p>
                        <p className="text-gray-700 mb-1 text-base md:text-lg">
                            <strong>Mobile:</strong> <a href="tel:+919717949251" className="text-blue-500 hover:underline">+91 9717949251</a>
                        </p>
                    </div>
                </div>

                <div className="mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600">Specialization:</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 text-base md:text-lg font-semibold">
                        <li>Networks</li>
                        <li>Signal Processing</li>
                        <li>Communication Systems</li>
                        <li>RAMS</li>
                    </ul>
                </div>

                <div className="mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600">About:</h3>
                    <p className="text-gray-700 mb-3 md:mb-4 text-base md:text-lg font-semibold">
                        I mainly use an interdisciplinary approach to solve research snags. My current research interest includes coupling machine learning algorithms with satellite imagery to exploit satellite observations (soil moisture, surface roughness, river discharge, and groundwater level).
                        I am also interested in developing novel algorithms in the field of evolutionary computation (e.g., ECS-NL, SHS) and machine learning (e.g., PCA-MM-SVR, LT-FS-ID, AutoML-GWL, F-TLBO-ID).
                    </p>
                </div>

                <div className="mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600">Research Interests:</h3>
                    <p className="text-gray-700 mb-3 md:mb-4 text-base md:text-lg font-semibold">My research primarily focuses on:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-3 md:mb-4 text-base md:text-lg font-semibold">
                        <li>Integrating AI and satellite data for environmental monitoring.</li>
                        <li>Exploring new avenues in evolutionary algorithms.</li>
                        <li>Enhancing predictive models for resource management.</li>
                    </ul>
                </div>

                <div className="mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600">Publications:</h3>
                    <p className="text-gray-700 mb-3 md:mb-4 text-base md:text-lg font-semibold">
                        I have published several papers in renowned journals, focusing on machine learning applications in environmental science and network reliability.
                    </p>
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
