import ButtonTab from "./ButtonTab";
import CodeTab from "./CodeTab"
import { useSelector } from "react-redux"
import { useState } from "react";
import Preview from "./Preview";

// colonne de gauche
export default function Tabs() {

  const tabs = useSelector(state => state.tabs)
  const previewData = useSelector(state => state.preview)

  const [tabIndex, setTabIndex] = useState(tabs[0].id) // si c'est 1 il affiche le code
  console.log(tabs);
  return (
    <div className="flex grow"> {/* Toute la hauteur moins la navbar*/}
      <div className="grow flex flex-col w-[170px] shrink-0 text-slate-300 border-r border-slate-200">
        {tabs.map(tab => (
          <ButtonTab
          key={tab.id}
          id={tab.id}
          toggleTab={id => setTabIndex(id)}
          imgURL={tab.imgURL}
          buttonContent={tab.buttonContent}
          />
        ))}
      </div>
      <div
      className="w-full grow relative"
      >
        <CodeTab /* zone de code */
        id={tabIndex}
        code={tabs.find(obj => obj.id === tabIndex).code}
        />
        {previewData.preview && <Preview />} {/* site à afficher si true, sinon, affiche le code*/}
      </div>
    </div>
  )
}