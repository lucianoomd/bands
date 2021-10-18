import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Band from '../beans/Band';

export interface FavoritesState {
  list: Array<Band>;
}

const initialState: FavoritesState = {
  list: [],
}

export const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Band>) => {
      state.list.push(action.payload);
    },
    remove: (state, action: PayloadAction<Band>) => {
      state.list = state.list.filter(item => item.id !== action.payload.id);
    },
  },
})

export const { add, remove } = favoritesSlice.actions;

export default favoritesSlice.reducer;