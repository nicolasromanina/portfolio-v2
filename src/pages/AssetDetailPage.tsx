
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAssetById, getAssetHistory, formatPrice, formatMarketCap, formatPercentChange } from '../services/coinCapAPI';
import Terminal from '../components/Terminal';
import PriceChart from '../components/PriceChart';
import { ChevronLeft, TrendingUp, TrendingDown } from 'lucide-react';

const AssetDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: asset, isLoading: isLoadingAsset } = useQuery({
    queryKey: ['asset', id],
    queryFn: () => getAssetById(id || ''),
    enabled: !!id,
  });
  
  const { data: assetHistory, isLoading: isLoadingHistory } = useQuery({
    queryKey: ['assetHistory', id],
    queryFn: () => getAssetHistory(id || ''),
    enabled: !!id,
  });
  
  const handleBack = () => {
    navigate('/');
  };
  
  const isPositiveChange = asset ? parseFloat(asset.changePercent24Hr) >= 0 : false;
  
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={handleBack} className="brutalist-button flex items-center gap-2">
            <ChevronLeft size={16} />
            Back
          </button>
          <h1 className="text-terminal-green text-3xl font-bold">
            {isLoadingAsset ? 'Loading...' : asset?.name}
          </h1>
          {asset && (
            <span className="bg-terminal-background border-2 border-terminal-green px-3 py-1 text-terminal-green font-bold">
              {asset.symbol}
            </span>
          )}
        </div>
        <p className="text-terminal-muted">Asset Detail</p>
      </header>
      
      <div className="mb-8">
        <Terminal 
          initialPath={`/detail/${id}`}
          additionalCommands={[
            {
              name: 'price',
              description: 'Show current price information',
              handler: () => {
                if (!asset) return 'Asset data not available';
                return `
${asset.name} (${asset.symbol}) Price Information:
Current Price: ${formatPrice(asset.priceUsd)}
24h Change: ${formatPercentChange(asset.changePercent24Hr)}
                `;
              }
            },
            {
              name: 'info',
              description: 'Show detailed information about this asset',
              handler: () => {
                if (!asset) return 'Asset data not available';
                return `
${asset.name} (${asset.symbol}) Information:
Rank: ${asset.rank}
Price: ${formatPrice(asset.priceUsd)}
Market Cap: ${formatMarketCap(asset.marketCapUsd)}
24h Volume: ${formatMarketCap(asset.volumeUsd24Hr)}
24h Change: ${formatPercentChange(asset.changePercent24Hr)}
Supply: ${Intl.NumberFormat('en-US').format(parseFloat(asset.supply))} ${asset.symbol}
${asset.maxSupply ? `Max Supply: ${Intl.NumberFormat('en-US').format(parseFloat(asset.maxSupply))} ${asset.symbol}` : 'Max Supply: Unlimited'}
                `;
              }
            }
          ]}
        />
      </div>
      
      {isLoadingAsset ? (
        <div className="brutalist-card p-6">
          <p className="text-terminal-muted text-center">Loading asset data...</p>
        </div>
      ) : asset ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="brutalist-card">
            <h2 className="text-xl font-bold mb-4">Price</h2>
            <p className="text-3xl font-bold">{formatPrice(asset.priceUsd)}</p>
            <div className={`flex items-center mt-2 ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
              {isPositiveChange ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
              <span className="ml-1 font-bold">{formatPercentChange(asset.changePercent24Hr)}</span>
              <span className="text-terminal-muted ml-2">24h</span>
            </div>
          </div>
          
          <div className="brutalist-card">
            <h2 className="text-xl font-bold mb-4">Market Cap</h2>
            <p className="text-3xl font-bold">{formatMarketCap(asset.marketCapUsd)}</p>
            <p className="text-terminal-muted mt-2">Rank #{asset.rank}</p>
          </div>
          
          <div className="brutalist-card">
            <h2 className="text-xl font-bold mb-4">Volume (24h)</h2>
            <p className="text-3xl font-bold">{formatMarketCap(asset.volumeUsd24Hr)}</p>
          </div>
        </div>
      ) : (
        <div className="brutalist-card p-6">
          <p className="text-brutalist-accent text-center">Asset not found</p>
        </div>
      )}
      
      <PriceChart data={assetHistory || []} isLoading={isLoadingHistory} />
      
      <div className="mt-8 text-terminal-muted text-sm">
        <p>Pro tip: Use the 'price' or 'info' commands in the terminal for more details.</p>
      </div>
    </div>
  );
};

export default AssetDetailPage;
