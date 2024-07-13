export default function Caixa(props: any) {
    return (
        <div className={`
            bg-red-600 p-3
            border-2 border-zinc-300 rounded-md 
            flex justify-center items-center
            ${props.className ?? ''}
        `}>
            <span>{props.texto}</span>
        </div>
    )
}