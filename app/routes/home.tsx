import { useEffect } from "react";
import Favicon from "react-favicon";

import Header from "~/pages/header";
import Router from "~/pages/router";

import mizu_smug from "~/assets/mizu_smug.png";
import webicon from "/icon.png";

function YellingAboutBirthday() {
	const TODAY = new Date();
	const BIRTH = new Date("2004-03-26");

	return (TODAY.getDate() == BIRTH.getDate() && TODAY.getMonth() == BIRTH.getMonth())? (
		<h1 className = "paragraph-title text-2xl">
			Today is my birthday! Give me gifts, peasants! /j
		</h1>
	) : <></>;
}

function Content() {
	return (
		<div className = "blog-content">
			<img className = "float-right p-5" src = {mizu_smug} alt = "A girl with pink hair, red bow and clear pink eyes, tied into a side ponytail. She displays a smug expression at the viewer."/>
			<p className = "paragraph">
				Welcome to Puddle's Website!
			</p>
			<p className = "paragraph">
				This page is where I keep updates about myself and the projects I do and some other extra stuff.
			</p>
			<p className = "paragraph">
				The &quot;About Me!&quot; page contains more information about me.
			</p>
			<p className = "paragraph">
				The &quot;My Apps&quot; page contains some online webapps I made (that don't rely on a backend because I can't pay for it) plus some other stuff. ;)
			</p>
			<p className = "paragraph">
				The &quot;Extra Links&quot; page contains pages that lead to my other social media accounts and extra contact informations in case you'd like to send me death threats.
			</p>
			<h3 className = "paragraph-title">
				Most Recent Hyperfixations (Please ask me about them):
			</h3>
			<ol>
				<li className = "paragraph">
					- Minecraft
				</li>
				<li className = "paragraph">
					- Maimai
				</li>
				<li className = "paragraph">
					- 100% Orange Juice
				</li>
				<li className = "paragraph">
					- Star Detective Pretty Cure
				</li>
			</ol>
			<YellingAboutBirthday />
		</div>
	);
}

export default function Home() {
	useEffect(
		() => {
			document.title = "Home";
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
