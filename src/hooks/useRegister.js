import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { registerUser } from '../api/authApi'
import { setAuth, setAuthError } from '../features/authSlice'

export const useRegister = () => {
  const dispatch = useDispatch()

  return useMutation({
    mutationFn: registerUser,

    onSuccess: (data) => {
      // 🔥 Only if backend returns token
      if (data?.token) {
        dispatch(setAuth(data))
      }
    },

    onError: (error) => {
      dispatch(setAuthError(error.message))
    }
  })
}