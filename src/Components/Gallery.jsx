import React from 'react';
import img1 from "../assets/blogImage1.png";
import img2 from "../assets/blogImage2.png";
import img3 from "../assets/blogImage3.png";
import img4 from "../assets/blogImage4.png";

const Gallery = () => {
    const images = [
        {
            src: img1,
            location: "Location 1",
            eventName: "Event Name 1",
            date: "January 1, 2024"
        },
        {
            src: img2,
            location: "Location 2",
            eventName: "Event Name 2",
            date: "February 15, 2024"
        },
        {
            src: img3,
            location: "Location 3",
            eventName: "Event Name 3",
            date: "March 20, 2024"
        },
        {
            src: img4,
            location: "Location 4",
            eventName: "Event Name 4",
            date: "April 10, 2024"
        }
    ];

    return (
        <div className="h-[100vh] overflow-auto py-10 px-4 bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Gallery Section</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg border-4 border-red-500 transition-transform transform hover:scale-105">
                        <img src={image.src} alt={`Gallery Image ${index + 1}`} className="w-full h-auto" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">{image.eventName}</h2>
                            <p className="text-gray-600">{image.location}</p>
                            <p className="text-gray-600">{image.date}</p>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="my-10 border-gray-300" />
        </div>
    );
}

export default Gallery;
