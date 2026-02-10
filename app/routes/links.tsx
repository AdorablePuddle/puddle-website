import { useEffect } from "react";
import Favicon from "react-favicon";

import Header from "~/pages/header";
import Router from "~/pages/router";

import webicon from "public/icon.png";

import discord_ico  from "~/assets/links/discord.svg";
import github_ico   from "~/assets/links/github.svg";
import gmail_ico    from "~/assets/links/gmail.svg";
import whatsapp_ico from "~/assets/links/whatsapp.svg";
import youtube_ico  from "~/assets/links/youtube.svg";

function Contact({text, link, icon, alt}: {text : string, link : string, icon : string, alt : string}) {
    return (
        <div className = "flex flex-col w-50 items-center p-3 border-[#b33c86] border-dotted border-3 hover:bg-[#f5a9b8]" onClick = {() => {
            if (link === "") return;
            window.location.href = link;
        }}>
            <img className = "object-scale-down" src = {icon} alt = {alt} />
            <p className = "caption">{text}</p>
        </div>
    )
}

function Content() {
	return (
		<div className = "blog-content">
            <h3 className = "paragraph-title">
                Contact Information:
            </h3>
            <div className = "flex flex-col w-screen items-center">
                <div className = "grid grid-cols-3 gap-4 w-fit items-center">
                    <Contact 
                        text = "@adorable_puddle"
                        link = "https://discord.com/users/535335309769179136"
                        icon = {discord_ico}
                        alt  = "discord.svg"
                    />
                    <Contact 
                        text = "AdorablePuddle"
                        link = "https://github.com/AdorablePuddle"
                        icon = {github_ico}
                        alt  = "github.svg"
                    />
                    <Contact 
                        text = "@ytamb4ever"
                        link = "https://www.youtube.com/@ytamb4ever"
                        icon = {youtube_ico}
                        alt  = "discord.svg"
                    />
                    <Contact 
                        text = "amberthequeer@gmail.com"
                        link = ""
                        icon = {gmail_ico}
                        alt  = "gmail.svg"
                    />
                    <Contact 
                        text = "Adorablest-Puddle"
                        link = ""
                        icon = {whatsapp_ico}
                        alt  = "whatsapp.svg"
                    />
                </div>
            </div>
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
            <Header />
            <Router />
			<Content />
        </div>
    );
}
