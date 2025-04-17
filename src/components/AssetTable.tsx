import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice, formatMarketCap, formatPercentChange } from '../services/coinCapAPI';
import { ChevronUp, ChevronDown, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

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
  theme?: 'dark' | 'light';
}

const AssetTable: React.FC<AssetTableProps> = ({ assets, isLoading, theme = 'dark' }) => {
  const navigate = useNavigate();

  const themeStyles = {
    dark: {
      container: 'bg-gray-800/50 backdrop-blur-md border-gray-700',
      table: 'bg-gray-900 text-gray-100',
      text: 'text-gray-100',
      muted: 'text-gray-400',
      accent: 'text-green-400',
      hover: 'hover:bg-gray-700/50',
      positive: 'text-green-500',
      negative: 'text-red-500',
      button: 'bg-green-600 hover:bg-green-700'
    },
    light: {
      container: 'bg-white/80 backdrop-blur-md border-gray-200',
      table: 'bg-gray-100 text-gray-900',
      text: 'text-gray-900',
      muted: 'text-gray-600',
      accent: 'text-green-600',
      hover: 'hover:bg-gray-200/50',
      positive: 'text-green-600',
      negative: 'text-red-600',
      button: 'bg-green-500 hover:bg-green-600'
    }
  };

  const currentTheme = themeStyles[theme];

  const handleAssetClick = (id: string) => {
    navigate(`/detail/${id}`);
  };

  if (isLoading) {
    return (
      <motion.div 
        className={`rounded-lg ${currentTheme.container} p-8`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-12 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
          ))}
        </div>
      </motion.div>
    );
  }

  if (!assets.length) {
    return (
      <motion.div 
        className={`rounded-lg ${currentTheme.container} p-8 text-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className={`text-lg ${currentTheme.muted} mb-4`}>
          No assets found. Try refreshing the page.
        </p>
        <Button
          className={`${currentTheme.button} flex items-center gap-2 mx-auto`}
          onClick={() => window.location.reload()}
        >
          <RefreshCw size={16} />
          Refresh
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={`overflow-x-auto rounded-lg ${currentTheme.container}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="region"
      aria-label="Cryptocurrency Assets Table"
    >
      <table className={`w-full ${currentTheme.table} text-sm`}>
        <thead>
          <tr className="border-b border-gray-300 dark:border-gray-600">
            <th className="p-4 text-left font-bold w-16">Rank</th>
            <th className="p-4 text-left font-bold w-48">Name</th>
            <th className="p-4 text-left font-bold">Price</th>
            <th className="p-4 text-left font-bold">Market Cap</th>
            <th className="p-4 text-left font-bold">24h Change</th>
            <th className="p-4 text-left font-bold">24h Volume</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {assets.map((asset, index) => {
              const percentChange = parseFloat(asset.changePercent24Hr);
              const isPositive = percentChange >= 0;

              return (
                <motion.tr 
                  key={asset.id}
                  className={`border-b border-gray-300 dark:border-gray-600 cursor-pointer ${currentTheme.hover} transition-all duration-200`}
                  onClick={() => handleAssetClick(asset.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  role="row"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleAssetClick(asset.id);
                    }
                  }}
                >
                  <td className="p-4">{asset.rank}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${currentTheme.accent}`}>
                        {asset.symbol}
                      </span>
                      <span className={currentTheme.muted}>{asset.name}</span>
                    </div>
                  </td>
                  <td className="p-4">{formatPrice(asset.priceUsd)}</td>
                  <td className="p-4">{formatMarketCap(asset.marketCapUsd)}</td>
                  <td className={`p-4 flex items-center ${isPositive ? currentTheme.positive : currentTheme.negative}`}>
                    {isPositive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    <span className="ml-1">{formatPercentChange(asset.changePercent24Hr)}</span>
                  </td>
                  <td className="p-4">{formatMarketCap(asset.volumeUsd24Hr)}</td>
                </motion.tr>
              );
            })}
          </AnimatePresence>
        </tbody>
      </table>
    </motion.div>
  );
};

export default AssetTable;