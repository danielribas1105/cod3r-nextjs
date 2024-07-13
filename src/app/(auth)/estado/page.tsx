'use client'
import { IconCirclePlus, IconTrash } from "@tabler/icons-react"
import { useState } from "react"

export default function Page() {
    const [tarefas, setTarefas] = useState<string[]>([])
    const [nome, setNome] = useState<string>('')

    function adicionarTarefa() {
        if(nome){
            setTarefas([...tarefas, nome])
            setNome('')
        }
    }

    function excluirTarefa(i: number) {
        setTarefas(tarefas.filter((_, index) => index !== i ))
    }

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="tarefa">Tarefa</label>
            <div className="flex items-center gap-2">
                <input id="tarefa" 
                    type="text" 
                    value={nome}
                    className="bg-zinc-800 py-2 px-5 rounded-md text-xl"
                    onChange={(e) => {setNome(e.target.value)}}
                    onKeyUp={(e) => {
                        if(e.key === 'Enter'){
                            adicionarTarefa()
                        }
                    }}
                />
                <button onClick={adicionarTarefa}>
                    <IconCirclePlus size={40} className="text-blue-500 hover:text-blue-700"/>
                </button>
            </div>
            <div className="my-3">
                <h2 className="font-semibold my-3">Lista de Tarefas</h2>
                <ul className="flex flex-col gap-2">
                    {tarefas.map((tarefa, i) => {
                        return (
                            <li key={i} className="flex justify-between items-center bg-zinc-700 rounded-md px-2 py-1">
                                <span>{tarefa}</span>
                                <IconTrash 
                                    size={20} 
                                    className="text-red-400 hover:text-red-600 cursor-pointer"
                                    onClick={() => excluirTarefa(i)}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}