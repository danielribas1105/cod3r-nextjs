import Caixa from "@/@/components/caixa";

export default function FlexBoxPage() {
    return (
        <div>
            <h1>FlexBox</h1>
            <div className="flex justify-around gap-9">
                <Caixa texto='#1' className="w-36"/>
                <Caixa texto='#2' className="flex-grow"/>
                <Caixa texto='#3' className="w24"/>
            </div>
        </div>
    )
}