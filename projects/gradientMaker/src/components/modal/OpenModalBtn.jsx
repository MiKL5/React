import { useState } from "react"
import CodeModal from "./CodeModal"
import { createPortal } from "react-dom"

export default function OpenModalBtn() { // boutton
  const [showModal, setShowModal] = useState(false)
  
  return (
    <>
      <button
      onClick={() => setShowModal(!showModal)}
      className="bg-emerald-700 py-2 shadow-lg shadow-neutral-950 px-6 rounded-3xl min-w-[125px] font-semibold">
        Obternir le code !
      </button>
      {showModal && createPortal(<CodeModal closeModal={() => setShowModal(!showModal)} />, document.body)}
    </>
  )
}