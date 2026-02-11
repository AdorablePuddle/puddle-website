import { useEffect, useId, useState } from "react";
import { useNavigate } from "react-router";

import Favicon from "react-favicon";

import Header from "~/pages/header";
import Router from "~/pages/router";

import webicon from "/icon.png";

function Content() {
    /**
     * If you are reading this, I presume you're trying to read the source. Come on. Respect the game. Find the secrets yourself.
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     */
    const navigator = useNavigate();
    const seekerId = useId();
    const [seeker, setSeeker] = useState("");
    const [seekerColor, setSeekerColor] = useState("#190e4f");
    const [seekerResponse, setSeekerResponse] = useState("");

    const responseList = {
        "" : () => {
            setSeekerResponse("");
        },
        "koharu" : () => {
            setSeekerColor("#fad1d1");
            setSeekerResponse("If you seek the tormented girl's journal, you need to specify that her diary is what you're looking for.");
        },
        "koharu's diary" : () => {
            navigator("koharu-diary");
        },
        "secret" : () => {
            alert("A secret is revealed!");
            setSeekerResponse(";)");
        },
        "cls" : () => {
            setSeekerResponse("");
        },
        "hint" : () => {
            const hintCount = 5;
            const hintChosen = Math.round(Math.random() * hintCount);
            const hints = [
                "Scrambled text? Sometimes it might be helpful to treat it as some sort of cipher.",
                "Consider reloading pages.",
                `I'm about ${Math.round(Math.random() * 100)}% sure you don't tend to read the page title.`,
                "On her birthday, remember to check this page.",
                "Try asking about inside jokes.",
            ];

            setSeekerResponse(hints[hintChosen]);
        },
        "67" : () => {
            setSeekerResponse("Please shut the fuck up.");
        },
        "ribbon" : () => {
            setSeekerResponse("Buddy, this isn't the diary. (Besides, that ARG was done a long time ago).");
        },
        "69" : () => {
            setSeekerResponse("Nice :D");
        },
        "lumby shippers" : () => {
            setSeekerResponse("There is prolly none of them out there.");
        },
        "spiritual incest" : () => {
            setSeekerResponse("OMG LOVE");
        },
        "backend" : () => {
            setSeekerResponse("Look, I really wish I could put all of these in the backend. But alas, having a server would be out of my budget.");
        },
        "weia owq" : () => {
            setSeekerResponse("That doesn't look right.");
        },
        "souta's seed" : () => {
            setSeekerResponse("Already taken by Nemi, sorry.");
        },
        "bweh" : () => {
            setSeekerResponse("Bweh! :3");
        },
        "define whore" : () => {
            window.open("https://discord.com/users/655079886289109002");
        },
        "kink" : () => {
            setSeekerResponse("Why are you asking me this? Be brave and go ask the creator.");
        },
        "autism" : () => {
            setSeekerResponse("Maybe.");
        },
        "adhd" : () => {
            setSeekerResponse("Absolutely.");
        },
    };

    function seekerHandle(event : React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        setSeekerColor("#190e4f");
        if (seeker.toLowerCase() in responseList) {
            responseList[seeker.toLowerCase() as keyof typeof responseList]();
        } else {
            setSeekerResponse("Sorry, I don't get what you're trying to do.");
        }
        setSeeker("");
    }

	return (
		<div className = "blog-content">
            <form 
                className = "flex flex-col gap-1 mb-3 items-center"
                onSubmit = {seekerHandle}
            >
                <label className = "paragraph-title indent-0" htmlFor = {seekerId}>
                    The Seeker
                </label>
                <input 
                    className = "font-normal border-3 border-black bg-white p-1 w-full text-center"
                    id = {seekerId}
                    type = "text"
                    name = "seeker"
                    value = {seeker}
                    autoComplete = "off"
                    onChange = {(event) => {
                        setSeeker(event.target.value);
                    }}
                />
                <p 
                    style = {{
                        color : seekerColor
                    }}
                    className = "seeker"
                >
                    {seekerResponse}
                </p>
            </form>
            <hr />
		</div>
	);
}

export default function Apps() {
    useEffect(
        () => {
            document.title = "My Apps";
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
