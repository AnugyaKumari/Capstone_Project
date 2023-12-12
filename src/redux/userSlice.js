// First, define the reducer and action creators via `createSlice`
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
      loading: 'idle',
      loggedIn: false,
      user: JSON.parse(localStorage.getItem('user') ?? []),
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
          state.user = action.payload
        }
      },
      registerUser(state, action) {
        console.log("hello")
        const {data} = action.payload;
        console.log(data)
        console.log(state.user)
        const isUserAlreadyAvaialable = state.user.findIndex(u=> u.email === data.email) 
        if(isUserAlreadyAvaialable < 0){
            state.user.push(data)
            console.log(state.user, "ee")
            localStorage.setItem('user', JSON.stringify(state.user));
            window.location.href = '/'
        } else {
            alert(`There is already a user with ${data.email} email`)
        }
      },
      loginUser(state, action) {
        const {data} = action.payload;
        console.log(data, "loh")
        const loggingUser = state.user.find(u => u.email === data.email)
        if(!loggingUser){
          alert('user doesn\'t exist');
        } else if (loggingUser && loggingUser.password === data.password.trim()){
          state.loggedIn = true
        } else {
          alert('Password incorrect')
        }
      },
      logoutUser(state, action){
        state.loggedIn = false;
        window.location.href = '/'
      }
    },
  })
  
  // Destructure and export the plain action creators
  export const { usersLoading, usersReceived, registerUser, loginUser, logoutUser } = userSlice.actions
  
  // Define a thunk that dispatches those action creators

  export default userSlice.reducer