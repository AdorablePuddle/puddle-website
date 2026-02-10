import { useEffect } from "react";

function Header() {
    return (
        <div className = "border-10 border-trans-pink border-solid m-5 p-3">
            <h1 className = "font-koharu-handwriting text-4xl text-center font-bold">
                Koharu's Diary
            </h1>
        </div>
    );
}

export default function KoharuDiary() {
    useEffect(
        () => {
            document.title = "Koharu's Diary";
        }
    )

    return (
        <div className = "flex flex-col">
            <Header />
        </div>
    );
}