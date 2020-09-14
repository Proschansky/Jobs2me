import React from 'react'
import SidebarToggleButton from './SidebarToggleButton'
import TopbarSearch from './TopbarSearch'
import SearchDropdown from './SearchDropdown'
import TopbarNavbar from './TopbarNavbar'
import NavAlerts from './NavItemAlerts'
import NavItemMessages from './NavItemMessages'
import NavItemUserInfo from './NavItemUserinfo'


export default function TopbarContent() {
    return (
        <>
            <SidebarToggleButton/>
            <TopbarSearch />
            <TopbarNavbar>
                <SearchDropdown />
                <NavAlerts/>
                <NavItemMessages/>
                <NavItemUserInfo/>
            </TopbarNavbar>
        </>
    )
}
