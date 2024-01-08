import Tabs from "./components/Tabs"
import PreviewButton from "./components/PreviewButton"

function App() {
  return (
    <div className="bg-zinc-800 min-h-screen flex flex-col"> {/* fond */}
      <div className="px-4 py-4 border-b flex items-center"> {/* bar du haut */}
        <h1 className="w-full text-slate-50 text-2xl">
          <span className="text-base">the</span>SmartIDE
        </h1>
        <div className="w-full">
          <PreviewButton /> {/* aperçu du code */}
        </div>
        <div className="w-full flex">
          <div className="ml-auto mr-2"> {/* 3 points à droite */}
            <div className="w-[6px] h-[6px] bg-slate-200 rounded-full my-1"></div>
            <div className="w-[6px] h-[6px] bg-slate-200 rounded-full my-1"></div>
            <div className="w-[6px] h-[6px] bg-slate-200 rounded-full"></div>
          </div>
        </div>
      </div>
      <Tabs />
    </div>
  )
}

export default App
