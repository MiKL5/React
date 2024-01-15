import { useSelector, useDispatch } from "react-redux"
import {pickColor} from "../../features/gradient"

export default function SelectColor() {
  const dispatch = useDispatch()
  const gradientValues = useSelector(state => state.gradient)

  return (
    <div className="mb-5">
      <select 
      onChange={e =>dispatch(pickColor(Number(e.target.value)))}
      className="bg-indigo-950 cursor-pointer py-1 px-2 mb-1 mt-2 rounded-3xl border-2 border-stone-500 outline-none focus:border-emerald-500">
        {gradientValues.colors.map((color, index) => (
          <option 
          key={color.id} // la liste retourne une option
          value={color.id}> {/* la séléction */}
            Couleur {color.id}
          </option>
        ))}
      </select>
    </div>
  )
}