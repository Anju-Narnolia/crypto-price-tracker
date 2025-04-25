import "./App.css";
import { useDispatch } from "react-redux";
import { updatePrices } from "./assets/slice";
import Table from "./assets/Table";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="m-5">
      <h1 className="flex justify-center gap-3 text-4xl p-5">
        📈 Real-Time Crypto Tracker
      </h1>
      <Table />
    </div>
  );
}

export default App;
