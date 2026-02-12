import { useEffect } from "react";
import Favicon from "react-favicon";

import Header from "~/pages/header";
import Router from "~/pages/router";

import amby_pfp from "~/assets/amby-avatar.png";
import heart from "~/assets/heart.png";
import art from "~/assets/art.jpg";
import webicon from "/icon.png";

function ExternalLink({text, link} : {text : string, link : string}) {
    return <a href = {link} className = "paragraph-link">{text}</a>
}

function Content() {
    const CURRENT = new Date();
    const BIRTHDAY = new Date("2004-03-26");
    var age_estimate = CURRENT.getFullYear() - BIRTHDAY.getFullYear();

    if (
        (CURRENT.getMonth() < BIRTHDAY.getMonth()) || 
        ((CURRENT.getMonth() == BIRTHDAY.getMonth()) && (CURRENT.getDate() < BIRTHDAY.getDate()))
    ) age_estimate -= 1;

	return (
		<article className = "blog-content">
            <img className = "float-right p-3 size-60" src = {amby_pfp} alt = "A girl with long black hair. There is a flower crown adorning her head. She has heterochromia with one black eye and one pink. She wears a school-uniform with white cardigan. She is displaying a cat-like smile at the viewer."/>
            <h3 className = "paragraph-title">
                What I am:
            </h3>
            <p className = "paragraph">
                Hi hi! My name is Amber. I go by a number of nickname, including Amby and Puddle, mostly depending on my mood. I'm a genderfae person, going by she / they pronouns. Currently, I am {age_estimate} years old. My hometown resides in weia owq, but normally I can't be found there. I'm a struggling fae in a difficult world. Despite my mental issues (mostly undiagonosed as therapy is not something I am capable of affording) and hangups, I'm generally considered a kind and hard-working person, even if my ability to be productive lies entirely on whether or not I am motivated to get things done.
            </p>
            <h3 className = "paragraph-title">
                What I do:
            </h3>
            <p className = "paragraph">
                I am a Computer Science undergraduate, studying in Australia. My career goal is possibly to find a job in Australia entirely, although that seems to be a thing that is getting harder and harder by the day. Despite that, computer science is and has always been one of my biggest interests. I came from a middle-lower class family, as such, when I was young, I didn't have access to powerful computers. I learnt the intricacies of computers through breaking old computers with viruses and I found my first interests in programming through video games and most importantly <a href = "https://scratch.mit.edu/download/scratch2" className = "paragraph-link">Scratch 2.0</a>, where I learnt how to code my very first video game. Afterward, I became a part of the city-level excellent student team for Computer Science, and won second place on the City-level Excellent Student Competition 2018 and a local MakeX robotics competition. I kept following my passion since then, occasionally with strife, tribulations and occasional triumphs, throughout my experience in a high school for gifted children, and eventually I got a scholarship to study in Australia, which is where I am now.
            </p>
            <p className = "paragraph">
                I primarily major in software development. However, my interests reach far beyond just that, as I also enjoy robotics, cybersecurity, cryptography (not crypto / NFT, just cryptography in general), competitive programming at one point and machine learning (such as things like image recognition, object detection, data analysis, natural language processing, etc.) but not much about Generative AI -- Side note: I don't like Generative AI, at least the way it is being treated and misused now. The principles and how it works are interesting to learn about, but I dislike it regardless and I blame the big tech companies for my hatred of it.
            </p>
            <p className = "paragraph">
                Despite computer science being my interest, I acknowledge that I still don't know a lot of frameworks and skills. I am proficient with: <ExternalLink text = "C" link = "https://en.wikipedia.org/wiki/C_(programming_language)" />, <ExternalLink text = "C++" link = "https://en.wikipedia.org/wiki/C%2B%2B" />, <ExternalLink text = "Python" link = "https://en.wikipedia.org/wiki/Python_(programming_language)" />, <ExternalLink text = "Java" link = "https://en.wikipedia.org/wiki/Java_(programming_language)" />, <ExternalLink text = "C#" link = "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" />, <ExternalLink text = "Arduino" link = "https://www.arduino.cc" /> and <ExternalLink text = "Scratch" link = "https://scratch.mit.edu" />. I'm also learning more about new things like <ExternalLink text = "React.js" link = "https://react.dev" />, <ExternalLink text = "Django" link = "https://www.djangoproject.com" />, <ExternalLink text = "Pygame" link = "https://www.pygame.org/news" />, <ExternalLink text = "Docker" link = "Docker.io" />, <ExternalLink text = "Fedora Linux" link = "https://www.fedoraproject.org" />, <ExternalLink text = "Godot" link = "https://godotengine.org" /> and more. I am open to learn more about new and interesting frameworks in the future.
            </p>
            <div className = "flex flex-col float-left p-3">
                <img className = "w-140" src = {heart} alt = "Screenshot of Starfruit Supernova, completed in 19.75 hours." />
                <p className = "caption">
                    Starfruit Supernova - one of the hardest Celeste Map I had ever beaten.
                </p>
            </div>
            <h3 className = "paragraph-title">
                What I like:
            </h3>
            <p className = "paragraph">
                Outside of programming, I have a number of other interests:
            </p>
            <p className = "paragraph">
                I play a lot of video games. My favourite genre usually is platformer, rhythm games, run and gun, hack and slash, puzzles and metroidvania. However, the games I play can vary greatly. My most liked game of all time is Celeste, which I had spent a total of more than 1000 hours in total, and I can play at a high level (but not good enough for Hardlists, sadly). I also know a lot about the game and its various movement mechanics and I can yap for a long while about Celeste and the maps I like and play. I also spend an ungodly amount of time in various rhythm games, from hallway scrollers like Arcaea, Project Sekai and Chunithm to exotic things like Maimai and Phigros, most of these games I can play at a competent level. Besides my main games, I have a number of other games that shuffles in and out of my interest pools over time such as: Hollow Knight, Silksong, Final Fantasy 14, Pokemon (and Competitive Pokemon), Puyo Puyo, Minecraft, Crosscode, Balatro, Touhou Project, Stardew Valley, Satisfactory, Factorio or recently 100% Orange Juice.
            </p>
            <div className = "flex flex-col float-right p-3">
                <img className = "w-90" src = {art} alt = "Image of an anime girl illustration." />
                <p className = "caption">
                    One of my little art piece that I did in 2024.
                </p>
            </div>
            <p className = "paragraph">
                Beside gaming, my interests also include a number of artistic things such as drawing and writing. I've always used the imaginary world as an escape from the life I lead, as a result, I have a rich inner world. My skill at drawing isn't on the same level as my friends (as you can probably see in the image next to this paragraph), and I have only been practicing and learning it deeply recently, but I still like to draw regardless. I've been drawing on and off for a year or two, occasionally stopping to focus on my studies or internships. I genuinely wish I had more time to hone my drawing skill but alas, I don't tend to have time to work on the things I like.
            </p>
            <p className = "paragraph">
                One of my other interests lies with writing and worldbuilding. While I wouldn't show any examples (as all of them are pretty private to me), I've been writing for a longer amount of time and with higher frequency than drawing. As a result, I am much better at writing stories than illustration. Most of the time I spend writing stories for roleplaying groups (I also used to play DND) or for myself as a way to express emotions during tough times. Ultimately, writing plays a role in one of my future dream careers of being a game developer, so it is still pretty usable.
            </p>
            <p className = "paragraph">
                One of the lesser interests of mine which overlaps with my interest in cryptography is game design and puzzle design. I play a lot of puzzle games, some competitively and some aren't. I also watch a lot of game design breakdown to see how game mechanics and systems are designed under the hood. Using what I learnt, I love to be able to design my own puzzles and games for fun. As a result, I really like to hide easter eggs and secrets in the things I made, including this website. ;)
            </p>
            <p className = "paragraph">
                The kind of media I like varies from whimsical stories aiming at a younger audience like Pretty Cure to deeper stories like Madoka Magica (what I would considered my favourite piece of media of all time). I also like to listen to music, although most of the music that I like come from rhythm games, so most of them are EDMs, however, I also dabble with lighter forms of music occasionally.
            </p>
            <h3 className = "paragraph-title">
                What is this website?
            </h3>
            <p className = "paragraph">
                This is my personal website, created as a mini-documentation on what I do as well as a link to some of my other contact informations. I won't be able to update this website every so often (since it is very likely that I will forget about it at some point, that's just how my memory is). But I'll update it when I can with updated informations and other things. If you want to reach out to me, feel free to do so through one of the options provided in the Extra Links page.
            </p>
		</article>
	);
}

export default function About() {
    useEffect(
        () => {
            document.title = "About Me!";
            if (Math.random() > 0.75) {
                document.title = "KEY: bweh";
            }
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
