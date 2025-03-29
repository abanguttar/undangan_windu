export default function Image({ value }) {
    return (
        <figure>
            <img src={`/assets/${value}.png`} alt={value} />
        </figure>
    );
}
