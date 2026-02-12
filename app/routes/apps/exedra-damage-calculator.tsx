import Favicon from "react-favicon";
import webicon from "/icon.png";
import { useEffect } from "react";

function Header() {
    return (
        <header className = "border-4 border-trans-pink border-double rounded-xl p-8 m-3 bg-[url(assets/apps/exedra-calc/calc-bg.jpeg)] bg-position-[center_top_95rem] bg-cover">
            <h1 className = "text-center text-4xl font-story-script font-bold text-white">
                Magia Exedra Damage Calculator
            </h1>
        </header>
    );
}

function Content() {
    return (
        <div>

        </div>
    );
}

export default function ExedraDamageCalculator() {
    useEffect(() => {
        document.title = "Magia Exedra Damage Calculator"
    })

    return (
        <div>
            <Favicon url = {webicon} />
            <Header />
            <Content />
        </div>
    )
}