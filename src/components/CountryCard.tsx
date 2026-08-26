type CountryCardProps = {
  name: string
  capital: string
  population: number
  continent: string
  language: string
}

function CountryCard({
  name,
  capital,
  population,
  continent,
  language,
}: CountryCardProps) {
  return (
    <article className="country-card">
      <h3>{name}</h3>
      <p>Glavni grad: {capital}</p>
      <p>Stanovništvo: {population.toLocaleString('hr-HR')}</p>
      <p>Kontinent: {continent}</p>
      <p>Jezik: {language}</p>
    </article>
  )
}

export default CountryCard