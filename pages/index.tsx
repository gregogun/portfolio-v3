import { Logo, Sun } from 'components/icons';
import { ThemeToggle } from 'components/themeToggle';
import { text } from 'styles/text';
import { css, styled } from 'stitches.config';

const ThemeToggleButton = () => {
  return (
    <ThemeToggle>
      <Sun size="32px" />
    </ThemeToggle>
  );
};

const box = css({
  boxSizing: 'border-box',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1024px',
  border: '1px solid red'
});

export default function Home() {
  return (
    <div className={box()}>
      <Logo size="32px" />
      <ThemeToggleButton />
    </div>
  );
}
