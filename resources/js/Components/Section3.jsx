import { useEffect, useState } from "react";
import TextDesc from "./TextDesc";
import TextYellow from "./TextYellow";
import ScrollAnimation from "react-animate-on-scroll";

export default function Section3() {
    const dateWedding = new Date("2025-04-20").getTime();

    const [objTime, setObjTime] = useState({
        day: "00",
        hour: "00",
        minute: "00",
        second: "00",
    });

    useEffect(() => {
        const dateInterval = setInterval(() => {
            const now = new Date().getTime();
            let distance = dateWedding - now;
            let d = Math.floor(distance / (1000 * 60 * 60 * 24));
            let h = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let s = Math.floor((distance % (1000 * 60)) / 1000);
            let day = d;
            if (d < 0) {
                day = "00";
            }

            setObjTime((prev) => ({
                ...prev,
                ["day"]: day,
                ["hour"]: h,
                ["minute"]: m,
                ["second"]: s,
            }));
        }, 1000);

        return () => clearInterval(dateInterval);
    }, []);

    return (
        <>
            <div className="bg-color-1 w-full px-5 py-10">
                <div
                    className="bg-gray-100 px-4 rounded-t-full border-2 w-full py-10 flex flex-col items-center justify-center"
                    style={{ minHeight: 798 }}
                >
                    <div className="py-10 px-5 w-full">
                        <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={250}>
                            <TextYellow name={"AKAD NIKAH"} />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={450}>
                            <TextDesc>
                                Minggu, 20 April 2025 <br /> Pukul 09:00 WIB{" "}
                                <br />
                                Kediaman Mempelai Wanita <br /> Kp. Pangkalan
                                RT.04/05 Desa Sukajaya, <br /> Kec. Tamansari,
                                Kab. Bogor Alamat akad nikah
                            </TextDesc>
                        </ScrollAnimation>
                        <div className="border-b-2 border-color mt-10"></div>
                    </div>
                    <div className="py-10 px-5 w-full">
                        <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={250}>
                            <TextYellow name={"RESEPSI"} />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={450}>
                            <TextDesc>
                                Minggu, 20 April 2025 <br /> Pukul 10:00 WIB{" "}
                                <br />
                                Kediaman Mempelai Wanita <br /> Kp. Pangkalan
                                RT.04/05 Desa Sukajaya, <br /> Kec. Tamansari,
                                Kab. Bogor Alamat akad nikah
                            </TextDesc>
                        </ScrollAnimation>
                        <div className="border-b-2 border-color mt-10"></div>
                    </div>
                    <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={250}>
                        <div className="py-10 px-5 w-full flex gap-3 justify-center">
                            <Square count={objTime.day} title={"Hari"} />
                            <Square count={objTime.hour} title={"Jam"} />
                            <Square count={objTime.minute} title={"Menit"} />
                            <Square count={objTime.second} title={"Detik"} />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </>
    );
}

function Square({ count, title }) {
    return (
        <>
            <div className="bg-color-2 w-16 h-16 amiko font-bold text-white text-md gap-1 flex flex-col items-center justify-center rounded-lg">
                <span>{count}</span>
                <span>{title}</span>
            </div>
        </>
    );
}
