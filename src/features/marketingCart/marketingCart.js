import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lista: [],
    listaDeGames: [],
    specsMinimas: {},
    specsRecomendadas: {},
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
                state.lista = state.lista.filter(id => id !== action.payload);
            }
        },
        incrementAll: (state, action) => {
            state.listaDeGames = action.payload;
        },
        incrementMinimo: (state, action) => {
            state.specsMinimas = action.payload;
        },
        incrementRecomendado: (state, action) => {
            state.specsRecomendadas = action.payload;
        },
    },
})

export const { increment, decrement, incrementAll, incrementMinimo, incrementRecomendado } = listaDeGames.actions

export default listaDeGames.reducer