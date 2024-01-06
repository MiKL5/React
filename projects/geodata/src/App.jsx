import { useState, useEffect } from "react"
import ListCard from "./components/ListCard"

function App() {
  // Récupérer les pays européens
  const [countries, setCountries] = useState()

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/region/europe")
    .then(data => data.json() ) // analyse les données et les traduit en json
    .then(data => { // une fois résolu je peux les utilisées
      console.log(data);
      data.sort((a,b) => { // trier les données alphabétiqmuement avec un algo d'insertion pour comparé les éléments d'un tableau en comparant les code utf-16
        if(a.name.common < b.name.common) { // a avant b
          return -1
        }
        else if(a.name.common > b.name.common) { // b avant a
          return 1
        }
        else {
          return 0 // rien ne change
        }
      })
      setCountries(data) // les données passent au state
    })

  }, [])
  
  return (
    <div className="min-h-screen bg-slate-800">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-gray-50 text-4xl">Europe Countries Data.</h1>
        <p className="text-gray-100 text-xl mb-8">Click on a card to reveal a country's informations.</p>
        {countries && (
          <ul className="grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 auto-rows-[200px]">
            {countries.map((country, index) => (
              <ListCard key={index} country={country} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App