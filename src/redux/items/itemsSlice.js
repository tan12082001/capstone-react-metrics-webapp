import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEarthquakesData = createAsyncThunk(
  'items/fetchEarthquakesData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2001-01-01&endtime=2023-01-01&minmagnitude=8');
      const { data } = response;
      console.log(data.features);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  items: [],
  isLoading: false,
  error: undefined,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
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

export default itemsSlice.reducer;
