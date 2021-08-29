import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { css } from 'stitches.config';

const toggleButton = css({
  borderRadius: '4px',
  background: 'transparent',
  width: '48px',
  height: '48px',
  border: 0,
  cursor: 'pointer',
  '&:hover': {
    background: '$accent'
  }
});

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
      className={toggleButton()}
      onClick={toggleTheme}
    >
      {children}
    </button>
  );
};
