import '../STYLE/Button.css'
export default function Button({ disabled, active, value, setValue }) {
    return (
        <button
            disabled={disabled}
            className={`myButton ${active ? 'myButtonOn' : ''}`}
            onClick={e => setValue()}
        >
            {value}
        </button>
    )
}