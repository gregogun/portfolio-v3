import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
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
  // **Leaving comments till checks in production have passed**

  // const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect(() => setMounted(true), []);

  // if (!mounted) return null;

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <button className={toggleButton()} onClick={toggleTheme}>
      {children}
    </button>
  );
};
