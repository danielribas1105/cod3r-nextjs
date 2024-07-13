
export default function Primeiro() {

    function anoAtual() {
        return new Date().getFullYear()
    }

    return (
        <div className="flex flex-col">
            <h1>Primeira página</h1>
            <span>{1 + 1}</span>
            <span>{Math.random()}</span>
            <span>{anoAtual()}</span>
        </div>
    )
}