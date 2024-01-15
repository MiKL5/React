import { useDispatch, useSelector } from "react-redux"
import { updateAngle } from "../../features/gradient"

export default function RangeAngle() {
  const dispatch = useDispatch()
  const gradientValues = useSelector(state => state.gradient)

  return (
    <input 
    min="0"
    max="360" // angle max
    value={gradientValues.angle}
    onChange={e => dispatch(updateAngle(e.target.value) ) }
    className="w-full h-0.5 mb-10 rounded cursor-pointer"
    type="range" />
    )
}