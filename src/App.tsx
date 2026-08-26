import './App.css'

type Country = {
  name: string
  capital: string
  population: number
  language: string
  continent: string
}

function App() {
  const appName: string = 'TravelScope'
  const description: string =
    'Istraži države svijeta i isplaniraj svoja buduća putovanja.'

  const countries: Country[] = [
  {
    name: 'Hrvatska',
    capital: 'Zagreb',
    population: 3850000,
    continent: 'Europa',
    language: 'hrvatski',
  },
  {
    name: 'Japan',
    capital: 'Tokio',
    population: 123000000,
    continent: 'Azija',
    language: 'japanski',
  },
  {
    name: 'Tajland',
    capital: 'Bangkok',
    population: 71600000,
    continent: 'Azija',
    language: 'tajlandski',
  },
]

  return (
    <main>
      <h1>{appName}</h1>
      <p>{description}</p>

      <section>
        <h2>Istraži svijet</h2>
        {countries.map((country) => (
          <article key={country.name}>
            <h3>{country.name}</h3>
            <p>Glavni grad: {country.capital}</p>
            <p>Stanovništvo: {country.population.toLocaleString('hr-HR')}</p>
            <p>Kontinent: {country.continent}</p>
            <p>Jezik: {country.language}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App