import { iconButton } from '@/styles/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeToggle = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const mode = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      aria-label={`Activate ${mode} mode`}
      className={iconButton({ css: { p: '1rem' } })}
      onClick={toggleTheme}
    >
      {children}
    </button>
  );
};
