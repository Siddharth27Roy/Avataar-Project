import React, { useState, useEffect } from 'react'
import { Link, NavLink} from 'react-router-dom';
import useTheme from '../../contexts/theme'
import './Header.css'


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
    
    <nav  id="main-menu" className=''>
        <ul className='navbar'>

            <li className='logo-li'>   
                <Link to='/' >
                    <p className='logo'>E-COMM</p>
                </Link>
            </li>

            {mainMenuItems.map((item, index) => (
            <li key={index}>
                <NavLink to={item.slug} className='menu-item'>{item.name}</NavLink>
            </li>
            ))}
            
            <div className='more-item'>
                <div onClick={changeToggleHandler} className='more-btn'>
                    <button>MORE </button>
                    <GoChevronDown />
                </div>
                {toggle === true && (
                    <ul className="more-menu">
                    {moreMenuItems.map((item, index) => (
                        <li key={index} className="more-menu-li">
                        <NavLink to={item.slug}>{item.name}</NavLink>
                        </li>
                    ))}
                    {moreNavItems.map((item, index) => (
                        <li key={index} className="more-menu-li">
                        <NavLink to={item.slug}>{item.name}</NavLink>
                        </li>
                    ))}
                    </ul>
                )}
            </div>


            <div className="nav-btn">
                <div className='search'>
                    <p><CiSearch /></p>
                    <input type="text" placeholder='Search Something' className='search-input'/> 
                </div>
                <button onClick={themeModeHandler} className='toggle-btn'>
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
