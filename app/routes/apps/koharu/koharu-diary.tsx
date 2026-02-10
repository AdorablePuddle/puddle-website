function Header() {
    return (
        <div className = "border-10 border-black border-solid font-sans">
            <h1>
                Koharu's Diary
            </h1>
        </div>
    );
}

export default function KoharuDiary() {
    return (
        <div className = "flex flex-col">
            <Header />
        </div>
    );
}