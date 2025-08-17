import { Card, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { Boxes, PackageOpen, Box } from 'lucide-react';

interface BroadOverviewProps {
  protocols: number;
  targetProtocol: string;
  pools: number;
}

interface BroadOverviewDataItem {
  title: string;
  value: number | string;
  icon: React.ElementType;
  description: string;
}

const BroadOverview = ({
  protocols,
  targetProtocol,
  pools,
}: BroadOverviewProps) => {
  const data: BroadOverviewDataItem[] = [
    {
      title: 'Protocols',
      value: protocols,
      icon: Boxes,
      description: 'Global Count of Protocols',
    },
    {
      title: 'Target Protocol',
      value: targetProtocol.toUpperCase(),
      icon: Box,
      description: 'Selected Protocol information',
    },
    {
      title: 'Pools',
      value: pools,
      icon: PackageOpen,
      description: 'Total Pools in Selected Protocol',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
      {data.map((item) => (
        <Card key={item.title} className="bg-white">
          <CardHeader className="flex flex-col items-start gap-1">
            <item.icon className="size-7 text-muted-foreground text-[#75E5A7]" />
            <div className="flex flex-col items-start gap-1">
              <p className="text-l">{item.title}</p>
              <CardTitle className="text-2xl font-semibold">
                {item.value}
              </CardTitle>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 items-center font-normal text-muted-foreground">
              {item.description}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BroadOverview;
