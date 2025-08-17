'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, AlertCircle, ArrowUp, ArrowDown } from 'lucide-react';

interface PoolData {
  price: number;
  tokens: string[];
  balances: string[];
  totalSupply: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    protocols: string[];
    pools: Record<string, PoolData>;
  };
  metadata: {
    totalProtocols: number;
    targetDex: string;
    requestedDex: string | null;
    poolsCount: number;
  };
}

export default function Home() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDex, setSelectedDex] = useState<string>('default');

  const fetchData = async (dex?: string) => {
    setLoading(true);
    setError(null);

    try {
      const url =
        dex && dex !== 'default'
          ? `/api/asset-data/get?dex=${dex}`
          : '/api/asset-data/get';
      console.log('Fetching data from:', url);

      const response = await fetch(url);
      const result = await response.json();

      console.log('API Response:', result);

      if (result.success) {
        setData(result);
        console.log('Available protocols:', result.data.protocols);
        console.log('Pools for selected DEX:', result.data.pools);
        console.log('Metadata:', result.metadata);
      } else {
        setError(result.error || 'Failed to fetch data');
        console.error('API Error:', result);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDexChange = (dex: string) => {
    setSelectedDex(dex);
    if (dex === 'default') {
      fetchData();
    } else {
      fetchData(dex);
    }
  };

  return (
    <div className="min-h-screen from-gray-150 to-white-100 bg-gradient-to-br p-8 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          LP Data Visualizer
        </h1>

        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Total Revenue</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                $1,250.00
              </CardTitle>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Trending up this month <ArrowUp className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>New Customers</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                1,234
              </CardTitle>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Down 20% this period <ArrowDown className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Acquisition needs attention
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Active Accounts</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                45,678
              </CardTitle>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Strong user retention <ArrowUp className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Engagement exceed targets
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Controls */}
        {/* gradient card gray to white from top to bottom */}
        <Card className="mb-8 bg-gradient-to-b from-gray-150 to-white-100 ">
          <CardHeader>
            <CardTitle>Controls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 items-center">
              <Button
                onClick={() => fetchData()}
                disabled={loading}
                className="flex items-center gap-2"
              >
                <RefreshCw
                  className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`}
                />
                {loading ? 'Loading...' : 'Refresh Data'}
              </Button>

              {data && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Select DEX:</span>
                  <Select value={selectedDex} onValueChange={handleDexChange}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="All (First DEX)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">All (First DEX)</SelectItem>
                      {data.data.protocols.map((protocol) => (
                        <SelectItem key={protocol} value={protocol}>
                          {protocol}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Error Display */}
        {error && (
          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Error:</strong> {error}
            </AlertDescription>
          </Alert>
        )}

        {/* Data Display */}
        {data && (
          <div className="space-y-8">
            <Card className="bg-white">
              <CardContent className="p-4 mx-12">
                <div className="flex flex-row items-center gap-12 mx-auto justify-center">
                  <div className="space-y-2 flex flex-col items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Total Protocols
                    </span>
                    <p className="text-2xl font-bold">
                      {data.metadata.totalProtocols}
                    </p>
                  </div>
                  <span>|</span>
                  <div className="space-y-2 flex flex-col items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Target DEX
                    </span>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {data.metadata.targetDex}
                    </Badge>
                  </div>
                  <span>|</span>
                  <div className="space-y-2 flex flex-col items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Pools Count
                    </span>
                    <p className="text-2xl font-bold">
                      {data.metadata.poolsCount}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pools Data */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>
                  Pools for {data.metadata.targetDex} (
                  {Object.keys(data.data.pools).length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Pool Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total Supply
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Balances
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {Object.entries(data.data.pools)
                        .slice(0, 20)
                        .map(([poolName, poolData]) => (
                          <tr key={poolName} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {poolName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${poolData.price.toFixed(6)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {parseFloat(poolData.totalSupply).toFixed(6)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="space-y-1">
                                {poolData.balances.map((balance, index) => (
                                  <div key={index} className="text-xs">
                                    Token {index + 1}:{' '}
                                    {parseFloat(balance).toFixed(6)}
                                  </div>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {Object.keys(data.data.pools).length > 20 && (
                  <p className="mt-4 text-sm text-gray-500">
                    Showing first 20 pools. Total:{' '}
                    {Object.keys(data.data.pools).length} pools
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="flex items-center gap-2">
              <RefreshCw className="h-8 w-8 animate-spin text-blue-600" />
              <span className="text-lg text-gray-600">Loading data...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
