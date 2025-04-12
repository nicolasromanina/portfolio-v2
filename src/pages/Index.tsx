
import React, { useState, useEffect } from 'react';
import Terminal from '../components/Terminal';
import AssetTable from '../components/AssetTable';
import { getAssets } from '../services/coinCapAPI';
import { useQuery } from '@tanstack/react-query';

const Index = () => {
  const [terminalOutput, setTerminalOutput] = useState<string>('');

  const { data: assets, isLoading, error } = useQuery({
    queryKey: ['assets'],
    queryFn: () => getAssets(20),
  });

  const handleCommand = (command: string) => {
    setTerminalOutput(`Executed: ${command}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-terminal-green text-3xl font-bold mb-2">CryptoTerminal</h1>
        <p className="text-terminal-muted">A neo-brutalist crypto asset tracker</p>
      </header>
      
      <div className="mb-8">
        <Terminal 
          initialPath="/assets"
          additionalCommands={[
            {
              name: 'top',
              description: 'Show top cryptocurrencies by market cap',
              handler: (args) => {
                const limit = args[0] ? parseInt(args[0]) : 10;
                return `Showing top ${limit} cryptocurrencies by market cap:
1. Bitcoin (BTC) 
2. Ethereum (ETH)
3. Tether (USDT)
4. BNB (BNB)
5. USD Coin (USDC)
... use the table below for complete data`;
              }
            }
          ]}
        />
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-terminal-green text-2xl font-bold">Top Assets by Market Cap</h2>
          <div className="flex space-x-2">
            <button 
              className="brutalist-button" 
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        </div>
        
        <AssetTable 
          assets={assets || []} 
          isLoading={isLoading}
        />
        
        {error && (
          <div className="mt-4 p-4 bg-brutalist-accent/20 border-2 border-brutalist-accent">
            <p className="text-brutalist-accent">
              Error loading assets. Please try again later.
            </p>
          </div>
        )}
        
        <div className="mt-4 text-terminal-muted text-sm">
          <p>Pro tip: Click on any asset to view detailed information or use the command: cd detail [asset-id]</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
