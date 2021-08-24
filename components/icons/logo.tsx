const Logo = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      fill="var(--colors-secondary)"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 48"
    >
      <path d="M5.77 47.955c.676 0 1.28-.097 1.81-.292 1.738-.485 3.524-1.82 5.359-4.003 1.593-1.893 3.138-4.27 4.634-7.134a71.402 71.402 0 002.607-5.533c3.573-1.698 6.18-3.178 7.821-4.44 2.945-2.233 5.504-5.363 7.676-9.39.338-.631.41-1.287.218-1.966a2.432 2.432 0 00-1.231-1.529c-.676-.34-1.352-.412-2.028-.218-.628.194-1.135.607-1.52 1.237-2.221 4.077-4.997 7.134-8.329 9.173.387-1.165.918-2.96 1.594-5.387l.579-.801c2.22-2.815 2.872-5.023 1.955-6.624-.338-.583-.748-.971-1.23-1.165a2.75 2.75 0 001.737-.437c.531-.388.869-.922 1.014-1.601.53-3.01-.338-5.217-2.607-6.625C24.187.153 22.136-.187 19.674.201c-2.414.34-4.732 1.31-6.952 2.912-2.656 1.941-5.263 4.586-7.821 7.935C1.956 14.978.339 18.473.049 21.53c-.241 2.475.41 4.513 1.955 6.115 1.593 1.747 3.549 2.548 5.866 2.402 2.607-.146 5.503-1.432 8.69-3.858-.049.097-.121.267-.218.51a2.26 2.26 0 01-.144.436l-3.476 1.602c-3.573 1.844-6.373 3.785-8.4 5.823C1.858 36.938.482 39.22.193 41.403c-.29 1.99.265 3.664 1.665 5.023 1.159 1.019 2.462 1.529 3.91 1.529zM21.412 5.224c.724 0 1.279.121 1.665.364.338.097.435.51.29 1.238-.242 1.261.217 2.183 1.376 2.766-.338 0-.58.024-.724.073-1.98.242-3.356 2.014-4.128 5.314l-.217 1.091c-2.076 2.427-4.225 4.49-6.445 6.188-2.221 1.699-4.08 2.572-5.576 2.62-.773.05-1.4-.194-1.883-.727-.483-.583-.676-1.31-.58-2.184.194-2.136 1.425-4.683 3.694-7.644 2.317-3.008 4.61-5.338 6.88-6.988 1.882-1.407 3.765-2.111 5.648-2.111zM12.793 34.56c-2.607 4.853-4.852 7.571-6.735 8.153-.29.097-.53.049-.724-.145-.096-.097-.12-.243-.072-.437.145-.873.869-2.014 2.172-3.421 1.304-1.408 3.09-2.79 5.36-4.15z" />
    </svg>
  );
};

export default Logo;
