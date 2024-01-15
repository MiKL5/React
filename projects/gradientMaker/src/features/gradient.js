import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
  colors: [
    {
      id: 1,
      value: "#ffca05",
      position: 20
    },
    {
      id: 2,
      value: "#211b4d",
      position: 50
    }
  ],
  pickedColorId: 1,
  angle: 60
}

export const gradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {
    updateColorValue: (state, action) => {
      const currentColor = state.colors.find(color => color.id === action.payload.id)
      currentColor.value = action.payload.value
    },
    addColor: (state) => {
      if(state.colors.lenth === 5) return

      state.colors.push({
        id: state.colors[state.colors.length - 1].id + 1, // nouvel id à +1 que l'id précédand
        value: "#111111",
        position: state.colors[state.colors.length - 1].position + 0.1 * state.colors[state.colors.length - 1].position // + 10% de 50, donc à 55%
      })
    },
    removeColor: (state) => {
      if(state.colors.length === 2) return 
      state.colors.pop()
    },
    updateAngle: (state, action) => {
      state.angle = action.payload
    },
    pickColor: (state, action) => { // choisir la couleur
      state.pickedColorId = action.payload
    },
    updateColorPosition: (state, action) => {
      state.colors.find(color => color.id === state.pickedColorId).position = action.payload
    }
  }
})

export const {
  updateColorValue,
  addColor,
  removeColor,
  updateAngle,
  pickColor,
  updateColorPosition
} = gradientSlice.actions

export default gradientSlice.reducer