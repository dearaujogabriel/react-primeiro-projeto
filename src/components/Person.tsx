const getWeekDay = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(today)
}


type Props = {
    name: string
    avatar?: string
    roles: string[]
}

//export const Person = (props: Props) => {
export const Person = ({name, avatar = "./default.png", roles}: Props) => {
    //const {name, avatar, roles} = props;
    return (
        <>
            <h1 className="text-white font-bold">Nome: {name}</h1>
            <img 
                src={avatar}
                alt={name} 
                className="w-40 rounded-full"
            />
            <ul className="font-extralight">
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </>
    )
}

// <> </> -> Fragment, uma tag sem nome usada pra agrupar elementos quando nao quiser ou nao puder usar uma div