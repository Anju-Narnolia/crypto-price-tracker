import { createSlice } from '@reduxjs/toolkit';
import sampleData from './data';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleData,
  },
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map(asset => {
        const rand = () => (Math.random() * 0.02 - 0.01);
        const priceChange = rand();
        const price = +(asset.price * (1 + priceChange)).toFixed(2);
        const volume = +(asset.volume_24h * (1 + rand())).toFixed(0);

        return {
          ...asset,
          price,
          percent_change_1h: +(priceChange * 100).toFixed(2),
          percent_change_24h: +(priceChange * 200).toFixed(2),
          percent_change_7d: +(priceChange * 500).toFixed(2),
          volume_24h: volume
        };
      });
    }
  }
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
