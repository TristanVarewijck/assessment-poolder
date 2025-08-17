'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface CopyStringProps {
  text: string;
  className?: string;
  size?: number;
}

const CopyString = ({ text, className = '', size = 16 }: CopyStringProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);

    if (success) {
      setCopied(true);

      // Reset to copy icon after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'inline-flex items-center justify-center p-1 rounded-md transition-all duration-200 hover:bg-gray-100 active:scale-95',
        copied ? 'text-green-600' : 'text-gray-500 hover:text-gray-700',
        className
      )}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
      disabled={copied}
    >
      {copied ? (
        <Check size={size} className="animate-in fade-in-0 zoom-in-95" />
      ) : (
        <Copy size={size} />
      )}
    </button>
  );
};

export default CopyString;
