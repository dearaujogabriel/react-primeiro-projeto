import { peopleList } from '@/data/peopleList'

const Page = () => {
  const chemists = peopleList.filter(person => person.profession === 'chemist')
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá, mundo!</h1>
      {chemists.length > 0 &&
        <>
          <h3>Químicos</h3>
          <ul>
            {chemists.map(person => <li key={person.id}>{person.name} - {person.profession}</li>)}
          </ul>
        </>
      }
      
    </div>
  )
}

export default Page