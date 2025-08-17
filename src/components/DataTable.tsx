import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  extractTokenNames,
  formatLocaleCurrency,
  formatPoolName,
} from '@/lib/utils';
import { PoolData } from '@/types/data';
import { Box, Calculator, Coins, DollarSign } from 'lucide-react';
import CopyString from './CopyString';

interface DataTableProps {
  targetDex: string;
  pools: Record<string, PoolData>;
}

interface TableHeader {
  label: string;
  icon: React.ElementType;
}

const DataTable = ({ targetDex, pools }: DataTableProps) => {
  const tableHeaders: TableHeader[] = [
    {
      label: 'Pool Name',
      icon: Box,
    },
    {
      label: 'Price',
      icon: DollarSign,
    },
    {
      label: 'Total Supply',
      icon: Coins,
    },
    {
      label: 'Balances',
      icon: Calculator,
    },
  ];

  return (
    <div className="space-y-8">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex text-lg flex-row items-center justify-between">
            <span>Pools for {targetDex.toUpperCase()}</span>{' '}
            <span className="text-gray-500 text-sm">
              Total: {Object.keys(pools).length}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {tableHeaders.map((header) => (
                    <th
                      key={header.label}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex flex-row items-center gap-1">
                        <p>{header.label}</p>
                        <span>
                          <header.icon size={16} />
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(pools)
                  .slice(0, 20)
                  .map(([poolName, poolData]) => (
                    <tr key={poolName} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {formatPoolName(poolName).toUpperCase()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatLocaleCurrency({
                          amount: poolData.price,
                          currency: 'USD',
                          locale: 'en-US',
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <span>
                            {parseFloat(poolData.totalSupply).toFixed(6)}
                          </span>
                          <CopyString text={poolData.totalSupply} size={14} />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="space-y-1">
                          {poolData.balances.map(
                            (balance: string, index: number) => {
                              const tokenNames = extractTokenNames(poolName);
                              const tokenName =
                                tokenNames[index] || `Token ${index + 1}`;

                              return (
                                <div
                                  key={index}
                                  className="text-xs flex items-center gap-1"
                                >
                                  <span className="font-medium">
                                    {tokenName}:
                                  </span>{' '}
                                  <span>{parseFloat(balance).toFixed(6)}</span>
                                  <CopyString text={balance} size={12} />
                                </div>
                              );
                            }
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {Object.keys(pools).length > 20 && (
            <p className="mt-4 text-sm text-gray-500">
              Showing first 20 pools. Total: {Object.keys(pools).length} pools
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DataTable;
