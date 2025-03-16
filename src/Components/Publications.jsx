import React, { useState } from 'react';
import publicationsData from '../data/publicationsData';

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

const contentStyle = {
    color: '#333',
    fontWeight: '500',
};

const filterButtonStyle = (active) => ({
    padding: '10px 20px',
    backgroundColor: active ? '#3E8E41' : '#a0add0',
    color: active ? '#fff' : '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
});

const Publications = () => {
    const [filter, setFilter] = useState('all');

    const renderJournals = () => (
        <>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#222222]">Journals</h2>
            {publicationsData.journals.map((pub, index) => (
                <div key={index} style={cardStyle} className="mb-5 bg-[#a0add0] p-4 rounded-md">
                    <h3 style={titleStyle} className="text-xl md:text-2xl font-bold">
                        {pub.title}
                    </h3>
                    <p style={contentStyle} className="text-base md:text-lg">
                        {pub.authors} ({pub.year})
                    </p>
                    <p style={contentStyle} className="font-semibold">
                        Journal: {pub.journal}
                    </p>
                    <p style={contentStyle} className="font-semibold">
                        IF: {pub.if}
                    </p>
                    <p style={contentStyle} className="font-semibold">
                        Index: {pub.index}
                    </p>
                    <p style={contentStyle} className="font-semibold">
                        ISSN/ISBN No: {pub.issn}
                    </p>
                </div>
            ))}
        </>
    );

    const renderNonSciJournals = () => (
        <>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#222222]">Non SCI Indexed Journals</h2>
            {publicationsData.nonSciJournals.map((pub, index) => (
                <div key={index} style={cardStyle} className="mb-5 bg-[#a0add0] p-4 rounded-md">
                    <h3 style={titleStyle} className="text-xl md:text-2xl font-bold">
                        {pub.title}
                    </h3>
                    <p style={contentStyle} className="text-base md:text-lg">
                        {pub.authors} ({pub.year})
                    </p>
                    <p style={contentStyle} className="font-semibold">
                        Journal: {pub.journal}
                    </p>
                    <p style={contentStyle} className="font-semibold">
                        ISSN/ISBN No: {pub.issn}
                    </p>
                </div>
            ))}
        </>
    );

    const renderConferences = () => (
        <>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#222222]">Conferences Proceedings as Full Paper</h2>
            {publicationsData.conferences.map((pub, index) => (
                <div key={index} style={cardStyle} className="mb-5 bg-[#a0add0] p-4 rounded-md">
                    <h3 style={titleStyle} className="text-xl md:text-2xl font-bold">
                        {pub.title}
                    </h3>
                    <p style={contentStyle} className="text-base md:text-lg">
                        {pub.authors} ({pub.year})
                    </p>
                    <p style={contentStyle} className="font-semibold">
                        Conference: {pub.conference}
                    </p>
                </div>
            ))}
        </>
    );

    const renderContent = () => {
        if (filter === 'all') {
            return (
                <>
                    {renderJournals()}
                    {renderNonSciJournals()}
                    {renderConferences()}
                </>
            );
        } else if (filter === 'journals') {
            return renderJournals();
        } else if (filter === 'nonSci') {
            return renderNonSciJournals();
        } else if (filter === 'conferences') {
            return renderConferences();
        }
    };

    return (
        <div className="h-[100vh] bg-[#f5f5f5] overflow-auto py-8 px-4 md:px-16 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-black border-b border-black pb-2">
                Publications
            </h1>
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                    style={filterButtonStyle(filter === 'all')}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    style={filterButtonStyle(filter === 'journals')}
                    onClick={() => setFilter('journals')}
                >
                    Journals
                </button>
                <button
                    style={filterButtonStyle(filter === 'nonSci')}
                    onClick={() => setFilter('nonSci')}
                >
                    Non SCI Journals
                </button>
                <button
                    style={filterButtonStyle(filter === 'conferences')}
                    onClick={() => setFilter('conferences')}
                >
                    Conferences
                </button>
            </div>
            {renderContent()}
        </div>
    );
};

export default Publications;