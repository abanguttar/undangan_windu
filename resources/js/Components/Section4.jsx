import ScrollAnimation from "react-animate-on-scroll";
import Image from "./Image";
import TextDesc from "./TextDesc";
import TextYellow from "./TextYellow";

export default function Section4() {
    return (
        <>
            <div className="bg-color-1 w-full px-5 py-10">
                <div
                    className="bg-gray-100 px-4 rounded-t-full border-2 w-full py-10 flex flex-col items-center justify-center"
                    style={{ minHeight: 798 }}
                >
                    <div className="py-10 px-5 w-full flex justify-center items-center flex-col">
                        <ScrollAnimation
                            animateIn="fadeIn"
                            animateOnce={true}
                            delay={250}
                        >
                            <TextYellow name={"LOKASI ACARA"} />
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn="fadeIn"
                            animateOnce={true}
                            delay={550}
                        >
                            <div className="border-2 border-color mt-5 p-4 border-maps">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3963.083337187006!2d106.7253074749939!3d-6.636572393357889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzgnMTEuNyJTIDEwNsKwNDMnNDAuNCJF!5e0!3m2!1sid!2sid!4v1742819152817!5m2!1sid!2sid"
                                    width="100%"
                                    height="279"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </ScrollAnimation>
                        <div className="mt-10">
                            <div className="border-b-2 border-color my-10"></div>
                            <ScrollAnimation
                                animateIn="fadeIn"
                                animateOnce={true}
                                delay={550}
                            >
                                <TextDesc>
                                    Kediaman Mempelai Wanita <br /> Kp.
                                    Pangkalan RT.04/05 Desa Sukajaya, <br />{" "}
                                    Kec. Tamansari, Kab. Bogor
                                </TextDesc>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation
                            animateIn="fadeIn"
                            animateOnce={true}
                            delay={550}
                        >
                            <a
                                href="https://www.google.com/maps?q=-6.636572360992432,106.7278823852539&z=17&hl=id"
                                target="__link"
                                className="btn btn-accent color-select rounded-full mt-10"
                            >
                                <span className="amiko text-white mt-1 mx-4 text-md">
                                    Petunjuk Ke Lokasi
                                </span>
                            </a>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </>
    );
}
