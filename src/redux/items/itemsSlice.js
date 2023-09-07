import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  isLoading: false,
  error: undefined,
  filter: {
    minmagnitude: 8,
  },
};

export const fetchEarthquakesData = createAsyncThunk(
  'items/fetchEarthquakesData',
  async (_, thunkAPI) => {
    const minmagnitude = thunkAPI.getState().items.filter;
    try {
      const response = await axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2001-01-01&endtime=2023-01-01&minmagnitude=${minmagnitude.minmagnitude}`);
      const { data } = response;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setMinMagnitude: (state, action) => {
      state.filter.minmagnitude = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchEarthquakesData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEarthquakesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.features;
      })
      .addCase(fetchEarthquakesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setMinMagnitude } = itemsSlice.actions;
export default itemsSlice.reducer;
