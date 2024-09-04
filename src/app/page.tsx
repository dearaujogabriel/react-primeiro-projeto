import { Person } from "@/components/Person"
import { Card } from "@/components/Card"

const Page = () => {
  return (
    <div>
      <h1 className="font-bold">Olá, Mundo!</h1>
      {/* <GeoForms/> */}

      <Person
        name="Gabriel de Araujo"
        avatar="https://media.licdn.com/dms/image/v2/C4D03AQGNs-ODK7wQSw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1652511178467?e=1730937600&v=beta&t=VD759uRgVEd5vxPtjBFEoeZ0SlMATOJeLBjq-W6Peq4"
        roles={["Teste 1", "Teste 2"]}
      />

      <Person
        name="Ana Valéria"
        avatar="https://media.licdn.com/dms/image/v2/D4D03AQFuXRqiTCFeBg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718254169446?e=1730937600&v=beta&t=sgtFs6AHP-MlbE7nzQSVijbNo_N5WV-nq4k2e8GgsO0"
        roles={["Teste 1", "Teste 2"]}
      />

      <Person
        name="Cadu"
        avatar="./cadu.jpg"
        roles={["Teste 1", "Teste 2"]}
      />
      <Person
        name="Fulano"
        roles={["Teste 1", "Teste 2"]}
      />
      <Card>Frase de efeito do Card</Card>

    </div>
  )
}

export default Page