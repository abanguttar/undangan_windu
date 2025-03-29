import ScrollAnimation from "react-animate-on-scroll";
import Image from "./Image";
import TextDesc from "./TextDesc";
import TextYellow from "./TextYellow";

export default function Section2() {
    return (
        <>
            <div className="bg-color-1 w-full px-5 py-10">
                <div className="bg-gray-100 px-4 rounded-t-full border-2 w-full py-10 flex flex-col items-center">
                    <Person
                        img={"img-3"}
                        name={"Siti Halmalia Reva"}
                        desc={"Putri ke 2 dari Bpk. Oman Lesmana & Ibu Nenah"}
                    />

                    <ScrollAnimation
                        className="flex flex-col items-center"
                        animateIn="fadeIn"  animateOnce={true}
                        delay={550}
                    >
                        <h1 className="alegreasc text-color-1 text-6xl text-center">
                            &
                        </h1>
                    </ScrollAnimation>

                    <Person
                        img={"img-4"}
                        name={"M. Rian Yogaswara"}
                        desc={"Putra ke 1 dari Bpk. Kuswara & Ibu Siti Rukiah"}
                    />
                </div>
            </div>
        </>
    );
}

function Person({ img, name, desc }) {
    return (
        <>
            <ScrollAnimation
                className="flex flex-col items-center"
                animateIn="fadeIn"  animateOnce={true}
                delay={250}
            >
                <Image value={img} />
            </ScrollAnimation>
            <ScrollAnimation
                className="flex flex-col items-center"
                animateIn="fadeIn"  animateOnce={true}
                delay={350}
            >
                <TextYellow name={name} />
            </ScrollAnimation>
            <ScrollAnimation
                className="flex flex-col items-center"
                animateIn="fadeIn"  animateOnce={true}
                delay={450}
            >
                <TextDesc>{desc}</TextDesc>
            </ScrollAnimation>
        </>
    );
}
