import { ReactNode } from "react"

type Props = {
    phrase: string
    author?: string
}
export const Card = ({ phrase, author }: Props) => {
    return (
        <div className="italic w-96 border-2 border-red-400 p-3 text-3xl text-center">
            <h3 className="p-3 text-3xl text-center font-bold">"{phrase}"</h3>
            <p className="p-3 text-sm text-right">- {author ?? "Autor desconhecido"}</p>
            {/* 
            <p className="p-3 text-sm text-right">- {author ? author: "Author desconhecido"}</p> 
                Dois metodos de como usar condicionais ternarias
            */}
        </div>
    )

}