import { NavLink } from "react-router";

const ROUTE_STYLE  = "grow py-1 transition duration-150 ease-in-out bg-[#71a2b6] hover:bg-[#60b2e5] text-center font-delius"
const ROUTE_ACTIVE = "grow py-1 bg-[#60b2e5] text-center font-delius"

function HomeButton() {
    return (
        <NavLink 
            to = "/"
            className = {({ isActive }) => isActive? ROUTE_ACTIVE : ROUTE_STYLE}
        >
            Home
        </NavLink>
    );
}

function AboutButton() {
    return (
        <NavLink 
            to = "/about"
            className = {({ isActive }) => isActive? ROUTE_ACTIVE : ROUTE_STYLE}
        >
            About Me!
        </NavLink>
    );
}

function AppsButton() {
    return (
        <NavLink 
            to = "/apps"
            className = {({ isActive }) => isActive? ROUTE_ACTIVE : ROUTE_STYLE}
        >
            My Apps
        </NavLink>
    );
}

function LinksButton() {
    return (
        <NavLink 
            to = "/links"
            className = {({ isActive }) => isActive? ROUTE_ACTIVE : ROUTE_STYLE}
        >
            Extra Links
        </NavLink>
    );
}

export default function Router() {
    return (
        <nav className = "flex flex-row items-center justify-evenly h-10 border-solid border-3 border-paragraph-primary bg-[#71a2b6]">
            <HomeButton />
            <AboutButton />
            <AppsButton />
            <LinksButton />
        </nav>
    );
}