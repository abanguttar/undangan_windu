import { useForm } from "@inertiajs/react";
import TextYellow from "./TextYellow";
import { useState } from "react";
import toastr from "toastr";

export default function Section8({ csrf_token, setComments, comments }) {
    const { data, setData } = useForm({
        name: "",
        text: "",
    });

    const [errors, setErrors] = useState({
        name: null,
        text: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        setErrors((prev) => ({
            ...prev,
            ["name"]: null,
            ["text"]: null,
        }));

        fetch(`${window.location.pathname}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "X-CSRF-TOKEN": csrf_token,
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res.status === 400) {
                    return res.json().then((err) => {
                        console.log(err["errors"]);
                        for (let e in err["errors"]) {
                            if (err["errors"][e]) {
                                console.log({ e });
                                setErrors((prev) => ({
                                    ...prev,
                                    [e]: err["errors"][e][0],
                                }));
                            }
                        }
                        throw new Error("errors");
                    });
                } else if (!res.ok) {
                    throw new Error("errors");
                }
                return res.json();
            })
            .then((data) => {
                toastr.success("Berhasil mengirim pesan!");
                setData((prev) => ({
                    ...prev,
                    ["name"]: "",
                    ["text"]: "",
                }));
                fetch("/comments")
                    .then((res) => {
                        return res.json();
                    })
                    .then((datas) => {
                        setComments(datas.comments);
                    });
            });
    }

    return (
        <>
            <div className="bg-color-1 w-full px-5 py-10" id="ucapan-doa">
                <div
                    className="bg-gray-100 px-4 rounded-t-full border-2 w-full py-10 flex flex-col items-center justify-center"
                    style={{ minHeight: 798 }}
                >
                    <div className="py-10 px-5 w-full flex justify-center items-center flex-col">
                        <TextYellow name={"UCAPAN & DOA"} />
                        <br />

                        <form
                            action=""
                            onSubmit={handleSubmit}
                            className="w-full"
                        >
                            <fieldset className="fieldset ">
                                <legend className="fieldset-legend">
                                    Nama Anda
                                </legend>
                                <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="Nama"
                                    id="name"
                                    value={data["name"]}
                                    onChange={(e) => {
                                        setData((prev) => ({
                                            ...prev,
                                            ["name"]: e.target.value,
                                        }));
                                    }}
                                />
                                {errors["name"] && (
                                    <p className="font-semibold text-red-500">
                                        {errors["name"]}
                                    </p>
                                )}
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Ucapan & Doa
                                </legend>
                                <textarea
                                    className="textarea h-24"
                                    placeholder="Berikan Ucapan & doa untuk kedua mempelai"
                                    id="text"
                                    onChange={(e) => {
                                        setData((prev) => ({
                                            ...prev,
                                            ["text"]: e.target.value,
                                        }));
                                    }}
                                    value={data["text"]}
                                ></textarea>
                                {errors["text"] && (
                                    <p className="font-semibold text-red-500">
                                        {errors["text"]}
                                    </p>
                                )}
                            </fieldset>
                            <div className="flex flex-col justify-center">
                                <button
                                    type="submit"
                                    className="btn btn-accent color-select rounded-full mt-5"
                                >
                                    <span className="amiko text-white mt-1 mx-4 text-md">
                                        Kirim
                                    </span>
                                </button>
                                <div className="border-b-2 border-color mt-10"></div>
                            </div>

                            <div className="room-chat overflow-y-scroll mt-5 min-h-96 max-h-96 mt-12">
                                {comments &&
                                    comments.map((x, i) => {
                                        return (
                                            <Chat
                                                name={x.name}
                                                text={x.text}
                                                received_at={x.received_at}
                                                key={i}
                                            />
                                        );
                                    })}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

function Chat({ name, text, received_at }) {
    return (
        <div className=" chat chat-start">
            <div className="chat-bubble w-full bg-white">
                <p className="text-sm font-semibold">{name}</p>
                <span>{text}</span>
                <br />
                <span className="text-xs font-light">{received_at}</span>
            </div>
        </div>
    );
}
