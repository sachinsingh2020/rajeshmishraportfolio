import React from 'react';

const publicationsData = [

    {
        title: "Assessment of machine learning models to predict daily streamflow in a semiarid river catchment",
        authors: "Kumar, A., Gaurav, K., Singh, A., and Yaseen ZM",
        year: 2024,
        link: "https://doi.org/10.1007/s00521-024-09748-1",
        codeLink: "#",
        webLink: "#",
        altmetric: 4,
        journal: "Neural Computing and Applications",
    },
    {
        title: "Nature-inspired optimal tuning of input membership functions of fuzzy inference system for groundwater level prediction",
        authors: "Bhadani, V.*, Singh, A.*, Kumar, V., and Gaurav, K.",
        year: 2024,
        link: "https://doi.org/10.1016/j.envsoft.2024.105995",
        codeLink: "#",
        webLink: "#",
        altmetric: 8,
        journal: "Environmental Modelling & Software",
    },
    {
        title: "F-TLBO-ID: Fuzzy fed teaching learning based optimisation algorithm to predict the number of k-barriers for intrusion detection",
        authors: "Singh, A., Mausavi, SHS., and Nagar, J.",
        year: 2024,
        link: "https://doi.org/10.1016/j.asoc.2023.111163",
        codeLink: "#",
        webLink: "#",
        altmetric: 3,
        journal: "Applied Soft Computing",
    },
    {
        title: "AutoML-GWL: Automated machine learning model for the prediction of groundwater level",
        authors: "Singh, A., Patel, S., Bhadani, V., Kumar, V., and Gaurav, K.",
        year: 2024,
        link: "https://doi.org/10.1016/j.engappai.2023.107405",
        codeLink: "#",
        webLink: "#",
        altmetric: 18,
        journal: "Engineering Applications of Artificial Intelligence",
    },
    {
        title: "Dynamics of waterlogging and drainage congestion on the Kosi Fan, Himalayan Foreland",
        authors: "Niranjannaik, M., Gaurav, K., Singh, A., & Singh, A. K.",
        year: 2024,
        link: "https://doi.org/10.1016/j.rsase.2023.101113",
        codeLink: "#",
        webLink: "#",
        altmetric: 9,
        journal: "Remote Sensing Applications: Society and Environment",
    },
    {
        title: "Machine Learning for Coverage Optimization in Wireless Sensor Networks: A Comprehensive Review of State-of-the-Art Approaches",
        authors: "Egwuche O. S., Singh, A., Ezugwu A. E., Greeff, J., Olusanya, M.O., and Abualigah, L.",
        year: 2023,
        link: "https://doi.org/10.1007/s10479-023-05657-z",
        codeLink: "#",
        webLink: "#",
        altmetric: null,
        journal: "Annals of Operations Research",
    },
    {
        title: "P2CA-GAM-ID: Coupling of Probabilistic Principal Components Analysis with Generalised Additive Model to predict the k−barriers for Intrusion Detection",
        authors: "Singh, A., Nagar, J., Amutha, J., and Sharma, S.",
        year: 2023,
        link: "https://doi.org/10.1016/j.engappai.2023.107137",
        codeLink: "#",
        webLink: "#",
        altmetric: 1,
        journal: "Engineering Applications of Artificial Intelligence",
    },
    {
        title: "A Machine Learning Approach to Predict the k-Coverage Probability of Wireless Multihop Networks Considering Boundary and Shadowing Effects",
        authors: "Nagar, J., Chaturvedi S.K., Soh S., and Singh, A.",
        year: 2023,
        link: "https://doi.org/10.1016/j.eswa.2023.120160",
        codeLink: "#",
        webLink: "#",
        altmetric: null,
        journal: "Expert Systems with Applications",
    },
    {
        title: "Deep learning and data fusion to estimate surface soil moisture from multi-sensor satellite images",
        authors: "Singh, A., and Gaurav, K.",
        year: 2023,
        link: "https://doi.org/10.1038/s41598-023-28939-9",
        codeLink: "#",
        webLink: "#",
        altmetric: 34,
        journal: "Scientific Reports",
    },
    {
        title: "Strategies to measure soil moisture using traditional methods, automated sensors, remote sensing, and machine learning techniques: review, bibliometric analysis, applications, research findings, and future directions",
        authors: "Singh, A., Gaurav, K., Sonkar G.K., and Lee, C.-C.",
        year: 2023,
        link: "https://doi.org/10.1109/ACCESS.2023.324363",
        codeLink: "#",
        webLink: "#",
        altmetric: 1,
        journal: "IEEE Access",
    },
    {
        title: "Leveraging machine learning and data fusion for accurate mapping of malaria cases using meteorological variables over western India",
        authors: "Singh, A., Mehra, M., Kumar A., Naik, M.N., Priya, D., and Gaurav, K.",
        year: 2023,
        link: "https://doi.org/10.1016/j.iswa.2022.200164",
        codeLink: "#",
        webLink: "#",
        altmetric: 2,
        journal: "Intelligent Systems with Applications",
    },
    {
        title: "A deep learning approach to predict the number of k-barriers for intrusion detection over a circular region using wireless sensor networks",
        authors: "Singh, A., Amutha, J., Nagar, J., and Sharma, S.",
        year: 2023,
        link: "https://doi.org/10.1016/j.eswa.2022.118588",
        codeLink: "#",
        webLink: "#",
        altmetric: 5,
        journal: "Expert Systems with Applications",
    },
    {
        title: "Comparison of different dielectric models to estimate penetration depth of L− and S−band SAR signals into the ground surface",
        authors: "Singh, A., Naik, M.N., Kumar S., and Gaurav, K.",
        year: 2022,
        link: "https://doi.org/10.3390/geographies2040045",
        codeLink: "#",
        webLink: "#",
        altmetric: null,
        journal: "Geographies",
    },
    {
        title: "Groundwater variability in a semi-arid basin, Central India",
        authors: "Naik, M.N., Kumar A., Beg, Z., Singh, A., Swarnkar, S., and Gaurav, K.",
        year: 2022,
        link: "https://doi.org/10.3390/hydrology9120222",
        codeLink: "#",
        webLink: "#",
        altmetric: null,
        journal: "Hydrology",
    },
    {
        title: "Drainage congestion due to road network on the Kosi alluvial Fan, Himalayan Foreland",
        authors: "Singh, A., Naik, M.N., and Gaurav, K.",
        year: 2022,
        link: "https://doi.org/10.1016/j.jag.2022.102892",
        codeLink: "#",
        webLink: "#",
        altmetric: 12,
        journal: "International Journal of Applied Earth Observation and Geoinformation",
    },
    {
        title: "AutoML-ID: Automated machine learning model for intrusion detection using wireless sensor network",
        authors: "Singh, A., Amutha, J., Nagar, J., Sharma, S., and Lee, C.-C.",
        year: 2022,
        link: "https://doi.org/10.1038/s41598-022-13061-z",
        codeLink: "#",
        webLink: "#",
        altmetric: 4,
        journal: "Scientific Reports",
    },
    {
        title: "Intrusion Detection System in Wireless Sensor Network using Conditional Generative Adversarial Network",
        authors: "Sood T., Prakash S., Sharma S., Singh A., and Choubey H.",
        year: 2022,
        link: "https://doi.org/10.1007/s11277-022-09776-x",
        codeLink: "#",
        webLink: "#",
        altmetric: 3,
        journal: "Wireless Personal Communications",
    },
    {
        title: "Evaluating the impact of landuse and climate change on surface runoff in the Kosi river basin, India: A combined machine learning and hydrological modeling approach",
        authors: "Kumar, A., Singh, A., and Gaurav, K.",
        year: 2022,
        link: "https://doi.org/10.1016/j.jhydrol.2022.127139",
        codeLink: "#",
        webLink: "#",
        altmetric: 8,
        journal: "Journal of Hydrology",
    },
    {
        title: "Deep learning models for time-series forecasting: A comprehensive review and future research directions",
        authors: "Singh, A., Patnaik, S., and Gaurav, K.",
        year: 2022,
        link: "https://doi.org/10.1016/j.jss.2021.110735",
        codeLink: "#",
        webLink: "#",
        altmetric: 7,
        journal: "Journal of Systems and Software",
    },
    {
        title: "A deep learning approach for groundwater level prediction: A case study in a semi-arid region of India",
        authors: "Singh, A., Kumar, A., and Gaurav, K.",
        year: 2022,
        link: "https://doi.org/10.1016/j.neucom.2022.04.009",
        codeLink: "#",
        webLink: "#",
        altmetric: 6,
        journal: "Neurocomputing",
    },
    {
        title: "A hybrid approach to estimate soil moisture using remote sensing and machine learning techniques",
        authors: "Singh, A., Gaurav, K., and Patnaik, S.",
        year: 2021,
        link: "https://doi.org/10.1016/j.rse.2021.112078",
        codeLink: "#",
        webLink: "#",
        altmetric: 2,
        journal: "Remote Sensing of Environment",
    },
    {
        title: "Groundwater level prediction using hybrid machine learning models: A case study of Kosi River Basin, India",
        authors: "Singh, A., Naik, M.N., and Gaurav, K.",
        year: 2021,
        link: "https://doi.org/10.1016/j.jhydrol.2021.126052",
        codeLink: "#",
        webLink: "#",
        altmetric: 1,
        journal: "Journal of Hydrology",
    },
    {
        title: "An enhanced hybrid approach for modeling groundwater level dynamics",
        authors: "Singh, A., and Gaurav, K.",
        year: 2021,
        link: "https://doi.org/10.1016/j.envsoft.2021.105533",
        codeLink: "#",
        webLink: "#",
        altmetric: 0,
        journal: "Environmental Modelling & Software",
    },
    {
        title: "Evaluation of machine learning algorithms for groundwater level prediction in semi-arid regions: A case study",
        authors: "Singh, A., Naik, M.N., and Gaurav, K.",
        year: 2021,
        link: "https://doi.org/10.1007/s00704-021-03468-x",
        codeLink: "#",
        webLink: "#",
        altmetric: 4,
        journal: "Theoretical and Applied Climatology",
    },
    {
        title: "Integrating remote sensing data and machine learning for mapping soil moisture in semi-arid regions",
        authors: "Singh, A., and Gaurav, K.",
        year: 2020,
        link: "https://doi.org/10.1016/j.jag.2020.102210",
        codeLink: "#",
        webLink: "#",
        altmetric: 3,
        journal: "International Journal of Applied Earth Observation and Geoinformation",
    },
    {
        title: "Remote sensing based assessment of groundwater potential zones in the Kosi river basin",
        authors: "Singh, A., Gaurav, K., and Kumar, A.",
        year: 2020,
        link: "https://doi.org/10.1016/j.envsoft.2020.104647",
        codeLink: "#",
        webLink: "#",
        altmetric: 5,
        journal: "Environmental Modelling & Software",
    },
];


const Publications = () => {
    return (
        <div className="h-[100vh] overflow-auto py-8 px-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <h1 className="text-3xl font-bold mb-6">Publications</h1>
            <h2 className="text-2xl font-semibold mb-4">Journals</h2>
            {publicationsData
                .filter((pub) => pub.type !== "Pre-print")
                .map((pub, index) => (
                    <div key={index} className="mb-5 bg-gray-800 p-4 rounded-md">
                        <h3 className="text-xl font-bold">{pub.title}</h3>
                        <p>{pub.authors} ({pub.year})</p>
                        <p className="font-semibold">Journal: {pub.journal}</p>
                        <p className="font-semibold">Altmetric Score: {pub.altmetric}</p>
                        <div className="flex space-x-4 mt-2">
                            {pub.webLink && (
                                <a href={pub.webLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Visit Web Page
                                </a>
                            )}
                            {pub.codeLink && (
                                <a href={pub.codeLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    Visit Code
                                </a>
                            )}
                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Download
                            </a>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Publications;
