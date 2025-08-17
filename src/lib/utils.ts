import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatLocaleCurrency({
  amount,
  currency,
  locale,
}: {
  amount: number | string;
  currency: string;
  locale: string;
}) {
  amount = Number(amount);

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        textArea.remove();
        return true;
      } catch (err) {
        console.error('Error copying to fallback clipboard:', err);
        textArea.remove();
        return false;
      }
    }
  } catch (err) {
    console.error('Error copying to clipboard:', err);
    return false;
  }
}

export const extractTokenNames = (poolName: string): string[] => {
  const parts = poolName.split('-');
  if (parts.length >= 3 && parts[0] === parts[1]) {
    return parts.slice(1).map((part) => part.toUpperCase());
  } else {
    return parts.slice(1).map((part) => part.toUpperCase());
  }
};
