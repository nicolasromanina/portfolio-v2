import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAssetById, getAssetHistory, formatPrice, formatMarketCap, formatPercentChange } from '../services/coinCapAPI';
import Terminal from '../components/Terminal';
import PriceChart from '../components/PriceChart';
import { ChevronLeft, TrendingUp, TrendingDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AssetDetailPageProps {
  theme?: 'dark' | 'light';
}

const AssetDetailPage = ({ theme = 'dark' }: AssetDetailPageProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: asset, isLoading: isLoadingAsset, error: assetError } = useQuery({
    queryKey: ['asset', id],
    queryFn: () => getAssetById(id || ''),
    enabled: !!id,
  });

  const { data: assetHistory, isLoading: isLoadingHistory } = useQuery({
    queryKey: ['assetHistory', id],
    queryFn: () => getAssetHistory(id || ''),
    enabled: !!id,
  });

  const themeStyles = {
    dark: {
      container: 'bg-gray-900 text-gray-100',
      card: 'bg-gray-800/50 backdrop-blur-md border-gray-700',
      text: 'text-gray-100',
      muted: 'text-gray-400',
      accent: 'text-green-400',
      button: 'bg-green-600 hover:bg-green-700',
      badge: 'bg-gray-700 text-green-400'
    },
    light: {
      container: 'bg-gray-100 text-gray-900',
      card: 'bg-white/80 backdrop-blur-md border-gray-200',
      text: 'text-gray-900',
      muted: 'text-gray-600',
      accent: 'text-green-600',
      button: 'bg-green-500 hover:bg-green-600',
      badge: 'bg-gray-200 text-green-600'
    }
  };

  const currentTheme = themeStyles[theme];

  const handleBack = () => {
    navigate('/');
  };

  const isPositiveChange = asset ? parseFloat(asset.changePercent24Hr) >= 0 : false;

  return (
    <motion.div 
      className={`max-w-7xl mx-auto p-6 ${currentTheme.container}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-8">
        <motion.div 
          className="flex items-center gap-4 mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button 
            onClick={handleBack} 
            className={`flex items-center gap-2 ${currentTheme.button} px-4 py-2 rounded-md`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={16} />
            Back
          </motion.button>
          <h1 className={`text-4xl font-bold ${currentTheme.accent} font-mono`}>
            {isLoadingAsset ? 'Loading...' : asset?.name}
          </h1>
          {asset && (
            <Badge className={`${currentTheme.badge} px-3 py-1 font-bold`}>
              {asset.symbol}
            </Badge>
          )}
        </motion.div>
        <motion.p 
          className={`text-lg ${currentTheme.muted} font-sans`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Asset Details
        </motion.p>
      </header>

      <motion.div 
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Terminal 
          initialPath={`/detail/${id}`}
          theme={theme}
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
            },
            {
              name: 'history',
              description: 'Show historical price data summary',
              handler: () => {
                if (!assetHistory || assetHistory.length === 0) return 'Historical data not available';
                const latest = assetHistory[assetHistory.length - 1];
                const oldest = assetHistory[0];
                return `
${asset?.name} Historical Data Summary:
Latest Price: ${formatPrice(latest.priceUsd)}
Earliest Price: ${formatPrice(oldest.priceUsd)}
Data Points: ${assetHistory.length}
                `;
              }
            }
          ]}
        />
      </motion.div>

      <AnimatePresence>
        {isLoadingAsset ? (
          <motion.div
            className={`p-6 rounded-lg ${currentTheme.card}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className={`text-center ${currentTheme.muted}`}>Loading asset data...</p>
          </motion.div>
        ) : assetError ? (
          <motion.div
            className={`p-6 rounded-lg ${currentTheme.card}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-red-500 text-center">Failed to load asset data. Please try again later.</p>
          </motion.div>
        ) : asset ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className={`p-6 rounded-lg ${currentTheme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              whileHover={{ scale: 1.03 }}
              role="article"
              aria-labelledby="price-title"
            >
              <h2 id="price-title" className="text-xl font-bold mb-4">Price</h2>
              <p className="text-3xl font-bold">{formatPrice(asset.priceUsd)}</p>
              <div className={`flex items-center mt-2 ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
                {isPositiveChange ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                <span className="ml-1 font-bold">{formatPercentChange(asset.changePercent24Hr)}</span>
                <span className={`ml-2 ${currentTheme.muted}`}>24h</span>
              </div>
            </motion.div>

            <motion.div 
              className={`p-6 rounded-lg ${currentTheme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              whileHover={{ scale: 1.03 }}
              role="article"
              aria-labelledby="market-cap-title"
            >
              <h2 id="market-cap-title" className="text-xl font-bold mb-4">Market Cap</h2>
              <p className="text-3xl font-bold">{formatMarketCap(asset.marketCapUsd)}</p>
              <p className={`mt-2 ${currentTheme.muted}`}>Rank #{asset.rank}</p>
            </motion.div>

            <motion.div 
              className={`p-6 rounded-lg ${currentTheme.card} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              whileHover={{ scale: 1.03 }}
              role="article"
              aria-labelledby="volume-title"
            >
              <h2 id="volume-title" className="text-xl font-bold mb-4">Volume (24h)</h2>
              <p className="text-3xl font-bold">{formatMarketCap(asset.volumeUsd24Hr)}</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className={`p-6 rounded-lg ${currentTheme.card}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className={`text-center ${currentTheme.accent}`}>Asset not found</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <PriceChart 
          data={assetHistory || []} 
          isLoading={isLoadingHistory}
          theme={theme}
          assetName={asset?.name}
        />
      </motion.div>

      <motion.div 
        className={`mt-8 p-4 rounded-lg backdrop-blur-md ${currentTheme.card} text-sm font-sans`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p className={currentTheme.muted}>
          Pro tip: Use the 'price', 'info', or 'history' commands in the terminal for more details
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AssetDetailPage;