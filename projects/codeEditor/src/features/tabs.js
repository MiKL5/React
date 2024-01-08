import { createSlice } from "@reduxjs/toolkit"
import { html, css, js } from "../assets/index"

const initialState = [
    {
      id: 1,
      lang: "html",
      imgURL: html,
      buttonContent: "HTML",
      code: `<div>
      <h1>Éditeur de code avec React</h1>
      <p>Vous pouvez codez ici.</p>
      <div>
      `
    },
    {
      id: 2,
      lang: "css",
      imgURL: css,
      buttonContent: "CSS",
      code: `body {
        font-family: Roboto, sans-serif;
        padding: 25px;
        color: #111;
        background-color: #ffffe9;
      }`,
    },
    {
      id: 3,
      lang: "javascript",
      imgURL: js,
      buttonContent: "JavaScript",
      code: `console.log("Hello universe!");`
    }
]

// mettre à jour le code
export const codeUpdater = createSlice({
  name: "code-updater",
  initialState,
  reducers: {
    updateCode: (state, action) => {
      state.find(obj => obj.id === action.payload.id).code = action.payload.value
    }
  }
})

// envoyé les actions au store pour metre à jour le state
export const { updateCode } = codeUpdater.actions 
export default codeUpdater.reducer