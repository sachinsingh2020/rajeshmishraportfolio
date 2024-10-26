import React from 'react';

const Achievements = () => {
    return (
        <div className="w-full h-[100vh] overflow-auto py-8 px-4 md:px-16 text-[#50596a] bg-[#e2e9ff]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-black border-b border-black pb-2">
                Awards and Achievements
            </h2>
            <ul className="text-base md:text-lg text-[#50596a]">
                <li className="mb-4 border-b border-[#50596a] pb-2 text-[#50596a] font-semibold">
                    <strong className="text-red-700 font-bold">DST INSPIRE Fellowship:</strong> Selected for the prestigious DST INSPIRE FELLOWSHIP in "Engineering Sciences." Awarded by the Department of Science and Technology, Govt. of India.
                </li>
                <li className="mb-4 border-b border-[#50596a] text-[#50596a] pb-2 font-semibold">
                    <strong className="text-red-700 font-bold">GOLD MEDALIST:</strong> Throughout topper in B.Tech. and M.Tech.
                </li>
                <li className="mb-4 border-b border-[#50596a] pb-2 text-[#50596a] font-semibold">
                    <strong className="text-red-700 font-bold">NATIONAL LEVEL EXAM QUALIFIED:</strong> GATE-2017, UGC NET 2016, UGC NET 2017, UGC NET 2018.
                </li>
                <li className="mb-4 border-b border-[#50596a] pb-2 text-[#50596a] font-semibold">
                    <strong className="text-red-700 font-bold">RANK IN MATLAB CENTRAL:</strong>
                    <ul className="list-disc list-inside ml-5">
                        <li>
                            Rank 879 out of 112,203 (Top 1 %) in MATLAB Cody in Mathworks. (<a href="https://www.mathworks.com/matlabcentral/cody/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Click here</a>)
                        </li>
                        <li>
                            Rank 1187 out of 17,913 in MATLAB File Exchange in Mathworks (Over 12k downloads; <a href="https://www.mathworks.com/matlabcentral/fileexchange/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Click here</a>)
                        </li>
                    </ul>
                </li>
                <li className="mb-4 text-[#50596a] font-semibold">
                    <strong className="text-red-700 font-bold">GRANTS:</strong>
                    <ul className="list-disc list-inside ml-5">
                        <li>Featured in the Top 2% Scientist list (2024) in the category of "Artificial Intelligence and Image Processing."</li>
                        <li>Early Career Scientist’s Travel Support Grant (Roland Schlich Travel Support) of European Geosciences Union (EGU) General Assembly 2024, Vienna, Austria.</li>
                        <li>AGU Non-linear Geophysics (NG) Dependent Care Award from American Geophysical Union (AGU).</li>
                        <li>Lloyd V. Berkner Travel Fellowship from American Geophysical Union (AGU) to attend AGU Fall Meeting 2023, San Francisco, CA, USA.</li>
                        <li>CSIR Foreign Travel Grant to attend European Geosciences Union (EGU) General Assembly 2023, Vienna, Austria.</li>
                        <li>SERB-ITS Travel Grant to attend European Geosciences Union (EGU) General Assembly 2023, Vienna, Austria.</li>
                        <li>Early Career Scientist’s Travel Support Grant (Roland Schlich Travel Support) of European Geosciences Union (EGU) General Assembly 2023, Vienna, Austria.</li>
                        <li>American Geophysical Union (AGU) Ecohydrology Early Career Tiny Grant at AGU Fall Meeting 2022, Chicago, USA.</li>
                        <li>Travel Grant through FAAC Scheme IISER Bhopal, 2022.</li>
                        <li>Student travel grant to attend the "6th Soil Moisture Application and Validation Workshop 2022," Perugia, Italy.</li>
                        <li>American Geophysical Union (AGU) Ecohydrology Early Career Tiny Grant at AGU Fall Meeting 2021, New Orleans, Louisiana, USA.</li>
                        <li>Fully funded student travel grant from American Geophysical Union (AGU) to attend AGU Fall Meeting 2021, New Orleans, Louisiana, USA.</li>
                        <li>Full scholarship to attend the highly competitive "Machine Learning Summer School 2020" at Telkom University, Indonesia.</li>
                        <li>Fully funded DAAD fellowship for attending a summer school on "Geospatial Data Science using R 2019" at Friedrich Schiller University Jena, Germany.</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Achievements;
