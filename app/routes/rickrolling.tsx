import { useEffect } from "react";

export default function Rickrolling() {
    useEffect(() => {
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    })

    return (
        <div>
        </div>
    );
}