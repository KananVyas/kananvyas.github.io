"use client";

import { Sun, Moon } from 'lucide-react';
import type React from 'react';
import { cn } from '@/lib/utils';

type ThemeToggleProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ThemeToggle({ isDark, setIsDark }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={cn(
        "fixed top-6 right-6 z-50 p-3 rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95",
        "bg-white border-black text-black hover:bg-yellow-50 shadow-brutal-sm-light",
        "dark:bg-zinc-900 dark:border-zinc-700 dark:text-yellow-300 dark:hover:border-yellow-300 dark:shadow-brutal-sm-dark"
      )}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
    </button>
  );
}
