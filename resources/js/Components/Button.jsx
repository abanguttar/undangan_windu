export default function Button({text}) {
    return (
        <button className="btn btn-accent color-select rounded-full mt-10">
            <span className="amiko text-white mt-1 mx-4 text-md">
                {text}
            </span>
        </button>
    );
}
