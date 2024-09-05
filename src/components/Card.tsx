import { ReactNode } from "react"

type Props = {
    phrase: string
    author?: string
}
export const Card = ({ phrase, author }: Props) => {
    return (
        <div className="italic w-96 border-2 border-red-400 p-3 text-3xl text-center">
            <h3 className="p-3 text-3xl text-center font-bold">"{phrase}"</h3>
            {author && 
                <p className="p-3 text-sm text-right">- {author}</p>
            }
            {/* {!author && 
                <p className="p-3 text-sm text-right">- Autor desconhecido</p>
            } */}
            {/* caso exista um autor, exibe a tag <p>, caso contrario nada é exibido.
                só pode retornar um unico elemento
            */}
        </div>
    )

}