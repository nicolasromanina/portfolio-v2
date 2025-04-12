
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice, formatMarketCap, formatPercentChange } from '../services/coinCapAPI';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface Asset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
  marketCapUsd: string;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
}

interface AssetTableProps {
  assets: Asset[];
  isLoading: boolean;
}

const AssetTable: React.FC<AssetTableProps> = ({ assets, isLoading }) => {
  const navigate = useNavigate();
  
  const handleAssetClick = (id: string) => {
    navigate(`/detail/${id}`);
  };
  
  if (isLoading) {
    return (
      <div className="brutalist-card">
        <div className="p-8 text-center">
          <p className="text-terminal-muted text-lg">Loading assets...</p>
        </div>
      </div>
    );
  }
  
  if (!assets.length) {
    return (
      <div className="brutalist-card">
        <div className="p-8 text-center">
          <p className="text-terminal-muted text-lg">No assets found. Try refreshing the page.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="brutalist-table">
        <thead>
          <tr>
            <th className="w-16">Rank</th>
            <th className="w-48">Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24h Change</th>
            <th>24h Volume</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => {
            const percentChange = parseFloat(asset.changePercent24Hr);
            const isPositive = percentChange >= 0;
            
            return (
              <tr 
                key={asset.id} 
                onClick={() => handleAssetClick(asset.id)}
                className="cursor-pointer"
              >
                <td>{asset.rank}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{asset.symbol}</span>
                    <span className="text-sm text-terminal-muted">{asset.name}</span>
                  </div>
                </td>
                <td>{formatPrice(asset.priceUsd)}</td>
                <td>{formatMarketCap(asset.marketCapUsd)}</td>
                <td className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {isPositive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  {formatPercentChange(asset.changePercent24Hr)}
                </td>
                <td>{formatMarketCap(asset.volumeUsd24Hr)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;
