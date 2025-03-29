import ScrollAnimation from "react-animate-on-scroll";
import TextDesc from "./TextDesc";
import TextYellow from "./TextYellow";
import toastr from "toastr";

export default function Section6() {
    const accounts = [{ no_rek: 1666914216, name: "M. Rian Yogaswara" }];

    const copyClipboard = (text) => {
        const copyText = text;
        console.log({ copyText });

        if (navigator.clipboard) {
            navigator.clipboard.writeText(copyText).then(() => {
                toastr.info("Berhasil disalin!");
                console.log("sukses disalin!");
            });
        }
    };
    return (
        <>
            <div className="bg-color-1 w-full px-5 py-10">
                <div
                    className="bg-gray-100 px-4 rounded-t-full border-2 w-full py-10 flex flex-col items-center justify-center"
                    style={{ minHeight: 798 }}
                >
                    <div className="py-10 px-5 w-full flex justify-center items-center flex-col">
                        <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={250}>
                            <TextYellow name={"TANDA KASIH"} />
                        </ScrollAnimation>
                        <br />
                        <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={350}>
                            <TextDesc>
                                Terimakasih telah bersedia hadir dan menambah
                                kebahagiaan pada acara yang sangat berkesan bagi
                                kami. Doa restu Anda merupakan karunia yang
                                sangat berarti bagi kami. Serta terimakasih
                                untuk hadiah indah dari Anda.{" "}
                            </TextDesc>
                        </ScrollAnimation>
                        <div className="border-2 border-color flex flex-col w-full p-4 gap-5 mt-10">
                            {accounts.map((x, i) => {
                                return (
                                    <Account
                                        copyClipboard={copyClipboard}
                                        data={x}
                                        key={i}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Account({ data, copyClipboard }) {
    return (
        <>
            <div className="flex gap-3">
                <ScrollAnimation className=" object-contain items-center flex" animateIn="fadeIn"  animateOnce={true} delay={350}>
                    <figure className=" object-contain items-center flex">
                        <img
                            src="/assets/logo-bni.png"
                            className="border border-color"
                            alt="logo bni"
                        />
                    </figure>
                </ScrollAnimation>
                <article className="flex flex-col items-center  justify-center gap-1">
                    <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={350}>
                        <span>{data.no_rek}</span>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={350}>
                        <button
                            onClick={() => {
                                copyClipboard(data.no_rek);
                            }}
                            className="btn btn-accent btn-sm color-select rounded-full mt-1"
                        >
                            <span className="amiko text-white mt-1 mx-4" style={{ fontSize:'10px' }}>
                                Salin Rekening
                            </span>
                        </button>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={350}>
                        <span className="text-sm">{data.name}</span>
                    </ScrollAnimation>
                </article>
            </div>
        </>
    );
}
