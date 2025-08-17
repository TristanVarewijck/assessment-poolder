import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <Alert className="bg-red-100 py-4">
      <AlertCircle className="h-4 w-4 text-red-600" />
      <AlertDescription className="py-0 text-red-600">
        <strong>Error:</strong> {error}
      </AlertDescription>
    </Alert>
  );
};

export default ErrorMessage;
