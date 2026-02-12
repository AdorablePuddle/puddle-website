import kohar from "../assets/kohar-pet.gif"

function Icon() {
    return (
        <img
            className = "w-13 h-13 cursor-grab"
            src = {kohar}
            alt = "The image of an anime girl being patted."
        />
    )
}

export default function Header() {
    return (
        <header className = "flex flex-row items-center h-18 justify-evenly border-dotted border-5 border-[#b33c86] bg-trans-pink">
            <Icon/>
            <h3 className = "text-white text-4xl text-shadow-lg/40 font-caveat">A Puddle's Website</h3>
            <Icon/>
        </header>
    )
}