import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import FavoritesSlice from './FavoritesSlice'


export const store = configureStore({
  reducer: {
    favorites: FavoritesSlice
  },
})


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
