import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaToolbox } from "react-icons/fa6";
import rajeshSirImage from "../assets/rajeshSirImage.jpeg";
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
import toast from 'react-hot-toast';

const SideBarMenu = ({ onCollapse }) => {
    const [collapsed, setCollapsed] = useState(true);
    const [activeMenuItem, setActiveMenuItem] = useState('aboutme');

    // const dispatch = useDispatch();

    useEffect(() => {
        const newCollapsedState = !collapsed;
        setCollapsed(newCollapsedState);
        onCollapse(newCollapsedState);
        // eslint-disable-next-line
    }, [])

    const toggleSidebar = () => {
        const newCollapsedState = !collapsed;
        setCollapsed(newCollapsedState);
        onCollapse(newCollapsedState);
    };

    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
    };

    // const { message, error } = useSelector(state => state.user);

    // const handleLogout = async (e) => {
    //     e.preventDefault();
    //     await dispatch(logout());
    // }

    // useEffect(() => {
    //     if (error) {
    //         toast.error(error);
    //         dispatch({ type: "clearError" });
    //     }
    //     if (message) {
    //         toast.success(message);
    //         dispatch({ type: "clearMessage" });
    //     }
    // }, [dispatch, message, error])

    return (
        <Sidebar
            collapsed={collapsed}
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: '#50596a',
                    color: '#000',
                    height: '100vh',
                    transition: 'width 0.3s ease',
                    width: collapsed ? '80px' : '400px',
                },
            }}
        >
            <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                {
                    collapsed ? <button
                        onClick={toggleSidebar}
                        style={{
                            color: 'white',
                            fontSize: '1.8rem',
                            marginBottom: '10px',
                            cursor: 'pointer',
                            width: "25px",
                            marginLeft: "auto",
                            marginRight: "20px"
                        }}
                    >
                        <FaArrowCircleRight />
                    </button> :
                        <button
                            onClick={toggleSidebar}
                            style={{
                                color: 'white',
                                fontSize: '1.8rem',
                                marginBottom: '10px',
                                cursor: 'pointer',
                                width: "25px",
                                marginLeft: "auto",
                                marginRight: "10px"
                            }}
                        >
                            <FaArrowCircleLeft />
                        </button>
                }

                <div style={{
                    display: 'flex', justifyContent: 'center', marginBottom: '10px', marginTop: "10px",
                    flexDirection: 'column', alignItems: 'center'
                }}>
                    <img
                        src={rajeshSirImage}
                        alt="Menu Logo"
                        style={{
                            width: collapsed ? '40px' : '160px',
                            height: 'auto',
                            transition: 'width 0.3s ease',
                            borderRadius: "50%",
                            border: "5px solid white"
                        }}
                    />
                    {
                        !collapsed &&
                        <div>
                            <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.3rem', marginTop: '10px', textAlign: "center" }}>Dr. Rajesh Mishra</div>
                            <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', margin: '5px 2px', textAlign: "center" }}>Assistant Professor, School of ICT, Gautam Buddha University Greater Noida</div>
                        </div>


                    }
                </div>




                <Menu
                    menuItemStyles={{
                        button: {
                            color: 'white',
                            borderRadius: '12px',
                            borderTopLeftRadius: '0px',
                            borderBottomLeftRadius: '0px',
                            marginBottom: '5px',
                            marginTop: "5px",
                            fontWeight: 'bold',
                            padding: '10px 15px',
                            transition: 'background-color 0.3s ease',
                            [`&:hover`]: {
                                backgroundColor: '#36363b',
                            },
                            [`&.active`]: {
                                backgroundColor: 'red',
                                color: '#fff',
                                borderLeft: '5px solid #ab40ff',
                            },
                        },
                    }}
                >
                    <MenuItem
                        onClick={() => handleMenuItemClick('aboutme')}
                        style={{
                            borderLeft: activeMenuItem === 'aboutme' ? "5px solid #ab40ff" : "none",
                        }}
                        icon={<FaUserTie />}
                        component={<Link to="/aboutme" />}
                    >
                        About Me
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleMenuItemClick('experience')}
                        style={{
                            borderLeft: activeMenuItem === 'experience' ? "5px solid #ab40ff" : "none",
                        }}
                        icon={<FaToolbox />}
                        component={<Link to="/experience" />}
                    >
                        Experience
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleMenuItemClick('education')}
                        style={{
                            borderLeft: activeMenuItem === 'education' ? "5px solid #ab40ff" : "none",
                        }}
                        icon={<FaUserGraduate />}
                        component={<Link to="/education" />}
                    >
                        Education
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleMenuItemClick('publications')}
                        style={{
                            borderLeft: activeMenuItem === 'publications' ? "5px solid #ab40ff" : "none",
                        }}
                        icon={<VscFileSubmodule />}
                        component={<Link to="/publications" />}
                    >
                        Publications
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleMenuItemClick('achievements')}
                        style={{
                            borderLeft: activeMenuItem === 'achievements' ? "5px solid #ab40ff" : "none",
                        }}
                        icon={<TfiCup />}
                        component={<Link to="/achievements" />}
                    >
                        Achievements
                    </MenuItem>

                    <MenuItem
                        onClick={() => handleMenuItemClick('gallery')}
                        style={{
                            borderLeft: activeMenuItem === 'gallery' ? "5px solid #ab40ff" : "none",
                        }}
                        icon={<HiMiniPhoto />}
                        component={<Link to="/gallery" />}
                    >
                        Gallery
                    </MenuItem>

                </Menu>

                {
                    !collapsed &&
                    <div
                        className='flex text-white justify-evenly space-x-4 mt-6 mx-8'
                    >
                        <FaUniversity
                            className="cursor-pointer text-3xl"
                            onClick={() => window.open('https://faculty.gbu.ac.in/profile.php?id=VXv1T62-SoP05E7OGtNKe5OfU73kjgdaPjA2CQ0FHTI')}
                        />
                        <FaLaptopCode
                            className='cursor-pointer  text-3xl'
                        />
                        <FaGithub
                            className='cursor-pointer text-3xl'
                        />
                        <FaLinkedin
                            className='cursor-pointer  text-3xl'
                            onClick={() => window.open('https://www.linkedin.com/in/rajesh-mishra-27565bab')}
                        />
                        <FaGoogleScholar
                            className='cursor-pointer  text-3xl'
                            onClick={() => window.open('https://scholar.google.co.uk/citations?user=yVc_AlcAAAAJ&hl=en')}
                        />
                        <FaResearchgate
                            className='cursor-pointer  text-3xl'
                            onClick={() => window.open('https://www.researchgate.net/profile/Rajesh-Mishra-2')}
                        />
                        <SiIeee
                            className='cursor-pointer  text-3xl'
                            onClick={() => window.open('https://ieeexplore.ieee.org/author/38242716100')}
                        />


                    </div>

                }

            </div>
        </Sidebar>
    );
};

export default SideBarMenu;