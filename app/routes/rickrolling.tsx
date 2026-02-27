import { useEffect } from "react";

import Favicon from "react-favicon";
import webicon from "/icon.png";

export default function Rickrolling() {
    useEffect(() => {
        document.title = "Secret found!";
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 100)
    })

    return (
        <div>
            <Favicon url = {webicon} />
            <h1>
                There is Gullible written on the ceiling.
            </h1>
        </div>
    );
}