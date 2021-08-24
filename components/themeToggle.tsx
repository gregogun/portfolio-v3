import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { css } from 'stitches.config';

const toggleButton = css({
  borderRadius: '4px',
  // position: 'relative',
  // display: 'inline-flex',
  // alignItems: 'center',
  // fontFamily: '$sans',
  // fontSize: '1.25rem',
  // fontWeight: 'bold',
  background: 'transparent',
  padding: '1rem',
  border: 0,
  cursor: 'pointer',
  '&:hover': {
    background: '#333333'
  }
});

export const ThemeToggle = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };

  return (
    <button className={toggleButton()} onClick={toggleTheme}>
      {children}
    </button>
  );
};
