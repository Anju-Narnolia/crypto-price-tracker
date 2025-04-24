import { useSelector } from "react-redux";
// import { SiEthereum } from "react-icons/si";
interface CryptoAsset {
  id: number;
  logo: string;
  name: string;
  symbol: string;
  price: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  volume_24h: number;
  circulating_supply: number;
  max_supply: number;
  chart: string;
}

interface RootState {
  crypto: {
    assets: CryptoAsset[];
  };
}
const CryptoTable = () => {
  const assets = useSelector((state: RootState) => state.crypto.assets);

  return (
    <div className="">
      <table className="min-w-full border border-gray-300">
        <thead className="text-md text-gray-700 uppercase bg-gray-100 ">
          <tr>
            <th className="p-2 text-center">#</th>
            <th className="p-2 text-center">Logo</th>
            <th className="p-2 text-center">Name</th>
            <th className="p-2 text-center">Symbol</th>
            <th className="p-2 text-center">Price</th>
            <th className="p-2 text-center">1h %</th>
            <th className="p-2 text-center">24h %</th>
            <th className="p-2 text-center">7d %</th>
            <th className="p-2 text-center">Market Cap</th>
            <th className="p-2 text-center">24h Volume</th>
            <th className="p-2 text-center">Circulating Supply</th>
            <th className="p-2 text-center">Max Supply</th>
            <th className="p-2 text-center">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((coin, index) => (
            <tr key={coin.id} className="items-center border border-gray-300">
              <td className="text-md p-2 text-center">{index + 1}</td>
              <td className="text-center p-2">
                {" "}
                <img
                  src={coin.logo}
                  alt={`${coin.name} logo`}
                  className="w-8 h-8 mx-auto object-contain"
                />
              </td>
              <td className="text-center p-2"> {coin.name}</td>
              <td className="font-serif p-2 text-center"> {coin.symbol}</td>
              <td className="p-2 text-center font-medium">${coin.price}</td>
              <td
                className="p-2 text-center"
                style={{ color: coin.percent_change_1h >= 0 ? "green" : "red" }}
              >
                {coin.percent_change_1h}%
              </td>
              <td
                className="p-2 text-center"
                style={{
                  color: coin.percent_change_24h >= 0 ? "green" : "red",
                }}
              >
                {coin.percent_change_24h}%
              </td>
              <td
                className="p-2 text-center"
                style={{ color: coin.percent_change_7d >= 0 ? "green" : "red" }}
              >
                {coin.percent_change_7d}%
              </td>
              <td className="p-2 text-center">
                ${coin.market_cap.toLocaleString()}
              </td>
              <td className="p-2 text-center">
                ${coin.volume_24h.toLocaleString()}
              </td>
              <td className="p-2 text-center">{coin.circulating_supply}</td>
              <td className="p-2 text-center">{coin.max_supply}</td>
              <td className="h-20 overflow-hidden">
                <img src={coin.chart} alt="chart" width="100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
