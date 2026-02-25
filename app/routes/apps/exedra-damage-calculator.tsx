import Favicon from "react-favicon";
import webicon from "/exedra-calc-icon.png";
import React, { useEffect, useId, useState } from "react";

import DrawIcon from "~/components/icon";
import exedra from "~/assets/apps/exedra.png";

import baseAtkIcon from "~/assets/apps/exedra-calc/icon/sword.svg";
import statModifierIcon from "~/assets/apps/exedra-calc/icon/sparkles.svg";
import configIcon from "~/assets/apps/exedra-calc/icon/config.svg";

const MAX_RANDOM = 2 ** 64

const modifierStringMap = new Map([
    ["ATK Up (%)", 0],
    ["ATK Down (%)", 1],
    ["ATK Up (flat)", 2],
    ["ATK Down (flat)", 3],
    ["[Enemy] DEF Up (%)", 4],
    ["[Enemy] DEF Down (%)", 5],
    ["Crit DMG Up (%)", 6],
    ["Crit DMG Down (%)", 7],
    ["DMG Dealt Up (%)", 8],
    ["DMG Dealt Down (%)", 9],
    ["Element Advantage DMG Up (%)", 10],
    ["Element Advantage DMG Down (%)", 11],
    ["[Enemy] DMG Taken Up (%)", 12],
    ["[Enemy] DMG Taken Down (%)", 13],
    ["[Enemy] Element RES Up (%)", 14],
    ["[Enemy] Element RES Down (%)", 15],
])

const modifierString = [
    "ATK Up (%)",
    "ATK Down (%)",
    "ATK Up (flat)",
    "ATK Down (flat)",
    "[Enemy] DEF Up (%)",
    "[Enemy] DEF Down (%)",
    "Crit DMG Up (%)",
    "Crit DMG Down (%)",
    "DMG Dealt Up (%)",
    "DMG Dealt Down (%)",
    "Element Advantage DMG Up (%)",
    "Element Advantage DMG Down (%)",
    "[Enemy] DMG Taken Up (%)",
    "[Enemy] DMG Taken Down (%)",
    "[Enemy] Element RES Up (%)",
    "[Enemy] Element RES Down (%)",
]

const modifierUnit = [
    "%",
    "%",
    "",
    "",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
    "%",
]

interface statModifierInterface {
    id : string,
    source : string,
    type  : number,
    value : number,
};

function getRandomId() {
    return String(Math.floor(Math.random() * MAX_RANDOM));
}

function Header() {
    return (
        <header className = "border-4 border-trans-pink border-double rounded-xl p-8 m-3 bg-[url(assets/apps/exedra-calc/calc-bg.jpeg)] bg-position-[center_top_95rem] bg-cover">
            <h1 className = "text-center text-4xl font-story-script font-bold text-white">
                Magia Exedra Damage Calculator
            </h1>
        </header>
    );
}

function BaseStatsComponent(
    {
        baseAtk, 
        setBaseAtk,

        portraitAtk,
        setPortraitAtk,

        supportAtk,
        setSupportAtk,

        baseDef,
        setBaseDef,
    } : {
        baseAtk : number, 
        setBaseAtk : React.Dispatch<React.SetStateAction<number>>,

        portraitAtk : number,
        setPortraitAtk : React.Dispatch<React.SetStateAction<number>>,

        supportAtk : number,
        setSupportAtk : React.Dispatch<React.SetStateAction<number>>,

        baseDef : number, 
        setBaseDef : React.Dispatch<React.SetStateAction<number>>,
    }
    ) {
    const baseAtkId = useId();
    const portraitAtkId = useId();
    const supportAtkId = useId();

    const baseDefId = useId();
    
    return (
        <section className = "section" aria-label = "Base Stats Section">
            <div className = "section-title">
                <DrawIcon source = {baseAtkIcon} className = "section-icon"/>
                <h1>Base ATK</h1>
                <DrawIcon source = {baseAtkIcon} className = "section-icon"/>
            </div>
            <hr />
            <div className = "flex flex-col md:flex-row justify-center gap-2">
                <div className = "flex flex-col justify-center gap-2 text-center section-content" 
                    title = "Unit's Base Attack without any other modifier."
                    aria-label = "Unit's Base Attack without any other modifier.">
                    <label className = "text-center" htmlFor = {baseAtkId}>
                        Base ATK
                    </label>
                    <input
                        className = "text-center border-black border rounded-lg px-2"
                        id = {baseAtkId}
                        type = "number"
                        value = {baseAtk}
                        autoComplete = "off"
                        aria-required = "true"
                        aria-label = "Base Attack value"
                        min = {0}
                        onChange = {(event) => {
                            setBaseAtk(parseInt(event.target.value, 10));
                            // console.log(event.target.value);
                        }}
                    />
                </div>
                <div className = "flex flex-col justify-center gap-2 text-center section-content" 
                title = "Unit's Equipped Portrait's ATK"
                aria-label = "Unit's Equipped Portrait's ATK">
                    <label className = "text-center" htmlFor = {portraitAtkId}>
                        Portrait ATK
                    </label>
                    <input
                        className = "text-center border-black border rounded-lg px-2"
                        id = {portraitAtkId}
                        type = "number"
                        value = {portraitAtk}
                        autoComplete = "off"
                        aria-required = "true"
                        aria-label = "Portrait Attack Value"
                        min = {0}
                        onChange = {(event) => {
                            setPortraitAtk(parseInt(event.target.value, 10));
                            // console.log(event.target.value);
                        }}
                    />
                </div>
                <div className = "flex flex-col justify-center gap-2 text-center section-content" 
                title = "Unit's Support's ATK. Not the Support's full ATK but only the given part of it."
                aria-label = "Unit's Support's ATK. Not the Support's full ATK but only the given part of it.">
                    <label className = "text-center" htmlFor = {supportAtkId}>
                        Support ATK
                    </label>
                    <input
                        className = "text-center border-black border rounded-lg px-2"
                        id = {supportAtkId}
                        type = "number"
                        value = {supportAtk}
                        autoComplete = "off"
                        aria-required = "true"
                        aria-label = "Support Attack Value"
                        min = {0}
                        onChange = {(event) => {
                            setSupportAtk(parseInt(event.target.value, 10));
                            // console.log(event.target.value);
                        }}
                    />
                </div>
                
            </div>
            <div className = "flex flex-row justify-center gap-2 text-center section-content" 
            title = "Target's Base DEF without any modifier."
            aria-label = "Target's Base DEF without any modifier.">
                <label className = "text-center" htmlFor = {baseAtkId}>
                    Base Enemy DEF
                </label>
                <input
                    className = "text-center border-black border rounded-lg px-2"
                    id = {baseDefId}
                    type = "number"
                    value = {baseDef}
                    autoComplete = "off"
                    aria-required = "true"
                    aria-label = "Base Attack value"
                    onChange = {(event) => {
                        setBaseDef(parseInt(event.target.value, 10));
                        // console.log(event.target.value);
                    }}
                />
            </div>
        </section>
    )
}

function ConfigComponent(
    {
        multiplier, 
        setMultiplier, 

        elementalAdvantage, 
        setElementalAdvantage, 

        isCriticalHit, 
        setIsCriticalHit, 

        criticalHit, 
        setCriticalHit, 

        isBroken, 
        setIsBroken,

        breakAmount,
        setBreakAmount,
    } :
    {
        multiplier : number, 
        setMultiplier : React.Dispatch<React.SetStateAction<number>>,

        elementalAdvantage : boolean,
        setElementalAdvantage : React.Dispatch<React.SetStateAction<boolean>>,

        isCriticalHit : boolean, 
        setIsCriticalHit : React.Dispatch<React.SetStateAction<boolean>>, 

        criticalHit : number, 
        setCriticalHit : React.Dispatch<React.SetStateAction<number>>, 

        isBroken : boolean, 
        setIsBroken : React.Dispatch<React.SetStateAction<boolean>>,

        breakAmount : number,
        setBreakAmount : React.Dispatch<React.SetStateAction<number>>,
    }
) {
    const multiplierId = useId();
    const elementalAdvantageId = useId();
    const isCriticalHitId = useId();
    const criticalHitId = useId();
    const isBrokenId = useId();
    const breakAmountId = useId();

    return (
        <section className = "section" aria-label = "Configuration Section">
            <div className = "section-title">
                <DrawIcon source = {configIcon} className = "section-icon"/>
                <h1>Configuration</h1>
                <DrawIcon source = {configIcon} className = "section-icon"/>
            </div>
            <hr />
            <div className = "flex flex-col section-content">
                <div className = "flex flex-col lg:flex-row justify-center gap-2 text-center"
                title = "The attack damage multiplier. (For example: 180% Light DMG)"
                aria-label = "The attack's damage multiplier. (For example: 180% Light DMG)">
                    <label
                        className = "text-center"
                        htmlFor = {multiplierId}
                    >
                        Ability Multiplier
                    </label>
                    <input
                        className = "text-center border-black border rounded-lg px-2"
                        id = {multiplierId}
                        value = {multiplier}
                        type = "number"
                        min = {0}
                        autoComplete = "off"
                        aria-required = "true"
                        onChange = {(event) => {
                            setMultiplier(Math.max(parseFloat(event.target.value), 0));
                        }}
                    />
                    <span className = "text-center lg:text-left">%</span>
                </div>
                <div className = "grid grid-cols-2 pt-5 gap-5 justify-items-center lg:justify-items-stretch justify-center">
                    <label
                        className = "text-center lg:text-right"
                        htmlFor = {elementalAdvantageId}
                        title = "Dictates whether or not the attacker has elemental advantage over the defender."
                        aria-label = "Dictates whether or not the attacker has elemental advantage over the defender."
                    >
                        Elemental Advantage?
                    </label>
                    <input
                        className = "border-black w-5 border rounded-lg px-2"
                        title = "Dictates whether or not the attacker has elemental advantage over the defender."
                        aria-label = "Dictates whether or not the attacker has elemental advantage over the defender."
                        id = {elementalAdvantageId}
                        checked = {elementalAdvantage}
                        type = "checkbox"
                        onChange = {(event) => {
                            // console.log(event.target.checked)
                            setElementalAdvantage(event.target.checked);
                        }}
                    />
                    <label
                        className = "text-center lg:text-right"
                        htmlFor = {isCriticalHitId}
                        title = "Dictates whether or not the attacker had scored a critical hit."
                        aria-label = "Dictates whether or not the attacker had scored a critical hit."
                    >
                        Critical Hit?
                    </label>
                    <input
                        className = "border-black w-5 border rounded-lg px-2"
                        title = "Dictates whether or not the attacker had scored a critical hit."
                        aria-label = "Dictates whether or not the attacker had scored a critical hit."
                        id = {isCriticalHitId}
                        checked = {isCriticalHit}
                        type = "checkbox"
                        onChange = {(event) => {
                            // console.log(event.target.checked)
                            setIsCriticalHit(event.target.checked);
                        }}
                    />
                    <label
                        className = "text-center lg:text-right"
                        htmlFor = {isBrokenId}
                        title = "Dictates whether the defender is currently broken."
                        aria-label = "Dictates whether the defender is currently broken."
                    >
                        Break?
                    </label>
                    <input
                        className = "border-black w-5 border rounded-lg px-2"
                        title = "Dictates whether the defender is currently broken."
                        aria-label = "Dictates whether the defender is currently broken."
                        id = {isBrokenId}
                        checked = {isBroken}
                        type = "checkbox"
                        onChange = {(event) => {
                            // console.log(event.target.checked)
                            setIsBroken(event.target.checked);
                        }}
                    />
                </div>
                {(isCriticalHit)? (
                    <div className = "flex flex-col lg:flex-row justify-center gap-2 text-center pt-5"
                    title = "The percentage of bonus damage the attacker dealt on a critical hit."
                    aria-label = "The percentage of bonus damage the attacker dealt on a critical hit.">
                        <label
                            className = "text-center"
                            htmlFor = {criticalHitId}
                        >
                            Critical Damage
                        </label>
                        <input
                            className = "text-center border-black border rounded-lg px-2"
                            id = {criticalHitId}
                            value = {criticalHit}
                            type = "number"
                            min = {0}
                            autoComplete = "off"
                            aria-required = "true"
                            onChange = {(event) => {
                                setCriticalHit(Math.max(parseFloat(event.target.value), 0));
                            }}
                        />
                        <span className = "text-center lg:text-left">%</span>
                    </div>
                ) : <></>}
                {(isBroken)? (
                    <div className = "flex flex-col lg:flex-row justify-center gap-2 text-center pt-5"
                    title = "The break percentage of the defender."
                    aria-label = "The break percentage of the defender.">
                        <label
                            className = "text-center"
                            htmlFor = {breakAmountId}
                        >
                            Break Amount
                        </label>
                        <input
                            className = "text-center border-black border rounded-lg px-2"
                            id = {breakAmountId}
                            value = {breakAmount}
                            type = "number"
                            min = {0}
                            autoComplete = "off"
                            aria-required = "true"
                            onChange = {(event) => {
                                setBreakAmount(Math.max(parseFloat(event.target.value), 0));
                            }}
                        />
                        <span className = "text-center lg:text-left">%</span>
                    </div>
                ) : <></>}
            </div>
        </section>
    )
}

function StatModifierComponent({modifier, setModifier} : {modifier : statModifierInterface[], setModifier : React.Dispatch<React.SetStateAction<statModifierInterface[]>>}) {
    const sourceId = useId();
    const typeId   = useId();
    const valueId  = useId();

    const [newSource, setNewSource] = useState("");
    const [newType  , setNewType  ] = useState(0);
    const [newTypeString, setNewTypeString] = useState(modifierString[0]);
    const [newValue , setNewValue] = useState(0);
    
    return (
        <section className = "section" aria-label = "Stat Modifier Section">
            <div className = "section-title">
                <DrawIcon source = {statModifierIcon} className = "section-icon"/>
                <h1>Stat Modifier</h1>
                <DrawIcon source = {statModifierIcon} className = "section-icon"/>
            </div>
            <hr />
            <section className = "flex flex-col lg:flex-row items-center justify-center gap-2 section-content text-sm md:text-base" aria-label = "Section to add your own stat modifier.">
                <div className = "flex flex-col gap-2 text-center"
                title = "The source of the buff or debuff."
                aria-label = "The source of the buff or debuff.">
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
                        aria-autocomplete = "none"
                        aria-required = "true"
                        onChange = {(event) => {
                            setNewSource(event.target.value);
                        }}
                    />
                </div>
                <div className = "flex flex-col gap-2 text-center"
                title = "The type of the buff or debuff."
                aria-label = "The type of the buff or debuff.">
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
                <div className = "flex flex-col gap-2 text-center"
                title = "The potency of the buff or debuff."
                aria-label = "The potency of the buff or debuff.">
                    <label
                        htmlFor = {valueId}
                    >
                        Value
                    </label>
                    <input
                        className = "text-center border-black border rounded-lg px-2"
                        id = {valueId}
                        type = "number"
                        value = {newValue}
                        autoComplete = "off"
                        min = {0}
                        onChange = {(event) => {
                            setNewValue(Math.max(parseFloat(event.target.value), 0));
                        }}
                    />
                </div>
                <div className = "flex flex-col gap-2 text-center">
                    <button
                        className = "section-button"
                        title = "Add new stats modifier."
                        aria-label = "Add new stats modifier."
                        onClick = {() => {
                            function isIdExist(id : string) {
                                for (const obj of modifier){
                                    if (id == obj.id) return true;
                                }
                                return false;
                            }

                            var id = getRandomId();
                            while (isIdExist(id)) {
                                id = getRandomId();
                            }

                            const modifierId = id;
                            // console.log(modifierId);
                            // console.log(newSource);
                            // console.log(newType);
                            // console.log(newValue);
                            setModifier(
                                [
                                    ...modifier,
                                    {
                                        id : modifierId,
                                        source : newSource,
                                        type : newType,
                                        value : newValue
                                    }
                                ]
                            )
                            setNewSource("");
                            setNewType(0);
                            setNewTypeString(modifierString[0]);
                            setNewValue(0);
                        }}
                        disabled = {
                            (newSource === "")? true : false
                        }
                        type = "submit"
                    >
                        Add
                    </button>
                </div>
            </section>
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
                    {
                        modifier.map((m : statModifierInterface) => {
                            return (
                                <tr 
                                    key = {m.id} 
                                    className = "text-center transition ease-in-out duration-100 bg-cyan-50 hover:bg-cyan-100"
                                >
                                    <td>{m.source}</td>
                                    <td>{modifierString[m.type]}</td>
                                    <td>{m.value.toString() + modifierUnit[m.type]}</td>
                                    <td>
                                        <button
                                            className = "section-button"
                                            type = "button"
                                            onClick = {() => {
                                                setModifier(
                                                    modifier.filter(a => a.id !== m.id)
                                                );
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

function Calculator(
    {
        baseAtk,
        portraitAtk,
        supportAtk,
        baseDef,
        multiplier,
        elementalAdvantage,
        isCriticalHit,
        criticalHit,
        isBroken,
        breakAmount,
        modifier,
    } : {
        baseAtk : number,
        portraitAtk : number,
        supportAtk : number,
        baseDef : number,
        multiplier : number,
        elementalAdvantage : boolean,
        isCriticalHit : boolean,
        criticalHit : number,
        isBroken : boolean,
        breakAmount : number,
        modifier : statModifierInterface[],
    }
) {
    const [finalDamage, setFinalDamage] = useState(0);
    const [showDetailed, setShowDetailed] = useState(false);

    const calculateDamage = () => {
        // Deriving Stats:
        let atkUp = 0;
        let atkDown = 1;
        let atkUpFlat = 0;
        let atkDownFlat = 0;

        let enemyDefUp = 0;
        let enemyDefDown = 1;
        
        let critDmgUp = 0;
        let critDmgDown = 0;

        let dmgDealtUp = 0;
        let dmgDealtDown = 1;

        let elementalDmgUp = 0;
        let elementalDmgDown = 1;

        let enemyDmgTakenUp = 0;
        let enemyDmgTakenDown = 1;

        let enemyElementResUp = 0;
        let enemyElementResDown = 0;

        for (var m of modifier) {
            switch (m.type) {
                case 0:
                    atkUp += m.value;
                    break;
                case 1:
                    atkDown *= (100 - m.value) / 100;
                    break;
                case 2:
                    atkUpFlat += m.value;
                    break;
                case 3:
                    atkDownFlat += m.value;
                    break;
                case 4:
                    enemyDefUp += m.value;
                    break;
                case 5:
                    enemyDefDown *= (100 - m.value) / 100;
                    break;
                case 6:
                    critDmgUp += m.value;
                    break;
                case 7:
                    critDmgDown += m.value;;
                    break;
                case 8:
                    dmgDealtUp += m.value;
                    break;
                case 9:
                    dmgDealtDown *= (100 - m.value) / 100;
                    break;
                case 10:
                    elementalDmgUp += m.value;
                    break;
                case 11:
                    elementalDmgDown *= (100 - m.value) / 100;
                    break;
                case 12:
                    enemyDmgTakenUp += m.value;
                    break;
                case 13:
                    enemyDmgTakenDown *= (100 - m.value) / 100;
                    break;
                case 14:
                    enemyElementResUp += m.value;
                    break;
                case 15:
                    enemyElementResDown += m.value;
                    break;
            }
        }

        atkDown = (1 - atkDown) * 100;
        enemyDefDown = (1 - enemyDefDown) * 100;
        dmgDealtDown = (1 - dmgDealtDown) * 100;
        elementalDmgDown = (1 - elementalDmgDown) * 100;
        enemyDmgTakenDown = (1 - enemyDmgTakenDown) * 100;

        baseAtk += portraitAtk + supportAtk;

        let totalAtk = baseAtk * (1 + (atkUp / 100)) * (1 - (atkDown / 100)) + atkUpFlat - atkDownFlat;
        let totalDef = baseDef * (1 + (enemyDefUp / 100)) * (1 - (enemyDefDown / 100));
        let totalCritMultiplier = (criticalHit + critDmgUp - critDmgDown) / 100;
        let totalDmgDealt = (1 + (dmgDealtUp / 100)) * (1 - (dmgDealtDown / 100)) - 1;
        let totalElementalDmgDealt = (elementalDmgUp - elementalDmgDown) / 100;
        let totalEnemyDmgTaken = (1 + (enemyDmgTakenUp / 100)) * (1 - (enemyDmgTakenDown / 100)) - 1;
        let totalEnemyElementRes = (enemyElementResUp - enemyElementResDown) / 100;

        let abilityDamageBase = (multiplier / 100) * baseAtk * ((baseAtk / 124) ** 1.2 + 12) / 20;
        let defenseFactor = Math.min(((totalAtk + 10) / (totalDef + 10)) * 0.12, 2);
        let criticalFactor = (isCriticalHit)? 1 + totalCritMultiplier : 1;
        let damageDealtFactor = 1 + totalDmgDealt;
        let damageTakenFactor = 1 + totalEnemyDmgTaken;
        let elementalResistanceFactor = 1 - totalEnemyElementRes;
        let effectiveElementFactor = (elementalAdvantage)? 1.2 + totalElementalDmgDealt : 1;
        let breakFactor = (isBroken)? (breakAmount / 100) : 1;

        /*
        console.log(abilityDamageBase);
        console.log(defenseFactor);
        console.log(criticalFactor);
        console.log(damageDealtFactor);
        console.log(damageTakenFactor);
        console.log(elementalResistanceFactor);
        console.log(effectiveElementFactor);
        console.log(breakFactor);
        */

        setFinalDamage(
            abilityDamageBase 
            * defenseFactor
            * criticalFactor
            * damageDealtFactor
            * damageTakenFactor
            * elementalResistanceFactor
            * effectiveElementFactor
            * breakFactor
        );
    }

    return (
        <section className = "section" aria-label = "Submit and Calculate Section">
            <button
                className = "section-button text-xl border-2"
                title = "Calculate the possible damage dealt to the defender under these specific circumstances. RNG not taken into account."
                aria-label = "Calculate the possible damage dealt to the defender under these specific circumstances. RNG not taken into account."
                type = "submit"
                onClick = {calculateDamage}
            >
                Calculate Damage
            </button>
            <div className = "flex flex-col text-center"
            title = "Estimated amount of damage to the defender."
            aria-label = "Estimated amount of damage to the defender.">
                <h3 className = "font-noto-sans text-xl text-black">
                    Total Damage:
                </h3>
                <h1 
                    className = "cursor-pointer font-damage-number text-4xl md:text-6xl lg:text-8xl font-bold transition duration-100 text-purple-600 hover:text-purple-500 text-shadow-lg"
                >
                    {(showDetailed)? finalDamage.toFixed(4) : finalDamage.toFixed(0)}
                </h1>
            </div>
            <button
                className = "section-button text-xl border-2"
                title = "Click to switch between rounding to the nearest integer, or rounding to the nearest 4th digit after the decimal."
                aria-label = "Click to switch between rounding to the nearest integer, or rounding to the nearest 4th digit after the decimal."
                type = "submit"
                onClick = {() => {
                    setShowDetailed(!showDetailed);
                }}
            >
                {(showDetailed)? "Hide Extra Digits" : "Show Extra Digits"}
            </button>
        </section>
    );
}

function Content() { // Calculator
    const [baseAtk, setBaseAtk] = useState(0);
    const [portraitAtk, setPortraitAtk] = useState(0);
    const [supportAtk, setSupportAtk] = useState(0);
    const [baseDef, setBaseDef] = useState(0);

    const [multiplier, setMultiplier] = useState(100.0);
    const [elementalAdvantage, setElementalAdvantage] = useState(false);
    const [isCriticalHit, setIsCriticalHit] = useState(false);
    const [criticalHit, setCriticalHit] = useState(10.0);
    const [isBroken, setIsBroken] = useState(false);
    const [breakAmount, setBreakAmount] = useState(100.0);

    const [modifier, setModifier] = useState<statModifierInterface[]>([
        /**
            {
                id : getRandomId(),
                source : "Koharu's Wrath",
                type : 0,
                value : 999,
            }
        */
    ]); // Object: {id : string, source : string, type : int, value : float}

    return (
        <div className = "overflow-y-auto">
            <BaseStatsComponent 
                baseAtk    = {baseAtk} 
                setBaseAtk = {setBaseAtk} 

                portraitAtk = {portraitAtk}
                setPortraitAtk = {setPortraitAtk}

                supportAtk = {supportAtk}
                setSupportAtk = {setSupportAtk}

                baseDef    = {baseDef}
                setBaseDef = {setBaseDef}
            />
            <ConfigComponent
                multiplier = {multiplier}
                setMultiplier = {setMultiplier}

                elementalAdvantage = {elementalAdvantage}
                setElementalAdvantage = {setElementalAdvantage}

                isCriticalHit = {isCriticalHit}
                setIsCriticalHit = {setIsCriticalHit}

                criticalHit = {criticalHit}
                setCriticalHit = {setCriticalHit}

                isBroken = {isBroken}
                setIsBroken = {setIsBroken}

                breakAmount = {breakAmount}
                setBreakAmount = {setBreakAmount}
            />
            <StatModifierComponent 
                modifier    = {modifier}
                setModifier = {setModifier}
            />
            <Calculator 
                baseAtk = {baseAtk}
                portraitAtk = {portraitAtk}
                supportAtk = {supportAtk}
                baseDef = {baseDef}
                multiplier = {multiplier}
                elementalAdvantage = {elementalAdvantage}
                isCriticalHit = {isCriticalHit}
                criticalHit = {criticalHit}
                isBroken = {isBroken}
                breakAmount = {breakAmount}
                modifier = {modifier}
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
			<meta property = "og:title" content = "Exedra Damage Calculator"/>
			<meta property = "og:description" content = "Calculate (or estimate) damage dealt by your unit against a target."/>
			<meta property = "og:image" content = {exedra}/>
            <Header />
            <Content />
        </div>
    )
}