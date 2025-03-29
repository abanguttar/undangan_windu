import { useCallback } from "react";

export default function Cover({ handlePlay }) {
    let url = new URL(window.location.href);
    const guestName = new URLSearchParams(url.search).get("to");
    const allowScroll = useCallback(() => {
        document
            .getElementById("undangan-windu")
            .classList.remove("overflow-hidden");
        document.getElementById("music-icon").classList.remove("hidden");
        document.getElementById("scroll-icon").classList.remove("hidden");
        handlePlay();
        window.scroll(0, findPosition(document.getElementById("section1")));
        function findPosition(obj) {
            let currenttop = 0;
            if (obj.offsetParent) {
                do {
                    currenttop += obj.offsetTop;
                } while ((obj = obj.offsetParent));
                return [currenttop];
            }
        }
    }, []);

    return (
        <figure
            className="h-screen relative text-black w-full"
            style={{ backgroundColor: "#D9D9D966" }}
        >
            <div className="w-full absolute top-0 left-0 mt-56 flex flex-col justify-center items-center">
                <p className="amiko text-sm text-center">
                    YOU ARE INVITED TO <br /> THE WEDDING OF
                </p>
                <h1 className="alegreasc text-5xl">Rian & Reva</h1>
            </div>
            <div className="w-full absolute left-0 bottom-0 mb-20  flex flex-col justify-center items-center">
                <p className="amiko text-sm text-center">
                    Kepada Yth;
                    <br /> Bapak/Ibu/Saudara/i
                </p>
                <h1 className="alegreasc text-3xl text-center">
                    {guestName != null ? guestName : "Nama Undangan"}
                </h1>
                <button
                    onClick={allowScroll}
                    className="btn btn-accent color-select rounded-full mt-10"
                >
                    <span className="amiko text-white mt-1 mx-4 text-md">
                        OPEN INVITATION
                    </span>
                </button>
            </div>
            <img src="/assets/img-1.png" width={"100%"} alt="img-1" />
        </figure>
    );
}
