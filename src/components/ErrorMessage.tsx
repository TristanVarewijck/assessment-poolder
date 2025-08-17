import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <Alert className="mb-8">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        <strong>Error:</strong> {error}
      </AlertDescription>
    </Alert>
  );
};

export default ErrorMessage;
