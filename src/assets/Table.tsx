import { useSelector } from 'react-redux';

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto.assets);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((coin, index) => (
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td><img src={coin.logo} alt={coin.symbol} width="24" /></td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>${coin.price}</td>
              <td style={{ color: coin.percent_change_1h >= 0 ? 'green' : 'red' }}>{coin.percent_change_1h}%</td>
              <td style={{ color: coin.percent_change_24h >= 0 ? 'green' : 'red' }}>{coin.percent_change_24h}%</td>
              <td style={{ color: coin.percent_change_7d >= 0 ? 'green' : 'red' }}>{coin.percent_change_7d}%</td>
              <td>${coin.market_cap.toLocaleString()}</td>
              <td>${coin.volume_24h.toLocaleString()}</td>
              <td>{coin.circulating_supply}</td>
              <td>{coin.max_supply}</td>
              <td><img src={coin.chart} alt="chart" width="50" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
