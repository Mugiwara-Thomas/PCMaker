import { configureStore } from '@reduxjs/toolkit'
import listaDeGames  from '../features/marketingCart/marketingCart'

export default configureStore({
  reducer: {
    carrinho: listaDeGames,
  },
})