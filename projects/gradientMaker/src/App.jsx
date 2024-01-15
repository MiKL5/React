import Gradient from "./components/Gradient"
import ColorInput from "./components/inputs/ColorInput";
import AddRemoveColor from "./components/AddRemoveColor";
import RangeAngle from "./components/inputs/RangeAngle";
import SelectColor from "./components/inputs/SelectColor";
import RangeColorPosition from "./components/inputs/RangeColorPosition";
import OpenModalBtn from "./components/modal/OpenModalBtn"
import { useSelector } from "react-redux"

function App() {
  const gradientValues = useSelector(state => state.gradient)

  return (
    <div className="relative text-slate-100 max-w-4xl mx-auto mt-20 p-4 rounded-3xl flex bg-indigo-950 shadow-xl shadow-zinc-950">
      <div className="w-1/2 p-4 pr-8"> {/* zone de gauche */}
        <h1 className="text-center text-3xl font-semibold">Générateur de gradient</h1>
        <p className="text-center text-sm mb-6 italic">Style your apps</p>

        {/* les couleurs */}
        <p className="mb-1">Couleurs, min 2, max 5.</p>
        <div className="flex mb-2">
          {gradientValues.colors.map(obj => (
            <ColorInput id={obj.id} color={obj.value} key={obj.id} />
          ))}
        </div>

        <div className="mb-5">
          <AddRemoveColor action={"remove"} text={"-"}/>
          <AddRemoveColor action={"add"} text={"+"}/>
        </div>

        <p>Choisissez et modifiez la position d'une couleur</p>
        <div className="flex justify-center">
          <SelectColor />
        </div>
      
        <p>Position de la couleur</p>
        <RangeColorPosition />

        <p>Angle global du dégradé</p>
        <RangeAngle />

        <div className="flex justify-center">
          <OpenModalBtn />
        </div>
      </div>
      <Gradient /> {/* zone de droite */}
    </div>
  )
}

export default App
