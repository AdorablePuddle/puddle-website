import Favicon from "react-favicon";
import webicon from "/exedra-calc-icon.png";
import { useEffect, useId, useState } from "react";

import DrawIcon from "~/components/icon";

import baseAtkIcon from "~/assets/apps/exedra-calc/icon/sword.svg";
import statModifierIcon from "~/assets/apps/exedra-calc/icon/sparkles.svg";


const modifierStringMap = new Map([
    ["ATK Up (%)", 0],
    ["ATK Down (%)", 1],
    ["ATK Up (flat)", 2],
    ["ATK Down (flat)", 3],
    ["[Enemy] DEF Up (%)", 4],
    ["Crit DMG Up (%)", 5],
    ["Crit DMG Down (%)", 6],
    ["DMG Dealt Up (%)", 7],
    ["DMG Dealt Down (%)", 8],
    ["Element Advantage DMG Up (%)", 9],
    ["Element Advantage DMG Down (%)", 10],
    ["[Enemy] DMG Taken Up (%)", 11],
    ["[Enemy] DMG Taken Down (%)", 12],
])

const modifierString = [
    "ATK Up (%)",
    "ATK Down (%)",
    "ATK Up (flat)",
    "ATK Down (flat)",
    "[Enemy] DEF Up (%)",
    "Crit DMG Up (%)",
    "Crit DMG Down (%)",
    "DMG Dealt Up (%)",
    "DMG Dealt Down (%)",
    "Element Advantage DMG Up (%)",
    "Element Advantage DMG Down (%)",
    "[Enemy] DMG Taken Up (%)",
    "[Enemy] DMG Taken Down (%)",
]

interface statModifierInterface {
    id : string,
    source : string,
    type  : number,
    value : number,
};

function Header() {
    return (
        <header className = "border-4 border-trans-pink border-double rounded-xl p-8 m-3 bg-[url(assets/apps/exedra-calc/calc-bg.jpeg)] bg-position-[center_top_95rem] bg-cover">
            <h1 className = "text-center text-4xl font-story-script font-bold text-white">
                Magia Exedra Damage Calculator
            </h1>
        </header>
    );
}

function BaseAttackComponent({baseAtk, setBaseAtk} : {baseAtk : number, setBaseAtk : React.Dispatch<React.SetStateAction<number>>}) {
    const baseAtkId = useId();
    
    return (
        <section className = "section">
            <div className = "section-title">
                <DrawIcon source = {baseAtkIcon} className = "section-icon"/>
                <h1>Base ATK</h1>
                <DrawIcon source = {baseAtkIcon} className = "section-icon"/>
            </div>
            <hr />
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-3 justify-center items-center section-content">
                <label className = "text-center md:text-right" htmlFor = {baseAtkId}>
                    Base ATK:
                </label>
                <input
                    className = "text-center md:text-left border-black border rounded-lg px-2"
                    id = {baseAtkId}
                    type = "number"
                    value = {baseAtk}
                    autoComplete = "off"
                    onChange = {(event) => {
                        setBaseAtk(parseInt(event.target.value, 10));
                    }}
                />
            </div>
        </section>
    )
}

function StatModifierComponent({modifier, setModifier} : {modifier : statModifierInterface[], setModifier : React.Dispatch<React.SetStateAction<statModifierInterface[]>>}) {
    const sourceId = useId();
    const typeId   = useId();

    const [newSource, setNewSource] = useState("");
    const [newType  , setNewType  ] = useState(0);
    const [newTypeString, setNewTypeString] = useState(modifierString[0]);
    
    return (
        <section className = "section">
            <div className = "section-title">
                <DrawIcon source = {statModifierIcon} className = "section-icon"/>
                <h1>Stat Modifier</h1>
                <DrawIcon source = {statModifierIcon} className = "section-icon"/>
            </div>
            <hr />
            <div className = "flex flex-col md:flex-row items-center justify-center gap-2 section-content text-sm md:text-base">
                <div className = "flex flex-col gap-2 text-center">
                    <label
                        htmlFor = {sourceId}
                    >
                        Source
                    </label>
                    <input
                        className = "text-center border-black border rounded-lg px-2"
                        id = {sourceId}
                        type = "text"
                        value = {newSource}
                        autoComplete = "off"
                        onChange = {(event) => {
                            setNewSource(event.target.value);
                        }}
                    />
                </div>
                <div className = "flex flex-col gap-2 text-center">
                    <label
                        htmlFor = {typeId}
                    >
                        Type
                    </label>
                    <select
                        className = "text-center border-black border rounded-lg px-2"
                        id = {typeId}
                        value = {newTypeString}
                        onChange = {(event) => {
                            // console.log(parseInt(event.target.value));
                            setNewType(parseInt(event.target.value));
                            setNewTypeString(event.target.value);
                        }}
                    >
                        {
                            modifierString.map((ms) => {
                                return (
                                    <option key = {ms} value={modifierStringMap.get(ms)?.toString()}>{ms}</option>
                                );
                            })
                        }
                    </select>
                </div>
            </div>
            <table className = "section-content text-sm md:text-base table-fixed border-3 border-trans-pink border-solid">
                <thead>
                    <tr className = "border-solid border">
                        <th>Source</th>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key = "a" className = "text-center transition ease-in-out duration-100 bg-cyan-50 hover:bg-cyan-100">
                        <td>Koharu's Wrath</td>
                        <td>{modifierString[0]}</td>
                        <td>{999}</td>
                        <td>
                            <button
                                className = "cursor-pointer border-2 border-black bg-gray-100 hover:bg-gray-50 active:bg-trans-pink m-1 py-1 px-5"
                                type = "button"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    {
                        modifier.map((m : statModifierInterface) => {
                            return (
                                <tr key = {m.id} className = "text-center transition ease-in-out duration-100 bg-cyan-50 hover:bg-cyan-100">
                                    <td>{m.source}</td>
                                    <td>{modifierString[m.type]}</td>
                                    <td>{m.value.toString()}</td>
                                    <td>
                                        <button
                                            className = "cursor-pointer border-2 border-black bg-gray-100 hover:bg-gray-50 active:bg-trans-pink m-1 py-1 px-5"
                                            type = "button"
                                            onClick = {() => {
                                                setModifier(
                                                    modifier.filter(a => a.id !== m.id)
                                                )
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
                
            </table>
        </section>
    );
}

function Content() { // Calculator
    const [baseAtk, setBaseAtk] = useState(0);
    const [modifier, setModifier] = useState<statModifierInterface[]>([]); // Object: {id : string, source : string, type : int, value : float}

    return (
        <div className = "overflow-y-auto">
            <BaseAttackComponent 
                baseAtk    = {baseAtk} 
                setBaseAtk = {setBaseAtk} 
            />
            <StatModifierComponent 
                modifier    = {modifier}
                setModifier = {setModifier}
            />
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