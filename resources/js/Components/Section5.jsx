import { useState } from "react";
import TextYellow from "./TextYellow";
import Lightbox from "@seafile/react-image-lightbox";
import "@seafile/react-image-lightbox/style.css";
import ScrollAnimation from "react-animate-on-scroll";
export default function Section5() {
    const [lb, setLb] = useState({
        isOpen: false,
        photoIndex: 0,
    });

    const images = [
        "/assets/g-1.png",
        "/assets/g-2.png",
        "/assets/g-3.png",
        "/assets/g-4.png",
        "/assets/g-5.png",
        "/assets/g-6.png",
    ];

    const handleIsOpen = (index) => {
        setLb((prev) => ({
            ...prev,
            ["isOpen"]: true,
            ["photoIndex"]: index,
        }));
        console.log("click", index);
    };

    return (
        <>
            <div className="bg-color-1 w-full px-5 py-10">
                <div
                    className="bg-gray-100 px-4 rounded-t-full border-2 w-full py-10 flex flex-col items-center justify-center min-h-screen"
                >
                    <div className="py-10 px-5 w-full flex justify-center items-center flex-col">
                        <div className="w-full">
                            <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={550}>
                                <TextYellow name={"OUR MEMORIES"} />
                            </ScrollAnimation>
                            <div className="border-b-2 border-color mt-10"></div>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center mt-10">
                            <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={550}>
                                <video
                                    className="border border-color border-2"
                                    height="240"
                                    controls
                                    autoPlay
                                    muted
                                >
                                    <source
                                        src="https://cdn.oneshotphotography.id/video-prewed.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </ScrollAnimation>
                            <div className="flex flex-col gap-2 mt-0">
                                <figure className="flex gap-2 m-0 p-0">
                                    <VerticalImage
                                        handleIsOpen={handleIsOpen}
                                        src={"g-1.png"}
                                    />

                                    <VerticalImage
                                        handleIsOpen={handleIsOpen}
                                        src={"g-2.png"}
                                    />
                                </figure>
                                <figure className="flex gap-2 m-0 p-0">
                                    <VerticalImage
                                        handleIsOpen={handleIsOpen}
                                        src={"g-3.png"}
                                    />
                                    <VerticalImage
                                        handleIsOpen={handleIsOpen}
                                        src={"g-4.png"}
                                    />
                                </figure>
                                <figure className="flex gap-2 m-0 p-0">
                                    <VerticalImage
                                        handleIsOpen={handleIsOpen}
                                        src={"g-5.png"}
                                    />
                                    <VerticalImage
                                        handleIsOpen={handleIsOpen}
                                        src={"g-6.png"}
                                    />
                                </figure>
                            </div>

                            {/* {lb.isOpen && (
                                <Lightbox
                                    mainSrc={images[lb.photoIndex]}
                                    nextSrc={
                                        images[
                                            (lb.photoIndex + 1) % images.length
                                        ]
                                    }
                                    prevSrc={
                                        images[
                                            (lb.photoIndex +
                                                images.length -
                                                1) %
                                                images.length
                                        ]
                                    }
                                    onCloseRequest={() => {
                                        setLb((prev) => ({
                                            ...prev,
                                            ["isOpen"]: false,
                                        }));
                                    }}
                                    onMovePrevRequest={() => {
                                        setLb((prev) => ({
                                            ...prev,
                                            ["photoIndex"]:
                                                (lb.photoIndex +
                                                    images.length -
                                                    1) %
                                                images.length,
                                        }));
                                    }}
                                    onMoveNextRequest={() => {
                                        setLb((prev) => ({
                                            ...prev,
                                            ["photoIndex"]:
                                                (lb.photoIndex +
                                                    images.length +
                                                    1) %
                                                images.length,
                                        }));
                                    }}
                                />
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
function VerticalImage({ handleIsOpen, src }) {
    return (
        <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={550}>
            <img
                className="max-w-56"
                onClick={() => handleIsOpen(src[2] - 1)}
                src={`/assets/${src}`}
                alt=""
            />
        </ScrollAnimation>
    );
}
