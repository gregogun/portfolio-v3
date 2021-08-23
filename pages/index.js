import { ThemeToggle } from '../utils/themeToggle';
import { text } from '../styles/text';

export default function Home() {
  return (
    <div>
      <h1 className={text()}>Hello</h1>
      <ThemeToggle>Toggle light/dark mode</ThemeToggle>
    </div>
  );
}
