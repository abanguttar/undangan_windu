import ScrollAnimation from "react-animate-on-scroll";
import Image from "./Image";

export default function Section1() {
    return (
        <>
            <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                <div
                    className="bg-color-1 w-full px-5 py-10 mt-36 sm:mt-0 lg:mt-0 scroll-smooth focus:scroll-auto"
                    id="section1"
                >
                    <div className="bg-gray-100 px-4 rounded-t-full border-2 w-full py-10 flex flex-col items-center">
                        <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={250}>
                            <Image value="img-2" />
                        </ScrollAnimation>

                        <article className="text-center amiko text-xs flex flex-col gap-2">
                            <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={350}>
                                <p className="text-3xl">
                                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                                </p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={450}>
                                <p className="text-base">
                                    Assalamu’alaikum Wr. Wb.
                                </p>{" "}
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={550}>
                                <p className="mt-2">
                                    Tanpa mengurangi rasa hormat, kami bermaksud
                                    mengundang Bapak/Ibu/Saudara/i pada acara
                                    resepsi pernikahan kami.
                                </p>{" "}
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={650}>
                                <p className="text-base mt-2">
                                    Surah Ar-Rum : 21
                                </p>{" "}
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={750}>
                                <p className="mt-2">
                                    “Dan di antara tanda-tanda (kebesaran)-Nya
                                    ialah Dia menciptakan pasangan-pasangan
                                    untukmu dari jenismu sendiri, agar kamu
                                    cenderung dan merasa tenteram kepadanya, dan
                                    Dia menjadikan di antaramu rasa kasih dan
                                    sayang. Sungguh, pada yang demikian itu
                                    benar-benar terdapat tanda-tanda (kebesaran
                                    Allah) bagi kaum yang berpikir.”
                                </p>
                            </ScrollAnimation>
                        </article>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
}
