import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaToolbox } from "react-icons/fa6";
// import rajeshSirImage from "../assets/rajeshSirImage.jpeg";
import profilePic from "../assets/profilePic.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { VscFileSubmodule } from "react-icons/vsc";
import { TfiCup } from "react-icons/tfi";
import { HiMiniPhoto } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaResearchgate } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { SiIeee } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../redux/actions/user';

const SideBarMenu = ({ onCollapse }) => {
    const [deviceType, setDeviceType] = useState(window.innerWidth < 768 ? 'mobile' : 'laptop');
    const [collapsed, setCollapsed] = useState(true);
    const [activeMenuItem, setActiveMenuItem] = useState('aboutme');

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(window.innerWidth < 768 ? 'mobile' : 'laptop');
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        const newCollapsedState = !collapsed;
        setCollapsed(newCollapsedState);
        onCollapse(newCollapsedState);
    };

    useEffect(() => {
        toggleSidebar();
    }, [])

    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
        if (deviceType === 'mobile') {
            setCollapsed(true); // Close sidebar on mobile after clicking a menu item
            onCollapse(true); // Call the onCollapse prop to notify parent component
        }
    };

    return (
        <Sidebar
            collapsed={collapsed}
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: '#50596a',
                    color: '#000',
                    height: '100vh',
                    transition: 'width 0.3s ease',
                    width: deviceType === 'laptop' ? (collapsed ? '80px' : '400px') : (collapsed ? '80px' : '100vw'),
                },
            }}
        >
            <div className="p-3 flex flex-col h-full text-base">
                {collapsed ? (
                    <button onClick={toggleSidebar} className="text-white text-2xl mb-2 cursor-pointer w-6 ml-auto mr-5">
                        <FaArrowCircleRight />
                    </button>
                ) : (
                    <button onClick={toggleSidebar} className="text-white text-2xl mb-2 cursor-pointer w-6 ml-auto mr-2.5">
                        <FaArrowCircleLeft />
                    </button>
                )}

                <div className="flex flex-col items-center text-center my-3">
                    <img
                        src={profilePic}
                        alt="Menu Logo"
                        className={`transition-width duration-300 ${collapsed ? 'w-10' : 'w-[125px] md:w-40'} h-auto rounded-full border-4 border-white`}
                    />
                    {!collapsed && (
                        <div>
                            <div className="text-white font-bold text-lg mt-2">Dr. Rajesh Mishra</div>
                            <div className="text-white font-bold text-sm mt-1">Assistant Professor, School of ICT, Gautam Buddha University Greater Noida</div>
                        </div>
                    )}
                </div>

                <Menu
                    menuItemStyles={{
                        button: {
                            color: 'white',
                            borderRadius: '12px',
                            borderTopLeftRadius: '0px',
                            borderBottomLeftRadius: '0px',
                            marginBottom: '5px',
                            marginTop: '5px',
                            fontWeight: 'bold',
                            padding: '10px 15px',
                            transition: 'background-color 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#36363b',
                            },
                            '&.active': {
                                backgroundColor: 'red',
                                color: '#fff',
                                borderLeft: '5px solid green',
                            },
                            '@media (max-width: 640px)': {
                                marginTop: '3px',
                                marginBottom: '3px',
                            },
                        },
                    }}
                >
                    <MenuItem onClick={() => handleMenuItemClick('aboutme')} icon={<FaUserTie className="responsive-icon" />} component={<Link to="/aboutme" />} className="responsive-text">About Me</MenuItem>

                    <MenuItem onClick={() => handleMenuItemClick('education')} icon={<FaUserGraduate className="responsive-icon" />} component={<Link to="/education" />} className="responsive-text">Education</MenuItem>

                    <MenuItem onClick={() => handleMenuItemClick('experience')} icon={<FaToolbox className="responsive-icon" />} component={<Link to="/experience" />} className="responsive-text">Experience</MenuItem>

                    <MenuItem onClick={() => handleMenuItemClick('publications')} icon={<VscFileSubmodule className="responsive-icon" />} component={<Link to="/publications" />} className="responsive-text">Publications</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('achievements')} icon={<TfiCup className="responsive-icon" />} component={<Link to="/achievements" />} className="responsive-text">Achievements</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('gallery')} icon={<HiMiniPhoto className="responsive-icon" />} component={<Link to="/gallery" />} className="responsive-text">Gallery</MenuItem>
                </Menu>

                {!collapsed && (
                    <div className="flex text-white justify-evenly mt-6 mx-8 space-x-4">
                        <FaUniversity className="cursor-pointer responsive-icon text-2xl" onClick={() => window.open('https://faculty.gbu.ac.in/profile.php?id=VXv1T62-SoP05E7OGtNKe5OfU73kjgdaPjA2CQ0FHTI')} />
                        <FaLaptopCode className='cursor-pointer responsive-icon text-2xl' />
                        <FaGithub className='cursor-pointer responsive-icon text-2xl' />
                        <FaLinkedin className='cursor-pointer responsive-icon text-2xl' onClick={() => window.open('https://www.linkedin.com/in/rajesh-mishra-27565bab')} />
                        <FaGoogleScholar className='cursor-pointer responsive-icon text-2xl' onClick={() => window.open('https://scholar.google.co.uk/citations?user=yVc_AlcAAAAJ&hl=en')} />
                        <FaResearchgate className='cursor-pointer responsive-icon text-2xl' onClick={() => window.open('https://www.researchgate.net/profile/Rajesh-Mishra-2')} />
                        <SiIeee className='cursor-pointer responsive-icon text-2xl' onClick={() => window.open('https://ieeexplore.ieee.org/author/38242716100')} />
                    </div>
                )}
            </div>
        </Sidebar>
    );
};

export default SideBarMenu;
