import { configureStore } from '@reduxjs/toolkit'
import listaDeGames  from '../features/marketingCart/marketingCart'

export const store = configureStore({
  reducer: {
    carrinho: listaDeGames,
  },
})
