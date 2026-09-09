import { useState } from 'react'
import './App.css'
import CountryCard from './components/CountryCard'
import countriesData from './data/countries.json'

type Country = {
  code: string
  name: string
  officialName: string
  capital: string
  population: number
  language: string
  continent: string
  area: number
  flagUrl: string
  timezones: string
  currency: string
}

type ApiCountry = {
  names: {
    common: string
    official: string
  }
  capitals: {
    name: string
  }[]
  population: number
  region: string
  languages: {
    name: string
  }[]
  area: {
    kilometers: number
  }
  flag: {
    url_svg: string
  }
  codes: {
    alpha_3: string
  }
  timezones: string[]
  currencies: {
    code: string
    name: string
  }[]
}

function App() {
  const appName: string = 'TravelScope'
  const description: string =
    'Istraži države svijeta i isplaniraj svoja buduća putovanja.'

  const countries: Country[] = (countriesData as ApiCountry[]).map(
    (country) => ({
      code: country.codes.alpha_3 || country.names.common,
      name: country.names.common,
      officialName: country.names.official,
      capital: country.capitals[0]?.name ?? 'Nije navedeno',
      population: country.population,
      continent: country.region,
      area: country.area.kilometers,
      language:
        country.languages.map((language) => language.name).join(', ') ||
        'Nije navedeno',
      flagUrl: country.flag.url_svg,
      timezones: country.timezones.join(', ') || 'Nije navedeno',  
      currency:
      country.currencies
        .map((currency) => `${currency.name} (${currency.code})`)
        .join(', ') || 'Nije navedeno',
    }),
  )

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedContinent, setSelectedContinent] = useState('Svi')
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesContinent =
      selectedContinent === 'Svi' || country.continent === selectedContinent

    return matchesSearch && matchesContinent
  })
  
  return (
    <main>
      <h1>{appName}</h1>
      <p>{description}</p>
      
      {selectedCountry ? (
        <section className="country-details">
          <button onClick={() => setSelectedCountry(null)}>
            Povratak na države
          </button>

          {selectedCountry.flagUrl && (
            <img
              src={selectedCountry.flagUrl}
              alt={`Zastava države ${selectedCountry.name}`}
            />
          )}

          <h2>{selectedCountry.name}</h2>
          <p>Službeni naziv: {selectedCountry.officialName}</p>
          <p>Glavni grad: {selectedCountry.capital}</p>
          <p>
            Stanovništvo:{' '}
            {selectedCountry.population.toLocaleString('hr-HR')}
          </p>
          <p>
            Površina: {selectedCountry.area.toLocaleString('hr-HR')} km²
          </p>
          <p>Kontinent: {selectedCountry.continent}</p>
          <p>Vremenske zone: {selectedCountry.timezones}</p>
          <p>Jezik: {selectedCountry.language}</p>
          <p>Valuta: {selectedCountry.currency}</p>
        </section>
      ) : (
        <>
          <input
            type="text"
            placeholder="Pretraži države..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            value={selectedContinent}
            onChange={(event) => setSelectedContinent(event.target.value)}
          >
            <option value="Svi">Svi kontinenti</option>
            <option value="Europe">Europa</option>
            <option value="Asia">Azija</option>
            <option value="Africa">Afrika</option>
            <option value="Americas">Amerike</option>
            <option value="Oceania">Oceanija</option>
          </select>

          <section>
            <h2>Istraži svijet</h2>

            {filteredCountries.length > 0 ? (
              <div className="country-grid">
                {filteredCountries.map((country) => (
                  <CountryCard
                    key={country.code}
                    name={country.name}
                    capital={country.capital}
                    population={country.population}
                    continent={country.continent}
                    language={country.language}
                    flagUrl={country.flagUrl}
                    onSelect={() => setSelectedCountry(country)}
                  />
                ))}
              </div>
            ) : (
              <p className="no-results">Nema pronađenih država.</p>
            )}
          </section>
        </>
      )}
    </main>
  )
}

export default App