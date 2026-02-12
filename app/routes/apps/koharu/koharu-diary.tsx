import { useEffect } from "react";
import Favicon from "react-favicon";

import koharu_dress from "~/assets/apps/koharu/dress.png"
import webicon from "/icon.png";

let ENTRIES = [
    // 0
    <></>, 
    // 1
    (
        <div className = "diary-entry">
            <h3 className = "diary-title">
                Day 1:
            </h3>
            <p>
                I've decided to keep some note to myself.
            </p>
            <p>
                It has been 1 day since making the wish. My life had changed... or maybe it has not? Everyone acted as if I had been a girl my whole life. Everything feels both so natural and as if I have been transported to a different world altogether.
            </p>
            <p>
                I used to not having any friends. But today, when I get to school, I was greeted with a few girls I was not familiar with, and they took me with them to lunch. Being included as one of the girls feel nice. Even though I couldn't follow any of their conversations. Girls' talk are so confusing.
            </p>
            <p>
                Oh. I met with Kyubey today also. He took me out to do some "witch hunt" as he calls it. It is my duty to fight witches from now on as a magical girl, he said. I don't know what Witches are... maybe I'll ask him when I meet him later.
            </p>
            <p>
                Mom and dad was so angry when I got home late today. They were already calling my school to ask for why I wasn't home. They said they would confiscate my phone for a week if I don't return home by 6 next time. They yelled at me again...
            </p>
        </div>
    ),
    // 2
    (
        <div className = "diary-entry">
            <h3 className = "diary-title">
                Day 2:
            </h3>
            <p>
                This morning, I took a long look at myself in the mirror.
            </p>
            <p>
                It has been so long since the last time I saw myself in the mirror. Those eyes, those cheeks, the long hair, they are all me.
            </p>
            <p>
                I don't think I have ever been this fixated on my own image for this long before. Every time I look at myself before that night, I couldn't stop the sickness I felt in my stomach. I feel allergic to my own image. I couldn't look at it for long.
            </p>
            <p>
                But now. I have been staring at my own image for minutes. I feel a warmth in my chest I had never felt before.
            </p>
            <p>
                The rest of the day went by in a blur. The birds are lively today, at least. I drawn a little comic in my textbook. It is nothing but scribbles, but at least it is something.
            </p>
        </div>
    ),
    // 3
    <></>,
    // 4
    (
        <div className = "diary-entry">
            <h3 className = "diary-title">
                Day 4:
            </h3>
            <p>
                School was okay today. I think I am slowly getting used to my new heights now. I think I have shrunk by a few centimeters. I wasn't tall to begin with, so if anything, it blends me into crowds easier. I don't mind this height.
            </p>
            <p>
                A girl I met asked me if I can hang out with them during the weekends. She said that we can go shopping at the mall near school. She then talk something about testing out new nail polish colorings and the newly opened clothing shop in the vicinity. I don't think I understand anything she was talking about... I have never had any good experience buying clothes. I don't think I've ever selected out any myself even. Maybe this time will be different...
            </p>
            <p>
                I thought about what I went through yesterday. I fought such a big witch... It is bigger than my grandma's house I think. I don't think I can make sense of what I saw in its face. I don't think it even had a face.
            </p>
            <p>
                Dad has been drinking again. He didn't lashed out at me, however. I get to sleep in peace tonight.
            </p>
        </div>
    ),
    <></>,
    // 6
    (
        <div className = "diary-entry">
            <h3 className = "diary-title">
                Day 6:
            </h3>
            <p>
                I would have to hang out with my friend tomorrow. She told me that we should do makeup before heading out.
            </p>
            <p>
                I... didn't know how to do make up. I don't think mom allows me to have any either. But... I didn't want them to be mad at me, so I borrowed mom's makeup purse.
            </p>
            <p>
                But I didn't know how to do anything. I rumbled through the purse for any instructions, any tutorial, nothing, not at all. I ended up putting so much things on my face that I couldn't stop coughing for almost half an hour. Cleaning them up, I put everything back to place and wiped off the mess I made on my face. Did this knowledge just comes for free for everyone else?
            </p>
            <p>
                Even Kyubey made fun of the mess I have on my face when he entered my room unprompted.
            </p>
        </div>
    ),
    // 7
    (
        <div className = "diary-entry">
            <h3 className = "diary-title">
                Day 7:
            </h3>
            <p>
                Today marked one week after I made the wish.
            </p>
            <p>
                I went to the mall with my friend today. I followed her behind their back as they led me from shop to shop. My legs couldn't keep up. How did they manage to move so fast?
            </p>
            <p>
                We started by thrifting out a small clothing shop. This was the first time I have ever stepped into the women clothing aisle. Every time I tried to before, I was stopped by mom, pulling me back to get me an another t-shirt. The dresses here were so colorful and varied. While she was scanning the rackets, figuring out what to try out first, I looked around and found a pretty dress. It is creamy pruple, reminding me of the sweet potato ice-cream cones I loved when I was young. The dress's had dropped shoulder, suspended by strings. It was so pretty. 
            </p>
            <img className = "float-right m-2 w-1/2" src = {koharu_dress} alt = "" />
            <p>
                I was going to put it back on to the rackets, but she creeped up behind me and told me to try it on. I was anxious at first, I didn't know that I was allowed to do this before. After a while inside the testing room, I looked at myself in the dress. I felt that warmth in my chest and face as I looked at myself. I twirled in place. I have never felt like this trying on clothes before.
            </p>
            <p>
                I would have bought it, if it didn't cost 50 times more than my allowances. Everything else in the shop was around this cost as well. Why are girls' clothing so expensive anyway?
            </p>
        </div>
    ),
    // 8
    (
        <div className = "diary-entry">
            <h3 className = "diary-title">
                Day ???:
            </h3>
            <p>
                I'm worrying about Kouga-sempai's sake.
            </p>
            <p>
                Ever since our friendgroup lost Simon-sempai, Sorae-sempai and Souten-sempai, everyone has been acting weirdly. Rumi-chan were distant, Takao senpai seems quiet and reserved. And Kouga-sempai?
            </p>
            <p>
                Yesterday, we talked together. He was a wreck. He was trying so hard to carry everyone's hope, even when things feel so dire and lost. I wish I could do more. If only, if only I wasn't so weak. I must have burdened him so much. I feel so guilty about myself.
            </p>
            <p>
                He hasn't been resting well lately. He didn't even use a grief seed the last time we fought. He handed it to Takao-sempai and me, telling me to use them to heal ourselves.
            </p>
            <p>
                I haven't use it. I still kept it with me. I want to give it to him, but I need to heal too, my gem has been murky recently...
            </p>
            <p>
                What worth would I bring with my magic anyway? I can't lead everyone. I can't fight on my own. I leeched on their hands, while doing barely anything to help. He would deserve it more than I do.
            </p>
        </div>
    ),
]

function Header() {
    return (
        <div className = "border-10 border-trans-pink border-solid m-5 p-3">
            <h1 className = "font-koharu-title text-4xl text-center font-bold">
                Koharu's Diary
            </h1>
        </div>
    );
}

function DiaryEntry({day} : {day : string}) {
    return ENTRIES[Number.parseInt(day, 10)]
}

function Content() {
    return (
        <div className = "grid grid-cols-1 md:grid-cols-2 gap-1 m-5">
            <DiaryEntry day = "1"/>
            <DiaryEntry day = "2"/>
            <DiaryEntry day = "4"/>
            <DiaryEntry day = "6"/>
            <DiaryEntry day = "7"/>
            <DiaryEntry day = "8"/>
        </div>
    )
}

export default function KoharuDiary() {
    useEffect(
        () => {
            document.title = "Koharu's Diary";
        }
    )

    return (
        <div className = "flex flex-col">
            <Favicon url = {webicon} />
            <Header />
            <Content />
        </div>
    );
}