import { useDispatch } from "react-redux"
import { addColor, removeColor } from "../features/gradient"
export default function AddRemoveColor({action, text}) {
  const dispatch = useDispatch()

  function handleClick(){
    if(action === "add") {
      dispatch(addColor())
    }
    else if(action === "remove"){
      dispatch(removeColor())
    }
  }

  return (
    <button 
    onClick={handleClick}
    className="mr-1 border border-neutral-400 focus:border-emerald-500 rounded-3xl min-w-[25px] ml-4 [&:not(:last-child)]:mr-8">
      {text}
    </button>
  )
}