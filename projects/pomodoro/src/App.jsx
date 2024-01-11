import UpdateTimeButton from "./components/UpdateTimeButton"
import ToggleButton from "./components/ToggleButton"
import { useSelector } from "react-redux"

function App() {
  const chronoValues = useSelector(state => state.chrono)

  function getFormattedValues(time) {
    // J'ai choisi un chiffre pour les minutes et commenté le code pour les deux zéro
    // const minutes = `${Math.trunc(time / 60) < 10 ? `0${Math.trunc(time / 60)}` : Math.trunc(time / 60)}`
    const minutes = `${Math.trunc(time / 60) < 10 ? `${Math.trunc(time / 60)}` : Math.trunc(time / 60)}` // Grâce à math.trunc, il n'y a pas de chiffre à virgule
    // Deux chiffres pour les secondes, sinon c'est bizare
    const seconds = `${time % 60 < 10 ? `0${time % 60}` : time % 60}` // modulo car on prend le reste
  
    return `${minutes}:${seconds}`
  }

  return (
    <div className="bg-slate-900 text-slate-100 pt-20 min-h-screen">
      <div className="max-w-xl mx-auto border border-slate-500 rounded p-10">
        <h1 className="text-center text-3xl mb-8">Pomodoro</h1>

        <div className="flex justify-center mb-8">

          {/* Session time block */}
          <div className="mr-10">
            <p className="text-center mb-1">Sessions</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"session"} />
              <p className="mx-4 text-xl">{chronoValues.session.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"session"} />
            </div>
          </div>

          {/* Pause time block */}
          <div>
            <p className="text-center mb-1">Pauses</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"pause"} />
              <p className="mx-4 text-xl">{chronoValues.pause.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"pause"} />
            </div>
          </div>
        </div>

        {/* Work block */}
        <p className="text-center mb-2 text-xl font-semibold">
          {chronoValues.displayedValue.heading}
        </p>
        <p className="text-center flex justify-center mb-1">
          <span className="text-4xl p-4 rounded bg-slate-300 text-slate-900">
            {getFormattedValues(chronoValues.displayedValue.value)}
          </span>
        </p>
        <p className="mb-10 text-center">
          Passed cycle(s) : {chronoValues.cycles}
        </p>

        <ToggleButton /> {/* Start or reset */}
      </div>
    </div>
  )
}

export default App
