import './App.css'
import CountryCard from './components/CountryCard'

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
        <div className="country-grid">
            {countries.map((country) => (
              <CountryCard
                key={country.name}
                name={country.name}
                capital={country.capital}
                population={country.population}
                continent={country.continent}
                language={country.language}
              />
            ))}
        </div>
      </section>
    </main>
  )
}

export default App