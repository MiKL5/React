export default function ModalContent({country, closeModal}) {
  console.log(Object.entries(country.languages));
  return (
    <div 
    onClick={closeModal}
    className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center">
      <div 
      onClick={e => e.stopPropagation()} // la modale se ferme qu'avec le bouton et l'overlay
      className="min-w-[500px] relative rounded p-7 bg-gray-50">
        <button 
        onClick={closeModal}
        className="absolute top-1 left-1 w-6 h-6 flex items-center justify-center text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
          X
        </button>
        <h2 className="text-2xl mb-4">Here is {country.name.common}'s informations</h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Langue(s)</span> : {Object.entries(country.languages).map(lang => lang[1] + " ")}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Capitale</span> : {country.capital/*[0]*/} {/* [0] au cas ou il y en a plusieurs */}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Population</span> : {country.population} poeples
        </p>
      </div>
    </div>
  )
}