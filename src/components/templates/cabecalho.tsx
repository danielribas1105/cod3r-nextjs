import Avatar from "./avatar";
import Logo from "./logo";

export default function Cabecalho() {
    return (
        <header className="flex justify-around items-center gap-5 p-5 bg-zinc-900 h-20">
            <Logo/>
            <span className="flex-grow">Cabeçalho</span>
            <Avatar/>
        </header>
    )
}