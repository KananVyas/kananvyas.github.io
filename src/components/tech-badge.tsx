import type { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';
import type React from 'react';

type TechBadgeProps = {
  icon: React.ElementType<LucideProps>;
  text: string;
  color?: 'blue' | 'purple' | 'green' | 'orange';
};

export function TechBadge({ icon: Icon, text, color = 'blue' }: TechBadgeProps) {
  const colorVariants = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
    purple: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800',
    green: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
    orange: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 mx-1 rounded-md text-[0.9em] align-baseline font-medium border hover:scale-105 transition-all duration-300 cursor-default',
        colorVariants[color]
      )}
    >
      {Icon && <Icon size={14} />}
      {text}
    </span>
  );
}
