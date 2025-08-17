import { NextResponse } from 'next/server';
import axios from 'axios';

interface PoolData {
  price: number;
  tokens: string[];
  balances: string[];
  totalSupply: string;
}

interface GroupedData {
  protocols: string[];
  pools: Record<string, PoolData>;
}

export async function GET(request: Request) {
  try {
    const response = await axios.get('https://api.beefy.finance/lps/breakdown');

    const poolKeys = Object.keys(response.data);
    const protocols = [...new Set(poolKeys.map((key) => key.split('-')[0]))];

    const { searchParams } = new URL(request.url);
    const requestedDex = searchParams.get('dex');

    const targetDex =
      requestedDex || protocols[Math.floor(Math.random() * protocols.length)];

    const filteredPools: Record<string, PoolData> = {};

    poolKeys.forEach((key) => {
      const dexName = key.split('-')[0];
      if (dexName === targetDex) {
        filteredPools[key] = response.data[key];
      }
    });

    const result: GroupedData = {
      protocols,
      pools: filteredPools,
    };

    return NextResponse.json({
      success: true,
      message: `Data fetched and filtered for ${targetDex}`,
      data: result,
      metadata: {
        totalProtocols: protocols.length,
        targetDex,
        poolsCount: Object.keys(filteredPools).length,
      },
    });
  } catch (error) {
    console.error('Error fetching data from Beefy Finance API:', error);

    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
      });

      return NextResponse.json(
        {
          success: false,
          error: 'Failed to fetch data from Beefy Finance API',
          details: {
            status: error.response?.status,
            statusText: error.response?.statusText,
            message: error.message,
          },
        },
        { status: error.response?.status || 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
