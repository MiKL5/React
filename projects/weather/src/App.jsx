import {useEffect, useState} from "react"
import loader from "./assets/loader.svg"
import browser from "./assets/browser.svg"
import "./App.css"
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [errorInfo, setErrorInfo] = useState(null) // Gérer les erreurs

  useEffect(() => {

    fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
    .then(response => {
      console.log(response);
      // 400 - 499 : Erreur clients 
      // 500 - 599 : Erreur serveur
      if(!response.ok) throw new Error(`Error ${response.status}, ${response.statusText}`) // Gérer les erreur avec l'api (ex : accès interdit ou mauvais termes)

      return response.json()
    })
    .then(responseData => {
      setWeatherData({ // formater des données
        city: responseData.data.city,
        country: responseData.data.country,
        iconId: responseData.data.current.weather.ic,
        temperature: responseData.data.current.weather.tp,
      })
    })
    .catch(err => { // Retourner l'erreur d'adresse
      // console.log(err)
      // console.dir(err) // affiche l'ensemble des propriétés d'un objet dans la console et de manipuler les niveaux hiérarchiques.
      setErrorInfo(err.message)
    })

  }, [])

  return (
    <main>
      <div className={`loader-container ${(!weatherData && !errorInfo) && "active"}`}>
        <img src={loader} alt="loading icon" />
      </div>

      {weatherData && ( /* Si les données sont arrivées sinon, retourner une erreur  */
        <>
          <p className="city-name">{weatherData.city}</p>
          <p className="country-name">{weatherData.country}</p>
          <p className="temperature">{weatherData.temperature}°</p>
          <div className="info-icon-container">
            <img src={`/icons/${weatherData.iconId}.svg`} className="info-icon" alt="weather icon" />
          </div>
        </>
        )}

    {(errorInfo && !weatherData) && ( /* Afficher les erreurs */
      <>
        <p className="error-information">{errorInfo}</p>
        <img src={browser} alt="error icon" />
      </>
    )}
    </main>
  )
}

export default App
