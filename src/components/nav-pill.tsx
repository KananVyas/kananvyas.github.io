"use client";

import { cn } from '@/lib/utils';

type NavPillProps = {
  activeSection: string;
  scrollToSection: (id: 'about' | 'experience' | 'blog') => void;
};

export function NavPill({ activeSection, scrollToSection }: NavPillProps) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-700">
      <nav className="flex items-center gap-1 p-1.5 backdrop-blur-md border rounded-full shadow-lg transition-colors duration-300 bg-white/80 border-gray-200 shadow-gray-200/50 dark:bg-zinc-900/80 dark:border-zinc-800 dark:shadow-black/50">
        {(['About', 'Experience', 'Blog'] as const).map((item) => {
          const id = item.toLowerCase() as 'about' | 'experience' | 'blog';
          const isActive = activeSection === id;
          return (
            <button
              key={item}
              onClick={() => scrollToSection(id)}
              className={cn(
                'relative px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 outline-none focus-visible:ring-2 ring-blue-500',
                isActive
                  ? 'text-white dark:text-black'
                  : 'text-gray-600 hover:text-black hover:bg-gray-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800'
              )}
              aria-pressed={isActive}
            >
              {isActive && (
                <div className={cn('absolute inset-0 rounded-full -z-10 transition-all bg-black dark:bg-white')} />
              )}
              {item}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
