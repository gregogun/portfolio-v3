import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { css } from '@stitches/react';

const toggleButton = css({
  borderRadius: '22px',
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: '$sans',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  padding: '0.5rem 1rem',
  color: '$primary',
  border: 0,
  cursor: 'pointer',
  background: '$secondary',
  '&:hover': {
    color: '$tertiary'
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
