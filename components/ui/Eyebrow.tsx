import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  tone?: 'dark' | 'light';
}

export function Eyebrow({ children, className, tone = 'dark' }: EyebrowProps) {
  return (
    <span
      className={cn(
        'editorial-label inline-flex items-center gap-2.5',
        tone === 'dark' ? 'text-rose' : 'text-rose',
        className
      )}
    >
      <span
        className={cn(
          'h-px w-6',
          tone === 'dark' ? 'bg-rose' : 'bg-rose'
        )}
      />
      {children}
    </span>
  );
}
