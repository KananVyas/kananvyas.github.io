import { cn } from '@/lib/utils';
import type React from 'react';

type BrutalCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function BrutalCard({ children, className }: BrutalCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border-2 p-6 relative transition-all duration-300',
        'bg-white dark:bg-zinc-900',
        'border-black dark:border-zinc-700',
        'shadow-brutal-sm-light dark:shadow-brutal-sm-dark',
        'hover:-translate-y-1 hover:shadow-brutal-lg-light dark:hover:shadow-brutal-lg-dark',
        className
      )}
    >
      {children}
    </div>
  );
}
