
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
import { formatPrice } from '../services/coinCapAPI';

interface AssetHistory {
  priceUsd: string;
  time: number;
  date: string;
}

interface PriceChartProps {
  data: AssetHistory[];
  isLoading: boolean;
}

const PriceChart: React.FC<PriceChartProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="brutalist-card h-80 flex items-center justify-center">
        <p className="text-terminal-muted">Loading chart data...</p>
      </div>
    );
  }
  
  if (!data.length) {
    return (
      <div className="brutalist-card h-80 flex items-center justify-center">
        <p className="text-terminal-muted">No chart data available</p>
      </div>
    );
  }
  
  const formattedData = data.map(item => ({
    time: new Date(item.time).toLocaleDateString(),
    price: parseFloat(item.priceUsd),
  }));
  
  return (
    <div className="brutalist-card">
      <h2 className="text-xl font-bold mb-4">Price History</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{ top: 5, right: 20, bottom: 20, left: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="time" 
              tick={{ fill: '#000' }}
              tickLine={{ stroke: '#000' }}
              axisLine={{ stroke: '#000' }}
            />
            <YAxis 
              tick={{ fill: '#000' }}
              tickLine={{ stroke: '#000' }}
              axisLine={{ stroke: '#000' }}
              tickFormatter={(value) => formatPrice(value)}
            />
            <Tooltip 
              formatter={(value: number) => [formatPrice(value), 'Price']}
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '2px solid #000',
                borderRadius: '0',
                padding: '10px',
                boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#00FF41" 
              strokeWidth={3}
              dot={{ r: 1, strokeWidth: 2 }}
              activeDot={{ r: 6, stroke: '#000', strokeWidth: 2, fill: '#00FF41' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceChart;
