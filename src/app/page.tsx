'use client';

import { useState, useEffect } from 'react';
import BroadOverview from '@/components/BroadOverview';
import Controls from '@/components/Controls';
import ErrorMessage from '@/components/ErrorMessage';

import { PoolData } from '@/types/data';
import DataTable from '@/components/DataTable';

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

      const response = await fetch(url);
      const result = await response.json();

      if (result.success) {
        setData(result);
      } else {
        setError(result.error || 'Failed to fetch data');
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
        <div className="flex flex-col gap-4 mb-4 md:mb-8 mt-18 md:mt-20">
          <h1 className="text-4xl font-bold text-gray-900">
            LP Data <span className="text-[#30483D]">Visualizer</span>
          </h1>
          <p className="text-gray-500">
            This is a tool that allows you to visualize the data of the LP of
            the selected protocol.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Controls
            protocols={data?.data.protocols || []}
            selectedDex={selectedDex}
            handleDexChange={handleDexChange}
            loading={loading}
            fetchData={fetchData}
          />

          <BroadOverview
            protocols={data?.metadata.totalProtocols || 0}
            targetProtocol={data?.metadata.targetDex || ''}
            pools={data?.metadata.poolsCount || 0}
          />

          {error && <ErrorMessage error={error} />}

          <DataTable
            targetDex={data?.metadata.targetDex || ''}
            pools={data?.data.pools || {}}
          />
        </div>
      </div>
    </div>
  );
}
