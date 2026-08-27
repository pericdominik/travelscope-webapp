type CountryCardProps = {
  name: string
  capital: string
  population: number
  continent: string
  language: string
  flagUrl: string
}

function CountryCard({
  name,
  capital,
  population,
  continent,
  language,
  flagUrl,
}: CountryCardProps) {
  return (
    <article className="country-card">
      {flagUrl && (
        <img
          className="country-flag"
          src={flagUrl}
          alt={`Zastava države ${name}`}
        />
      )}
      
      <h3>{name}</h3>
      <p>Glavni grad: {capital}</p>
      <p>Stanovništvo: {population.toLocaleString('hr-HR')}</p>
      <p>Kontinent: {continent}</p>
      <p>Jezik: {language}</p>
    </article>
  )
}

export default CountryCard