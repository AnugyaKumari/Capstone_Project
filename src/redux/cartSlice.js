// First, define the reducer and action creators via `createSlice`
import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      loading: 'idle',
      cart: [],
    },
    reducers: {
      usersLoading(state, action) {
        // Use a "state machine" approach for loading state instead of booleans
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      },
      usersReceived(state, action) {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.users = action.payload
        }
      },
      addItemToCart(state, action){
        const {item} = action.payload;
        const prevIndex = state.cart.findIndex(i => i.articleCode == item.articleCode)
        if(prevIndex >= 0){
          state.cart[prevIndex].quantity = state.cart[prevIndex].quantity + 1
        } else {
        state.cart.push({...item, quantity: 1})
        }
      },
      removeItemFromCart(state, action){
        const {item} = action.payload;
        const prevIndex = state.cart.findIndex(i => i.articleCode == item.articleCode)
        if(prevIndex >= 0){
          state.cart[prevIndex].quantity = state.cart[prevIndex].quantity - 1

          if(state.cart[prevIndex].quantity === 0){
            state.cart = state.cart.filter(e=> e.articleCode != item.articleCode)
          }
        }
       
      }
    },
  })
  
  // Destructure and export the plain action creators
  export const { usersLoading, usersReceived, addItemToCart, removeItemFromCart } = cartSlice.actions
  
  // Define a thunk that dispatches those action creators

  export default cartSlice.reducer