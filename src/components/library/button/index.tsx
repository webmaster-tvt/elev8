
export const Button = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <button
      className={`py-2 px-4 rounded bg-green-500 hover:bg-green-600 focus:outline-none ring-opacity-75 ring-green-400 focus:ring text-white text-lg ${className}`}
      {...rest}
      data-testid="btn"
    >
      {children}
    </button>
  )
}
