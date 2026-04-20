import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import { config } from '../config/env'

// ✅ Load state safely
const loadState = () => {
  try {
    const data = localStorage.getItem('appState')
    return data ? JSON.parse(data) : undefined
  } catch {
    return undefined
  }
}

// ✅ Save minimal + safe data
const saveState = (state) => {
  try {
    const auth = state.auth

    const partialState = {
      auth: auth?.token
        ? {
            token: auth.token,
            isLoggedIn: auth.isLoggedIn,
            user: {
              _id: auth.user?._id,
              fullname: auth.user?.fullname,
              role: auth.user?.role
            }
          }
        : null
    }

    localStorage.setItem('appState', JSON.stringify(partialState))
  } catch {}
}

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  preloadedState: loadState(),
  devTools: config.isDev
})

// ✅ Debounced persistence (optimized)
let timeout
store.subscribe(() => {
  clearTimeout(timeout)

  timeout = setTimeout(() => {
    saveState(store.getState())
  }, 300)
})