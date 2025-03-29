import ScrollAnimation from "react-animate-on-scroll";
import TextDesc from "./TextDesc";

export default function Section7() {
    return (
        <>
            <div
                className="relative absolute px-5 py-10 flex flex-col items-center justify-center w-full"
                style={{ minHeight: 798 }}
            >
                <div
                    className="w-full z-10 absolute px-5 py-10 flex flex-col items-center justify-center"
                    id="last-section"
                    style={{ minHeight: 798 }}
                >
                    <div
                        className="absolute w-full top-0 left-0 "
                        style={{ minHeight: 798, backgroundColor: "#D9D9D966" }}
                    ></div>
                </div>
                <div className="z-20 absolute p-4 flex flex-col gap-3 mt-40">
                    <ScrollAnimation
                        className="flex flex-col items-center"
                        animateIn="fadeIn"
                        animateOnce={true}
                        delay={250}
                    >
                        <TextDesc>
                            Merupakan suatu kebahagiaan dan kehormatan bagi
                            kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan
                            memberikan doa restu kepada kami.
                        </TextDesc>
                    </ScrollAnimation>
                    <ScrollAnimation
                        className="flex flex-col items-center"
                        animateIn="fadeIn"
                        animateOnce={true}
                        delay={350}
                    >
                        <h1 className="amiko text-xl text-center">
                            Hormat kami yang mengundang
                        </h1>
                    </ScrollAnimation>
                    <ScrollAnimation
                        className="flex flex-col items-center"
                        animateIn="fadeIn"
                        animateOnce={true}
                        delay={450}
                    >
                        <h1 className="alegreasc text-color-1 text-5xl text-center">
                            RIAN & REVA
                        </h1>
                    </ScrollAnimation>
                    <ScrollAnimation
                        className="flex flex-col items-center"
                        animateIn="fadeIn"
                        animateOnce={true}
                        delay={550}
                    >
                        <p className="text-center mt-40">
                            Music: <br />
                            Maher Zain - Sepanjang Hidup
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
        </>
    );
}
