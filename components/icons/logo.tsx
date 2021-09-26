import { svg } from '@/styles/svg';

const Logo = () => {
  return (
    <svg
      className={svg()}
      fill="var(--colors-secondary)"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 18c0 6.627-5.373 12-12 12s-12-5.373-12-12S25.373 6 32 6h12v12Zm-3 0a9 9 0 1 1-9-9h9v9Z"
        fill="var(--colors-secondary)"
      />
      <circle cx="32" cy="46" r="12" fill="var(--colors-secondary)" />
    </svg>
  );
};

export default Logo;
