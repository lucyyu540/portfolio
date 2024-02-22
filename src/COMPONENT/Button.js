import './../STYLE/Button.css'
export default function Button({ active, value, setValue }) {
    return (
        <button
            className={`myButton ${active ? 'myButtonOn' : ''}`}
            onClick={e => setValue()}
        >
            {value}
        </button>
    )
}