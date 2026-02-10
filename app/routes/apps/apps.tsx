import { useEffect } from "react";
import Favicon from "react-favicon";

import Header from "~/pages/header";
import Router from "~/pages/router";

import webicon from "/icon.png";

function Content() {
	return (
		<div className = "blog-content">
            <p className = "paragraph">
                Not yet :)
            </p>
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
