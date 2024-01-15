import getGradientCSSValue from "../utils/getGradientCSSValue"
import { useSelector } from "react-redux"

export default function Gradient() {
  const gradientValues = useSelector(state => state.gradient)

  return (
    <div 
    style={{backgroundImage: getGradientCSSValue(gradientValues).slice(0,-1)}} // '.slice' découpe la dernière partie de la cha$ine de caractère, donc sans le dernier caractère
    className="w-1/2 border-8 border-neutral-50">

    </div>
  )
}