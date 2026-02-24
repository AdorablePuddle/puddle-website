import { useEffect } from "react";
import Favicon from "react-favicon";

import Header from "~/pages/header";
import Router from "~/pages/router";

import webicon from "/icon.png";
import amby_pfp from "~/assets/amby-avatar.png";

import discord_ico  from "~/assets/links/discord.svg";
import github_ico   from "~/assets/links/github.svg";
import gmail_ico    from "~/assets/links/gmail.svg";
import youtube_ico  from "~/assets/links/youtube.svg";

function Contact({text, icon, alt}: {text : string, icon : string, alt : string}) {
    return (
        <div className = "flex flex-col w-50 items-center p-3 border-[#b33c86] border-dotted border-3 hover:bg-trans-pink">
            <img className = "object-scale-down" src = {icon} alt = {alt} />
            <p className = "caption">{text}</p>
        </div>
    )
}

function Content() {
	return (
		<div className = "blog-content">
            <h2 className = "paragraph-title">
                Contact Information:
            </h2>
            <div className = "flex flex-col items-center">
                <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-fit items-center">
                    <a href = "https://discord.com/users/535335309769179136">
                        <Contact 
                            text = "@adorable_puddle"
                            icon = {discord_ico}
                            alt  = "Discord Logo"
                        />
                    </a>
                    <a href = "https://github.com/AdorablePuddle">
                        <Contact 
                            text = "AdorablePuddle"
                            icon = {github_ico}
                            alt  = "Github Logo"
                        />
                    </a>
                    <a href = "https://www.youtube.com/@ytamb4ever">
                        <Contact 
                            text = "@ytamb4ever"
                            icon = {youtube_ico}
                            alt  = "Youtube Logo"
                        />
                    </a>
                    <a href = "mailto:amberthequeer@gmail.com">
                        <Contact 
                            text = "amberthequeer@gmail.com"
                            icon = {gmail_ico}
                            alt  = "Gmail Icon"
                        />
                    </a>
                </div>
            </div>
            <h3 className = "paragraph-title">
                Extra Credits:
            </h3>
            <p className = "paragraph">
                @wiineko : Providing the magnificent Koharu-petting gif on the header.
            </p>
            <p className = "paragraph">
                Picrew : Providing my image used in the About Me! section.
            </p>
		</div>
	);
}

export default function Links() {
    useEffect(
        () => {
            document.title = "Extra Links";
        }
    )
    
    return (
        <div className = "flex flex-col w-full h-dvh">
            <Favicon url = {webicon} />
			<meta property = "og:title" content = "Puddle's Website: Extra Links"/>
			<meta property = "og:description" content = "Other ways to contact me."/>
			<meta property = "og:image" content = {amby_pfp}/>
            <Header />
            <Router />
			<Content />
        </div>
    );
}
