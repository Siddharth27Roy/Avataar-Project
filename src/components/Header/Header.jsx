import React, { useState, useEffect } from 'react'
import { Link, NavLink} from 'react-router-dom';
import useTheme from '../../contexts/theme'


import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";

const Header = () => {

    // using context on button to switch theme
    const {themeMode, themeModeHandler} = useTheme()

    // to toggle more-item menu
    const [toggle, setToggle] = useState(false);

    function changeToggleHandler() {
        setToggle(!toggle);
    }

    const items = [
        { name: 'HOME', slug: '/' },
        { name: 'ELECTRONICS', slug: '/electronics' },
        { name: 'BOOKS', slug: '/books' },
        { name: 'MUSIC', slug: '/music' },
        { name: 'MOVIES', slug: '/movies' },
        { name: 'CLOTHING', slug: '/clothing' },
        { name: 'GAMES', slug: '/games' },
      ];
    const moreNavItems = [
        { name: 'FURNITURE', slug: '/' },
        { name: 'TRAVEL', slug: '/' },
        { name: 'BOTANICAL', slug: '/' },
        { name: 'CATEGORY NAME', slug: '/' },
    ];

    const [mainMenuItems, setMainMenuItems] = useState([]);
    const [moreMenuItems, setMoreMenuItems] = useState([]);

    const handleResize = () => {
        const menuItems = [...items]; // copy all items initially
        const containerWidth = document.getElementById('main-menu').offsetWidth;

        let totalWidth = 0;
        const mainMenu = [];
        const moreMenu = [];

        for (const item of menuItems) {
        const itemWidth = getTextWidth(item); // get width of item text
        totalWidth += itemWidth;
        if (totalWidth <= containerWidth) {
            mainMenu.push(item);
        } else {
            moreMenu.push(item);
        }
        }

        setMainMenuItems(mainMenu);
        setMoreMenuItems(moreMenu);
    };

    useEffect(() => {
        handleResize(); // initial call to handleResize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getTextWidth = (text) => {
        // function to measure text width dynamically
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = '33px Arial'; // set font size and family
        const width = context.measureText(text).width;
        return width;
    };


    return (   
    
    <nav  className='dark:bg-[#2F302C] bg-slate-300' id="main-menu">
        <ul className='flex dark:text-white text-slate-800 justify-between items-center h-28 '>

            <li className='sm:pl-5'>   
                <Link to='/' >
                    <p className='text-lg font-bold'>E-COMM</p>
                </Link>
            </li>

            {mainMenuItems.map((item, index) => (
            <li key={index}>
                <NavLink to={item.slug} className={({isActive}) => `dark:text-neutral-100 text-[#242329] mr-[10px] ${isActive ? "text-red-500 dark:text-red-500" : "text-gray-700 "}`}>{item.name}</NavLink>
            </li>
            ))}
            
            <div id='mydiv' className='relative '>
                <div className='flex items-center space-x-1'>
                    <button id='more-btn' onClick={changeToggleHandler} className='relative'>MORE </button>
                    <GoChevronDown />
                </div>
                {toggle === true && (
                    <ul className="more-menu absolute top-20 -left-12 z-50 flex-col w-44 rounded-lg dark:text-white text-slate-800 dark:bg-[#2F302C] bg-slate-300">
                    {moreMenuItems.map((item, index) => (
                        <li key={index} className="p-3">
                        <NavLink to={item.slug}>{item.name}</NavLink>
                        </li>
                    ))}
                    {moreNavItems.map((item, index) => (
                        <li key={index} className="p-3">
                        <NavLink to={item.slug}>{item.name}</NavLink>
                        </li>
                    ))}
                    </ul>
                )}
            </div>


            <div className="nav_btns  flex sm:justify-center justify-end items-center space-x-2 sm:pr-5 z-30">
                <div className='dark:text-white sm:flex items-center space-x-2 border-b-2 sm:w-64 hidden lg:w-96 '>
                    <p><CiSearch /></p>
                    <input type="text" placeholder='Search Something' className=' dark:text-white bg-transparent  outline-none'/> 
                </div>
                <button onClick={themeModeHandler} className='text-[#242329] dark:text-white font-medium text-xl hover:text-[#9234ea] dark:hover:text-[#9234ea]'>
                    {
                        themeMode === "dark" ? (<MdOutlineLightMode />) : (<MdOutlineDarkMode/>)
                    }
                </button>
            </div>

        </ul>
    </nav>

    )
}

export default Header