
// CoinCap API Service
// Documentation: https://docs.coincap.io/

interface Asset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

interface AssetHistory {
  priceUsd: string;
  time: number;
  date: string;
}

const BASE_URL = 'https://api.coincap.io/v2';

export async function getAssets(limit: number = 20): Promise<Asset[]> {
  try {
    const response = await fetch(`${BASE_URL}/assets?limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching assets:", error);
    return [];
  }
}

export async function getAssetById(id: string): Promise<Asset | null> {
  try {
    const response = await fetch(`${BASE_URL}/assets/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching asset ${id}:`, error);
    return null;
  }
}

export async function getAssetHistory(id: string, interval: string = 'd1'): Promise<AssetHistory[]> {
  try {
    const response = await fetch(`${BASE_URL}/assets/${id}/history?interval=${interval}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching history for asset ${id}:`, error);
    return [];
  }
}

export function formatPrice(price: string | number): string {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  
  if (isNaN(numPrice)) return 'N/A';
  
  if (numPrice < 0.01) {
    return `$${numPrice.toFixed(6)}`;
  } else if (numPrice < 1) {
    return `$${numPrice.toFixed(4)}`;
  } else if (numPrice < 1000) {
    return `$${numPrice.toFixed(2)}`;
  } else {
    return `$${Intl.NumberFormat('en-US').format(parseFloat(numPrice.toFixed(2)))}`;
  }
}

export function formatMarketCap(marketCap: string | number): string {
  const numMarketCap = typeof marketCap === 'string' ? parseFloat(marketCap) : marketCap;
  
  if (isNaN(numMarketCap)) return 'N/A';
  
  if (numMarketCap >= 1e12) {
    return `$${(numMarketCap / 1e12).toFixed(2)}T`;
  } else if (numMarketCap >= 1e9) {
    return `$${(numMarketCap / 1e9).toFixed(2)}B`;
  } else if (numMarketCap >= 1e6) {
    return `$${(numMarketCap / 1e6).toFixed(2)}M`;
  } else {
    return `$${Intl.NumberFormat('en-US').format(parseFloat(numMarketCap.toFixed(2)))}`;
  }
}

export function formatPercentChange(percentChange: string | number): string {
  const numPercent = typeof percentChange === 'string' ? parseFloat(percentChange) : percentChange;
  
  if (isNaN(numPercent)) return 'N/A';
  
  const sign = numPercent >= 0 ? '+' : '';
  return `${sign}${numPercent.toFixed(2)}%`;
}
