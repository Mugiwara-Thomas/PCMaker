import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lista: []
}

export const listaDeGames = createSlice({
    name: 'listaDeDesejos',
    initialState,
    reducers: {
        increment: (state, action) => {
            if (!state.lista.includes(action.payload)) {
                state.lista.push(action.payload);
            }
        },
        decrement: (state, action) => {
            if (state.lista.includes(action.payload)) {
                state.lista.pop(action.payload)
            }
        },
    },
})

export const { increment, decrement } = listaDeGames.actions

export default listaDeGames.reducer