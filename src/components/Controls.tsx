import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw } from 'lucide-react';
interface ControlsProps {
  protocols: string[];
  selectedDex: string;
  handleDexChange: (value: string) => void;
  loading: boolean;
  fetchData: () => void;
}

const Controls = ({
  protocols,
  selectedDex,
  handleDexChange,
  loading,
  fetchData,
}: ControlsProps) => {
  return (
    <Card className="bg-gradient-to-b from-gray-150 to-white-100 bg-white">
      <CardContent className="py-4">
        {protocols && (
          <div className="flex flex-wrap gap-2 flex-col md:flex-row md:gap-4 md:items-center justify-between">
            <div className="flex md:items-center flex-col md:flex-row gap-2">
              <p className="text-base font-medium">
                Select Protocol <span className="text-gray-500">(DEX):</span>
              </p>
              <Select value={selectedDex} onValueChange={handleDexChange}>
                <SelectTrigger className="w-full md:w-[200px] bg-white">
                  <SelectValue placeholder={selectedDex} />
                </SelectTrigger>
                <SelectContent className="bg-white border-none">
                  {protocols.map((protocol) => (
                    <SelectItem
                      key={protocol}
                      value={protocol}
                      className="text-black"
                    >
                      <span>{protocol.toUpperCase()}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              onClick={() => fetchData()}
              disabled={loading}
              className="flex items-center gap-2 w-fit"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Controls;
