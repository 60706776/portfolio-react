import React, { useContext, useRef, useState } from 'react'
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSearch, SSearchIcon, SSidebar, SSidebarButton, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from './Style'

import { logoSVG } from '../../../assets'

import { AiOutlineAppstoreAdd, AiOutlineHome, AiOutlineLeft, AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai'
import { MdLogout } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineApartment } from 'react-icons/ai'
import { ThemeContext } from '../../../App'
import { useLocation } from 'react-router-dom'
import { GiSkills } from 'react-icons/gi'


export default function Sidebar() {
    const searchRef = useRef(null);
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionality
        }
    };

    return (
        <SSidebar >
            <>
                <SSidebarButton onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logoSVG} alt="logo" />
            </SLogo>
            <SSearch onClick={searchClickHandler} style={!sidebarOpen ? { width: `fit-content`, } : {}}>
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input ref={searchRef} placeholder="Search" style={!sidebarOpen ? { width: 0, padding: 0 } : {}} />
            </SSearch>
            <SDivider />
            {
                console.log(linksArray)
            }
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} >
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            {secondaryLinksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    // isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === 'light' ? "dark" : "light"))}>
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme>
        </SSidebar>
    )
}

const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/",
        notification: 0,
    },
    {
        label: "About",
        icon: <BsPerson />,
        to: "/statistics",
        notification: 0,
    },
    {
        label: "Skills",
        icon: <GiSkills />,
        to: "/customers",
        notification: 0,
    },
    {
        label: "Contact",
        icon: <AiOutlineApartment />,
        to: "/diagrams",
        notification: 0,
    } ,
];

const secondaryLinksArray = [
    // {
    //     label: "Blog",
    //     icon: <AiOutlineAppstoreAdd />,
    //     to: "/",
    //     notification: 0,
    // },
    {
        label: "Logout",
        icon: <MdLogout />,
        to: "/work",
        notification: 0,
    },
]
