import { IconDashboard } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 items-center py-10 h-screen">
      <IconDashboard size={100} stroke={0.5} className="text-zinc-500"/>
      <h1 className="font-black text-2xl">Bem-vindo ao sistema!!!</h1>
      <Link href='/primeiro' className="bg-blue-700 px-10 py-2 rounded-md hover:bg-blue-900">Entrar</Link>
    </div>
  )
}
