import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
  // time of sessions
  session: {
    value: 1200, // 20 minutes affichées
    runningValue: 1200, // 20 minutes au compte à rebour
  },
  // time of pause , 5 minutes
  pause: {
    value: 300,
    runningValue: 300, 
  },
  isPlaying: false, // en train de jouer à false par défaut pour démarrer qu'au click du bouton
  intervalID: 0, // l'id d'interval pour le supprimer
  cycles: 0, // nombre d'interval, s'incrémente dés 0
    displayedValue: { // pour afficher les pauses ou les sessions quand c'est le moment
    value: 1200, // 20 minutes affichées dans le Work block
    heading: "Work"
  }
}

export const chrono = createSlice({
  name: "chrono",
  initialState,
  reducers: {
    // mettre à jour le temps
    updateChronoValues: (state, action) => {
      const chosenState = state[action.payload.type] // 'chosenState' pour ne pas réécrire session ou pause
      // Pas moins d'une minute
      if (chosenState.value + action.payload.value === 0) return
      // Le changement de la durée de la sessions n'impacte pas la session en cours.
      if (action.payload.type === "session") {
        if (state.session.value === state.session.runningValue) {
          chosenState.value = chosenState.value + action.payload.value
          chosenState.runningValue = chosenState.runningValue + action.payload.value
          state.displayedValue.value = chosenState.runningValue
        }
        else {
          chosenState.value = chosenState.value + action.payload.value
        }
      }


      if (action.payload.type === "pause") {
        chosenState.value = chosenState.value + action.payload.value
      }
    },
    tick: (state, action) => {
      if (state.session.runningValue > 0) { // Si la session est en cours = décrémentation
        state.session.runningValue--
        state.displayedValue.value = state.session.runningValue
        state.displayedValue.heading = "Work"
      } else if (state.pause.runningValue > 0) { // En pause ; décrémentation du temps de pause
        state.pause.runningValue--
        state.displayedValue.value = state.pause.runningValue
        state.displayedValue.heading = "Pause"
      } else { // Enchaîner session et pause
        state.cycles++
        state.session.runningValue = state.session.value - 1 // pour ne pas avoir une secone de trop
        state.displayedValue.value = state.session.value - 1
        state.displayedValue.heading = "Work"
        state.pause.runningValue = state.pause.value 
        
      }
    },
    setUpChrono: (state, action) => {
      state.isPlaying = true
      state.intervalID = action.payload
    },
    resetChrono: (state, action) => { // remise à zéro de session et de pause, puis affiche les valeurs iniitales
      window.clearInterval(state.intervalID)
      state.session.runningValue = state.session.value 
      state.pause.runningValue = state.pause.value  
      state.displayedValue.value = state.session.runningValue
      state.isPlaying = false
      state.cycles = 0
    },
  },
})

export function startChrono(action) {
  return function (dispatch, getState) {
    const intervalID = setInterval(() => {
      dispatch(tick())
    }, 1000) // exécute le dispatche au bout d'une seconde
    dispatch(setUpChrono(intervalID))
    dispatch(tick()) 
  }
}

export const {
  updateChronoValues,
  tick,
  setUpChrono,
  stopChrono,
  resetChrono,
} = chrono.actions
export default chrono.reducer
