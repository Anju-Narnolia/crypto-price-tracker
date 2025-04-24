import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePrices } from './assets/slice';
import CryptoTable from './assets/Table';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1>📊 Real-Time Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
