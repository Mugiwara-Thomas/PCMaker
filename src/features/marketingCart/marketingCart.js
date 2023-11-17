import { createSlice } from "@reduxjs/toolkit";

export const listaDeGames = createSlice({
    name: 'lista de desejo',
    initialState: {
        list: [],
    },
    reducers: {
        increment: (state, game_ID) => {
            state.list.push(game_ID)
        },
        decrement: (state) => {
            state.list.pop(game_ID)
        },
    },
})

export const { increment, decrement } = listaDeGames.actions

export default listaDeGames.reducer