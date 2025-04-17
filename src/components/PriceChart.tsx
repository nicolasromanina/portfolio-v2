import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { motion } from 'framer-motion';
import { formatPrice } from '../services/coinCapAPI';

interface AssetHistory {
  priceUsd: string;
  time: number;
  date: string;
}

interface PriceChartProps {
  data: AssetHistory[];
  isLoading: boolean;
  theme?: 'dark' | 'light';
  assetName?: string;
}

const PriceChart: React.FC<PriceChartProps> = ({ data, isLoading, theme = 'dark', assetName }) => {
  const themeStyles = {
    dark: {
      container: 'bg-gray-800/50 backdrop-blur-md border-gray-700',
      text: 'text-gray-100',
      muted: 'text-gray-400',
      accent: 'text-green-400',
      grid: 'stroke-gray-600',
      axis: 'stroke-gray-300',
      tooltip: 'bg-gray-800 border-gray-600 text-gray-100',
      line: '#00FF41'
    },
    light: {
      container: 'bg-white/80 backdrop-blur-md border-gray-200',
      text: 'text-gray-900',
      muted: 'text-gray-600',
      accent: 'text-green-600',
      grid: 'stroke-gray-300',
      axis: 'stroke-gray-700',
      tooltip: 'bg-white border-gray-300 text-gray-900',
      line: '#00CC33'
    }
  };

  const currentTheme = themeStyles[theme];

  if (isLoading) {
    return (
      <motion.div 
        className={`h-96 rounded-lg ${currentTheme.container} flex items-center justify-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4 w-full max-w-md">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      </motion.div>
    );
  }

  if (!data.length) {
    return (
      <motion.div 
        className={`h-96 rounded-lg ${currentTheme.container} flex items-center justify-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className={currentTheme.muted}>No chart data available</p>
      </motion.div>
    );
  }

  const formattedData = data.map(item => ({
    time: new Date(item.time).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    }),
    price: parseFloat(item.priceUsd),
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <motion.div
          className={`p-4 rounded-lg ${currentTheme.tooltip} border shadow-lg`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <p className="font-bold">{label}</p>
          <p className={currentTheme.accent}>
            Price: {formatPrice(payload[0].value)}
          </p>
        </motion.div>
      );
    }
    return null;
  };

  return (
    <motion.div 
      className={`p-6 rounded-lg ${currentTheme.container}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="region"
      aria-label={`${assetName ? `${assetName} ` : ''}Price History Chart`}
    >
      <h2 className={`text-xl font-bold mb-4 ${currentTheme.text}`}>
        {assetName ? `${assetName} Price History` : 'Price History'}
      </h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{ top: 10, right: 30, bottom: 30, left: 40 }}
          >
            <CartesianGrid 
              stroke={currentTheme.grid} 
              strokeDasharray="3 3" 
            />
            <XAxis 
              dataKey="time" 
              tick={{ fill: currentTheme.text }}
              tickLine={{ stroke: currentTheme.axis }}
              axisLine={{ stroke: currentTheme.axis }}
              interval="preserveStartEnd"
              minTickGap={50}
            />
            <YAxis 
              tick={{ fill: currentTheme.text }}
              tickLine={{ stroke: currentTheme.axis }}
              axisLine={{ stroke: currentTheme.axis }}
              tickFormatter={(value) => formatPrice(value)}
              domain={['auto', 'auto']}
              scale="linear"
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ stroke: currentTheme.accent, strokeWidth: 1 }}
            />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke={currentTheme.line}
              strokeWidth={3}
              dot={false}
              activeDot={{ 
                r: 8, 
                stroke: currentTheme.axis, 
                strokeWidth: 2, 
                fill: currentTheme.line 
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default PriceChart;