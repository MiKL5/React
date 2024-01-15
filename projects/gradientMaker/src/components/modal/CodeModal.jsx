import { useEffect } from "react"
import { useSelector } from "react-redux"
import getGradientCSSValue from "../../utils/getGradientCSSValue"

export default function CodeModal({closeModal}) {
  const gradientValues = useSelector(state => state.gradient)

  let runningAnimation = false
  function handleCopy(e){ // copier le code
    if(!runningAnimation) {
      runningAnimation = true 
      e.target.textContent = "Ça y est, c'est fait !"

      navigator.clipboard.writeText(`background-image : ${getGradientCSSValue(gradientValues) }`)
      setTimeout(() => {
        e.target.textContent = "Je le prend !"
        runningAnimation = false
      }, 750)
    }
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden"  // pas de scroll avec la fenêtre modale

    return () => document.body.style.overflowY = "visible" // le remettre dés sa fermeture
  }, [])

  return (
    <div 
    onClick={closeModal}
    className="fixed z-10 top-0 left-0 w-full h-full bg-stone-800/95 flex justify-center items-center">
      <div
      onClick={e => e.stopPropagation()}
      className="mb-[10vh] max-w-[800px] rounded-3xl p-7 bg-yellow-50 shadow-lg shadow-stone-400">
        <div className="flex items-center mb-5">
          <p className="font-semibold text-2xl text-stone-950 mr-6">Voici le code 🎉</p>
          <button
          onClick={handleCopy}
          className="ml-auto mr-2 text-md font-black bg-lime-400 text-black hover:bg-emerald-700 hover:text-white py-1 px-3 rounded-2xl"
          >
            Je le prend !
          </button>
          <button
          onClick={closeModal}
          className="text-md font-medlum bg-red-600 text-white hover:bg-yellow-50 hover:text-red-600 py-1 px-3 rounded-2xl"
          >
            X
          </button>
        </div>
        <p className="bg-stone-900 p-5 text-yellow-100 font-light">
          {`background-image : ${getGradientCSSValue(gradientValues)}`} {/* afficher le code */}
        </p>
      </div>
    </div>
  )
}