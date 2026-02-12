import { useEffect, useId, useState } from "react";
import { NavLink, useNavigate } from "react-router";

    import Favicon from "react-favicon";

import Header from "~/pages/header";
import Router from "~/pages/router";

import webicon from "/icon.png";
import takao from "~/assets/takao.png";
import poppo from "~/assets/poppo.jpeg";

import lockedApp from "~/assets/apps/locked.png";
import exedra from "~/assets/apps/exedra.png";

function Seeker() {
    const navigator = useNavigate();
    const seekerId = useId();
    const [seeker, setSeeker] = useState("");
    const [seekerColor, setSeekerColor] = useState("#190e4f");
    const [seekerResponse, setSeekerResponse] = useState("");
    const [seekerImageResponse, setSeekerImageResponse] = useState("");

    const responseList = {
        "" : () => {
            setSeekerResponse("Speak up, bottom.");
        },
        "koharu" : () => {
            setSeekerColor("#fad1d1");
            setSeekerResponse("If you seek the tormented girl's journal, you need to specify that her diary is what you're looking for.");
        },
        "koharu's diary" : () => {
            navigator("koharu");
        },
        "koharu-diary" : () => {
            navigator("koharu");
        },
        "exedra-calc" : () => {
            navigator("exedra-calc");
        },
        "secret" : () => {
            alert("A secret is revealed!");
            setSeekerResponse(";)");
        },
        "cls" : () => {
            setSeekerResponse("");
        },
        "hint" : () => {
            const hintCount = 7;
            const hintChosen = Math.round(Math.random() * hintCount);
            const hints = [
                "Scrambled text? Sometimes it might be helpful to treat it as some sort of cipher.",
                "Consider reloading pages.",
                `I'm about ${Math.round(Math.random() * 100)}% sure you don't tend to read the page title. Read it more often.`,
                "On her birthday, remember to check this page.",
                "Try asking about inside jokes.",
                "Funny numbers are funny, I think.",
                "Poppoh! Pokyukyukyukyu!",
            ];

            setSeekerResponse(hints[hintChosen]);
        },
        "21" : () => {
            setSeekerResponse("10 + 9");
        },
        "42" : () => {
            setSeekerResponse("The answer to the ultimate question of life, the universe, and everything.");
        },
        "67" : () => {
            setSeekerResponse("Please shut the fuck up.");
        },
        "69" : () => {
            setSeekerResponse("Nice :D");
        },
        "420" : () => {
            window.open("https://www.youtube.com/watch?v=QZXc39hT8t4");
        },
        "ribbon" : () => {
            setSeekerResponse("Buddy, this isn't the diary. (Besides, that ARG was done a long time ago).");
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
            setSeekerResponse("");
            setSeekerImageResponse(takao);
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
        "magia" : () => {
            setSeekerResponse("⋆ ˚｡⋆୨୧˚ Fucking Dysphoria Magic ˚୨୧⋆｡˚ ⋆");
        },
        "literary genius" : () => {
            setSeekerResponse("fjkhadfojhasfo");
        },
        "i'm home" : () => {
            setSeekerResponse("Did you mean: I'm hoe");
        },
        "i'm hoe" : () => {
            setSeekerResponse("Yes you are.");
        },
        "nagisa" : () => {
            setSeekerResponse("One day, Neko, one day.");
        },
        "poppo" : () => {
            setSeekerResponse("");
            setSeekerImageResponse(poppo);
        },
        "wiineko" : () => {
            setSeekerResponse("Andrew Tate femboy came over you");
        },
        "lumen" : () => {
            setSeekerResponse("Mum dad why did you make me autistic");
        },
        "astro" : () => {
            setSeekerResponse("Anyway, I'm gonna play with my selfie stick");
        },
        "ura" : () => {
            setSeekerResponse("And who cares if I forcefem my idols?");
        },
        "krunk" : () => {
            setSeekerResponse("It's rough, it gets everywhere, and I like it that way.");
        },
        "haya" : () => {
            setSeekerResponse("i played LIMBUS COMPANY and all i gotta say is if you give me 10 minutes alone with this man in a room one of us is walking out pregnant and it ain't gonna be me");            
        },
        "amby" : () => {
            setSeekerResponse("me blowing Clorine Gas into your room");
        },
    };

    function seekerHandle(event : React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        setSeekerColor("#190e4f");
        setSeekerImageResponse("");
        if (seeker.toLowerCase() in responseList) {
            responseList[seeker.toLowerCase() as keyof typeof responseList]();
        } else {
            setSeekerResponse("Sorry, I don't get what you're trying to do.");
        }
        setSeeker("");
    }

    return (
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
            <img 
                className = {(seekerImageResponse === "")? "hidden" : "h-25"}
                src = {seekerImageResponse}
                alt = "We must rise up against the screenreaders! Down with the Aristocrats!"
            />
            <p 
                style = {{
                    color : seekerColor
                }}
                className = {(seekerImageResponse === "")? "py-2 text-paragraph-primary font-noto-sans text-sm font-normal h-15 md:h-10 text-center" : "hidden"}
            >
                {seekerResponse}
            </p>
        </form>
    );

}

function Application(
    {name, desc, icon, iconAlt, routePath} : 
    {name : string, desc : string, icon : string, iconAlt : string, routePath : string}
) {
    if (routePath === "") {
        return (
            <section className = "flex flex-col xl:flex-row items-center p-3 gap-3 border-2 rounded-lg transition duration-150 ease-in-out border-dotted scale-100 border-white bg-white/0 hover:scale-102 hover:border-trans-blue hover:bg-white/25 cursor-not-allowed">
                <img 
                    className = "h-50 m-3 rounded-lg"
                    src = {icon}
                    alt = {iconAlt}
                />
                <h3 className = "font-noto-sans font-bold text-paragraph-primary text-center xl:text-left text-2xl">
                    {name}
                </h3>
                <p className = "font-noto-sans font text-paragraph-primary text-center xl:text-left text-lg">
                    {desc}
                </p>
            </section>
        );
    } else {
        return (
            <NavLink to = {routePath} className = "flex flex-col xl:flex-row items-center p-3 gap-3 border-2 rounded-lg transition duration-150 ease-in-out border-dotted scale-100 border-white bg-white/0 hover:scale-102 hover:border-trans-blue hover:bg-white/25">
                <img 
                    className = "h-50 m-3 rounded-lg"
                    src = {icon}
                    alt = {iconAlt}
                />
                <h3 className = "font-noto-sans font-bold text-paragraph-primary text-center xl:text-left text-2xl">
                    {name}
                </h3>
                <p className = "font-noto-sans font text-paragraph-primary text-center xl:text-left text-lg">
                    {desc}
                </p>
            </NavLink>
        );
    }
}

function UnavailableApplicaton() {
    return <Application name = "Unavailable" desc = "This application is unavailable" icon = {lockedApp} iconAlt = "" routePath = ""/>;
}

function ApplicationList() {
    return (
        <div className = "grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
            <Application 
                name = "Magia Exedra's Damage Calculator"
                desc = "Damage calculator for the mobile / PC gacha game Magia Exedra. (Seeker code: exedra-calc)"
                icon = {exedra}
                iconAlt = "Magia Exedra's Icon"
                routePath = "/apps/exedra-calc"
            />
            <UnavailableApplicaton />
            <UnavailableApplicaton />
            <UnavailableApplicaton />
        </div>
    );
}

function Content() {
	return (
		<div className = "blog-content">
            <Seeker />
            <hr />
            <ApplicationList />
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
