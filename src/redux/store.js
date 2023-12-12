import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import userReducer from './userSlice'

const reducers = combineReducers({
    cart: cartReducer,
    user: userReducer
})

const store = configureStore({
  reducer: reducers
})

export default store