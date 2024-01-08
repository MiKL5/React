import { createSlice } from "@reduxjs/toolkit";

// initialiser le state sur afficher
const initialState = {
  preview: true // si c'est false : le code, si c'est true : affiche l'aperçu
}

export const preview = createSlice({
  name: "preview",
  initialState,
  reducers: {
    togglePreview: (state) => {
      state.preview = !state.preview
    },
    hidePreview: (state) => {
      state.preview = false
    }
  }
})

export const { togglePreview, hidePreview } = preview.actions
export default preview.reducer