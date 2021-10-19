import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Band from '../beans/Band';
import { getBand } from '../services/BandService';

export interface DetailsState {
  band: Band;
  loading: boolean;
}

const initialState: DetailsState = {
  band: {},
  loading: false
}

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBand.pending, (state: DetailsState) => {
      return { band: {}, loading: true };
    });
    builder.addCase(getBand.fulfilled, (state: DetailsState, action: PayloadAction<any>) => {
      return { band: action.payload.data, loading: false };
    });
    builder.addCase(getBand.rejected, (state: DetailsState) => {
      return { band: {}, loading: false };
    });
  }
})

export default detailsSlice.reducer;