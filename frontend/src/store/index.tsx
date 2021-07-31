import React, { createContext } from 'react'

export const initialState = { islogined: false }

type Action = { type: 'login' } | { type: 'logout' }
type Dispatch = (action: Action) => void

export const reducer = (state: { islogined: boolean }, action: Action) => {
  switch (action.type) {
    case 'login':
      return { islogined: true }
    case 'logout':
      return { islogined: false }
    default:
      return state
  }
}

export const AuthContext = createContext<
  { store: { islogined: boolean }; dispatch: Dispatch } | undefined
>(undefined)
