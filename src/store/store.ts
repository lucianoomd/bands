import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import DetailsSlice from './DetailsSlice';
import FavoritesSlice from './FavoritesSlice'


const store = configureStore({
  reducer: {
    favorites: FavoritesSlice,
    details: DetailsSlice
  },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store