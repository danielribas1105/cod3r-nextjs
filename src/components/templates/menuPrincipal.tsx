import { IconCapProjecting, IconHexagonNumber1, IconLayout2, IconListCheck } from "@tabler/icons-react";
import MenuItem from "./menuItem";
import Rodape from "./rodape";

export default function MenuPrincipal() {

    return (
        <aside className="flex flex-col justify-between w-80 bg-zinc-800">
            <nav className=" flex flex-col p-5">
                <MenuItem link="/primeiro">
                    <IconHexagonNumber1/>
                    <span>Primeiro</span>
                </MenuItem>
                <MenuItem link="/projetos">
                    <IconCapProjecting/>
                    <span>Projetos</span>
                </MenuItem>
                <MenuItem link="/flexbox">
                    <IconLayout2/>
                    <span>FlexBox</span>
                </MenuItem>
                <MenuItem link="/estado">
                    <IconListCheck/>
                    <span>Estado</span>
                </MenuItem>
            </nav>
            <Rodape/>
        </aside>
    )
}