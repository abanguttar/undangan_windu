import Cover from "@/Components/Cover";
import Section1 from "@/Components/Section1";
import Section2 from "@/Components/Section2";
import Section3 from "@/Components/Section3";
import Section4 from "@/Components/Section4";
import Section5 from "@/Components/Section5";
import Section6 from "@/Components/Section6";
import Section7 from "@/Components/Section7";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Section8 from "@/Components/Section8";

export default function Undangan(props) {
    const [isPlay, setIsPlay] = useState(false);
    const [comments, setComments] = useState(props.datas);
    const musicSource = ["/assets/music-1.mp3"];


    const handlePlay = useCallback(() => {
        setIsPlay((prev) => !prev);
    }, []);

    useEffect(() => {
        const music = document.getElementById("music");
        const musicIcon = document.getElementById("music-icon");
        if (isPlay) {
            music.play().catch((error) => {
                // Handle the error if the play() method fails
                console.error("Play failed:", error);
            });
            musicIcon.classList.add("rotate");
        } else {
            music.pause();
            musicIcon.classList.remove("rotate");
        }
    }, [isPlay]);

    return (
        <>
            <Head title={props.title} />
            <div
                className="max-w-md mx-auto flex flex-col items-center h-screen relative overflow-hidden"
                style={{ backgroundColor: "#D9D9D966" }}
                id="undangan-windu"
            >
                <Cover handlePlay={handlePlay} />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                {/* Gallery */}
                <Section5 />
                {/* Gallery */}
                <Section6 />
                {/* Comments */}
                <Section8 csrf_token={props.csrf_token}  setComments={setComments} comments={comments} />
                {/* Comments */}
                <Section7 />
                <footer
                    className={`footer bg-gray-100 flex text-neutral-content items-center p-4 h-20 mb-0`}
                    id="footer"
                >
                    <p className="text-black flex">
                        Copyright © {new Date().getFullYear()}{" "}
                        <a
                            className="hover:font-bold "
                            href="https://www.instagram.com/uttarpn/"
                        >
                            @uttarpn
                        </a>{" "}
                        - All right reserved
                    </p>
                </footer>
                <ScrollUpButton />
                <ButtonMusic
                    musicSource={musicSource}
                    handlePlay={handlePlay}
                />
            </div>
        </>
    );
}

function ButtonMusic({ musicSource, handlePlay }) {
    return (
        <>
            <audio
                className="hidden"
                id="music"
                src={musicSource[0]}
                preload="auto"
                // autoPlay
            ></audio>
            <div
                className="hidden fixed text-black w-10 h-10 border-4 border-dark border-amber-900 text-amber-900 rounded-full flex justify-center items-center"
                id="music-icon"
                style={{
                    bottom: "4rem",
                    right: "3%",
                    zIndex: 30,
                }}
            >
                <button className="text-amber-900" onClick={handlePlay}>
                    <FontAwesomeIcon icon={faMusic} />
                </button>
            </div>
        </>
    );
}

function ScrollUpButton() {
    return (
        <>
            <a
                className="text-amber-900 fixed hidden"
                id="scroll-icon"
                href="#section1"
                style={{
                    bottom: "7rem",
                    right: "4.5%",
                    zIndex: 31,
                }}
            >
                <FontAwesomeIcon className="w-7 h-7" icon={faCircleUp} />
            </a>
        </>
    );
}
