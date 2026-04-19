import { useEffect, useId, useState } from "react"
import * as motion from "motion/react-client"
import webicon from "/exedra-calc-icon.png";
import Favicon from "react-favicon";

export default function Cinderella() {
    useEffect(() => {
        document.title = "Cinderella";
    })

    const inputId = useId();
    const [password, setPassword] = useState("");

    return (
        <div
            className = "bg-black"
        >
            <Favicon url = {webicon} />
            <motion.div 
                initial = {{
                    "opacity" : 0,
                    "scale" : 0.98,
                }}
                animate = {{
                    "opacity" : 1,
                    "scale" : 1
                }}
                transition = {{
                    "duration" : 1.0,
                }}
            >
                <form
                    className = "flex flex-col justify-center p-10 gap-3 w-full h-screen"
                    onSubmit = {() => {
                        const PasswordList = {
                            "library" : () => {
                                window.open("https://docs.google.com/document/d/1RvmMdbj26jzt-liYu7qsnyxeWPOSo4Ar0H-hNB7VtSo/edit?usp=sharing");
                            },
                            "fairy" : () => {
                                window.open("https://docs.google.com/document/d/1WpQCCwR14jKksSKtzI7i4VyRGMzotGxbN6WMYVej4CE/edit?usp=sharing");
                            },
                            "kirara" : () => {
                                window.open("https://docs.google.com/document/d/1tYFQZAcXXWxp3aub_rfxOTp6RkBJP7UuMow4vuauNjI/edit?usp=sharing");
                            },
                            "pumpkin" : () => {
                                window.open("https://docs.google.com/document/d/1xYgBUTygVc-MhKop2JA78N0N9wezp5gXi2W4-2EDe_I/edit?usp=sharing");
                            },
                            "miracle" : () => {
                                window.open("https://docs.google.com/document/d/1YfqCYzLdPEPTtcnYS4TOC-dfta4odOEtS8c35D9rRGo/edit?usp=sharing");
                            },
                            "hope" : () => {
                                window.open("https://docs.google.com/document/d/18XkIaKlAr8dZRn0Ow1ja3iZZ-3Pk_7g7hTQKx039LyE/edit?usp=sharing");
                            }
                        };
                        console.log(password);
                        if (password.toLowerCase() in PasswordList) {
                            PasswordList[password.toLowerCase() as keyof typeof PasswordList]();
                        }
                        setPassword("");
                    }}
                >
                    <label className = "transition duration-100 ease-in font-cinderella text-3xl text-white hover:text-gray-200 text-center" htmlFor = {inputId}>
                        Password
                    </label>
                    <input 
                        className = "border-white border-4 w-full h-15 font-cinderella text-3xl text-white text-center" 
                        id = {inputId}
                        value = {password}
                        type = "text"
                        autoComplete = "off"
                        onChange = {(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </form>
            </motion.div>
        </div>
    )
}