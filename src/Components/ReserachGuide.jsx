import React, { useState } from 'react';
import { mTechData, phdCompletedData, phdUnderProgressData } from '../data/reserachGuideData';

const ReserachGuide = () => {
    const [filter, setFilter] = useState("all");

    const renderMTechTable = () => (
        <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black">
                M. Tech. Degree Awarded
            </h2>
            <div className="overflow-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-200">
                            <th className="px-4 py-2 border border-gray-400">S N</th>
                            <th className="px-4 py-2 border border-gray-400">Year</th>
                            <th className="px-4 py-2 border border-gray-400">Student Name</th>
                            <th className="px-4 py-2 border border-gray-400">Reg. No.</th>
                            <th className="px-4 py-2 border border-gray-400">Thesis Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mTechData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                                <td className="px-4 py-2 border border-gray-400">{item.sn}</td>
                                <td className="px-4 py-2 border border-gray-400">{item.year}</td>
                                <td className="px-4 py-2 border border-gray-400">{item.studentName}</td>
                                <td className="px-4 py-2 border border-gray-400">{item.regNo}</td>
                                <td className="px-4 py-2 border border-gray-400">{item.thesisTitle}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderPhdCompletedTable = () => (
        <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black">
                Ph. D. (Degree Awarded)
            </h2>
            <div className="overflow-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-200">
                            <th className="px-4 py-2 border border-gray-400">S N</th>
                            <th className="px-4 py-2 border border-gray-400">Student Name</th>
                            <th className="px-4 py-2 border border-gray-400">Reg. No.</th>
                            <th className="px-4 py-2 border border-gray-400">Year of Completion</th>
                            <th className="px-4 py-2 border border-gray-400">Thesis Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {phdCompletedData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                                <td className="px-4 py-2 border border-gray-400">{item.sn}</td>
                                <td className="px-4 py-2 border border-gray-400">{item.studentName}</td>
                                <td className="px-4 py-2 border border-gray-400">{item.regNo}</td>
                                <td className="px-4 py-2 border border-gray-400">{item.year}</td>
                                <td className="px-4 py-2 border border-gray-400">{item.thesisTitle}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderPhdUnderProgressTable = () => (
        <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black">
                Ph. D. Under Progress
            </h2>
            <div className="overflow-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-200">
                            <th className="px-4 py-2 border border-gray-400">S N</th>
                            <th className="px-4 py-2 border border-gray-400">Student Name</th>
                            <th className="px-4 py-2 border border-gray-400">Reg. No.</th>
                            <th className="px-4 py-2 border border-gray-400">Year of Registration</th>
                            <th className="px-4 py-2 border border-gray-400">Research Topic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {phdUnderProgressData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                                <td className="px-4 py-2 border border-gray-400">{item.sn}</td>
                                <td className="px-4 py-2 border border-gray-400">{item.studentName}</td>
                                <td className="px-4 py-2 border border-gray-400">{item.regNo}</td>
                                <td className="px-4 py-2 border border-gray-400">{item.year}</td>
                                <td className="px-4 py-2 border border-gray-400">{item.researchTopic}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (filter) {
            case "all":
                return (
                    <>
                        {renderMTechTable()}
                        {renderPhdCompletedTable()}
                        {renderPhdUnderProgressTable()}
                    </>
                );
            case "mtech":
                return renderMTechTable();
            case "phdCompleted":
                return renderPhdCompletedTable();
            case "phdUnderProgress":
                return renderPhdUnderProgressTable();
            default:
                return renderMTechTable();
        }
    };

    const filterButtonClass = (active) =>
        `px-4 py-2 rounded-md cursor-pointer border border-gray-400 transition-colors ${active ? "bg-[#3E8E41] text-white" : "bg-[#a0add0] text-black"
        }`;

    return (
        <div className="w-full h-[100vh] overflow-auto py-8 px-4 md:px-16 text-[#50596a] bg-[#f5f5f5]">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black border-b border-black pb-2">
                RESEARCH GUIDANCE
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className={filterButtonClass(filter === "all")} onClick={() => setFilter("all")}>
                    All
                </button>
                <button className={filterButtonClass(filter === "mtech")} onClick={() => setFilter("mtech")}>
                    M. Tech.
                </button>
                <button className={filterButtonClass(filter === "phdCompleted")} onClick={() => setFilter("phdCompleted")}>
                    Ph. D. (Completed)
                </button>
                <button className={filterButtonClass(filter === "phdUnderProgress")} onClick={() => setFilter("phdUnderProgress")}>
                    Ph. D. (Under Progress)
                </button>
            </div>
            {renderContent()}
        </div>
    );
};

export default ReserachGuide;