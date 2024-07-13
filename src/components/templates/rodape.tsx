import { IconCodeCircle } from "@tabler/icons-react"

export default function Rodape() {
    return (
        <footer>
            <div className="flex gap-2 justify-center items-center py-3">
                <span>Desenvolvido por</span>
                <IconCodeCircle className="text-purple-500"/>
                <strong>DRCODE</strong>
            </div>
        </footer>
    )
}